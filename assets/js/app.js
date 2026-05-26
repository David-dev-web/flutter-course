/**
 * Flutter Masterclass - App Logic
 * Handelt Navigation, Progress, Quizze und LocalStorage
 */

// State Management
let state = {
    currentView: 'home',
    progress: {},
    achievements: [],
    streak: 1,
    lastVisit: new Date().toDateString()
};

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log("App wird initialisiert...");
        loadState();
        setupGlobalEvents();
        renderView(state.currentView);
        updateProgressUI();
    } catch (error) {
        console.error("Initialisierungsfehler:", error);
        showToast("Fehler beim Laden der App. Bitte Seite neu laden.");
    }
});

/**
 * Setup Event Listeners für statische Elemente
 */
function setupGlobalEvents() {
    // Navigation Sidebar
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const target = item.getAttribute('data-target');
            if (target) {
                if (isLocked(target)) {
                    showToast("Dieses Kapitel ist noch gesperrt! Schließe das vorherige Quiz ab.");
                    return;
                }
                navigateTo(target);
            }
        });
    });

    // Suche (Platzhalter-Funktionalität)
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                showToast("Suche aktuell nur lokal verfügbar.");
            }
        });
    }
}

/**
 * Navigiert zu einer bestimmten Ansicht
 */
function isLocked(viewId) {
    if (viewId === 'home' || viewId === 'terminal') return false;
    
    const index = courseOrder.indexOf(viewId);
    if (index <= 1) return false; // Home und erstes Kapitel immer frei
    
    const prevViewId = courseOrder[index - 1];
    // Ein Kapitel ist frei, wenn das vorherige Quiz abgeschlossen wurde
    // ODER wenn es ein rein informatives Kapitel ist und das davor gesehen wurde
    return !state.progress[`quiz_${prevViewId}`] && !state.progress[prevViewId];
}

function navigateTo(viewId) {
    if (isLocked(viewId)) {
        showToast("Kapitel gesperrt.");
        return;
    }

    state.currentView = viewId;
    renderView(viewId);
    
    updateSidebarUI();
    
    // Scroll nach oben
    const container = document.getElementById('main-view');
    if (container) container.scrollTop = 0;
    
    // Markiere als gelesen (außer Home/Terminal)
    if (viewId !== 'home' && viewId !== 'terminal') {
        markProgress(viewId);
    }

    saveState();
}

/**
 * Rendert den Inhalt einer View
 */
function renderView(viewId) {
    if (typeof courseData === 'undefined') return;
    const view = courseData[viewId];
    if (!view) return;
    const container = document.getElementById('main-view');
    if (!container) return;

    container.innerHTML = `
        <div class="view-header slide-in">
            <h1>${view.title}</h1>
        </div>
        <div class="view-content fade-in">
            ${view.content}
        </div>
    `;
    
    attachDynamicListeners();
    
    // Prism Highlight
    if (window.Prism) {
        window.Prism.highlightAll();
    }
    
    // Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function updateSidebarUI() {
    document.querySelectorAll('.nav-item').forEach(item => {
        const target = item.getAttribute('data-target');
        item.classList.toggle('active', target === state.currentView);
        
        const locked = isLocked(target);
        item.classList.toggle('locked', locked);
        
        // Icon hinzufügen/entfernen
        let icon = item.querySelector('.lock-icon');
        if (locked && !icon) {
            item.insertAdjacentHTML('beforeend', '<i data-lucide="lock" class="lock-icon"></i>');
        } else if (!locked && icon) {
            icon.remove();
        }
    });
    
    if (window.lucide) window.lucide.createIcons();
}

/**
 * Bindet Listener an Elemente, die per innerHTML eingefügt wurden
 */
function attachDynamicListeners() {
    // Copy Buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const codeBlock = btn.parentElement.querySelector('code');
            if (codeBlock) {
                const code = codeBlock.innerText;
                navigator.clipboard.writeText(code).then(() => {
                    btn.innerText = 'Kopiert!';
                    btn.classList.add('success');
                    setTimeout(() => {
                        btn.innerText = 'Copy';
                        btn.classList.remove('success');
                    }, 2000);
                }).catch(err => {
                    console.error('Copy failed', err);
                    showToast("Kopieren fehlgeschlagen.");
                });
            }
        });
    });

    // Start Kurs Button (Home)
    const startBtn = document.querySelector('.cta-btn');
    if (startBtn && state.currentView === 'home') {
        // Da der Button im HTML-String ist, wird er hier gebunden
        // falls er nicht schon ein inline onclick hat.
        // Wir nutzen hier lieber die explizite Bindung.
    }
}

/**
 * Progress & Achievement Logic
 */
function markProgress(id) {
    if (!state.progress[id]) {
        state.progress[id] = true;
        updateProgressUI();
        saveState();
    }
}

function updateProgressUI() {
    const totalChapters = courseOrder.length - 2; // Ohne home und terminal
    const completedChapters = Object.keys(state.progress).filter(k => !k.startsWith('quiz_')).length;
    const percentage = Math.min(100, Math.round((completedChapters / totalChapters) * 100)) || 0;
    
    const bar = document.getElementById('main-progress');
    const text = document.getElementById('progress-text');
    
    if (bar) bar.style.width = `${percentage}%`;
    if (text) text.innerText = `${percentage}%`;
    
    updateSidebarUI();

    if (percentage >= 50 && !state.achievements.includes('halfway')) {
        unlockAchievement('Halbzeit-Held', 'halfway');
    }
    if (percentage === 100 && !state.achievements.includes('master')) {
        unlockAchievement('Flutter Master', 'master');
    }
}

function unlockAchievement(name, id) {
    if (state.achievements.includes(id)) return;
    
    state.achievements.push(id);
    const badgeCount = document.getElementById('achievement-count');
    if (badgeCount) badgeCount.innerText = state.achievements.length;
    
    showToast(`🏆 Erfolg: ${name}`);
    saveState();
}

/**
 * Toast System
 */
function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast slide-in';
    toast.innerHTML = `<span>${msg}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3500);
}

/**
 * Storage Logic
 */
function saveState() {
    try {
        localStorage.setItem('flutter_course_state', JSON.stringify(state));
    } catch (e) {
        console.error("LocalStorage Fehler:", e);
    }
}

function loadState() {
    try {
        const saved = localStorage.getItem('flutter_course_state');
        if (saved) {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
            
            // Streak berechnen
            const today = new Date().toDateString();
            if (state.lastVisit !== today) {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                
                if (state.lastVisit === yesterday.toDateString()) {
                    state.streak++;
                } else {
                    state.streak = 1;
                }
                state.lastVisit = today;
                saveState();
            }
            
            // UI aktualisieren
            const achievementCount = document.getElementById('achievement-count');
            const streakCount = document.getElementById('streak-count');
            if (achievementCount) achievementCount.innerText = state.achievements.length;
            if (streakCount) streakCount.innerText = state.streak;
        }
    } catch (e) {
        console.error("Ladefehler LocalStorage:", e);
    }
}

/**
 * Quiz & Interactive Helpers (Global zugänglich für inline onclicks)
 */
window.checkQuiz = function(quizId, optionIndex) {
    const answers = {
        'dart-1': 1,
        'dart-2': 1,
        'flutter-1': 2,
        'project-1': 1,
        'layout-1': 1,
        'project-2': 1
    };
    
    const isCorrect = answers[quizId] === optionIndex;
    const quizBox = document.querySelector(`[data-quiz="${quizId}"]`);
    if (!quizBox) return;

    const buttons = quizBox.querySelectorAll('.quiz-options button');
    
    buttons.forEach((btn, idx) => {
        if (idx === answers[quizId]) {
            btn.style.background = '#2ecc71';
            btn.style.color = 'white';
        } else if (idx === optionIndex) {
            btn.style.background = '#e74c3c';
            btn.style.color = 'white';
        }
        btn.disabled = true;
    });
    
    if (isCorrect) {
        showToast("Richtig! +10 XP");
        if (!state.achievements.includes('first-quiz')) {
            unlockAchievement('Erstes Quiz gelöst', 'first-quiz');
        }
        markProgress(`quiz_${quizId}`);
    } else {
        showToast("Leider falsch. Schau dir den Code nochmal an!");
    }
};

window.showSolution = function(id) {
    const el = document.getElementById(id);
    if (el) {
        const isHidden = el.style.display === 'none' || el.style.display === '';
        el.style.display = isHidden ? 'block' : 'none';
        el.classList.add('fade-in');
    }
};

window.navigateTo = navigateTo; // Global verfügbar machen
