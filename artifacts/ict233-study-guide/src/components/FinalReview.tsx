const finalReviewData = [
  {
    unit: "Unit 1 — Web Technologies Overview",
    color: "cyan",
    bullets: [
      "HTML = HyperText Markup Language (MARKUP, not programming language)",
      "CSS = Cascading Style Sheets (W3C standard, controls presentation)",
      "JavaScript = Object-based CLIENT-SIDE scripting language (Brendan Eich, 1995, Netscape)",
      "WWW invented by Tim Berners-Lee & Robert Cailliau at CERN, 1989",
      "Web uses 3 mechanisms: URLs + HTTP protocols + Hypertext (HTML)",
      "PHP = PHP: Hypertext Preprocessor (Rasmus Lerdorf, 1994)",
      "AJAX = group of technologies (NOT a programming language)",
      "ECMAScript = standardized JavaScript (Ecma International, 1997)",
      "JavaScript originally named 'LiveScript' at Netscape",
      "SGML = Standard Generalized Markup Language (IBM, 1974 → ISO 1986)",
    ],
  },
  {
    unit: "Unit 2 — Browsers, Servers & Web Design Process",
    color: "yellow",
    bullets: [
      "Browser = application software to access/view web resources",
      "8 browser subsystems: UI, Browser Engine, Rendering Engine, Networking, JS Interpreter, XML Parser, Display Backend, Data Persistence",
      "Rendering Engine = displays HTML/XML, handles layout/positioning",
      "Major browsers: Chrome, Firefox, MS Edge, Opera, Safari",
      "Major servers: Apache, Nginx ('engine-x'), IIS, Apache Tomcat, Lighttpd ('lighty')",
      "8 web design phases: Definition → Scope → Architecture → Design → Development → Testing → Launch → Maintenance",
      "Project Brief contains: project summary, goals, target audiences, key outcomes",
      "Domain names replace hard-to-remember IP addresses",
    ],
  },
  {
    unit: "Unit 3 — HTML Structure & Elements",
    color: "green",
    bullets: [
      "DOCTYPE = specifies HTML rules for browser → always FIRST",
      "<html> = root element | <head> = metadata | <body> = visible content",
      "6 rules: well-formed, properly nested, lowercase tags, close tags, self-close empty, values in quotes",
      "Container = has content (<p>text</p>); Empty = self-closing (<br />)",
      "Attribute = instruction modifying element in opening tag",
      "Comment: <!-- comment text -->",
      "Colors: name/#HEX/rgb()/hsl()/rgba()/hsla()",
      "Key HEX: #FFFFFF=white, #000000=black, #FF0000=red, #00FF00=green, #0000FF=blue",
    ],
  },
  {
    unit: "Unit 4 — HTML Formatting, Lists & Multimedia",
    color: "purple",
    bullets: [
      "<b> = bold (visual), <strong> = important (semantic) | <i> = italic, <em> = emphasized (semantic)",
      "3 list types: <ol> (ordered/numbered), <ul> (unordered/bulleted), <dl> (definition)",
      "Ordered type: 1=arabic, A=uppercase, a=lowercase, I=upper-roman, i=lower-roman",
      "Unordered styles: disc(default), circle, square, none",
      "Definition list: <dl><dt>Term</dt><dd>Definition</dd></dl>",
      "<sub> = subscript (H₂O), <sup> = superscript (x²)",
      "<del> = strikethrough, <ins> = underlined, <mark> = highlighted",
      "File paths: same folder: 'file.jpg', parent: '../file.jpg', root: '/file.jpg'",
    ],
  },
  {
    unit: "Unit 5 — HTML Tables & Forms",
    color: "cyan",
    bullets: [
      "Table structure: <table> > <thead>/<tbody>/<tfoot> > <tr> > <th>/<td>",
      "colspan = spans COLUMNS (right), rowspan = spans ROWS (down)",
      "Most used form tag: <input /> (type attribute specifies control)",
      "radio = ONE selection only, checkbox = MULTIPLE allowed",
      "hidden input = passes data without user visibility",
      "type='submit' = submits form, type='reset' = clears form",
      "Server-side scripts (PHP) process form data on the server",
      "border-collapse: collapse merges adjacent borders for clean tables",
    ],
  },
  {
    unit: "Unit 6 — CSS Fundamentals & Selectors",
    color: "yellow",
    bullets: [
      "CSS = Cascading Style Sheets (controls PRESENTATION layer)",
      "3 types: External (many pages), Internal (<style> in <head>), Inline (style='')",
      "CSS rule = selector { property: value; }",
      "Specificity: Inline(1000) > ID#(100) > .Class(10) > element(1)",
      "Selectors: tag, .class, #id, * (universal), ancestor element (descendant), :hover",
      "<div> = block-level container | <span> = inline container",
      "ID = unique (once per page), Class = reusable (multiple elements)",
      "Pseudo-class: :hover, :first-child | Pseudo-element: :first-letter",
    ],
  },
  {
    unit: "Unit 7 — CSS Units, Positioning & Layout",
    color: "green",
    bullets: [
      "Absolute (fixed): px, cm, mm, in, pt, pc",
      "Relative (responsive): em(parent), rem(root), vw(viewport width), vh(viewport height), %(parent), fr(grid)",
      "NO space between number and unit: '12px' ✓, '12 px' ✗",
      "static=default, relative=offset from normal, fixed=viewport-locked",
      "absolute=relative to nearest non-static ancestor (or body)",
      "sticky=relative until threshold, then fixed (needs top/right/bottom/left)",
      "CSS Box Model: content + padding + border + margin",
      "Flexbox=1D layout, CSS Grid=2D layout",
    ],
  },
  {
    unit: "Unit 8 — JavaScript",
    color: "purple",
    bullets: [
      "JS = client-side scripting language (runs in browser)",
      "const (unchangeable), let (reassignable), avoid var",
      "DOM = Document Object Model (HTML as tree of objects)",
      "DOM methods: getElementById, querySelector, querySelectorAll",
      "Events: click, keypress, mouseover → addEventListener()",
      "Array methods: push/pop (end), shift/unshift (start)",
      "try...catch = error handling | fetch() = HTTP requests",
      "async/await = clean async code (based on Promises)",
      "JSON.parse() = string→object | JSON.stringify() = object→string",
      "alert() = popup | console.log() = developer console output",
    ],
  },
];

export default function FinalReview() {
  return (
    <div className="final-review-section">
      <div className="section-hero">
        <div className="section-hero-icon">🎯</div>
        <h2 className="section-hero-title">Final Review</h2>
        <p className="section-hero-sub">Ultra-condensed notes for last-minute exam preparation. Focus on these memory triggers.</p>
      </div>

      <div className="memory-triggers">
        <h3 className="memory-title">⚡ Master Memory Triggers</h3>
        <div className="triggers-grid">
          <div className="trigger-item cyan">HTML = Markup (NOT programming) language</div>
          <div className="trigger-item yellow">CSS specificity: 1000 &gt; 100 &gt; 10 &gt; 1</div>
          <div className="trigger-item green">WWW = Tim Berners-Lee + Robert Cailliau (CERN, 1989)</div>
          <div className="trigger-item purple">JS = Brendan Eich (Netscape, 1995)</div>
          <div className="trigger-item cyan">8 browser subsystems, 8 design phases</div>
          <div className="trigger-item yellow">colspan=columns(right), rowspan=rows(down)</div>
          <div className="trigger-item green">rem=root, em=parent (CSS units)</div>
          <div className="trigger-item purple">fixed=viewport, absolute=nearest ancestor</div>
          <div className="trigger-item cyan">Flexbox=1D, Grid=2D</div>
          <div className="trigger-item yellow">AJAX = NOT a language, it's a group of technologies</div>
          <div className="trigger-item green">PHP = PHP: Hypertext Preprocessor (Rasmus Lerdorf)</div>
          <div className="trigger-item purple">radio=one, checkbox=multiple selections</div>
        </div>
      </div>

      <div className="review-units-grid">
        {finalReviewData.map((unit) => (
          <div key={unit.unit} className={`review-unit-card ${unit.color}`}>
            <h3 className="review-unit-title">{unit.unit}</h3>
            <ul className="review-bullets">
              {unit.bullets.map((bullet, i) => (
                <li key={i} className="review-bullet">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="exam-tips-box">
        <h3 className="exam-tips-title">📝 Exam Day Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">1</div>
            <p>Read questions carefully — watch for "NOT" and "EXCEPT" qualifiers</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">2</div>
            <p>Remember HTML tags are LOWERCASE, attributes need QUOTES</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">3</div>
            <p>CSS declarations end with SEMICOLONS, selectors use curly brackets</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">4</div>
            <p>Distinguish semantic elements (strong, em) from visual (b, i)</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">5</div>
            <p>JavaScript is CLIENT-SIDE; PHP/Node.js are SERVER-SIDE</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">6</div>
            <p>The &lt;head&gt; contains metadata; &lt;body&gt; contains visible content</p>
          </div>
        </div>
      </div>
    </div>
  );
}
