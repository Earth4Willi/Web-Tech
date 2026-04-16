const keyQuestionsData = [
  {
    category: "Web Technologies Overview",
    color: "cyan",
    qa: [
      {
        q: "What does HTML stand for and is it a programming language?",
        a: "HTML stands for HyperText Markup Language. It is NOT a programming language — it is a MARKUP language. Markup languages describe how information should be structured and presented, while programming languages contain logic, variables, and algorithms."
      },
      {
        q: "Who invented the World Wide Web and when?",
        a: "The World Wide Web (WWW) was invented by Tim Berners-Lee and Robert Cailliau, two researchers working at CERN (European Nuclear Research Centre) in Geneva, Switzerland in 1989. The WWW project officially started in 1990."
      },
      {
        q: "What are the three mechanisms the Web relies on?",
        a: "1. A uniform naming scheme for locating resources — URLs (Uniform Resource Locators). 2. Protocols for access to named resources — HTTP (HyperText Transfer Protocol). 3. Hypertext for easy navigation among resources — HTML (HyperText Markup Language)."
      },
      {
        q: "What is the difference between the Internet and the World Wide Web?",
        a: "The INTERNET is the global network infrastructure — the physical hardware (cables, routers, servers) and networking protocols. The WORLD WIDE WEB (WWW) is a service that RUNS ON the Internet — it is a network of information resources accessed via browsers using HTTP and HTML. The Web is just one of many services on the Internet (email, FTP are others)."
      },
      {
        q: "What does AJAX stand for and is it a programming language?",
        a: "AJAX stands for Asynchronous JavaScript and XML. It is NOT a programming language — it is a group of related web development technologies (HTML, CSS, JavaScript, XML, XSLT) that work together to create interactive web applications. AJAX allows web pages to send/receive data from servers asynchronously without reloading."
      },
    ]
  },
  {
    category: "Browsers, Servers & Design Process",
    color: "yellow",
    qa: [
      {
        q: "Name and describe all 8 subsystems of the web browser reference architecture.",
        a: "1. User Interface — address bar, navigation buttons, bookmarking (NOT the main page window). 2. Browser Engine — loads URIs, interfaces with rendering engine, enables forward/back/refresh. 3. Rendering Engine — displays HTML/XML, positions elements, handles page layout. 4. Networking — enforces FTP and HTTP, resolves MIME types. 5. JavaScript Interpreter — processes JavaScript embedded in pages. 6. XML Parser — parses XML (most reusable subsystem). 7. Display Backend — drawing primitives, widgets, fonts (OS-tied). 8. Data Persistence — stores bookmarks, cookies, security certificates, cache."
      },
      {
        q: "List and explain the 8 phases of the web design process.",
        a: "1. Project Definition — identify goals, objectives, conduct stakeholder interviews, create project brief. 2. Project Scope — define deliverables, boundaries, timeline, and limitations. 3. Site Architecture — plan content structure, hierarchy, and navigation. 4. Visual Design — aesthetic presentation: colors, typography, imagery, mockups. 5. Site Development — write actual HTML, CSS, JavaScript, and backend code. 6. Site Testing — verify features work, cross-browser testing, validation. 7. Launching — making the website publicly accessible on the internet. 8. Site Maintenance — ongoing updates, bug fixes, and content management."
      },
      {
        q: "What is the difference between a web browser and a web server?",
        a: "A WEB BROWSER is application software (like Chrome, Firefox) used by clients to access, retrieve, and display web content. A WEB SERVER is hardware (computer) or software (like Apache, Nginx) that stores and delivers web content in response to browser requests using HTTP. Browsers REQUEST; servers RESPOND."
      },
    ]
  },
  {
    category: "HTML Fundamentals",
    color: "green",
    qa: [
      {
        q: "Write the complete structure of a valid HTML5 document.",
        a: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Page Title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Visible content goes here -->
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`
      },
      {
        q: "List the 6 rules for writing syntactically correct HTML.",
        a: "1. Documents must be well-formed. 2. All tags must nest properly and not overlap (e.g., <p><b>text</b></p> not <p><b>text</p></b>). 3. Use all lowercase for element names (<p> not <P>). 4. Always use closing tags (<p>text</p>). 5. Empty elements use a closing forward slash (<br /> not <br>). 6. Attribute values must be in quotation marks (<img src='photo.jpg' /> not <img src=photo.jpg />)."
      },
      {
        q: "What is the difference between a container element and an empty element?",
        a: "CONTAINER elements have opening AND closing tags enclosing content: <p>paragraph text</p>, <h1>heading</h1>, <div>content</div>. EMPTY elements have NO content and are self-closing with a forward slash: <br />, <img src='photo.jpg' />, <input type='text' />, <hr />, <meta />, <link />."
      },
    ]
  },
  {
    category: "HTML Tables & Forms",
    color: "purple",
    qa: [
      {
        q: "What is the difference between colspan and rowspan in HTML tables?",
        a: "COLSPAN allows a cell to span multiple COLUMNS (horizontally, to the RIGHT). Syntax: <td colspan='3'>content</td> — cell takes up 3 column spaces. ROWSPAN allows a cell to span multiple ROWS (vertically, DOWNWARD). Syntax: <td rowspan='4'>content</td> — cell takes up 4 row spaces. Memory aid: col=columns (horizontal), row=rows (vertical)."
      },
      {
        q: "List 6 HTML input types and describe each.",
        a: "1. type='text' — single-line text input. 2. type='password' — masked text field for passwords. 3. type='radio' — radio button (only ONE selection from group allowed). 4. type='checkbox' — checkbox (MULTIPLE selections allowed). 5. type='submit' — button that submits the form. 6. type='file' — text box with browse button for file uploads. Additional: type='hidden' (invisible data passing), type='reset' (clears form), type='color' (color picker), type='email' (email with validation)."
      },
      {
        q: "What is the role of server-side scripts in HTML forms?",
        a: "HTML forms collect user input data. Server-side scripts (PHP, Node.js, Python, etc.) receive that data when the form is submitted, process it according to the business logic (validate, save to database, send email, etc.), and send a response back to the user's browser. Client-side scripts (JavaScript) can also validate data BEFORE sending to reduce unnecessary server requests."
      },
    ]
  },
  {
    category: "CSS Fundamentals",
    color: "cyan",
    qa: [
      {
        q: "Explain the three types of CSS style sheets and when each is best used.",
        a: "1. EXTERNAL: Styles in a separate .css file linked with <link rel='stylesheet' href='style.css'>. BEST when styling many pages — change one file to update entire site. 2. INTERNAL (Embedded): Styles in <style> tags in the <head> section. BEST when one page has unique styles. 3. INLINE: style='' attribute directly on element. BEST for single unique occurrences. Priority: Inline (highest) > Internal > External > Browser default."
      },
      {
        q: "Explain CSS specificity and its hierarchy.",
        a: "CSS Specificity determines which rule applies when multiple CSS rules target the same element. Hierarchy (points): Inline style = 1000 (STRONGEST), ID selector (#) = 100, Class selector (.) = 10, Element/tag selector = 1 (WEAKEST). Higher total score wins. When scores are equal, the LAST rule in source order wins (cascade). Example: For <p id='main' class='text'> with p{blue} (.class{red}, #main{green} — #main wins with 100 points."
      },
      {
        q: "What is the CSS universal selector and what is it primarily used for?",
        a: "The universal selector is indicated with an asterisk (*). It targets EVERY SINGLE element on the web page simultaneously. Its most common use is to 'reset' or 'zero out' all margins and padding: * { margin: 0; padding: 0; } This removes browser default spacing, giving developers a clean baseline to work from."
      },
    ]
  },
  {
    category: "CSS Units & Positioning",
    color: "yellow",
    qa: [
      {
        q: "Explain the 5 CSS position values.",
        a: "1. static — DEFAULT, follows normal document flow, top/left/right/bottom have no effect. 2. relative — positioned relative to its NORMAL position; top/left etc. offset from there; still occupies original space. 3. fixed — positioned relative to the VIEWPORT; stays in place during scrolling; no gap left in document. 4. absolute — positioned relative to nearest non-static ANCESTOR; if none, uses document body; removed from normal flow. 5. sticky — toggles between relative and fixed; acts relative until a scroll threshold, then sticks (requires top/right/bottom/left)."
      },
      {
        q: "What is the difference between em and rem CSS units?",
        a: "em = relative to the font-size of the PARENT ELEMENT. If the parent has font-size: 16px, 1em = 16px. This can compound in nested elements (2em inside 2em = 4x the root size). rem = relative to the font-size of the ROOT (<html>) ELEMENT. Regardless of nesting depth, 1rem always equals the root font-size. rem is more predictable and recommended for responsive design."
      },
    ]
  },
  {
    category: "JavaScript",
    color: "green",
    qa: [
      {
        q: "What is the DOM and how does JavaScript interact with it?",
        a: "DOM (Document Object Model) is a programming interface that represents HTML documents as a tree structure of objects (nodes). Every HTML element becomes a node in this tree. JavaScript interacts with the DOM using built-in methods: document.getElementById('id') selects by ID, document.querySelector('.class') selects by CSS selector, document.querySelectorAll('p') selects all matches. Once selected, JS can: modify content (innerHTML, textContent), change styles (element.style), add/remove classes (classList), create/delete elements, and attach event handlers."
      },
      {
        q: "Explain how try...catch blocks work in JavaScript.",
        a: "try...catch provides structured error handling. The try block contains code that MIGHT throw an error. If an error occurs, execution immediately jumps to the catch block instead of crashing. The catch block receives the error object and handles it gracefully. An optional finally block always executes whether or not an error occurred — useful for cleanup. Example: try { const data = JSON.parse(badJSON); } catch(error) { console.error('Parse failed:', error.message); } finally { console.log('Done'); }"
      },
      {
        q: "What is asynchronous JavaScript and why is it important?",
        a: "JavaScript runs on a single thread, meaning code executes one operation at a time. Without async, time-consuming operations (like API calls, file reading) would FREEZE the browser until they complete. Asynchronous JavaScript allows these operations to run in the background without blocking the main thread. Evolution: Callbacks (basic but messy) → Promises (cleaner, chainable with .then()/.catch()) → async/await (most readable, looks synchronous). The Fetch API uses Promises to make HTTP requests: fetch(url).then(r => r.json()).then(data => console.log(data))."
      },
    ]
  },
];

export default function KeyQuestions() {
  return (
    <div className="key-questions-section">
      <div className="section-hero">
        <div className="section-hero-icon">❓</div>
        <h2 className="section-hero-title">Key Questions</h2>
        <p className="section-hero-sub">Highly probable exam questions with detailed, structured answers. Study these patterns carefully.</p>
      </div>

      {keyQuestionsData.map((category) => (
        <div key={category.category} className="kq-category">
          <h3 className={`kq-category-title ${category.color}`}>{category.category}</h3>
          <div className="kq-list">
            {category.qa.map((item, i) => (
              <div key={i} className="kq-item">
                <div className="kq-question">
                  <span className="kq-q-icon">Q</span>
                  {item.q}
                </div>
                <div className="kq-answer">
                  <span className="kq-a-icon">A</span>
                  <pre className="kq-answer-text">{item.a}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
