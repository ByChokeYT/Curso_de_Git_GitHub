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

    // --- SISTEMA DE QUIZ INTERACTIVO ---
    const quizQuestions = [
        {
            question: "¿Git usa el algoritmo SHA-1 para generar los hashes de los commits?",
            options: ["Verdadero", "Falso"],
            correct: 0,
            explanation: "Git utiliza SHA-1 para identificar de forma única cada objeto (blobs, trees, commits)."
        },
        {
            question: "¿Qué comando se usa para guardar cambios temporalmente sin hacer commit?",
            options: ["git save", "git cache", "git stash", "git preserve"],
            correct: 2,
            explanation: "git stash guarda tu estado de trabajo actual para poder cambiar de contexto rápidamente."
        },
        {
            question: "¿El comando 'git rebase' crea un nuevo commit de merge para unir ramas?",
            options: ["Verdadero", "Falso"],
            correct: 1,
            explanation: "Rebase reescribe el historial aplicando tus commits encima de la otra rama; no crea un commit de merge."
        },
        {
            question: "¿En qué carpeta se deben guardar los archivos de workflow de GitHub Actions?",
            options: [".github/actions", ".github/workflows", "actions/config", ".config/github"],
            correct: 1,
            explanation: "Los archivos YAML de configuración deben ir estrictamente en .github/workflows/."
        },
        {
            question: "¿Qué comando permite ver el historial de movimientos del HEAD para recuperar commits perdidos?",
            options: ["git log --all", "git reflog", "git recover", "git history --deep"],
            correct: 1,
            explanation: "git reflog es la red de seguridad de Git que registra cada vez que el HEAD cambia de posición."
        },
        {
            question: "¿Un commit atómico debe contener múltiples cambios de diferentes funcionalidades?",
            options: ["Verdadero", "Falso"],
            correct: 1,
            explanation: "Los commits atómicos deben ser pequeños y enfocados en una única tarea o funcionalidad."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let quizTimer;
    let timeLeft = 25;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        renderQuestion();
    }

    function renderQuestion() {
        const question = quizQuestions[currentQuestionIndex];
        const quizArea = document.getElementById('quizArea');
        timeLeft = 25;
        
        clearInterval(quizTimer);
        quizTimer = setInterval(() => {
            timeLeft--;
            const timerEl = document.getElementById('quizTimerValue');
            if (timerEl) timerEl.innerText = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(quizTimer);
                handleAnswer(-1); // Tiempo agotado
            }
        }, 1000);

        quizArea.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <span class="quiz-step">Pregunta ${currentQuestionIndex + 1} de ${quizQuestions.length}</span>
                    <div class="quiz-timer"><i class="ri-time-line"></i> <span id="quizTimerValue">${timeLeft}</span>s</div>
                </div>
                <div class="quiz-question-text">${question.question}</div>
                <div class="quiz-options">
                    ${question.options.map((opt, i) => `
                        <button class="quiz-option" onclick="window.handleAnswer(${i})">
                            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                            ${opt}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    window.handleAnswer = (selectedIndex) => {
        clearInterval(quizTimer);
        const question = quizQuestions[currentQuestionIndex];
        const options = document.querySelectorAll('.quiz-option');
        
        if (selectedIndex === question.correct) {
            score++;
            if(selectedIndex !== -1) options[selectedIndex].classList.add('correct');
        } else {
            if(selectedIndex !== -1) options[selectedIndex].classList.add('wrong');
            options[question.correct].classList.add('correct');
        }

        // Deshabilitar botones
        options.forEach(opt => opt.disabled = true);

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                renderQuestion();
            } else {
                showQuizResults();
            }
        }, 2000);
    };

    function showQuizResults() {
        const quizArea = document.getElementById('quizArea');
        const percent = Math.round((score / quizQuestions.length) * 100);
        
        quizArea.innerHTML = `
            <div class="quiz-results glass-panel">
                <i class="ri-trophy-line" style="font-size: 4rem; color: var(--accent-color);"></i>
                <h2>¡Test Finalizado!</h2>
                <div class="quiz-score">${percent}%</div>
                <p>Has acertado ${score} de ${quizQuestions.length} preguntas.</p>
                ${percent >= 80 ? '<p style="color: var(--success-color); font-weight: bold;">¡Excelente! Tienes nivel Senior.</p>' : '<p>Sigue practicando para dominar Git por completo.</p>'}
                <button class="action-btn" onclick="window.startQuiz()">Reintentar Test</button>
            </div>
        `;
        if (percent >= 80) triggerConfetti();
    }

    window.startQuiz = startQuiz;

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
                    const isExam = targetPath === 'Examen-Final.md';
                    
                    contentArea.innerHTML = `
                        <div class="module-card">
                            <div class="module-actions">
                                <button class="complete-btn ${isDone ? 'done' : ''}" id="toggleStatus">
                                    <i class="ri-${isDone ? 'checkbox-circle' : 'checkbox-blank-circle'}-line"></i>
                                    ${isDone ? 'Clase Completada' : 'Marcar como Terminada'}
                                </button>
                            </div>
                            
                            ${isExam ? `
                                <div id="quizArea" class="quiz-start-screen">
                                    <h1 style="border: none; justify-content: center; margin-bottom: 10px;">🛡️ Test de Maestría</h1>
                                    <p style="margin-bottom: 30px;">Demuestra tus conocimientos teóricos antes de pasar a la práctica. Tienes 25s por pregunta.</p>
                                    <button class="btn-start-quiz" onclick="window.startQuiz()">
                                        <i class="ri-play-fill"></i> Iniciar Examen Teórico
                                    </button>
                                    <hr style="margin: 40px 0; border: none; border-top: 1px solid var(--glass-border);">
                                </div>
                            ` : ''}

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

    // --- VIRTUAL FILE SYSTEM (VFS) ---
    let vfs = {
        'index.html': { state: 'committed' },
        'styles.css': { state: 'committed' }
    };

    function getVFSStatus() {
        const untracked = Object.keys(vfs).filter(f => vfs[f].state === 'untracked');
        const staged = Object.keys(vfs).filter(f => vfs[f].state === 'staged');
        const committed = Object.keys(vfs).filter(f => vfs[f].state === 'committed');
        return { untracked, staged, committed };
    }

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
            const hints = ['git init', 'git status', 'git add', 'git commit', 'git push', 'git branch', 'git checkout', 'git merge', 'git log', 'git help', 'clear', 'whoami', 'ls', 'touch', 'rm'];
            const match = hints.find(h => h.startsWith(val));
            if (match) this.value = match;
        }
    });

    termContainer.addEventListener('click', () => {
        termInput.focus();
    });

    function processCommand(cmd) {
        const parts = cmd.toLowerCase().split(' ').filter(p => p.trim() !== '');
        if (parts.length === 0) return;

        const main = parts[0];
        
        if (main === 'clear') {
            termBody.innerHTML = '';
            return;
        }

        if (main === 'whoami') {
            printToTerminal('ByChoke Masterclass Student (Level: Professional)', 'success');
            return;
        }

        if (main === 'ls') {
            const files = Object.keys(vfs).join('  ');
            printToTerminal(files || '(directorio vacío)', 'system');
            return;
        }

        if (main === 'touch') {
            if (parts.length > 1) {
                const filename = parts[1];
                if (vfs[filename]) {
                    printToTerminal(`touch: el archivo '${filename}' ya existe.`, 'system');
                } else {
                    vfs[filename] = { state: 'untracked' };
                    printToTerminal(`Archivo '${filename}' creado.`, 'success');
                }
            } else {
                printToTerminal('touch: falta un operando de archivo', 'error');
            }
            return;
        }

        if (main === 'rm') {
            if (parts.length > 1) {
                const filename = parts[1];
                if (vfs[filename]) {
                    delete vfs[filename];
                    printToTerminal(`Archivo '${filename}' eliminado.`, 'success');
                } else {
                    printToTerminal(`rm: no se puede borrar '${filename}': No existe el archivo`, 'error');
                }
            } else {
                printToTerminal('rm: falta un operando', 'error');
            }
            return;
        }

        if (main !== 'git') {
            printToTerminal(`bash: ${main}: command not found. Escribe 'git help' para ver comandos disponibles.`, 'error');
            return;
        }

        const subCmd = parts[1];
        if (!subCmd || subCmd === 'help') {
            printToTerminal(`Comandos Git disponibles:
- init: Inicializar repositorio
- status: Ver estado de archivos (VFS activo)
- add <file>: Añadir al staging
- commit -m "msg": Guardar cambios
- branch: Ver o crear ramas
- checkout: Cambiar de rama
- merge: Unir ramas
- log: Ver historial
- push: Subir a la nube`, 'system');
            return;
        }

        const { untracked, staged, committed } = getVFSStatus();

        switch(subCmd) {
            case 'init':
                printToTerminal('Initialized empty Git repository in /home/usuario/proyecto/.git/', 'success');
                break;
            case 'status':
                let statusOutput = `On branch main\n\n`;
                if (staged.length > 0) {
                    statusOutput += `Changes to be committed:\n  (use "git restore --staged <file>..." to unstage)\n`;
                    staged.forEach(f => statusOutput += `\tmodified:   ${f}\n`);
                    statusOutput += `\n`;
                }
                if (untracked.length > 0) {
                    statusOutput += `Untracked files:\n  (use "git add <file>..." to include in what will be committed)\n`;
                    untracked.forEach(f => statusOutput += `\t${f}\n`);
                    statusOutput += `\nnothing added to commit but untracked files present`;
                } else if (staged.length === 0) {
                    statusOutput += `nothing to commit, working tree clean`;
                }
                printToTerminal(statusOutput, 'system');
                break;
            case 'add':
                if (parts.length > 2) {
                    const target = parts[2];
                    if (target === '.') {
                        untracked.forEach(f => vfs[f].state = 'staged');
                        printToTerminal('Todos los archivos añadidos al staging area.', 'success');
                    } else if (vfs[target]) {
                        vfs[target].state = 'staged';
                        printToTerminal(`Archivo '${target}' añadido al staging area.`, 'success');
                    } else {
                        printToTerminal(`fatal: pathspec '${target}' did not match any files`, 'error');
                    }
                } else {
                    printToTerminal('nothing specified, nothing added.', 'system');
                }
                break;
            case 'commit':
                if (staged.length > 0) {
                    staged.forEach(f => vfs[f].state = 'committed');
                    printToTerminal(`[main ${Math.random().toString(16).substring(2, 8)}] commit exitoso\n ${staged.length} files changed`, 'success');
                } else {
                    printToTerminal('nothing to commit, working tree clean', 'system');
                }
                break;
            case 'push':
                printToTerminal(`Enumerating objects: 3, done.\nCounting objects: 100% (3/3), done.\nWriting objects: 100% (3/3), listo.\nTo https://github.com/usuario/repo.git\n * [new branch]      main -> main`, 'system');
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
