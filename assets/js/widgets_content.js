/**
 * Flutter Masterclass - Widgets Content
 */
const widgetsContent = {
    "widgets-basics": {
        title: "Widget Basics",
        content: `
            <div class="fade-in">
                <p>Widgets sind die Grundbausteine einer Flutter-App. Es gibt zwei Hauptarten:</p>
                <div class="grid-stats">
                    <div class="card">
                        <h4>Stateless</h4>
                        <p>Ändert sich nie (z.B. ein Icon oder Text).</p>
                    </div>
                    <div class="card">
                        <h4>Stateful</h4>
                        <p>Kann sich zur Laufzeit ändern (z.B. ein Schalter oder Eingabefeld).</p>
                    </div>
                </div>
                <pre><code class="language-dart">class MyText extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Text("Ich bin statisch");
  }
}</code><button class="copy-btn">Copy</button></pre>
            </div>
        `
    },
    "layout": {
        title: "Layout & UI",
        content: `
            <div class="fade-in">
                <p>Wie ordnen wir Widgets an? Die wichtigsten Layout-Widgets sind <strong>Row</strong> und <strong>Column</strong>.</p>
                <div class="card">
                    <h3>Row & Column</h3>
                    <p>Nutze <code>MainAxisAlignment</code> und <code>CrossAxisAlignment</code>, um Kinder auszurichten.</p>
                    <pre><code class="language-dart">Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    Text("Oben"),
    Text("Unten"),
  ],
)</code><button class="copy-btn">Copy</button></pre>
                </div>

                <div class="quiz-section" data-quiz="layout-1">
                    <h3>Quiz: Layout</h3>
                    <p>Welches Attribut richtet Kinder in einer <b>Column</b> vertikal aus?</p>
                    <div class="quiz-options">
                        <button onclick="window.checkQuiz('layout-1', 0)">CrossAxisAlignment</button>
                        <button onclick="window.checkQuiz('layout-1', 1)">MainAxisAlignment</button>
                        <button onclick="window.checkQuiz('layout-1', 2)">VerticalAlign</button>
                    </div>
                </div>
            </div>
        `
    }
};

// Merge into main data
if (typeof courseData !== 'undefined') {
    Object.assign(courseData, widgetsContent);
}
