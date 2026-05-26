/**
 * UI & Terminal Logic
 */

function initTerminal() {
    const terminalContent = `
        <div class="terminal-container">
            <div class="terminal-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
                <span class="terminal-title">flutter_console.sh</span>
            </div>
            <div class="terminal-body" id="terminal-output">
                <div class="line">Willkommen beim Flutter Terminal.</div>
                <div class="line">Tippe 'help' für Befehle.</div>
            </div>
            <div class="terminal-input-line">
                <span class="prompt">$</span>
                <input type="text" id="terminal-input" autofocus spellcheck="false" autocomplete="off">
            </div>
        </div>
    `;
    
    if (typeof courseData !== 'undefined') {
        courseData['terminal'] = {
            title: "Interaktives Terminal",
            content: terminalContent
        };
    }
}

// Event Delegation für Terminal-Eingaben
document.addEventListener('keydown', (e) => {
    if (e.target && e.target.id === 'terminal-input' && e.key === 'Enter') {
        const input = e.target.value.trim().toLowerCase();
        if (input) {
            handleTerminalCommand(input);
        }
        e.target.value = '';
    }
});

function handleTerminalCommand(cmd) {
    const output = document.getElementById('terminal-output');
    if (!output) return;

    let response = "";

    switch(cmd) {
        case 'help':
            response = "Verfügbare Befehle: <br>- <b>help</b>: Zeigt diese Hilfe<br>- <b>clear</b>: Leert das Terminal<br>- <b>flutter run</b>: Simuliert App-Start<br>- <b>dart --version</b>: Zeigt Dart Version<br>- <b>status</b>: Zeigt deinen Lernfortschritt";
            break;
        case 'flutter run':
            response = "<span style='color:#3498db'>Kompiliere...</span><br><span style='color:#2ecc71'>✓ Build erfolgreich!</span><br>App läuft auf 'Manus Simulator'.";
            break;
        case 'clear':
            output.innerHTML = '';
            return;
        case 'dart --version':
            response = "Dart SDK version: 3.3.0 (stable) (Wed Feb 14 2024) on 'linux_x64'";
            break;
        case 'status':
            const prog = document.getElementById('progress-text') ? document.getElementById('progress-text').innerText : '0%';
            const ach = document.getElementById('achievement-count') ? document.getElementById('achievement-count').innerText : '0';
            response = `Fortschritt: ${prog}<br>Erfolge: ${ach}`;
            break;
        default:
            response = `<span style='color:#e74c3c'>Befehl nicht gefunden: ${cmd}</span><br>Tippe 'help' für eine Liste der Befehle.`;
    }

    const line = document.createElement('div');
    line.className = 'line';
    line.style.marginTop = '10px';
    line.innerHTML = `<span class="prompt">$</span> ${cmd}<br>${response}`;
    output.appendChild(line);
    
    // Auto-Scroll
    output.scrollTop = output.scrollHeight;
}

// Sofort initialisieren
initTerminal();
