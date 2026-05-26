/**
 * Flutter Masterclass - Course Data
 */
const courseOrder = [
    'home',
    'dart-basics',
    'flutter-intro',
    'widgets-basics',
    'layout',
    'project-calc',
    'project-weather',
    'project-music',
    'project-todo',
    'roadmap',
    'terminal'
];

const courseData = {
    "home": {
        title: "Willkommen zur Flutter Masterclass",
        content: `
            <div class="hero">
                <h1>Lerne Flutter. <br><span style="color:var(--accent-color)">Modern. Offline. Schnell.</span></h1>
                <p>Dieser Kurs ist dein ultimativer Begleiter, um von Null auf Hundert in der Flutter-Entwicklung zu kommen. Inspiriert von minimalistischem Design und effizienten Workflows.</p>
                <div class="grid-stats">
                    <div class="card">
                        <h3>10+</h3>
                        <p>Module</p>
                    </div>
                    <div class="card">
                        <h3>4</h3>
                        <p>Mini-Projekte</p>
                    </div>
                    <div class="card">
                        <h3>∞</h3>
                        <p>Offline Zugang</p>
                    </div>
                </div>
                <button class="cta-btn btn-pulse" onclick="window.navigateTo('dart-basics')">Kurs starten</button>
            </div>
        `
    },
    "dart-basics": {
        title: "Dart Grundlagen",
        content: `
            <div class="fade-in">
                <p>Bevor wir mit Flutter starten, müssen wir die Sprache verstehen, auf der es basiert: <strong>Dart</strong>.</p>
                
                <div class="card">
                    <h3>Variablen & Datentypen</h3>
                    <p>Dart ist typsicher, kann aber Typen auch automatisch erkennen.</p>
                    <pre><code class="language-dart">void main() {
  String name = "Manus";
  int alter = 25;
  double version = 3.0;
  bool isFlutterCool = true;
  
  print("Hallo \$name!");
}</code><button class="copy-btn">Copy</button></pre>
                </div>

                <div class="card">
                    <h3>Funktionen</h3>
                    <p>Funktionen sind die Bausteine deiner App.</p>
                    <pre><code class="language-dart">int addiere(int a, int b) {
  return a + b;
}

// Arrow Syntax für kurze Funktionen
void sayHi() => print("Hi!");</code><button class="copy-btn">Copy</button></pre>
                </div>

                <div class="quiz-section" data-quiz="dart-1">
                    <h3>Kurzes Quiz</h3>
                    <p>Welches Schlüsselwort wird für eine Variable verwendet, die nach der Zuweisung nicht mehr geändert werden kann?</p>
                    <div class="quiz-options">
                        <button onclick="window.checkQuiz('dart-1', 0)">var</button>
                        <button onclick="window.checkQuiz('dart-1', 1)">final</button>
                        <button onclick="window.checkQuiz('dart-1', 2)">change</button>
                    </div>
                </div>

                <div class="card">
                    <h3>Kontrollstrukturen: If/Else & Loops</h3>
                    <p>Logik ist das Herzstück jeder App. Mit <code>if/else</code> triffst du Entscheidungen, mit <code>for</code> oder <code>while</code> wiederholst du Aktionen.</p>
                    <pre><code class="language-dart">void checkNumber(int num) {
  if (num > 0) {
    print("Positiv");
  } else if (num < 0) {
    print("Negativ");
  } else {
    print("Null");
  }
}

for (int i = 0; i < 5; i++) {
  print("Zähler: \$i");
}</code><button class="copy-btn">Copy</button></pre>
                </div>

                <div class="card">
                    <h3>Klassen & Objekte (OOP)</h3>
                    <p>Dart ist eine objektorientierte Sprache. Du kannst eigene Klassen definieren, um Daten und Funktionen zu bündeln.</p>
                    <pre><code class="language-dart">class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void greet() {
    print("Hallo, mein Name ist \$name und ich bin \$age Jahre alt.");
  }
}

void main() {
  var manus = Person("Manus", 25);
  manus.greet();
}</code><button class="copy-btn">Copy</button></pre>
                </div>

                <div class="quiz-section" data-quiz="dart-2">
                    <h3>Übung: Dart-Grundlagen</h3>
                    <p>Schreibe eine Dart-Funktion, die eine Liste von Zahlen entgegennimmt und die Summe aller geraden Zahlen zurückgibt.</p>
                    <pre><code class="language-dart">int summeGeraderZahlen(List<int> zahlen) {
  // Dein Code hier
  return 0;
}</code><button class="copy-btn">Copy</button></pre>
                    <button class="cta-btn" onclick="window.showSolution('dart-2-solution')">Lösung anzeigen</button>
                    <div id="dart-2-solution" style="display:none; margin-top: 1rem;">
                        <pre><code class="language-dart">int summeGeraderZahlen(List<int> zahlen) {
  int summe = 0;
  for (int zahl in zahlen) {
    if (zahl % 2 == 0) {
      summe += zahl;
    }
  }
  return summe;
}</code><button class="copy-btn">Copy</button></pre>
                    </div>
                </div>
            </div>
        `
    },
    "flutter-intro": {
        title: "Was ist Flutter?",
        content: `
            <div class="fade-in">
                <p>Flutter ist Googles UI-Toolkit für die Erstellung von nativ kompilierten Anwendungen für Mobile, Web und Desktop aus einer einzigen Codebasis.</p>
                <div class="card">
                    <h3>Das "Everything is a Widget" Konzept</h3>
                    <p>In Flutter ist fast alles ein Widget. Ein Button ist ein Widget, ein Text ist ein Widget, und sogar das Padding ist ein Widget.</p>
                </div>
                <div class="card">
                    <h3>Hot Reload & Hot Restart</h3>
                    <p>Eines der besten Features: Ändere deinen Code und sieh das Ergebnis in unter einer Sekunde (Hot Reload), ohne den Status der App zu verlieren. Hot Restart startet die App komplett neu, behält aber den schnellen Entwicklungszyklus bei.</p>
                </div>
                <div class="card">
                    <h3>Warum Flutter?</h3>
                    <ul>
                        <li><strong>Schnelle Entwicklung:</strong> Hot Reload, Rich Widget Set.</li>
                        <li><strong>Expressive UI:</strong> Volle Kontrolle über jeden Pixel, Material Design und Cupertino (iOS) Widgets.</li>
                        <li><strong>Native Performance:</strong> Kompiliert zu nativem Code.</li>
                        <li><strong>Eine Codebasis:</strong> Für iOS, Android, Web, Desktop.</li>
                    </ul>
                </div>
                <div class="quiz-section" data-quiz="flutter-1">
                    <h3>Kurzes Quiz</h3>
                    <p>Welches Feature erlaubt es dir, Code-Änderungen sofort zu sehen, ohne den App-Zustand zu verlieren?</p>
                    <div class="quiz-options">
                        <button onclick="window.checkQuiz('flutter-1', 0)">Hot Restart</button>
                        <button onclick="window.checkQuiz('flutter-1', 1)">Full Recompile</button>
                        <button onclick="window.checkQuiz('flutter-1', 2)">Hot Reload</button>
                    </div>
                </div>
            </div>
        `
    },
    "project-calc": {
        title: "Projekt: Taschenrechner",
        content: `
            <div class="fade-in">
                <p>Lass uns unseren ersten Rechner bauen. Wir nutzen ein Grid-Layout für die Buttons.</p>
                <div class="card">
                    <h3>Was du lernst</h3>
                    <ul>
                        <li>Stateless vs Stateful Widgets</li>
                        <li>GridView.builder für das Tastenfeld</li>
                        <li>Logik für mathematische Operationen</li>
                    </ul>
                </div>
                
                <h3>Schritt 1: UI Layout</h3>
                <p>Verwende ein <code>Column</code> Widget, um das Display oben und das Tastenfeld unten anzuzeigen.</p>
                <pre><code class="language-dart">Column(
  children: [
    Expanded(child: DisplayWidget(text: input)),
    Expanded(flex: 2, child: ButtonGrid()),
  ],
)</code><button class="copy-btn">Copy</button></pre>

                <h3>Schritt 2: Die Logik</h3>
                <p>Die Haupt-Logik verarbeitet die Tastendrücke und aktualisiert den Status.</p>
                <pre><code class="language-dart">void onButtonPressed(String text) {
  setState(() {
    if (text == "C") {
      input = "";
    } else if (text == "=") {
      output = calculate(input);
    } else {
      input += text;
    }
  });
}</code><button class="copy-btn">Copy</button></pre>
                
                <div class="quiz-section" data-quiz="project-1">
                    <h3>Quiz: Rechner</h3>
                    <p>Welches Widget eignet sich am besten, um das Display des Rechners flexibel über den Tasten zu platzieren?</p>
                    <div class="quiz-options">
                        <button onclick="window.checkQuiz('project-1', 0)">Padding</button>
                        <button onclick="window.checkQuiz('project-1', 1)">Expanded</button>
                        <button onclick="window.checkQuiz('project-1', 2)">Container</button>
                    </div>
                </div>
            </div>
        `
    },
    "project-weather": {
        title: "Projekt: Wetter App",
        content: `
            <div class="fade-in">
                <p>In diesem Projekt lernst du, wie man Daten visualisiert und UI-Komponenten dynamisch anpasst.</p>
                <div class="card">
                    <h3>Highlights</h3>
                    <ul>
                        <li>JSON Parsing Simulation</li>
                        <li>Custom Icons & Bilder</li>
                        <li>ListView für Vorhersagen</li>
                    </ul>
                </div>

                <h3>Schritt 1: Das Datenmodell</h3>
                <p>Wir definieren eine Klasse, um unsere Wetterdaten zu strukturieren.</p>
                <pre><code class="language-dart">class Weather {
  final String city;
  final double temp;
  final String condition;

  Weather({required this.city, required this.temp, required this.condition});
}</code><button class="copy-btn">Copy</button></pre>

                <h3>Schritt 2: UI mit ListView</h3>
                <p>Um eine Vorhersage für mehrere Tage anzuzeigen, nutzen wir eine <code>ListView.builder</code>.</p>
                <pre><code class="language-dart">ListView.builder(
  itemCount: forecasts.length,
  itemBuilder: (context, index) {
    return ListTile(
      title: Text(forecasts[index].day),
      trailing: Text("\${forecasts[index].temp}°C"),
    );
  },
)</code><button class="copy-btn">Copy</button></pre>
                
                <div class="quiz-section" data-quiz="project-2">
                    <h3>Quiz: Wetter App</h3>
                    <p>Welches Widget eignet sich am besten für eine scrollbare Liste von Elementen?</p>
                    <div class="quiz-options">
                        <button onclick="window.checkQuiz('project-2', 0)">Column</button>
                        <button onclick="window.checkQuiz('project-2', 1)">ListView</button>
                        <button onclick="window.checkQuiz('project-2', 2)">Stack</button>
                    </div>
                </div>
            </div>
        `
    },
    "project-music": {
        title: "Projekt: Music Player UI",
        content: `
            <div class="fade-in">
                <p>Design ist alles. Wir bauen ein minimalistisches Interface im Nothing OS Stil.</p>
                <div class="card">
                    <h3>Design-Fokus</h3>
                    <ul>
                        <li>Glassmorphism Effekte</li>
                        <li>Custom Slider</li>
                        <li>Animationen beim Songwechsel</li>
                    </ul>
                </div>
                <pre><code class="language-dart">// Ein runder Play-Button
Container(
  decoration: BoxDecoration(
    shape: BoxShape.circle,
    border: Border.all(color: Colors.red),
  ),
  child: IconButton(
    icon: Icon(Icons.play_arrow),
    onPressed: () {},
  ),
)</code><button class="copy-btn">Copy</button></pre>
            </div>
        `
    },
    "project-todo": {
        title: "Projekt: Todo App",
        content: `
            <div class="fade-in">
                <p>Der Klassiker. Hier lernst du CRUD-Operationen (Create, Read, Update, Delete).</p>
                <div class="card">
                    <h3>Features</h3>
                    <ul>
                        <li>Lokale Speicherung (Shared Preferences)</li>
                        <li>Dismissible Widgets (Wischen zum Löschen)</li>
                        <li>Checkbox-Handling</li>
                    </ul>
                </div>
                <pre><code class="language-dart">// Löschen durch Wischen
Dismissible(
  key: Key(item.id),
  onDismissed: (direction) => removeItem(item.id),
  background: Container(color: Colors.red),
  child: ListTile(title: Text(item.title)),
)</code><button class="copy-btn">Copy</button></pre>
            </div>
        `
    },
    "roadmap": {
        title: "Flutter Developer Roadmap 2024",
        content: `
            <div class="roadmap-container">
                <div class="roadmap-step active">
                    <h4>1. Dart Basics</h4>
                    <p>Variablen, Loops, OOP</p>
                </div>
                <div class="roadmap-step">
                    <h4>2. Flutter UI</h4>
                    <p>Widgets, Layouts, Material Design</p>
                </div>
                <div class="roadmap-step">
                    <h4>3. State Management</h4>
                    <p>Provider, Riverpod oder Bloc</p>
                </div>
                <div class="roadmap-step">
                    <h4>4. API & Backend</h4>
                    <p>Firebase, REST APIs, Supabase</p>
                </div>
            </div>
        `
    }
};
