export interface HighlightBox {
  type: 'info' | 'warning' | 'tip' | 'success' | 'extra';
  title: string;
  content: string;
}

export interface Definition {
  term: string;
  definition: string;
}

export interface KeyConcept {
  title: string;
  points: string[];
}

export interface ComparisonTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface UnitContent {
  id: number;
  title: string;
  description: string;
  weeksCovered: string;
  definitions: Definition[];
  keyConcepts: KeyConcept[];
  highlights: HighlightBox[];
  tables: ComparisonTable[];
  examQuestions: string[];
  commonMistakes: string[];
  quickRevision: string[];
}

export const studyContent: UnitContent[] = [
  {
    id: 1,
    title: "Overview of Web Technologies",
    description: "Introduction to web technologies, the World Wide Web, Internet concepts, domain names, and popular web development tools.",
    weeksCovered: "Week 1",
    definitions: [
      { term: "Web Technologies", definition: "A generic term for a collection of tools used to plan, design, develop, and deploy state-of-the-art websites and web applications." },
      { term: "HTML", definition: "HyperText Markup Language — a markup language that makes it possible to present information on the Internet. It is NOT a programming language." },
      { term: "CSS", definition: "Cascading Style Sheets — a style sheets language introduced by W3C used to define the presentational semantics of structured documents." },
      { term: "JavaScript (JS)", definition: "An object-based client-side scripting language that adds interactivity and programmability to web pages. Created by Brendan Eich at Netscape in 1995." },
      { term: "SGML", definition: "Standard Generalized Markup Language — an ISO standard system for specifying document structure. HTML and XML are derived from SGML." },
      { term: "XML", definition: "Extensible Markup Language — a universal format for structured documents and data. Unlike HTML, it has no fixed predefined set of tags." },
      { term: "AJAX", definition: "Asynchronous JavaScript and XML — NOT a programming language, but a group of web technologies (HTML, CSS, JS, XML) that work together for interactive web apps." },
      { term: "PHP", definition: "PHP: Hypertext Preprocessor — a cross-platform, open-source server-side scripting language originally created by Rasmus Lerdorf in 1994." },
      { term: "ECMAScript", definition: "The standardized specification of JavaScript, maintained by Ecma International since June 1997." },
      { term: "WWW (World Wide Web)", definition: "A network of information resources that uses URLs, HTTP protocols, and Hypertext to make resources readily available on the Internet." },
    ],
    keyConcepts: [
      {
        title: "History of the Web",
        points: [
          "WWW was invented by Tim Berners-Lee and Robert Cailliau at CERN, Geneva, Switzerland in 1989",
          "World Wide Web project started in 1990",
          "Tim Berners-Lee and others created W3C (World Wide Web Consortium) as an industry consortium",
          "W3C aims to build consensus around Web technologies",
          "JavaScript was created by Brendan Eich at Netscape, introduced December 1995 as 'LiveScript'",
          "Standardized as ECMAScript by Ecma International in June 1997",
        ]
      },
      {
        title: "The Three Mechanisms of the Web",
        points: [
          "1. A uniform naming scheme for locating resources (URLs — Uniform Resource Locators)",
          "2. Protocols for access to named resources (HTTP — HyperText Transfer Protocol)",
          "3. Hypertext for easy navigation among resources (HTML — HyperText Markup Language)",
        ]
      },
      {
        title: "Popular Web Technologies",
        points: [
          "Frontend: HTML, CSS, JavaScript, Bootstrap, ReactJS, Angular",
          "Backend: PHP, Node.js, Laravel",
          "Databases: MongoDB",
          "CMS: WordPress",
          "JavaScript was initially named LiveScript; renamed due to Netscape/Sun marketing deal",
          "PHP stands for 'PHP: Hypertext Preprocessor' (recursive acronym)",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: 'Key Distinction: Internet vs Web',
        content: 'The Internet is the global network infrastructure (hardware + software). The Web (WWW) is a service that runs ON the Internet — a collection of information resources accessed via browsers using HTTP and HTML.'
      },
      {
        type: 'warning',
        title: 'Common Exam Trap',
        content: 'HTML is a MARKUP language, NOT a programming language. AJAX is NOT a programming language — it is a group of technologies. PHP stands for "PHP: Hypertext Preprocessor" (recursive acronym, not "Personal Home Page").'
      },
      {
        type: 'tip',
        title: 'Remember the Creators',
        content: 'WWW → Tim Berners-Lee & Robert Cailliau (CERN, 1989). JavaScript → Brendan Eich (Netscape, 1995). PHP → Rasmus Lerdorf (1994). SGML → IBM project (1974), became ISO standard 1986.'
      },
      {
        type: 'success',
        title: 'Technology Categories',
        content: 'Client-side (runs in browser): HTML, CSS, JavaScript, ReactJS, Angular, Bootstrap. Server-side (runs on server): PHP, Node.js, Laravel. Database: MongoDB. CMS: WordPress.'
      },
    ],
    tables: [
      {
        caption: "Popular Web Technologies and Their Roles",
        headers: ["Technology", "Type", "Primary Use"],
        rows: [
          ["HTML", "Markup Language", "Structure/Content of web pages"],
          ["CSS", "Style Language", "Presentation/Layout of web pages"],
          ["JavaScript", "Scripting Language", "Interactivity/Dynamic behavior"],
          ["PHP", "Server-side Scripting", "Backend/Dynamic page generation"],
          ["ReactJS", "JS Library", "Building User Interfaces"],
          ["Angular", "JS Framework", "Single-Page Applications"],
          ["Bootstrap", "CSS Framework", "Responsive design"],
          ["WordPress", "CMS", "Content management"],
          ["MongoDB", "NoSQL Database", "Data storage"],
          ["Node.js", "JS Runtime", "Server-side JavaScript"],
          ["Laravel", "PHP Framework", "Backend web applications"],
        ]
      }
    ],
    examQuestions: [
      "What does HTML stand for and is it a programming language?",
      "Who invented the World Wide Web and where?",
      "What are the three mechanisms the web relies on?",
      "What does AJAX stand for and is it a programming language?",
      "Who created JavaScript and what was its original name?",
      "What does PHP stand for?",
      "What is the difference between the Internet and the Web?",
      "Name 5 popular web technologies.",
      "What organization standardized JavaScript and under what name?",
      "What is SGML and what languages are derived from it?",
    ],
    commonMistakes: [
      "Saying HTML is a programming language — it is a MARKUP language",
      "Saying AJAX is a programming language — it is a group of technologies",
      "Confusing the Internet with the World Wide Web",
      "Getting PHP's full name wrong — it is 'PHP: Hypertext Preprocessor' not 'Personal Home Page'",
      "Forgetting that JavaScript was initially named 'LiveScript'",
      "Mixing up client-side and server-side technologies",
    ],
    quickRevision: [
      "HTML = HyperText Markup Language (markup, NOT programming language)",
      "CSS = Cascading Style Sheets",
      "JS = JavaScript, created by Brendan Eich at Netscape (1995), originally 'LiveScript'",
      "WWW invented by Tim Berners-Lee & Robert Cailliau at CERN (1989)",
      "Web uses: URLs + HTTP + HTML (three mechanisms)",
      "PHP = PHP: Hypertext Preprocessor (Rasmus Lerdorf, 1994)",
      "AJAX = group of technologies, NOT a language",
      "ECMAScript = standardized JavaScript (Ecma International, 1997)",
    ],
  },
  {
    id: 2,
    title: "Web Design Process & Browser/Server Architecture",
    description: "Understanding web browsers, web servers, the browser reference architecture, domain names, hosting, and the 8-phase web design process.",
    weeksCovered: "Week 2",
    definitions: [
      { term: "Web Browser", definition: "Application software for accessing, traversing, retrieving, and rendering information resources on the World Wide Web." },
      { term: "Web Server", definition: "Hardware (computer) or software (application) that helps deliver web content accessible through the Internet. Primary function: deliver web pages via HTTP." },
      { term: "Rendering Engine", definition: "Browser subsystem responsible for visual representation of URI inputs — displays HTML, XML, images; handles page positioning and layout." },
      { term: "Browser Engine", definition: "Interface between User Interface and Rendering Engine. Responsible for loading URIs and supporting browsing actions (forward, back, refresh)." },
      { term: "Domain Name", definition: "A human-readable address used instead of IP addresses to locate web resources (e.g., www.example.com)." },
      { term: "Web Hosting", definition: "The service that makes websites accessible on the internet by storing website files on a web server." },
      { term: "HTTP", definition: "HyperText Transfer Protocol — the primary communication protocol used by the World Wide Web for data transfer." },
      { term: "MIME Type", definition: "Multipurpose Internet Mail Extensions type — identifies the format of a file (e.g., text/html, image/jpeg)." },
      { term: "Project Brief", definition: "Document created during Project Definition phase containing: project summary, goals, target audiences, and key outcomes." },
    ],
    keyConcepts: [
      {
        title: "Web Browser Reference Architecture (8 Subsystems)",
        points: [
          "1. User Interface — address bar, buttons, menus (everything EXCEPT the main page display window)",
          "2. Browser Engine — interface to rendering engine; loads URIs, supports back/forward/refresh",
          "3. Rendering Engine — visual representation; displays HTML, XML, images; handles layout",
          "4. Networking — enforces FTP and HTTP; resolves MIME types",
          "5. JavaScript Interpreter — processes JavaScript embedded in web pages",
          "6. XML Parser — one of the most reusable subsystems; processes XML",
          "7. Display Backend — drawing primitives, windowing, UI widgets, fonts; tied to OS",
          "8. Data Persistence — stores bookmarks, cookies, security certificates, cache",
        ]
      },
      {
        title: "Major Web Browsers and Servers",
        points: [
          "Browsers: Chrome, Firefox, MS Edge, Opera, Safari",
          "Servers: Apache, Nginx (pronounced 'engine-x'), Apache Tomcat, IIS, Jigsaw, Lighttpd (pronounced 'lighty'), Klone, Zeus",
          "Web server primary function: deliver web pages on request using HTTP",
        ]
      },
      {
        title: "8 Phases of the Web Design Process",
        points: [
          "1. Project Definition — identify purpose, goals, objectives, stakeholder interviews",
          "2. Project Scope — define deliverables, boundaries, limitations, timeline",
          "3. Site Architecture — structure, hierarchy, navigation, naming conventions",
          "4. Visual Design — aesthetics, colors, typography, imagery, mockups",
          "5. Site Development — actual coding (HTML, CSS, JavaScript, backend)",
          "6. Site Testing — verify features work, cross-browser testing, validation",
          "7. Launching — making the website publicly accessible",
          "8. Site Maintenance — ongoing updates, fixes, content additions",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: 'Browser Architecture Memory Aid',
        content: 'UI → Browser Engine → Rendering Engine → {Networking, JS Interpreter, XML Parser} → Display Backend | Data Persistence runs in parallel. Think: "User Browses Rendered Net-JS-XML Display Data"'
      },
      {
        type: 'warning',
        title: 'Exam Trap: Apache vs Browsers',
        content: 'Apache is a web SERVER, NOT a browser. Firefox, Chrome, Safari, MS Edge, and Opera are browsers. Students often confuse these. Nginx is pronounced "engine-x" and Lighttpd is pronounced "lighty".'
      },
      {
        type: 'tip',
        title: 'Web Design Process Order',
        content: 'Remember the 8 phases: Definition → Scope → Architecture → Design → Development → Testing → Launch → Maintenance. "DSADDTLM" — Designers Sometimes Apply Detailed Delivery Through Logical Methods'
      },
      {
        type: 'extra',
        title: 'Domain Names and URLs',
        content: 'IP addresses are hard to remember, so domain names are used. www.example.com: "www" is a subdomain of "example.com", which is a subdomain of the "com" domain. URLs uniquely identify resources using a uniform naming scheme.'
      }
    ],
    tables: [
      {
        caption: "8 Phases of the Web Design Process",
        headers: ["Phase", "Name", "Key Activities"],
        rows: [
          ["1", "Project Definition", "Stakeholder interviews, identify goals, create project brief"],
          ["2", "Project Scope", "Define deliverables, boundaries, timeline, limitations"],
          ["3", "Site Architecture", "Information structure, navigation, content hierarchy"],
          ["4", "Visual Design", "Colors, typography, mockups, style guidelines"],
          ["5", "Site Development", "HTML, CSS, JavaScript coding, backend development"],
          ["6", "Site Testing", "Bug testing, cross-browser testing, validation"],
          ["7", "Launching", "Going live, DNS configuration, deployment"],
          ["8", "Site Maintenance", "Updates, bug fixes, content management"],
        ]
      },
      {
        caption: "Browser Reference Architecture Subsystems",
        headers: ["Subsystem", "Primary Function"],
        rows: [
          ["User Interface", "Address bar, navigation buttons, menus (NOT the page window)"],
          ["Browser Engine", "Loads URIs, provides interface to rendering engine"],
          ["Rendering Engine", "Displays HTML/XML, positions elements, handles layout"],
          ["Networking", "FTP/HTTP enforcement, MIME type resolution"],
          ["JavaScript Interpreter", "Processes embedded JavaScript code"],
          ["XML Parser", "Parses XML documents (most reusable subsystem)"],
          ["Display Backend", "Drawing primitives, widgets, fonts (OS-tied)"],
          ["Data Persistence", "Bookmarks, cookies, certificates, cache"],
        ]
      }
    ],
    examQuestions: [
      "List and describe the 8 phases of the web design process.",
      "Name and describe the 8 subsystems of the web browser reference architecture.",
      "What is the difference between a web browser and a web server?",
      "Name 5 major web browsers and 5 major web servers.",
      "What is the primary function of a web server?",
      "What does the Rendering Engine subsystem do?",
      "Why are domain names used instead of IP addresses?",
      "What is the role of the Data Persistence subsystem?",
      "What does the Networking subsystem handle in a browser?",
      "What information is contained in a Project Brief?",
    ],
    commonMistakes: [
      "Confusing web browsers with web servers (Apache is a server, NOT a browser)",
      "Getting the number of web design phases wrong — there are EIGHT (8)",
      "Forgetting the User Interface excludes the main page display window",
      "Thinking the Rendering Engine handles JavaScript (it handles HTML/XML layout)",
      "Confusing the order of the web design phases",
    ],
    quickRevision: [
      "Browser = application for accessing/viewing web resources",
      "Server = delivers web pages via HTTP",
      "8 browser subsystems: UI, Browser Engine, Rendering, Networking, JS Interpreter, XML Parser, Display Backend, Data Persistence",
      "8 design phases: Definition → Scope → Architecture → Design → Development → Testing → Launch → Maintenance",
      "Nginx = 'engine-x', Lighttpd = 'lighty'",
      "Domain names replace hard-to-remember IP addresses",
    ],
  },
  {
    id: 3,
    title: "HTML Fundamentals — Structure & Elements",
    description: "HTML elements, tags, attributes, document structure, color coding, HTML entities, and rules for writing correct HTML.",
    weeksCovered: "Weeks 3-4",
    definitions: [
      { term: "HTML Element", definition: "Consists of both the content AND its markup (start tag + content + end tag). e.g., <p>Paragraph text</p>" },
      { term: "HTML Tag", definition: "The element name in angle brackets: <tagname>. A start tag opens an element; an end tag (</tagname>) closes it." },
      { term: "HTML Attribute", definition: "Instructions that clarify or modify an element. Written in the opening tag as attribute-name='value'." },
      { term: "Container Element", definition: "An element that HAS content between its start and end tags. e.g., <p>content</p>, <h1>heading</h1>" },
      { term: "Empty Element", definition: "An element with NO content. Self-closing with a forward slash. e.g., <br />, <img src='photo.jpg' />, <input type='text' />" },
      { term: "DOCTYPE", definition: "Document Type Declaration (<!DOCTYPE html>) that specifies the HTML version rules so browsers can interpret the code correctly." },
      { term: "DTD (Document Type Definition)", definition: "Set of rules that govern how a document can be marked up. The authoritative source is W3C." },
      { term: "HTML Comment", definition: "Text not displayed by the browser: <!-- comment text here -->. Used for documentation and reminders." },
      { term: "Root Element", definition: "The <html> element that surrounds and contains the entire HTML document. All other elements are nested inside it." },
    ],
    keyConcepts: [
      {
        title: "Basic HTML5 Document Structure",
        points: [
          "<!DOCTYPE html> — Document type declaration (must be first)",
          "<html lang='en'> — Root element, specifies page language",
          "<head> — Contains metadata (not visible): title, meta, links, scripts",
          "<title> — Page title shown in browser tab",
          "<meta charset='UTF-8'> — Character encoding",
          "<meta name='viewport' content='width=device-width, initial-scale=1.0'> — Responsive scaling",
          "<body> — All visible page content",
        ]
      },
      {
        title: "Six Rules for Syntactically Correct HTML",
        points: [
          "1. Documents must be well-formed",
          "2. All tags must nest properly and NOT overlap",
          "3. Use all LOWERCASE for element names",
          "4. Always use closing tags",
          "5. Empty elements use a closing forward slash: <br />",
          "6. Attribute values must be in quotation marks: src='photo.jpg'",
        ]
      },
      {
        title: "Color Coding in HTML/CSS",
        points: [
          "Colors can be specified using: color names, HEX, RGB, HSL, RGBA, HSLA",
          "HEX: #RRGGBB format (e.g., #FFFFFF = white, #000000 = black, #FF0000 = red)",
          "RGB: rgb(255, 0, 0) = red",
          "HSL: Hue (0-360°), Saturation (%), Lightness (%)",
          "RGBA/HSLA: Same as RGB/HSL with alpha (transparency) channel",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: 'Key Hex Color Codes to Remember',
        content: 'White=#FFFFFF | Black=#000000 | Red=#FF0000 | Green=#00FF00 | Blue=#0000FF | Magenta=#FF00FF | Cyan=#00FFFF | Yellow=#FFFF00'
      },
      {
        type: 'warning',
        title: 'Element vs Tag vs Attribute',
        content: 'TAG = the markup in angle brackets (<p>). ELEMENT = tag + content + closing tag (<p>text</p>). ATTRIBUTE = property within the opening tag (src="image.jpg"). These are different things!'
      },
      {
        type: 'tip',
        title: 'Container vs Empty Elements',
        content: 'CONTAINER elements enclose content: <p>, <h1>, <div>, <table>, <body>, <html>. EMPTY elements are self-closing (no content): <br />, <img />, <input />, <hr />, <meta />, <link />'
      },
      {
        type: 'success',
        title: 'The <head> vs <body>',
        content: '<head> = metadata (title, meta, CSS links, scripts — NOT visible). <body> = all visible page content (text, images, forms, tables). Students must know which elements go where.'
      }
    ],
    tables: [
      {
        caption: "Common Color Hex Codes",
        headers: ["Color", "HEX Code", "RGB"],
        rows: [
          ["White", "#FFFFFF", "rgb(255,255,255)"],
          ["Black", "#000000", "rgb(0,0,0)"],
          ["Red", "#FF0000", "rgb(255,0,0)"],
          ["Green", "#00FF00", "rgb(0,255,0)"],
          ["Blue", "#0000FF", "rgb(0,0,255)"],
          ["Cyan", "#00FFFF", "rgb(0,255,255)"],
          ["Yellow", "#FFFF00", "rgb(255,255,0)"],
          ["Magenta", "#FF00FF", "rgb(255,0,255)"],
        ]
      }
    ],
    examQuestions: [
      "What is the difference between an HTML tag, element, and attribute?",
      "Write the complete structure of a valid HTML5 document.",
      "List the 6 rules for writing syntactically correct HTML.",
      "What is the difference between a container element and an empty element?",
      "What does the DOCTYPE declaration do?",
      "What is the purpose of the <meta viewport> tag?",
      "What is the difference between the <head> and <body> sections?",
      "How are HTML comments written?",
      "Give the HEX codes for white, black, red, green, and blue.",
      "What does DTD stand for and what does it define?",
    ],
    commonMistakes: [
      "Writing element names in uppercase (<P> instead of <p>)",
      "Not closing tags (forgetting </p>, </div>, etc.)",
      "Confusing element with tag — element includes BOTH tags AND content",
      "Not quoting attribute values (src=photo.jpg instead of src='photo.jpg')",
      "Putting visible content in the <head> section",
      "Forgetting to add the DOCTYPE declaration",
    ],
    quickRevision: [
      "DOCTYPE → specifies HTML rules for browser",
      "<html> → root element containing everything",
      "<head> → metadata (not visible): title, meta, links",
      "<body> → all visible content",
      "Container: has content <p>text</p>; Empty: self-closing <br />",
      "6 rules: well-formed, nested properly, lowercase, close tags, empty self-close, values in quotes",
      "Colors: name/#HEX/rgb()/hsl()/rgba()/hsla()",
    ],
  },
  {
    id: 4,
    title: "HTML Formatting, Lists, Links & Multimedia",
    description: "Text formatting tags, creating ordered/unordered/definition lists, hyperlinks, multimedia elements, and file paths.",
    weeksCovered: "Weeks 4-5",
    definitions: [
      { term: "Ordered List (<ol>)", definition: "A list where items are numbered sequentially. Uses <li> for each item. The type attribute controls numbering (1, A, a, I, i)." },
      { term: "Unordered List (<ul>)", definition: "A bulleted list where items have no necessary sequence. Uses <li> for each item. Bullet style controlled by list-style-type." },
      { term: "Definition List (<dl>)", definition: "A list for presenting terms and their definitions, like a glossary. Uses <dt> for terms and <dd> for descriptions." },
      { term: "Hyperlink (<a>)", definition: "Creates a clickable link using the href attribute. Can link to other pages, sections, emails, or files." },
      { term: "File Path", definition: "Describes the location of a resource in the website's folder structure. Can be absolute (from root) or relative (from current file)." },
      { term: "Inline Element", definition: "An element that flows with text content without starting on a new line (e.g., <span>, <em>, <strong>, <a>, <img>)." },
      { term: "Block Element", definition: "An element that takes up the full width available and starts on a new line (e.g., <div>, <p>, <h1>-<h6>, <ul>, <ol>)." },
      { term: "HTML Character Entity", definition: "A code used to display special/reserved symbols in HTML. Format: &name; (named) or &#number; (numeric). Always ends with a semicolon. Example: &copy; displays ©." },
      { term: "Named Entity", definition: "An HTML entity using a descriptive keyword name. Example: &copy; for ©, &euro; for €, &reg; for ®. Easier to remember than numeric entities." },
      { term: "Numeric Entity", definition: "An HTML entity using a character's Unicode/ASCII number. Example: &#169; for © (same as &copy;). Works when no named entity exists." },
    ],
    keyConcepts: [
      {
        title: "HTML Text Formatting Tags",
        points: [
          "<b> — Bold text (visual only)",
          "<strong> — Important text (semantic bold)",
          "<i> — Italic text (visual only)",
          "<em> — Emphasized text (semantic italic)",
          "<small> — Smaller text",
          "<sub> — Subscripted text (below baseline): H₂O",
          "<sup> — Superscripted text (above baseline): x²",
          "<ins> — Inserted text (underline)",
          "<del> — Deleted text (strikethrough)",
          "<mark> — Marked/highlighted text",
          "<pre> — Preformatted text (preserves whitespace)",
        ]
      },
      {
        title: "List Types and Usage",
        points: [
          "Ordered (<ol>): numbered, sequential items. type='1'(default), type='A', type='a', type='I', type='i'",
          "Unordered (<ul>): bulleted, non-sequential items. list-style-type: disc|circle|square|none",
          "Definition (<dl>): term-definition pairs like dictionaries. Uses <dt> and <dd>",
          "Lists can be NESTED — one type inside another",
          "list-style-type:none removes bullets entirely",
        ]
      },
      {
        title: "HTML Quotation and Citation Tags",
        points: [
          "<abbr title='full text'> — Abbreviation or acronym",
          "<blockquote> — Section quoted from another source",
          "<q> — Short inline quotation",
          "<cite> — Title of a work (displayed in italic)",
          "<bdo dir='rtl'> — Bi-directional text override",
          "<address> — Contact information",
        ]
      },
      {
        title: "HTML Special Symbol / Entity Codes",
        points: [
          "HTML character entities let you display special symbols that cannot be typed normally in HTML",
          "Format: &name; (named entity) or &#number; (numeric entity)",
          "&copy; → © Copyright symbol",
          "&reg; → ® Registered trademark",
          "&trade; → ™ Trademark symbol",
          "&pound; → £ British Pound",
          "&euro; → € Euro sign",
          "&yen; → ¥ Japanese Yen",
          "&cent; → ¢ Cent sign",
          "&curren; → ¤ General currency sign",
          "&deg; → ° Degree symbol",
          "&plusmn; → ± Plus or Minus",
          "&sect; → § Section sign",
          "&para; → ¶ Paragraph sign",
          "&iquest; → ¿ Inverted question mark",
          "&iexcl; → ¡ Inverted exclamation mark",
          "&laquo; → « Left angle quotation mark",
          "&raquo; → » Right angle quotation mark",
          "&sup1; → ¹ Superscript 1",
          "&sup2; → ² Superscript 2",
          "&sup3; → ³ Superscript 3",
          "&dagger; → † Dagger",
          "&Dagger; → ‡ Double dagger",
          "&permil; → ‰ Per mille (per thousand) sign",
          "&spades; → ♠ Spades (card suit)",
          "&clubs; → ♣ Clubs (card suit)",
          "&hearts; → ♥ Hearts (card suit)",
          "&diams; → ♦ Diamonds (card suit)",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: '<b> vs <strong> | <i> vs <em>',
        content: '<b> = bold (visual only). <strong> = important (semantic meaning). <i> = italic (visual). <em> = emphasized (semantic). Browsers display <strong> as <b> and <em> as <i>, but the MEANING is different. Use semantic versions for better accessibility.'
      },
      {
        type: 'tip',
        title: 'Ordered List Type Attribute',
        content: 'type="1" → 1. 2. 3. (default) | type="A" → A. B. C. (uppercase) | type="a" → a. b. c. (lowercase) | type="I" → I. II. III. (uppercase Roman) | type="i" → i. ii. iii. (lowercase Roman)'
      },
      {
        type: 'warning',
        title: 'File Path Syntax',
        content: 'Same folder: "photo.jpg" | Parent folder: "../photo.jpg" | Child folder: "images/photo.jpg" | Absolute from root: "/images/photo.jpg" | External: "https://www.example.com/photo.jpg"'
      },
      {
        type: 'success',
        title: 'Definition List Tags',
        content: '<dl> = definition list container | <dt> = definition TERM (the word/phrase) | <dd> = definition DESCRIPTION (the meaning). Like a dictionary entry: <dl><dt>HTML</dt><dd>HyperText Markup Language</dd></dl>'
      },
      {
        type: 'info',
        title: 'HTML Entity Code Format',
        content: 'All HTML entity codes start with & (ampersand) and end with ; (semicolon). Named: &copy; &reg; &trade; | Numeric: &#169; &#174; &#8482; — both produce the same symbol. The semicolon at the end is MANDATORY.'
      },
      {
        type: 'warning',
        title: 'Most Exam-Tested Symbol Codes',
        content: '© Copyright = &copy; | ® Registered = &reg; | ™ Trademark = &trade; | £ Pound = &pound; | € Euro = &euro; | ° Degree = &deg; | ± Plus/Minus = &plusmn; | § Section = &sect; | ¶ Paragraph = &para;'
      }
    ],
    tables: [
      {
        caption: "Ordered List Type Attributes",
        headers: ["type value", "style", "Description", "Example"],
        rows: [
          ["1", "decimal", "Arabic numerals (default)", "1. 2. 3. 4."],
          ["A", "upper-alpha", "Uppercase letters", "A. B. C. D."],
          ["a", "lower-alpha", "Lowercase letters", "a. b. c. d."],
          ["I", "upper-roman", "Uppercase Roman numerals", "I. II. III. IV."],
          ["i", "lower-roman", "Lowercase Roman numerals", "i. ii. iii. iv."],
        ]
      },
      {
        caption: "HTML Text Formatting Tags Summary",
        headers: ["Tag", "Display", "Meaning"],
        rows: [
          ["<b>", "Bold", "Visual bold only"],
          ["<strong>", "Bold", "Semantically important"],
          ["<i>", "Italic", "Visual italic only"],
          ["<em>", "Italic", "Semantically emphasized"],
          ["<sub>", "Below baseline", "Subscript (H₂O)"],
          ["<sup>", "Above baseline", "Superscript (x²)"],
          ["<del>", "Strikethrough", "Deleted text"],
          ["<ins>", "Underlined", "Inserted text"],
          ["<mark>", "Highlighted", "Marked/important"],
          ["<small>", "Smaller text", "Fine print"],
        ]
      },
      {
        caption: "HTML Symbol / Character Entity Codes (Type HTML to Insert Symbol)",
        headers: ["Symbol", "HTML Code", "Symbol", "HTML Code"],
        rows: [
          ["© Copyright", "&copy;", "® Registered", "&reg;"],
          ["™ Trademark", "&trade;", "¡ Inv. Exclamation", "&iexcl;"],
          ["¿ Inv. Question", "&iquest;", "¢ Cent", "&cent;"],
          ["£ Pound", "&pound;", "¥ Yen", "&yen;"],
          ["€ Euro", "&euro;", "¤ Gen. Currency", "&curren;"],
          ["§ Section", "&sect;", "¶ Paragraph", "&para;"],
          ["° Degree", "&deg;", "♠ Spades", "&spades;"],
          ["♣ Clubs", "&clubs;", "♥ Hearts", "&hearts;"],
          ["♦ Diamonds", "&diams;", "‰ Per Mille", "&permil;"],
          ["± Plus or Minus", "&plusmn;", "† Dagger", "&dagger;"],
          ["‡ Double Dagger", "&Dagger;", "¹ Superscript1", "&sup1;"],
          ["² Superscript2", "&sup2;", "³ Superscript3", "&sup3;"],
          ["« Angle Quote L", "&laquo;", "» Angle Quote R", "&raquo;"],
        ]
      }
    ],
    examQuestions: [
      "What is the difference between <b>/<i> and <strong>/<em>?",
      "Write HTML code for an ordered list with uppercase Roman numerals.",
      "What is a definition list and what tags does it use?",
      "List 4 HTML text formatting tags and describe each.",
      "What is the difference between an absolute and relative file path?",
      "How do you create a nested list in HTML?",
      "What does the <bdo> element do?",
      "What is the difference between block-level and inline elements?",
      "What does the target='_blank' attribute do in a hyperlink?",
      "Write HTML to display both subscript and superscript text.",
      "What HTML code would you use to display the © copyright symbol?",
      "Write the HTML entity code for: ®, ™, £, €, °, ±",
      "What is an HTML character entity? What is the format?",
      "What symbol does &deg; produce? What about &plusmn;?",
      "What is the difference between a named entity (&copy;) and a numeric entity (&#169;)?",
    ],
    commonMistakes: [
      "Using <b> when semantic meaning is needed — should use <strong>",
      "Forgetting that nested lists go INSIDE the parent <li> element",
      "Confusing <dt> and <dd> — dt is the TERM, dd is the DEFINITION",
      "Using type='A' for lowercase letters (should be type='a')",
      "Forgetting the '../' notation for navigating to parent folders",
      "Forgetting the semicolon at the end of HTML entity codes (&copy; not &copy)",
      "Confusing &reg; (®) and &trade; (™) — &reg; is the circle-R, &trade; is TM",
    ],
    quickRevision: [
      "3 list types: Ordered (<ol>), Unordered (<ul>), Definition (<dl>)",
      "Definition list: <dl><dt>Term</dt><dd>Definition</dd></dl>",
      "Ordered types: 1(default), A, a, I, i",
      "Unordered styles: disc(default), circle, square, none",
      "<strong> = important (bold), <em> = emphasized (italic) — semantic",
      "<b> = bold, <i> = italic — visual only",
      "File paths: relative (./), parent (../), root (/), external (http://)",
      "HTML entities: &copy;=©  &reg;=®  &trade;=™  &pound;=£  &euro;=€  &deg;=°",
      "HTML entities: &plusmn;=±  &sect;=§  &para;=¶  &yen;=¥  &cent;=¢",
      "HTML entities: &spades;=♠  &clubs;=♣  &hearts;=♥  &diams;=♦",
      "Entity format: &name; OR &#number; — semicolon is MANDATORY",
    ],
  },
  {
    id: 5,
    title: "HTML Tables & Forms",
    description: "Creating tables with colspan/rowspan, organizing table content, HTML forms, input types, and server-side scripting fundamentals.",
    weeksCovered: "Week 5",
    definitions: [
      { term: "<table>", definition: "The container element that establishes a table. Contains all table elements." },
      { term: "<tr> (Table Row)", definition: "Defines a row in a table. Contains <td> or <th> cells." },
      { term: "<td> (Table Data)", definition: "Defines individual data cells in a table row. Contains the actual data." },
      { term: "<th> (Table Header)", definition: "Defines header cells for a column. Typically bold and centered by default." },
      { term: "colspan", definition: "Attribute that makes a cell span multiple COLUMNS (always spans to the right)." },
      { term: "rowspan", definition: "Attribute that makes a cell span multiple ROWS (always spans downward)." },
      { term: "<caption>", definition: "Provides a short description of the table's contents." },
      { term: "HTML Form", definition: "Part of a web page with areas for users to enter/choose information. Data is processed by server-side scripts." },
      { term: "<input />", definition: "The most used form tag. The 'type' attribute specifies the input control type (text, password, submit, file, checkbox, radio, etc.)." },
    ],
    keyConcepts: [
      {
        title: "Table Structure",
        points: [
          "<table> wraps everything",
          "<thead> — semantic table header section",
          "<tbody> — semantic table body section",
          "<tfoot> — semantic table footer section",
          "<tr> — defines a table row",
          "<th> — header cell (bold, centered by default)",
          "<td> — data cell (actual content)",
          "<caption> — table description",
          "border='1' attribute adds visible borders",
          "width attribute specifies table width (use percentages for responsiveness)",
          "border-collapse: collapse CSS property merges adjacent borders",
        ]
      },
      {
        title: "Spanning Cells",
        points: [
          "colspan='number' — spans multiple COLUMNS to the RIGHT",
          "rowspan='number' — spans multiple ROWS DOWNWARD",
          "Syntax: <td colspan='3'>content</td>",
          "Syntax: <td rowspan='4'>content</td>",
          "Use spanning to create complex table layouts",
        ]
      },
      {
        title: "HTML Form Input Types",
        points: [
          "type='text' — single line text box",
          "type='password' — password field (characters masked)",
          "type='email' — email input with validation",
          "type='number' — numeric input",
          "type='radio' — radio button (one selection only)",
          "type='checkbox' — checkbox (multiple selections allowed)",
          "type='submit' — form submit button",
          "type='reset' — resets form to defaults",
          "type='file' — file upload with browse button",
          "type='hidden' — hidden field (passes data invisibly)",
          "type='button' — general clickable button",
          "type='color' — color picker",
          "type='range' — slider control",
          "type='date' — date picker",
          "type='tel' — telephone number",
          "type='url' — URL input",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: 'Table Spanning Summary',
        content: 'colspan = spans COLUMNS (horizontal, to the RIGHT). rowspan = spans ROWS (vertical, DOWNWARD). colspan="3" means the cell takes up the space of 3 columns. rowspan="4" means it takes 4 rows downward.'
      },
      {
        type: 'warning',
        title: 'Server-side vs Client-side Scripts',
        content: 'HTML forms collect data. SERVER-SIDE scripts (PHP, Node.js) process that data on the server and send a response. CLIENT-SIDE scripts (JavaScript) run in the browser for validation and interactivity.'
      },
      {
        type: 'tip',
        title: 'Table CSS Best Practices',
        content: 'Always use border-collapse: collapse for clean borders. Use CSS classes/rules instead of HTML attributes for styling. Specify width in % for responsive tables. Use :hover on tr or td for interactive effects.'
      },
      {
        type: 'success',
        title: 'Semantic Table Elements',
        content: '<thead> groups header rows | <tbody> groups body rows | <tfoot> groups footer rows. These elements improve code organization, CSS styling, and accessibility — use them for proper table structure.'
      }
    ],
    tables: [
      {
        caption: "Common HTML Input Types",
        headers: ["type value", "Control Created", "Use Case"],
        rows: [
          ["text", "Single-line text box", "Name, search, general input"],
          ["password", "Masked text field", "Passwords, PINs"],
          ["email", "Email input with validation", "Email addresses"],
          ["checkbox", "Checkbox (multiple allowed)", "Multiple options"],
          ["radio", "Radio button (one only)", "Single choice from group"],
          ["submit", "Submit button", "Form submission"],
          ["reset", "Reset button", "Clear form fields"],
          ["file", "File browser + textbox", "File uploads"],
          ["hidden", "Invisible field", "Passing data silently"],
          ["color", "Color picker", "Color selection"],
          ["range", "Slider control", "Range values"],
          ["date", "Date picker", "Date selection"],
        ]
      }
    ],
    examQuestions: [
      "What is the difference between colspan and rowspan?",
      "List and describe 6 common HTML input types.",
      "What is the purpose of <thead>, <tbody>, and <tfoot> in tables?",
      "What is the difference between a radio button and a checkbox?",
      "What is the role of server-side scripts in HTML forms?",
      "Write the HTML structure for a table with 3 columns and 2 data rows.",
      "What does the hidden input type do?",
      "How do you apply a hover effect to table rows using CSS?",
      "What does border-collapse: collapse do?",
      "What is the purpose of the <caption> element in a table?",
    ],
    commonMistakes: [
      "Confusing colspan (columns/horizontal) with rowspan (rows/vertical)",
      "Forgetting that colspan spans to the RIGHT and rowspan spans DOWNWARD",
      "Thinking radio buttons allow multiple selections (only checkboxes do)",
      "Not specifying table width in percentages (use % not px for responsiveness)",
      "Confusing the action and method attributes in forms",
    ],
    quickRevision: [
      "Table structure: <table> > <thead>/<tbody>/<tfoot> > <tr> > <th>/<td>",
      "colspan = horizontal span (right), rowspan = vertical span (down)",
      "Most used form tag: <input /> with type attribute",
      "radio = one selection, checkbox = multiple selections",
      "hidden input = passes data without user visibility",
      "server-side scripts process form data on the server",
      "border-collapse: collapse = merges adjacent borders",
    ],
  },
  {
    id: 6,
    title: "CSS Fundamentals — Selectors & Styling",
    description: "CSS overview, types of style sheets, CSS rule structure, selectors (tag, class, ID, descendant, pseudo-class, universal), and background properties.",
    weeksCovered: "Weeks 6-7",
    definitions: [
      { term: "CSS Rule/Rule Set", definition: "A statement that tells browsers how to render particular HTML elements. Consists of a selector followed by a declaration block." },
      { term: "Selector", definition: "The part of a CSS rule that 'targets' or 'selects' specific HTML elements to apply styles to." },
      { term: "Declaration Block", definition: "Everything between the curly brackets {} in a CSS rule, containing property:value pairs." },
      { term: "CSS Property", definition: "The styling characteristic to be applied (e.g., color, font-size, margin, background-color)." },
      { term: "CSS Value", definition: "The specific setting for a property (e.g., blue, 14px, 10%). Each declaration: property: value;" },
      { term: "ID Selector", definition: "Preceded by # sign. Targets elements with a unique ID. Score: 100 in specificity. <p id='main'> → #main { }" },
      { term: "Class Selector", definition: "Preceded by . (dot). Can target multiple elements. Score: 10 in specificity. <p class='note'> → .note { }" },
      { term: "Specificity", definition: "The rule that determines which CSS style is applied when multiple rules conflict. Hierarchy: Inline(1000) > ID(100) > Class(10) > Element(1)." },
      { term: "Cascade", definition: "The process of determining priority of styling rules. Later rules override earlier ones with equal specificity." },
    ],
    keyConcepts: [
      {
        title: "Three Types of Style Sheets",
        points: [
          "EXTERNAL: Separate .css file linked with <link> in <head>. Best for many pages. Can update entire site by changing one file.",
          "INTERNAL (Embedded): <style> tag inside <head>. Used when one page has a unique style.",
          "INLINE: style attribute directly on element. Highest specificity but hardest to maintain. Use sparingly.",
          "Priority order: Inline > Internal > External > Browser default",
        ]
      },
      {
        title: "CSS Core Selectors",
        points: [
          "Tag/Element selector: uses HTML tag name — body, p, h1 { color: blue; }",
          "Class selector: preceded by . (dot) — .note { font-size: small; }",
          "ID selector: preceded by # — #header { background: navy; }",
          "Universal selector: * — applies to ALL elements — * { margin: 0; padding: 0; }",
          "Descendant selector: ancestor element — blockquote p { font-size: 13px; }",
          "Pseudo-class: state-based — a:hover, p:first-child",
          "Pseudo-element: part-based — p:first-letter, p:before",
        ]
      },
      {
        title: "CSS Specificity Hierarchy",
        points: [
          "Inline style: 1000 points (STRONGEST)",
          "ID selector: 100 points",
          "Class selector: 10 points",
          "Element/Tag selector: 1 point (WEAKEST)",
          "When specificity is equal, the LAST rule wins (cascade order)",
          "!important overrides all specificity (use sparingly)",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: 'CSS Specificity Scores (MEMORIZE)',
        content: 'Inline style = 1000 | ID selector (#) = 100 | Class selector (.) = 10 | Element selector = 1. Higher score WINS. Example: <p id="main" class="text"> with p{blue}, .text{red}, #main{green} → GREEN wins (100 points).'
      },
      {
        type: 'warning',
        title: 'ID vs Class Selectors',
        content: 'ID selector (#name): appears ONCE on a page, unique formatting. Class selector (.name): can appear on MULTIPLE elements. ID has higher specificity (100) than class (10). Use IDs for unique elements, classes for reusable styles.'
      },
      {
        type: 'tip',
        title: 'Benefits of External CSS',
        content: 'All styling in limited style sheets | Bandwidth savings | Content separated from presentation | Different styles for different output media (screen vs print) | Change entire site by modifying ONE file'
      },
      {
        type: 'extra',
        title: 'div vs span',
        content: '<div> = block-level container (creates new line, full width). <span> = inline container (flows with text). Both are generic containers designed for use with CSS. Use <div> for sections; use <span> for inline text styling.'
      }
    ],
    tables: [
      {
        caption: "CSS Selector Types",
        headers: ["Selector Type", "Syntax Example", "What It Targets", "Specificity Score"],
        rows: [
          ["Tag/Element", "p { }", "All <p> elements", "1"],
          ["Class", ".note { }", "Elements with class='note'", "10"],
          ["ID", "#header { }", "Element with id='header'", "100"],
          ["Universal", "* { }", "ALL elements on the page", "0"],
          ["Descendant", "div p { }", "All <p> inside <div>", "1+1=2"],
          ["Pseudo-class", "a:hover { }", "Links when hovered", "11 (element+pseudo)"],
          ["Inline", "style='color:red'", "Directly on element", "1000"],
        ]
      },
      {
        caption: "Types of CSS Style Sheets",
        headers: ["Type", "Location", "Best Used When", "Priority"],
        rows: [
          ["External", "Separate .css file via <link>", "Styling multiple pages", "Lowest of three"],
          ["Internal", "<style> in <head> section", "One page has unique style", "Middle"],
          ["Inline", "style='' attribute on element", "Single unique occurrence", "Highest"],
        ]
      }
    ],
    examQuestions: [
      "What are the three types of CSS style sheets? When is each best used?",
      "Write a CSS rule using an ID selector and another using a class selector.",
      "Explain CSS specificity with the hierarchy scores.",
      "What is the CSS universal selector and what is it commonly used for?",
      "What is the difference between a class and an ID selector?",
      "What is a descendant selector? Give an example.",
      "List 4 benefits of using external CSS style sheets.",
      "Given p{blue}, .text{red}, #main{green} on the same element — which rule applies?",
      "What is the difference between a pseudo-class and a pseudo-element?",
      "What is the difference between <div> and <span>?",
    ],
    commonMistakes: [
      "Confusing the . (class) and # (ID) selectors",
      "Thinking ID and class selectors have the same specificity",
      "Forgetting that CSS declarations end with semicolons",
      "Not knowing the order of specificity hierarchy",
      "Using ID selectors for elements that appear multiple times",
    ],
    quickRevision: [
      "CSS = Cascading Style Sheets (controls presentation layer)",
      "3 types: External (.css file), Internal (<style> in <head>), Inline (style='' on element)",
      "Rule = selector { property: value; }",
      "Selectors: tag(1), .class(10), #id(100), inline(1000)",
      "* = universal selector, removes all margins/padding",
      "Descendant: ancestor element (space separated)",
      "Pseudo-class: :hover, :first-child (state-based)",
      ":hover changes appearance when mouse is over element",
    ],
  },
  {
    id: 7,
    title: "CSS Units, Positioning & Layout",
    description: "Absolute vs relative CSS units, all position values (static, relative, fixed, absolute, sticky), CSS specificity in depth, and CSS website layout design.",
    weeksCovered: "Weeks 8-9",
    definitions: [
      { term: "CSS Units", definition: "Measurements for CSS properties like width, margin, font-size. Cannot have whitespace between number and unit (except 0)." },
      { term: "Absolute Units", definition: "Fixed units that don't change with screen size. Best for print/known media. Examples: px, cm, mm, in, pt, pc." },
      { term: "Relative Units", definition: "Units relative to another measurement. Scale between screen sizes — ideal for responsive design. Examples: em, rem, vw, vh, %, fr." },
      { term: "em", definition: "Relative to the font-size of the PARENT element. 1em = parent's font-size." },
      { term: "rem", definition: "Relative to the font-size of the ROOT (<html>) element. More predictable than em." },
      { term: "vw / vh", definition: "Viewport width/height. 100vw = full viewport width. 100vh = full viewport height." },
      { term: "position: static", definition: "DEFAULT for all elements. Follows normal document flow. Not affected by top/left/right/bottom." },
      { term: "position: relative", definition: "Positioned relative to its NORMAL position. top/left/right/bottom moves it from there." },
      { term: "position: fixed", definition: "Positioned relative to the VIEWPORT. Stays in place during scrolling. Does not leave a gap." },
      { term: "position: absolute", definition: "Positioned relative to nearest positioned ANCESTOR (non-static). If none exists, uses document body." },
      { term: "position: sticky", definition: "Toggles between relative and fixed. Acts relative until scroll threshold, then sticks. Requires top/right/bottom/left." },
    ],
    keyConcepts: [
      {
        title: "CSS Absolute Units",
        points: [
          "px — pixels (1px = 1/96th of 1in) — most common for screen",
          "cm — centimeters",
          "mm — millimeters",
          "in — inches (1in = 96px = 2.54cm)",
          "pt — points (1pt = 1/72 of 1in) — typography",
          "pc — picas (1pc = 12pt)",
          "Best for print or when exact dimensions are needed",
        ]
      },
      {
        title: "CSS Relative Units",
        points: [
          "em — relative to parent element's font-size",
          "rem — relative to root element's font-size (more consistent)",
          "vw — 1% of viewport width (100vw = full width)",
          "vh — 1% of viewport height (100vh = full height)",
          "% — relative to parent element's size",
          "fr — fractional unit for CSS Grid (1fr = 1 part of available space)",
          "Best for responsive design — scale with screen size",
        ]
      },
      {
        title: "CSS Positioning Summary",
        points: [
          "static — default, follows normal flow, top/left/right/bottom have NO effect",
          "relative — offset from normal position, still occupies original space",
          "fixed — relative to viewport, stays during scroll, no gap left",
          "absolute — relative to nearest non-static ancestor (or body if none)",
          "sticky — relative until threshold, then fixed (requires top/right/bottom/left)",
          "Elements positioned using top, bottom, left, right properties",
        ]
      },
      {
        title: "CSS Website Layout Techniques",
        points: [
          "Box Model — content, padding, border, margin",
          "Flexbox — one-dimensional layout (row OR column)",
          "Grid — two-dimensional layout (rows AND columns)",
          "Positioning — absolute, fixed, relative, sticky",
          "Common layout: header → nav → main/sidebar → footer",
          "display: flex — enables flexbox",
          "display: grid — enables grid",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: 'CSS Units Quick Reference',
        content: 'Absolute (fixed): px, cm, mm, in, pt, pc | Relative (flexible): em(parent), rem(root), vw(viewport width), vh(viewport height), %(parent), fr(grid fraction). WHITESPACE between number and unit = INVALID!'
      },
      {
        type: 'warning',
        title: 'position: absolute vs fixed',
        content: 'absolute: positioned relative to nearest non-static ANCESTOR (or body if none). Moves when page scrolls. fixed: positioned relative to the VIEWPORT. Stays in place during scrolling. Both are removed from normal document flow!'
      },
      {
        type: 'tip',
        title: 'sticky positioning requirement',
        content: 'position: sticky requires specifying at least ONE of: top, right, bottom, or left. Without it, sticky acts like relative. Example: position: sticky; top: 0; keeps element at top of viewport after scrolling past it.'
      },
      {
        type: 'extra',
        title: 'Flexbox vs Grid',
        content: 'Flexbox = 1-dimensional (row OR column at a time). Grid = 2-dimensional (rows AND columns simultaneously). Use Flexbox for navigation bars, centering. Use Grid for full page layouts, complex multi-column designs.'
      }
    ],
    tables: [
      {
        caption: "CSS Positioning Properties Comparison",
        headers: ["Position Value", "Positioned Relative To", "Scrolls With Page?", "Leaves Gap?"],
        rows: [
          ["static (default)", "Normal document flow", "Yes", "Yes (not removed)"],
          ["relative", "Its own natural position", "Yes", "Yes (not removed)"],
          ["fixed", "The viewport", "No (stays fixed)", "No (removed from flow)"],
          ["absolute", "Nearest non-static ancestor", "Yes (if ancestor scrolls)", "No (removed from flow)"],
          ["sticky", "Viewport (after threshold)", "No (after sticking)", "Yes (until threshold)"],
        ]
      },
      {
        caption: "CSS Units Summary",
        headers: ["Unit", "Type", "Relative To", "Best Used For"],
        rows: [
          ["px", "Absolute", "Screen pixel", "Screen borders, shadows, images"],
          ["pt", "Absolute", "1/72 inch", "Print typography"],
          ["em", "Relative", "Parent font-size", "Spacing proportional to text"],
          ["rem", "Relative", "Root font-size", "Consistent sizing across components"],
          ["vw", "Relative", "Viewport width (1%)", "Full-width elements"],
          ["vh", "Relative", "Viewport height (1%)", "Full-height sections"],
          ["%", "Relative", "Parent element", "Fluid layouts"],
          ["fr", "Relative", "Available grid space", "CSS Grid columns/rows"],
        ]
      }
    ],
    examQuestions: [
      "What is the difference between absolute and relative CSS units?",
      "Explain the 5 CSS position values with examples.",
      "What is the difference between position:fixed and position:absolute?",
      "For sticky positioning to work, what must you specify?",
      "What does 100vh and 100vw represent?",
      "What is the difference between em and rem?",
      "What is the fr unit used for?",
      "Explain the CSS Box Model and its components.",
      "What is the difference between Flexbox and CSS Grid?",
      "Why can't you put a space between a CSS value and its unit?",
    ],
    commonMistakes: [
      "Thinking position:fixed stays with its parent — it's relative to the VIEWPORT",
      "Forgetting position:sticky requires top/right/bottom/left to work",
      "Writing '12 px' with a space — CSS units CANNOT have spaces",
      "Confusing em (relative to parent) with rem (relative to root)",
      "Using absolute units for responsive web design",
    ],
    quickRevision: [
      "Absolute units: px, cm, mm, in, pt, pc (fixed, don't scale)",
      "Relative units: em, rem, vw, vh, %, fr (scale with context)",
      "static = default, relative = offset from normal, fixed = viewport-locked",
      "absolute = relative to nearest non-static ancestor",
      "sticky = relative until scroll threshold then fixed",
      "100vw = full viewport width, 100vh = full viewport height",
      "em = parent font-size, rem = root font-size",
      "Flexbox = 1D layout, Grid = 2D layout",
    ],
  },
  {
    id: 8,
    title: "JavaScript in Web Development",
    description: "JavaScript fundamentals, variables, data types, arrays, objects, control flow, functions, DOM manipulation, events, and asynchronous JavaScript.",
    weeksCovered: "Weeks 8-11",
    definitions: [
      { term: "JavaScript", definition: "An object-based client-side scripting language that adds interactivity and programmability to web pages. Runs in the browser (client-side)." },
      { term: "Variable", definition: "A named storage location for data. Declared using 'let' (reassignable) or 'const' (constant, cannot be reassigned)." },
      { term: "Data Types", definition: "Categories of data: string (text), number, boolean (true/false), undefined, null, object, symbol." },
      { term: "Array", definition: "An ordered collection of values stored in a single variable. Accessed by index starting at 0." },
      { term: "Object", definition: "A collection of key-value pairs (properties and methods). The fundamental data structure in JavaScript." },
      { term: "Function", definition: "A reusable block of code that performs a specific task. Reduces repetition and improves code organization." },
      { term: "DOM (Document Object Model)", definition: "A programming interface that represents HTML as a tree structure of objects that JavaScript can access and manipulate." },
      { term: "Event", definition: "Something that happens in the browser — user click, keypress, mouse movement, page load — that JavaScript can respond to." },
      { term: "Event Listener", definition: "A function attached to an element that waits for a specific event and executes code in response." },
      { term: "Asynchronous JS", definition: "JavaScript that handles time-consuming operations without blocking the main thread, using callbacks, Promises, or async/await." },
      { term: "Promise", definition: "An object representing the eventual completion or failure of an asynchronous operation. Has .then() and .catch() handlers." },
      { term: "async/await", definition: "Syntactic sugar built on Promises that makes asynchronous code look and behave more like synchronous code." },
      { term: "JSON", definition: "JavaScript Object Notation — a lightweight data-interchange format. JSON.parse() converts string to object; JSON.stringify() converts object to string." },
      { term: "Fetch API", definition: "A modern JavaScript interface for making HTTP requests to servers/APIs, returning Promises." },
    ],
    keyConcepts: [
      {
        title: "JavaScript in HTML Pages",
        points: [
          "<script> tag embeds JS in HTML — can go in <head> or <body>",
          "alert('message') — shows popup to user",
          "console.log('message') — outputs to browser's developer console",
          "document.write() — writes directly to the HTML page",
          "Best practice: place <script> at end of <body> for performance",
          "External JS files: <script src='app.js'></script>",
        ]
      },
      {
        title: "DOM Manipulation Methods",
        points: [
          "document.getElementById('id') — selects ONE element by ID",
          "document.querySelector('.class') — selects FIRST match by CSS selector",
          "document.querySelectorAll('p') — selects ALL matches",
          "element.innerHTML = 'new content' — sets HTML content",
          "element.textContent = 'text' — sets text content",
          "element.style.color = 'red' — changes CSS inline style",
          "element.classList.add/remove/toggle('class') — manipulates classes",
          "document.createElement('div') — creates new element",
          "parent.appendChild(child) — adds element to DOM",
        ]
      },
      {
        title: "Control Flow & Functions",
        points: [
          "if/else if/else — conditional branching",
          "switch/case — multiple condition matching",
          "for loop — repeats code a fixed number of times",
          "while loop — repeats while condition is true",
          "do...while — executes at least once, then checks condition",
          "function declaration: function name() { }",
          "Arrow function: const name = () => { }",
          "Function parameters and return values",
        ]
      },
      {
        title: "Error Handling & Debugging",
        points: [
          "try...catch blocks — catches and handles runtime errors",
          "try { risky code } catch(error) { handle error }",
          "finally — always executes after try/catch",
          "console.error() — outputs error to console",
          "console.log() — general debug output",
          "Browser DevTools — inspect, debug JavaScript",
          "throw new Error('message') — creates custom errors",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: 'Key DOM Selection Methods',
        content: 'getElementById("id") → single element by ID | querySelector(".class") → first match | querySelectorAll("p") → all matches (NodeList) | getElementsByTagName("p") → all by tag (HTMLCollection)'
      },
      {
        type: 'warning',
        title: 'var vs let vs const',
        content: 'var — function-scoped, hoisted (OLD, avoid). let — block-scoped, can be reassigned (use for changeable values). const — block-scoped, CANNOT be reassigned (use for constants). Always prefer const, then let.'
      },
      {
        type: 'tip',
        title: 'Array Methods to Remember',
        content: 'push() — add to END | pop() — remove from END | shift() — remove from BEGINNING | unshift() — add to BEGINNING | length — number of elements | indexOf() — find position | slice() — extract portion | splice() — modify array'
      },
      {
        type: 'extra',
        title: 'Asynchronous JavaScript',
        content: 'Callbacks → Promise → async/await (evolution). fetch() returns a Promise. async/await makes async code look synchronous. try/catch handles async errors with await. JSON.parse() converts JSON string to object; JSON.stringify() converts object to JSON string.'
      }
    ],
    tables: [
      {
        caption: "JavaScript vs PHP (Client-side vs Server-side)",
        headers: ["Feature", "JavaScript (Client-side)", "PHP (Server-side)"],
        rows: [
          ["Runs on", "User's browser", "Web server"],
          ["Visibility", "Source code visible to user", "Executed before sending to browser"],
          ["Primary use", "DOM manipulation, interactivity", "Database interaction, dynamic pages"],
          ["When used", "After page loads", "Before page sends to browser"],
          ["Examples", "Animations, form validation, AJAX", "Login systems, database queries"],
        ]
      },
      {
        caption: "Common JavaScript Array Methods",
        headers: ["Method", "Action", "Returns"],
        rows: [
          ["push(item)", "Add to END of array", "New length"],
          ["pop()", "Remove from END", "Removed element"],
          ["shift()", "Remove from BEGINNING", "Removed element"],
          ["unshift(item)", "Add to BEGINNING", "New length"],
          ["indexOf(item)", "Find position of item", "Index (-1 if not found)"],
          ["splice(start, count)", "Remove/replace elements", "Array of removed elements"],
          ["slice(start, end)", "Extract portion (non-destructive)", "New array"],
          ["forEach(fn)", "Iterate each element", "undefined"],
          ["map(fn)", "Transform each element", "New array"],
          ["filter(fn)", "Filter elements by condition", "New array"],
        ]
      }
    ],
    examQuestions: [
      "What is JavaScript and what is it used for in web development?",
      "Explain the difference between server-side and client-side scripting.",
      "What is the DOM and how does JavaScript interact with it?",
      "Write JavaScript code to change an element's text content by ID.",
      "What is the difference between var, let, and const?",
      "Explain how try...catch blocks work for error handling.",
      "What are Promises in JavaScript?",
      "What is the difference between synchronous and asynchronous JavaScript?",
      "What does the Fetch API do?",
      "Write an example of adding an event listener to a button click.",
    ],
    commonMistakes: [
      "Confusing server-side (PHP) and client-side (JavaScript) scripting",
      "Using var instead of let/const in modern JavaScript",
      "Forgetting that array indexes start at 0",
      "Confusing innerHTML (HTML content) with textContent (plain text)",
      "Not handling Promise rejections with .catch() or try/catch",
      "Mixing up push/pop (end) with shift/unshift (beginning) for arrays",
    ],
    quickRevision: [
      "JS = client-side scripting language (runs in browser)",
      "DOM = Document Object Model (HTML as tree of objects)",
      "getElementById, querySelector, querySelectorAll — DOM selection",
      "Events: click, keypress, mouseover — addEventListener() attaches handlers",
      "const (unchangeable), let (reassignable), avoid var",
      "Array: ordered collection, index from 0. push/pop (end), shift/unshift (start)",
      "try...catch — error handling, fetch() — HTTP requests",
      "async/await — clean async code syntax (based on Promises)",
      "JSON.parse() = string→object, JSON.stringify() = object→string",
    ],
  },
];

export default studyContent;
