document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuOpenBtn = document.getElementById('menuOpenBtn');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    const moduleList = document.getElementById('moduleList');
    const contentArea = document.getElementById('contentArea');
    const dynamicHero = document.getElementById('dynamicHero');
    const moduleSearch = document.getElementById('moduleSearch');
    const progressBar = document.getElementById('progressBar');
    const progressPercent = document.getElementById('progressPercent');

    // Inicializar Mermaid
    mermaid.initialize({ startOnLoad: false, theme: 'dark', securityLevel: 'loose' });

    // Cargar progreso desde LocalStorage
    let completedModules = JSON.parse(localStorage.getItem('gitCourseProgress')) || [];

    // Funcionalidad de Menú Móvil
    menuOpenBtn.addEventListener('click', () => sidebar.classList.add('open'));
    menuCloseBtn.addEventListener('click', () => sidebar.classList.remove('open'));

    // --- BUSCADOR ---
    moduleSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const items = document.querySelectorAll('#moduleList li');
        const titles = document.querySelectorAll('#moduleList .nav-title');

        items.forEach(item => {
            const text = item.innerText.toLowerCase();
            const target = item.getAttribute('data-target');
            const contentText = window.CourseData[target] ? window.CourseData[target].toLowerCase() : "";
            
            if (text.includes(query) || contentText.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });

        titles.forEach(title => {
            let next = title.nextElementSibling;
            let hasVisible = false;
            while(next && !next.classList.contains('nav-title')) {
                if(next.style.display !== 'none') hasVisible = true;
                next = next.nextElementSibling;
            }
            title.style.display = hasVisible ? 'block' : 'none';
        });
    });

    // --- GESTIÓN DE PROGRESO ---
    function updateProgress() {
        const total = document.querySelectorAll('#moduleList li').length;
        const count = completedModules.length;
        const percent = Math.round((count / total) * 100);
        
        progressBar.style.width = `${percent}%`;
        progressPercent.innerText = `${percent}%`;

        document.querySelectorAll('#moduleList li').forEach(li => {
            const path = li.getAttribute('data-target');
            if (completedModules.includes(path)) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });
        
        localStorage.setItem('gitCourseProgress', JSON.stringify(completedModules));
    }

    function toggleComplete(path) {
        if (completedModules.includes(path)) {
            completedModules = completedModules.filter(p => p !== path);
        } else {
            completedModules.push(path);
        }
        updateProgress();
    }

    // --- LÓGICA MÉTODO CORNELL ---
    function renderCornell(markdownText) {
        const html = marked.parse(markdownText);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        // 1. Extraer Título (Header)
        const h1 = tempDiv.querySelector('h1');
        const titleText = h1 ? h1.innerHTML : "Sin Título";
        if(h1) h1.remove();

        // 2. Extraer Resumen (Summary)
        let summaryHtml = "Sintetiza lo aprendido en esta clase en 3 líneas clave.";
        const summaryHeaders = Array.from(tempDiv.querySelectorAll('h1, h2, h3, h4')).filter(h => 
            /resumen|conclusión|conclusiones|summary/i.test(h.innerText)
        );

        if (summaryHeaders.length > 0) {
            const lastHeader = summaryHeaders[summaryHeaders.length - 1];
            let summaryContent = [];
            let next = lastHeader.nextElementSibling;
            
            while(next) {
                summaryContent.push(next.outerHTML);
                let toRemove = next;
                next = next.nextElementSibling;
                toRemove.remove();
            }
            summaryHtml = summaryContent.join('');
            lastHeader.remove();
        }

        // 3. Extraer Claves (Cues) basados en negritas, código inline y términos clave
        const keys = new Set();
        // Buscar negritas y código inline
        tempDiv.querySelectorAll('strong, b, code').forEach(el => {
            // Solo extraemos si el elemento está dentro de un párrafo (inline) y no es un bloque de código grande
            if(el.parentElement.tagName === 'P' || el.parentElement.tagName === 'LI') {
                const val = el.innerText.trim();
                if(val.length > 1 && val.length < 35) {
                    keys.add(val);
                }
            }
        });
        
        const cuesItems = Array.from(keys).map(key => `<div class="cue-item">${key}</div>`).join('');

        // 4. Construir el Grid final
        return `
            <div class="cornell-grid">
                <header class="cornell-header">
                    <h1>${titleText}</h1>
                </header>

                <aside class="cornell-cues">
                    <span class="cornell-cues-title">Claves y Conceptos</span>
                    <div class="cue-list">
                        ${cuesItems || '<p style="font-size:0.8rem; opacity:0.5;">No hay claves extraídas.</p>'}
                    </div>
                </aside>

                <article class="cornell-notes">
                    <div class="markdown-body">
                        ${tempDiv.innerHTML}
                    </div>
                </article>

                <footer class="cornell-summary">
                    <div class="cornell-summary-title">
                        <i class="ri-edit-2-line"></i> Resumen Estructurado (Ingeniería)
                    </div>
                    <div class="markdown-body">
                        ${summaryHtml}
                    </div>
                </footer>
            </div>
        `;
    }

    // --- CARGA DE MÓDULOS ---
    moduleList.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li) return;

        document.querySelectorAll('#moduleList li').forEach(item => item.classList.remove('active'));
        li.classList.add('active');

        if (window.innerWidth <= 768) sidebar.classList.remove('open');

        const targetId = li.getAttribute('data-target');
        loadModule(targetId);
    });

    async function loadModule(targetPath) {
        if(dynamicHero.style.display !== 'none' && targetPath !== 'home') {
            dynamicHero.style.opacity = '0';
            setTimeout(() => { dynamicHero.style.display = 'none'; }, 300);
        }

        contentArea.classList.remove('visible');
        
        setTimeout(async () => {
            if (targetPath === 'coming-soon') {
                contentArea.innerHTML = `
                    <div class="module-card glass-panel" style="text-align: center; padding: 60px;">
                        <i class="ri-hammer-line" style="font-size: 4rem; color: var(--accent-color);"></i>
                        <h1 style="border: none; justify-content: center;">En Construcción</h1>
                        <p>Los apuntes para esta clase estarán disponibles próximamente.</p>
                    </div>`;
            } else {
                try {
                    const markdownText = window.CourseData[targetPath];
                    if (!markdownText) throw new Error('Not found');
                    
                    const cornellHtml = renderCornell(markdownText);
                    const isDone = completedModules.includes(targetPath);
                    
                    contentArea.innerHTML = `
                        <div class="module-card">
                            <div class="module-actions">
                                <button class="complete-btn ${isDone ? 'done' : ''}" id="toggleStatus">
                                    <i class="ri-${isDone ? 'checkbox-circle' : 'checkbox-blank-circle'}-line"></i>
                                    ${isDone ? 'Clase Completada' : 'Marcar como Terminada'}
                                </button>
                            </div>
                            ${cornellHtml}
                        </div>
                    `;

                    document.getElementById('toggleStatus').addEventListener('click', () => {
                        toggleComplete(targetPath);
                        loadModule(targetPath);
                    });

                } catch (error) {
                    contentArea.innerHTML = `<div class="module-card glass-panel"><h2>Error al cargar apuntes</h2></div>`;
                }
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            requestAnimationFrame(async () => {
                contentArea.classList.add('visible');
                
                document.querySelectorAll('.markdown-body img').forEach(img => {
                    img.style.maxWidth = "100%";
                    img.style.borderRadius = "12px";
                    img.style.margin = "20px 0";
                });

                try {
                    await mermaid.run();
                } catch(e) { console.error("Mermaid error", e); }
            });
        }, 500);
    }

    // Inicializar
    updateProgress();
    setTimeout(() => {
        dynamicHero.style.display = 'flex';
        loadModule('Curso/01-Intro/Readme.md');
    }, 100);

});
