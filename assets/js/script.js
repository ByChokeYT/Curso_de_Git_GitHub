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
    const scrollProgress = document.getElementById('scrollProgress');

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

        // Highlight logic in main content
        const mBodies = document.querySelectorAll('.markdown-body');
        mBodies.forEach(body => {
            // Remove old spans (reset)
            const marks = body.querySelectorAll('mark.search-highlight');
            marks.forEach(mark => {
                const parent = mark.parentNode;
                parent.replaceChild(document.createTextNode(mark.textContent), mark);
                parent.normalize();
            });

            if (query.trim().length > 2) {
                const regex = new RegExp(`(${query})`, 'gi');
                const walk = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null, false);
                let node;
                const nodesToReplace = [];
                while(node = walk.nextNode()) {
                    if (node.nodeValue.toLowerCase().includes(query) && !['SCRIPT', 'STYLE', 'CODE', 'PRE'].includes(node.parentElement.tagName)) {
                        nodesToReplace.push(node);
                    }
                }
                nodesToReplace.forEach(n => {
                    const span = document.createElement('span');
                    span.innerHTML = n.nodeValue.replace(regex, '<mark class="search-highlight">$1</mark>');
                    while(span.firstChild) {
                        n.parentNode.insertBefore(span.firstChild, n);
                    }
                    n.parentNode.removeChild(n);
                });
            }
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

        // Gamification: 100% completion
        if (percent === 100 && total > 0) {
            triggerConfetti();
            showCertificate();
        }
    }

    // --- SCROLL PROGRESS ---
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + "%";
    });

    function triggerConfetti() {
        if (typeof confetti !== 'undefined') {
            var duration = 3000;
            var end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#ffbd2e', '#ff5f56', '#27c93f']
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#ffbd2e', '#ff5f56', '#27c93f']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }
    }

    function showCertificate() {
        contentArea.innerHTML = `
            <div class="certificate-card">
                <i class="ri-medal-fill certificate-icon"></i>
                <h1 class="certificate-title">¡Masterclass Completada!</h1>
                <p class="certificate-subtitle">Has dominado Git & GitHub a nivel Experto.</p>
                <div class="markdown-body" style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 8px;">
                    <p><strong>Certificado de Excelencia Técnica</strong></p>
                    <p>Otorgado a un desarrollador que ya no le teme a la terminal, que resuelve conflictos con los ojos cerrados y que utiliza reflog como un verdadero viajero del tiempo.</p>
                </div>
            </div>
        `;
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

        // 3. Extraer Claves (Cues) Inteligentes
        const keys = new Set();
        // Buscar términos en negrita, código o que empiecen por "Punto clave:", "Nota:", etc.
        tempDiv.querySelectorAll('strong, b, code').forEach(el => {
            if(el.parentElement.tagName === 'P' || el.parentElement.tagName === 'LI') {
                const val = el.innerText.trim();
                if(val.length > 1 && val.length < 40) keys.add(val);
            }
        });

        // Buscar oraciones que parezcan preguntas o definiciones
        tempDiv.querySelectorAll('p').forEach(p => {
            const text = p.innerText.trim();
            if (text.includes('?') && text.length < 60) keys.add(text);
        });
        
        const cuesItems = Array.from(keys).slice(0, 8).map(key => `<div class="cue-item">${key}</div>`).join('');

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

    // --- TERMINAL INTERACTIVA AVANZADA ---
    const termToggle = document.getElementById('terminalToggleBtn');
    const termContainer = document.getElementById('terminalContainer');
    const termClose = document.getElementById('termCloseBtn');
    const termInput = document.getElementById('terminalInput');
    const termBody = document.getElementById('terminalBody');

    let isTerminalOpen = false;
    let commandHistory = [];
    let historyIndex = -1;

    function toggleTerminal() {
        isTerminalOpen = !isTerminalOpen;
        if(isTerminalOpen) {
            termContainer.classList.add('show');
            termInput.focus();
            termToggle.innerHTML = '<i class="ri-close-line"></i> Cerrar Terminal';
            termToggle.style.background = '#ff5f56';
        } else {
            termContainer.classList.remove('show');
            termToggle.innerHTML = '<i class="ri-terminal-box-line"></i> Abrir Terminal';
            termToggle.style.background = 'var(--accent-color)';
        }
    }

    termToggle.addEventListener('click', toggleTerminal);
    termClose.addEventListener('click', toggleTerminal);

    function printToTerminal(text, type = 'system') {
        const div = document.createElement('div');
        div.className = `terminal-line ${type}`;
        div.innerText = text;
        termBody.appendChild(div);
        termBody.scrollTop = termBody.scrollHeight;
    }

    termInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const cmd = this.value.trim();
            if (cmd) {
                printToTerminal(`usuario@git-master:~$ ${cmd}`, 'command');
                commandHistory.push(cmd);
                historyIndex = commandHistory.length;
                processCommand(cmd);
            }
            this.value = '';
        } else if (e.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                this.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                this.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                this.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const val = this.value.toLowerCase();
            const hints = ['git init', 'git status', 'git add', 'git commit', 'git push', 'git branch', 'git checkout', 'git merge', 'git log', 'git help', 'clear', 'whoami'];
            const match = hints.find(h => h.startsWith(val));
            if (match) this.value = match;
        }
    });

    termContainer.addEventListener('click', () => {
        termInput.focus();
    });

    function processCommand(cmd) {
        const parts = cmd.toLowerCase().split(' ');
        const main = parts[0];
        
        if (main === 'clear') {
            termBody.innerHTML = '';
            return;
        }

        if (main === 'whoami') {
            printToTerminal('ByChoke Masterclass Student (Level: Professional)', 'success');
            return;
        }

        if (main !== 'git') {
            printToTerminal(`bash: ${main}: command not found. Escribe 'git help' para ver comandos disponibles.`, 'error');
            return;
        }

        const subCmd = parts[1];
        if (!subCmd || subCmd === 'help') {
            printToTerminal(`Comandos Git disponibles en este simulador:
- init: Inicializar repositorio
- status: Ver estado de archivos
- add: Añadir al staging
- commit: Guardar cambios
- branch: Ver o crear ramas
- checkout: Cambiar de rama
- merge: Unir ramas
- log: Ver historial
- push: Subir a la nube`, 'system');
            return;
        }

        switch(subCmd) {
            case 'init':
                printToTerminal('Initialized empty Git repository in /home/usuario/proyecto/.git/', 'success');
                break;
            case 'status':
                printToTerminal(`On branch main\n\nNo commits yet\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\tindex.html\n\nnothing added to commit but untracked files present`, 'system');
                break;
            case 'add':
                printToTerminal('Cambios añadidos al staging area.', 'success');
                break;
            case 'commit':
                printToTerminal(`[main (root-commit) 4c5b3d2] feat: initial commit\n 1 file changed, 10 insertions(+)`, 'success');
                break;
            case 'push':
                printToTerminal(`Enumerating objects: 3, done.\nCounting objects: 100% (3/3), done.\nWriting objects: 100% (3/3), 215 bytes | 215.00 KiB/s, done.\nTotal 3 (delta 0), reused 0 (delta 0), pack-reused 0\nTo https://github.com/usuario/repo.git\n * [new branch]      main -> main`, 'system');
                break;
            case 'branch':
                if (parts.length > 2) {
                    printToTerminal(`Created branch '${parts[2]}'`, 'success');
                } else {
                    printToTerminal(`* main\n  develop\n  feature/auth`, 'system');
                }
                break;
            case 'checkout':
                if (parts.length > 2) {
                    const branch = parts[parts.length - 1];
                    printToTerminal(`Switched to branch '${branch}'`, 'success');
                } else {
                    printToTerminal('error: pathspec branch name required', 'error');
                }
                break;
            case 'merge':
                printToTerminal('Updating 4c5b3d2..a1fcd4b\nFast-forward\n index.html | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)', 'success');
                break;
            case 'log':
                printToTerminal(`commit 4c5b3d2ef9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4 (HEAD -> main)\nAuthor: ByChokeYT <bychoke@example.com>\nDate:   Thu May 1 20:34:00 2026 -0400\n\n    feat: initial commit`, 'system');
                break;
            default:
                printToTerminal(`git: '${subCmd}' is not a git command. See 'git help'.`, 'error');
        }
    }

    // Inicializar
    updateProgress();
    setTimeout(() => {
        dynamicHero.style.display = 'flex';
        loadModule('Curso/01-Intro/Readme.md');
    }, 100);

});
