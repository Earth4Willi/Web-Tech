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
      { term: "Web Technologies", definition: "A generic umbrella term for a collection of technologies used to plan, design, develop, and deploy state-of-the-art websites and web applications. Examples: HTML, CSS, JavaScript, PHP, ASP, AJAX, XML." },
      { term: "HTML", definition: "HyperText Markup Language — a markup language (NOT a programming language) that makes it possible to present information on the Internet. Web pages all over the world consist of HTML." },
      { term: "CSS", definition: "Cascading Style Sheets — a style sheets language introduced by W3C used to define the presentational semantics of structured documents. 'Cascading' refers to determining the priority of styling rules." },
      { term: "JavaScript (JS)", definition: "An object-based client-side scripting language that adds interactivity to web pages. Created by Brendan Eich at Netscape in 1995 (originally 'LiveScript'). Standardized as ECMAScript." },
      { term: "SGML", definition: "Standard Generalized Markup Language — an ISO standard system for specifying document structure. Both HTML and XML are derived from SGML. Not a programming language." },
      { term: "XML", definition: "Extensible Markup Language — a universal format for structured documents and data on the WWW. Unlike HTML, XML has NO fixed, predefined set of tags — users define their own." },
      { term: "XHTML", definition: "Extensible HyperText Markup Language — mirrors or extends versions of HTML. It is stricter than HTML, following XML syntax rules." },
      { term: "AJAX", definition: "Asynchronous JavaScript and XML — NOT a programming language, but a group of web technologies that allow website applications to send and retrieve data from servers ASYNCHRONOUSLY without reloading the page." },
      { term: "PHP", definition: "PHP: Hypertext Preprocessor — a cross-platform, open-source, general-purpose server-side scripting language originally designed for generating dynamic web pages. Created by Rasmus Lerdorf in 1994." },
      { term: "ASP / ASP.net", definition: "Active Server Pages — a Microsoft server-side scripting technology. ASP.net is a web framework for building dynamic web applications. Competes with PHP." },
      { term: "ECMAScript", definition: "The standardized specification of JavaScript, maintained by Ecma International since June 1997. JavaScript is the most widely known implementation of ECMAScript." },
      { term: "WWW (World Wide Web)", definition: "A network of information resources that uses URLs, HTTP protocols, and Hypertext to make resources readily available on the Internet. Invented by Tim Berners-Lee and Robert Cailliau in 1989." },
      { term: "HTTP", definition: "HyperText Transfer Protocol — the primary communication protocol of the WWW in which documents are formatted and transmitted, and actions web servers and browsers take in response to commands." },
      { term: "URI (Uniform Resource Identifier)", definition: "A character string that identifies a name or a resource on the Internet. URLs and URNs are both types of URIs." },
      { term: "URL (Uniform Resource Locator)", definition: "Provides a method or specifications for finding resources on the Internet, including the protocol (http://) and path. An example of a uniform naming scheme for locating resources on the web." },
      { term: "URN (Uniform Resource Name)", definition: "Defines a method for referencing an object WITHOUT declaring the full path to the object. A naming scheme without location information." },
      { term: "Cascading (in CSS)", definition: "Refers to the process of determining the priority of styling rules when multiple rules apply to the same element. Follows specificity hierarchy." },
      { term: "W3C", definition: "World Wide Web Consortium — the main international standards organization for the World Wide Web. Authoritative source for HTML, CSS, XML standards. Founded by Tim Berners-Lee." },
    ],
    keyConcepts: [
      {
        title: "History of the Web",
        points: [
          "WWW invented by Tim Berners-Lee and Robert Cailliau at CERN, Geneva, Switzerland in 1989",
          "World Wide Web project officially started in 1990",
          "W3C (World Wide Web Consortium) created by Tim Berners-Lee as the main standards body for the web",
          "W3C aims to build consensus around web technologies and maintain standards",
          "JavaScript created by Brendan Eich at Netscape, introduced December 1995 as 'LiveScript'",
          "Renamed JavaScript in 1996 due to Netscape/Sun Microsystems marketing agreement",
          "Standardized as ECMAScript by Ecma International in June 1997",
          "PHP created by Rasmus Lerdorf in 1994 originally as a set of Perl scripts",
          "SGML became an ISO standard in 1986 — HTML and XML both derived from it",
        ]
      },
      {
        title: "The Three Mechanisms of the Web",
        points: [
          "1. URL — A uniform naming scheme for LOCATING resources on the web",
          "2. HTTP — Protocols for ACCESS to named resources over the Web",
          "3. HTML — Hypertext for easy NAVIGATION among resources",
          "All three work together to form the World Wide Web",
          "Web resources can be located by using unique URIs (Uniform Resource Identifiers)",
        ]
      },
      {
        title: "URI, URL, and URN — The Differences",
        points: [
          "URI — Umbrella term: A character string that identifies a name or resource on the Internet",
          "URL — Subset of URI: Provides method for FINDING resources (includes protocol + path). Example: http://www.example.com/page.html",
          "URN — Subset of URI: References an object WITHOUT the full path. Identifies what something is, not where it is",
          "In URL http://www.pastech.com: Protocol='http', Subdomain='www', Domain='pastech', TLD='.com'",
          "URI > URL, URN (URI is the parent category)",
        ]
      },
      {
        title: "Web Technologies Classification",
        points: [
          "CLIENT-SIDE (run in browser): HTML, CSS, JavaScript, ReactJS, Angular, Bootstrap, AJAX",
          "SERVER-SIDE (run on server): PHP, ASP.net, Node.js, Laravel — process form data, generate dynamic pages",
          "SGML-derived languages: HTML and XML (both are derived from SGML)",
          "PHP and ASP.net are COMPETITORS — they serve the same purpose from different ecosystems",
          "AJAX, JavaScript, XML, XSLT, and CSS are NOT programming languages",
          "XHTML mirrors/extends HTML but follows strict XML syntax rules",
          "Cascading in CSS refers to determining the PRIORITY of styling rules",
        ]
      },
      {
        title: "Popular Web Technologies",
        points: [
          "HTML — structure/content of web pages",
          "CSS — presentation/styling of web pages",
          "JavaScript — client-side interactivity",
          "PHP — server-side scripting (competes with ASP.net)",
          "ASP.net — Microsoft's server-side framework",
          "AJAX — asynchronous data exchange without page reload",
          "XML — data exchange format, no predefined tags",
          "XHTML — stricter version of HTML (follows XML rules)",
          "Frontend: HTML, CSS, JavaScript, Bootstrap, ReactJS, Angular",
          "Backend: PHP, Node.js, Laravel",
          "Database: MongoDB | CMS: WordPress",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: 'Key Distinction: Internet vs Web',
        content: 'The Internet is the global network infrastructure (physical hardware + software). The Web (WWW) is a SERVICE that runs ON the Internet — a collection of information resources accessed via browsers using HTTP and HTML. Internet ≠ Web!'
      },
      {
        type: 'warning',
        title: 'Critical Exam Distinctions',
        content: 'HTML = MARKUP language (NOT a programming language). AJAX = group of technologies (NOT a language). CSS "Cascading" = priority of styling rules. PHP = "PHP: Hypertext Preprocessor" (NOT "Personal Home Page"). JavaScript originally named "LiveScript".'
      },
      {
        type: 'tip',
        title: 'Remember the Creators',
        content: 'WWW → Tim Berners-Lee & Robert Cailliau (CERN, 1989). JavaScript → Brendan Eich (Netscape, 1995). PHP → Rasmus Lerdorf (1994). W3C → Tim Berners-Lee. SGML → IBM project (1974), became ISO standard 1986.'
      },
      {
        type: 'success',
        title: 'Client-Side vs Server-Side',
        content: 'CLIENT-SIDE (in browser): HTML, CSS, JavaScript, AJAX, ReactJS, Angular, Bootstrap. SERVER-SIDE (on server): PHP, ASP.net, Node.js, Laravel. Competitors: PHP vs ASP.net. Database: MongoDB. CMS: WordPress.'
      },
      {
        type: 'extra',
        title: 'URI vs URL vs URN',
        content: 'URI = parent category (identifies a resource). URL = finds resources (has protocol + path, e.g. http://www.example.com). URN = names resources without location (no protocol needed). URI includes both URL and URN.'
      },
    ],
    tables: [
      {
        caption: "Popular Web Technologies and Their Roles",
        headers: ["Technology", "Type", "Where It Runs", "Primary Use"],
        rows: [
          ["HTML", "Markup Language", "Browser", "Structure/Content"],
          ["CSS", "Style Language", "Browser", "Presentation/Layout"],
          ["JavaScript", "Scripting Language", "Browser (client-side)", "Interactivity/Dynamic behavior"],
          ["PHP", "Scripting Language", "Server (server-side)", "Backend/Dynamic page generation"],
          ["ASP.net", "Framework", "Server (server-side)", "Microsoft backend apps (PHP competitor)"],
          ["AJAX", "Group of Technologies", "Browser + Server", "Asynchronous data exchange"],
          ["XML", "Markup Language", "Both", "Structured data exchange"],
          ["XHTML", "Markup Language", "Browser", "Stricter HTML (follows XML rules)"],
          ["ReactJS", "JS Library", "Browser", "Building User Interfaces"],
          ["Node.js", "JS Runtime", "Server", "Server-side JavaScript"],
          ["MongoDB", "Database", "Server", "Data storage"],
        ]
      },
      {
        caption: "URI, URL and URN Comparison",
        headers: ["Term", "Full Name", "Purpose", "Example"],
        rows: [
          ["URI", "Uniform Resource Identifier", "Identifies a name or resource on the Internet (parent category)", "Any URL or URN"],
          ["URL", "Uniform Resource Locator", "FINDS resources: includes protocol + domain + path", "http://www.pastech.com/page.html"],
          ["URN", "Uniform Resource Name", "NAMES a resource without declaring the full path", "urn:isbn:0-486-27557-4"],
        ]
      },
      {
        caption: "Parts of a URL: http://www.pastech.com",
        headers: ["Part", "Example Value", "Description"],
        rows: [
          ["Protocol/Scheme", "http://", "Communication protocol used to access the resource"],
          ["Subdomain", "www", "Subdivision of the main domain"],
          ["Domain Name", "pastech", "The registered name of the website"],
          ["Top-Level Domain (TLD)", ".com", "The domain category (.com, .org, .net, .edu, .gov)"],
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
      "What is the difference between URI, URL, and URN?",
      "What is SGML and what languages are derived from it?",
      "What does XHTML stand for and how does it differ from HTML?",
      "What does 'Cascading' in CSS stand for?",
      "Identify the parts of the URL: http://www.pastech.com",
      "Which technologies are client-side and which are server-side?",
      "Why are PHP and ASP.net considered competitors?",
    ],
    commonMistakes: [
      "Saying HTML is a programming language — it is a MARKUP language",
      "Saying AJAX is a programming language — it is a GROUP of technologies",
      "Confusing the Internet with the World Wide Web (Internet = infrastructure, Web = service)",
      "Getting PHP's full name wrong — 'PHP: Hypertext Preprocessor' NOT 'Personal Home Page'",
      "Forgetting that JavaScript was initially named 'LiveScript'",
      "Confusing URI, URL, and URN — URI is the parent category containing both URL and URN",
      "Thinking CSS 'cascading' means it flows down the page — it means PRIORITY of styling rules",
      "Confusing PHP (open-source, any platform) with ASP.net (Microsoft)",
    ],
    quickRevision: [
      "HTML = HyperText Markup Language (markup, NOT programming language)",
      "CSS = Cascading Style Sheets (Cascading = priority of styling rules)",
      "JS = JavaScript, 'LiveScript' → Brendan Eich, Netscape (1995)",
      "WWW = Tim Berners-Lee & Robert Cailliau, CERN, 1989 (started 1990)",
      "3 Web mechanisms: URL (naming) + HTTP (protocols) + HTML (hypertext)",
      "PHP = PHP: Hypertext Preprocessor, Rasmus Lerdorf, 1994, server-side",
      "ASP = Active Server Pages (Microsoft, server-side, competes with PHP)",
      "AJAX = Asynchronous JavaScript and XML (NOT a language)",
      "SGML → derived: HTML + XML | XHTML = stricter HTML",
      "URI > URL (location) + URN (name only)",
      "ECMAScript = standardized JavaScript (Ecma International, 1997)",
      "W3C = World Wide Web Consortium (standards body, Tim Berners-Lee)",
    ],
  },
  {
    id: 2,
    title: "Web Design Process & Browser/Server Architecture",
    description: "Understanding web browsers, web servers, the browser reference architecture, domain names, hosting, and the 8-phase web design process.",
    weeksCovered: "Week 2",
    definitions: [
      { term: "Web Browser", definition: "A software application for retrieving, presenting, and traversing information resources on the World Wide Web. Examples: Chrome, Firefox, Safari, MS Edge, Opera." },
      { term: "Web Server", definition: "Either the hardware (the computer) or software (application) that helps deliver web content that can be accessed through the Internet. Primary function: deliver web pages on request using HTTP." },
      { term: "User Interface (UI) Subsystem", definition: "The part of the browser between the user and the browser engine. Includes address bar, back/forward buttons, bookmarking menu, etc. — everything EXCEPT the main page display window." },
      { term: "Browser Engine", definition: "The browser subsystem that lies between the UI and the Rendering Engine. Loads a given URI and supports browsing actions (forward, back, refresh/reload). Queries and manipulates the rendering engine." },
      { term: "Rendering Engine", definition: "Browser subsystem responsible for visual representation of URI inputs — displays HTML and XML documents, including embedded content. Handles page layout and element positioning. Includes an HTML parser." },
      { term: "Networking Subsystem", definition: "Browser subsystem where file transfer protocols FTP and HTTP are enforced, and MIME types of files are resolved." },
      { term: "XML Parser", definition: "One of the most reusable browser subsystems. Processes and parses XML documents embedded in or referenced by web pages." },
      { term: "Display Backend", definition: "Browser subsystem that offers drawing and windowing primitives, a set of user interface widgets, and fonts. May be closely tied to the operating system." },
      { term: "Data Persistence Subsystem", definition: "Browser subsystem that stores various data associated with the browsing session on disk — high-level data (bookmarks, toolbar settings) and low-level data (cookies, security certificates, cache)." },
      { term: "MIME Type", definition: "Multipurpose Internet Mail Extensions — identifies the format/type of a file being transferred (e.g., text/html, image/jpeg). Resolved by the Networking subsystem." },
      { term: "Wireframe", definition: "A non-graphical layout of a web page showing structure and element placement without any visual design. Includes containers for all major page elements." },
      { term: "Site Diagram", definition: "A visual representation of the website's structure, showing pages and how they link together. Created during the Site Architecture phase." },
      { term: "Project Brief", definition: "Document created during the Project Definition phase containing: project summary, goals, target audiences, and key outcomes." },
      { term: "Domain Name", definition: "A human-readable address used instead of IP addresses to locate web resources. www.example.com has subdomain 'www', domain 'example', and TLD '.com'." },
    ],
    keyConcepts: [
      {
        title: "Web Browser Reference Architecture — All 8 Subsystems",
        points: [
          "1. User Interface (UI) — address bar, back/forward buttons, bookmarking menu; everything EXCEPT the main page display window. Lies between the user and the browser engine.",
          "2. Browser Engine — loads a given URI; supports browsing actions (forward, back, refresh/reload); queries and manipulates rendering engine settings",
          "3. Rendering Engine — displays HTML and XML documents including embedded content; positions page elements; sets up page layout; includes HTML parser",
          "4. Networking — where FTP and HTTP file transfer protocols are enforced; resolves MIME types of files",
          "5. JavaScript Interpreter — processes and executes JavaScript code embedded in web pages",
          "6. XML Parser — one of the most reusable browser subsystems; parses XML documents",
          "7. Display Backend — offers drawing and windowing primitives, UI widgets, fonts; closely tied to the OS",
          "8. Data Persistence — stores session data on disk: bookmarks, toolbar settings (high-level); cookies, security certificates, cache (low-level)",
          "Order of processing: User → UI → Browser Engine → Rendering Engine → Display Backend",
          "Data Persistence runs in parallel, available to all subsystems",
        ]
      },
      {
        title: "Major Web Browsers and Servers",
        points: [
          "Major Browsers: Google Chrome, Mozilla Firefox, Microsoft Edge, Opera, Safari (Apple)",
          "Major Web Servers: Apache, Nginx (pronounced 'engine-x'), Apache Tomcat, IIS (Internet Information Services), Jigsaw, Lighttpd (pronounced 'lighty'), Klone, Zeus",
          "Web server PRIMARY function: deliver web pages on request to clients using HTTP",
          "MOST COMMON USE of web servers: to host and deliver web pages",
          "PHP is NOT a web server — it is a scripting language",
          "Web server = hardware OR software that delivers web content via Internet",
        ]
      },
      {
        title: "Web Design Process — All Phases in Detail",
        points: [
          "Phase 1: PROJECT DEFINITION — identify purpose, goals, objectives; create PROJECT BRIEF (project summary, goals, target audiences, key outcomes) and PROJECT PLAN",
          "Phase 2: SITE STRUCTURE (Site Architecture) — information hierarchy, navigation, naming conventions; produces SITE DIAGRAM and WIREFRAMES as deliverables",
          "Phase 3: VISUAL DESIGN — aesthetics, colors, typography, imagery; includes draft of homepage, client feedback, and APPROVAL OF FINAL DESIGN",
          "Phase 4: SITE DEVELOPMENT — actual coding; includes: Build and Integrate the Site, Build templates and create pages, Technical/Functional Plan",
          "Phase 5: SITE TESTING — verify all features work, cross-browser testing, validation",
          "Phase 6: LAUNCHING — Register a domain, Find a hosting company, Upload the website",
          "Phase 7: SITE MAINTENANCE — ongoing updates, bug fixes, content management",
          "NOTE: The course PDF uses phases: Project Definition, Site Structure, Visual Design, Site Development, Launching (5-phase model in some versions)",
        ]
      },
      {
        title: "Wireframes — Key Details",
        points: [
          "A wireframe is a non-graphical layout of a web page",
          "Wireframes DO include containers for all the major elements of the page",
          "Wireframes show structure but have NO color, NO fonts, NO visual design",
          "Wireframes are deliverables of the Site Structure phase",
          "A site diagram shows the overall structure/navigation of the website",
          "Wireframes ≠ Site Diagrams: wireframes show page layout, site diagrams show page relationships",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: 'Browser Architecture — Subsystem Summary',
        content: 'UI (address bar, buttons) → Browser Engine (loads URIs, back/forward/refresh) → Rendering Engine (displays HTML/XML, layout) → Networking (HTTP/FTP, MIME) | JS Interpreter | XML Parser (most reusable) → Display Backend (drawing, fonts, OS-tied) | Data Persistence (bookmarks, cookies, cache) runs in parallel.'
      },
      {
        type: 'warning',
        title: 'Apache is a Server, NOT a Browser',
        content: 'Apache is a web SERVER. The browsers are: Firefox, Chrome, Safari, MS Edge, and Opera. PHP is also NOT a web server — it is a scripting language. Nginx = "engine-x", Lighttpd = "lighty" (know the pronunciations!).'
      },
      {
        type: 'tip',
        title: 'Web Design Process Key Deliverables',
        content: 'Project Definition → Project Brief + Project Plan | Site Structure → Site Diagram + Wireframes | Visual Design → Draft homepage, Client feedback, Final design approval | Site Development → Build & integrate, Templates, Technical plan | Launching → Register domain, Find host, Upload site.'
      },
      {
        type: 'success',
        title: 'Wireframe Facts',
        content: 'Wireframes ARE non-graphical layouts of web pages. They DO include containers for all major page elements. They do NOT include color, fonts, or visual design. They are produced during the Site Structure/Architecture phase.'
      },
      {
        type: 'extra',
        title: 'W3C Standards',
        content: 'W3C = World Wide Web Consortium. It is the AUTHORITATIVE SOURCE for information about HTML and the HTML DTD (Document Type Definition). Founded by Tim Berners-Lee. W3C introduced CSS as the style language for the web.'
      }
    ],
    tables: [
      {
        caption: "Web Design Process Phases with Deliverables",
        headers: ["Phase", "Name", "Key Activities", "Deliverables"],
        rows: [
          ["1", "Project Definition", "Goals, objectives, stakeholder interviews", "Project Brief, Project Plan"],
          ["2", "Site Structure", "Navigation hierarchy, information architecture", "Site Diagram, Wireframes"],
          ["3", "Visual Design", "Colors, typography, mockups, client review", "Draft homepage, Approved final design"],
          ["4", "Site Development", "HTML/CSS/JS coding, backend, integration", "Technical/Functional Plan, Built site"],
          ["5", "Site Testing", "Feature testing, cross-browser, validation", "Test reports, Bug fixes"],
          ["6", "Launching", "Register domain, hosting, upload", "Live website"],
          ["7", "Site Maintenance", "Updates, fixes, content management", "Ongoing updates"],
        ]
      },
      {
        caption: "Browser Reference Architecture — All 8 Subsystems",
        headers: ["#", "Subsystem", "Primary Function", "Key Detail"],
        rows: [
          ["1", "User Interface", "Address bar, buttons, menus", "Everything EXCEPT the page display window"],
          ["2", "Browser Engine", "Loads URIs, back/forward/refresh", "Interface between UI and Rendering Engine"],
          ["3", "Rendering Engine", "Displays HTML/XML, handles layout", "Includes HTML parser"],
          ["4", "Networking", "FTP/HTTP enforcement", "Resolves MIME types"],
          ["5", "JavaScript Interpreter", "Executes JavaScript", "Client-side scripting"],
          ["6", "XML Parser", "Parses XML documents", "Most REUSABLE subsystem"],
          ["7", "Display Backend", "Drawing, windowing, fonts", "Closely tied to the OS"],
          ["8", "Data Persistence", "Stores bookmarks, cookies, cache", "Runs in parallel with all subsystems"],
        ]
      }
    ],
    examQuestions: [
      "List and describe ALL 8 subsystems of the web browser reference architecture.",
      "What is the difference between a web browser and a web server?",
      "Name 4 major web browsers and 4 major web servers.",
      "What is the primary function of a web server?",
      "What does the Rendering Engine do and does it include an HTML parser?",
      "Which browser subsystem is considered the most reusable?",
      "What is the role of the Data Persistence subsystem?",
      "What does the Networking subsystem handle?",
      "What is a wireframe and which design phase produces it?",
      "What deliverables does the Site Structure phase produce?",
      "What activities are included in the Project Definition phase?",
      "What activities are included in the Site Development phase?",
      "What activities are included in the Launching phase?",
      "What is the difference between a wireframe and a site diagram?",
    ],
    commonMistakes: [
      "Confusing web browsers with web servers (Apache is a SERVER, NOT a browser)",
      "Thinking PHP is a web server — it is a scripting language",
      "Forgetting the UI excludes the main page display window",
      "Thinking Rendering Engine handles JavaScript — it handles HTML/XML layout only",
      "Forgetting XML Parser is the MOST REUSABLE subsystem",
      "Saying wireframes do NOT include element containers — they DO",
      "Confusing Site Diagram (page relationships) with Wireframe (page layout)",
    ],
    quickRevision: [
      "Web Browser = retrieves/presents/traverses web resources",
      "Web Server = delivers web pages via HTTP (hardware OR software)",
      "8 subsystems: UI, Browser Engine, Rendering, Networking, JS Interpreter, XML Parser, Display Backend, Data Persistence",
      "XML Parser = most REUSABLE subsystem",
      "Display Backend = tied to OS (drawing, windowing, fonts)",
      "Data Persistence = bookmarks, cookies, security certs, cache",
      "Rendering Engine includes HTML parser",
      "Networking resolves MIME types and enforces HTTP/FTP",
      "Design phases: Project Definition → Site Structure → Visual Design → Development → Testing → Launch → Maintenance",
      "Site Structure deliverables: Site Diagram + Wireframes",
      "Project Definition deliverables: Project Brief + Project Plan",
      "Visual Design: draft homepage → client feedback → final design approval",
      "Launching: Register domain → Find hosting → Upload website",
      "Wireframe = non-graphical layout; DOES include element containers",
      "W3C = authoritative source for HTML and CSS standards",
    ],
  },
  {
    id: 3,
    title: "HTML Fundamentals — Structure & Elements",
    description: "HTML elements, tags, attributes, document structure, color coding, HTML entities, and rules for writing correct HTML.",
    weeksCovered: "Weeks 3-4",
    definitions: [
      { term: "HTML Element", definition: "Consists of BOTH the content AND its markup (start tag + content + end tag). e.g., <p>Paragraph text</p> is the element." },
      { term: "HTML Tag", definition: "The element name in angle brackets: <tagname>. A start tag opens an element; an end tag (</tagname>) closes it. Not the same as an element!" },
      { term: "HTML Attribute", definition: "Instructions that clarify or modify an element's behavior. Written inside the OPENING tag as name='value'. Example: <img src='photo.jpg' alt='Photo'>." },
      { term: "Container Element", definition: "An element that HAS content between its start and end tags. Examples: <p>content</p>, <h1>heading</h1>, <div>, <table>, <html>, <body>." },
      { term: "Empty Element", definition: "An element with NO content and NO closing tag. Self-closing with a forward slash. Examples: <br />, <img />, <input />, <hr />, <meta />, <link />." },
      { term: "DOCTYPE (Document Type Declaration)", definition: "Written as <!DOCTYPE html> — placed FIRST in an HTML document. Tells the browser which rules (HTML version) to use to interpret the code. Not a tag — it is an instruction." },
      { term: "DTD (Document Type Definition)", definition: "Set of rules that govern how a document can be marked up. W3C is the AUTHORITATIVE SOURCE for HTML DTDs." },
      { term: "HTML Comment", definition: "Text not rendered/displayed by the browser: <!-- comment text here -->. Used for notes, documentation, and reminders inside the code." },
      { term: "Root Element", definition: "The <html> element that surrounds and contains the ENTIRE HTML document. All other elements are nested inside it." },
      { term: "<head> Section", definition: "The section of an HTML document containing METADATA — information about the page. Not visible to users. Contains: <title>, <meta>, <link>, <style>, <script> elements." },
      { term: "<body> Section", definition: "The section of an HTML document containing ALL VISIBLE content — text, headings, images, forms, tables, links. Everything the user sees goes here." },
      { term: "<meta> Element", definition: "An empty element in <head> providing metadata: character encoding (charset), viewport settings, keywords, description. Not visible to users." },
      { term: "Heading Tags", definition: "Six levels: <h1> through <h6>. <h1> is the largest and most important; <h6> is smallest. Headings create visual hierarchy on the page." },
      { term: "Paragraph Tag", definition: "<p>text</p> — defines a paragraph. Browsers automatically add space before and after each paragraph. A block-level element." },
      { term: "Line Break (<br />)", definition: "An empty element that inserts a single line break within text. Self-closing. Does not create a new paragraph — just moves to the next line." },
      { term: "Horizontal Rule (<hr />)", definition: "An empty element that creates a horizontal dividing line across the page. Used to separate content sections." },
      { term: "Block-Level Element", definition: "Takes up the full available width, always starts on a new line. Examples: <p>, <h1>-<h6>, <div>, <ul>, <ol>, <table>." },
      { term: "Inline Element", definition: "Does NOT start on a new line — flows within the text. Examples: <span>, <a>, <strong>, <em>, <img>, <b>, <i>." },
    ],
    keyConcepts: [
      {
        title: "Basic HTML5 Document Structure",
        points: [
          "<!DOCTYPE html> — MUST be the very first line; tells browser to use HTML5 rules",
          "<html lang='en'> — Root element; lang attribute specifies language of the page",
          "<head> — Contains metadata (NOT visible to users): title, meta, CSS links, scripts",
          "<title>Page Title</title> — Shows in browser tab, bookmarks, and search engine results",
          "<meta charset='UTF-8'> — Defines character encoding (supports all characters worldwide)",
          "<meta name='viewport' content='width=device-width, initial-scale=1.0'> — Responsive design for mobile",
          "<body> — Contains ALL visible page content (text, images, forms, tables, links)",
          "NOTE: Only ONE <html>, ONE <head>, and ONE <body> per document",
        ]
      },
      {
        title: "Six Rules for Syntactically Correct HTML",
        points: [
          "1. Documents must be well-formed (follow all structural rules)",
          "2. All tags must nest properly and NOT overlap (correct: <b><i>text</i></b>, wrong: <b><i>text</b></i>)",
          "3. Use all LOWERCASE for element and attribute names",
          "4. Always use closing tags for container elements",
          "5. Empty elements must use a closing forward slash: <br />, <img />, <input />",
          "6. All attribute values must be enclosed in quotation marks: src='photo.jpg'",
        ]
      },
      {
        title: "Core HTML Tags — Block Level",
        points: [
          "<h1> to <h6> — Headings: h1 is largest/most important, h6 is smallest",
          "<p> — Paragraph; block-level; browser adds space above and below",
          "<div> — Division/section container; block-level; generic container",
          "<ul> — Unordered list (bulleted) | <ol> — Ordered list (numbered)",
          "<li> — List item (used inside <ul> or <ol>)",
          "<table> — Table container | <tr> row | <td> cell | <th> header cell",
          "<form> — Form container | <input> — Form input field",
          "<hr /> — Horizontal rule/dividing line (empty element)",
          "<blockquote> — Block quotation from another source",
        ]
      },
      {
        title: "Core HTML Tags — Inline",
        points: [
          "<a href='url'> — Anchor/Hyperlink (inline element)",
          "<img src='file' alt='text' /> — Image (inline, empty element)",
          "<strong> — Important/bold text (SEMANTIC) | <b> — Bold (visual only)",
          "<em> — Emphasized/italic (SEMANTIC) | <i> — Italic (visual only)",
          "<span> — Generic inline container (like div but inline)",
          "<br /> — Line break (inline, empty element)",
          "<sub> — Subscript (H₂O) | <sup> — Superscript (x²)",
          "<small> — Smaller text | <mark> — Highlighted/marked text",
        ]
      },
      {
        title: "Color Coding in HTML/CSS",
        points: [
          "6 color specification methods: color names, #HEX, rgb(), hsl(), rgba(), hsla()",
          "HEX: #RRGGBB format — each pair is 0-9 and A-F. #FFFFFF=white, #000000=black",
          "#FF0000=red, #00FF00=green, #0000FF=blue, #FFFF00=yellow, #FF00FF=magenta, #00FFFF=cyan",
          "RGB: rgb(255, 0, 0) = red | rgb(0, 255, 0) = green | rgb(0, 0, 255) = blue",
          "HSL: Hue (0-360°), Saturation (0-100%), Lightness (0-100%)",
          "RGBA/HSLA: adds Alpha channel for transparency (0=transparent, 1=opaque)",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: 'Key Hex Color Codes to MEMORIZE',
        content: 'White=#FFFFFF | Black=#000000 | Red=#FF0000 | Green=#00FF00 | Blue=#0000FF | Magenta=#FF00FF | Cyan=#00FFFF | Yellow=#FFFF00. Pattern: Red is first pair, Green is second, Blue is last pair.'
      },
      {
        type: 'warning',
        title: 'Element vs Tag vs Attribute — CRITICAL',
        content: 'TAG = the markup in angle brackets (<p>). ELEMENT = start tag + content + end tag (<p>text</p>). ATTRIBUTE = modifier written INSIDE the opening tag (src="image.jpg", alt="text"). These are THREE different things!'
      },
      {
        type: 'tip',
        title: 'Container vs Empty Elements',
        content: 'CONTAINER elements enclose content (have open + close tags): <p>, <h1>-<h6>, <div>, <table>, <body>, <html>, <a>, <ul>, <ol>. EMPTY elements are self-closing (no content): <br />, <img />, <input />, <hr />, <meta />, <link />.'
      },
      {
        type: 'success',
        title: 'What Goes in <head> vs <body>',
        content: '<head> = METADATA (NOT visible): <title>, <meta>, <link rel="stylesheet">, <script>. <body> = ALL VISIBLE content: headings, paragraphs, images, links, forms, tables, divs. A common exam question!'
      },
      {
        type: 'extra',
        title: 'Block vs Inline Elements',
        content: 'BLOCK elements: start on new line, take full width — <p>, <h1>-<h6>, <div>, <ul>, <ol>, <table>, <form>. INLINE elements: flow within text — <span>, <a>, <strong>, <em>, <img>, <b>, <i>, <br />, <sub>, <sup>.'
      }
    ],
    tables: [
      {
        caption: "Common Color Hex Codes",
        headers: ["Color", "HEX Code", "RGB Values"],
        rows: [
          ["White", "#FFFFFF", "rgb(255, 255, 255)"],
          ["Black", "#000000", "rgb(0, 0, 0)"],
          ["Red", "#FF0000", "rgb(255, 0, 0)"],
          ["Green", "#00FF00", "rgb(0, 255, 0)"],
          ["Blue", "#0000FF", "rgb(0, 0, 255)"],
          ["Cyan", "#00FFFF", "rgb(0, 255, 255)"],
          ["Yellow", "#FFFF00", "rgb(255, 255, 0)"],
          ["Magenta", "#FF00FF", "rgb(255, 0, 255)"],
        ]
      },
      {
        caption: "HTML Document Structure — Elements in Order",
        headers: ["Element", "Where", "Purpose"],
        rows: [
          ["<!DOCTYPE html>", "Before <html>", "Declares HTML version (HTML5)"],
          ["<html lang='en'>", "Root", "Root element; contains everything; lang specifies language"],
          ["<head>", "Inside <html>", "Metadata section — NOT visible to users"],
          ["<title>", "Inside <head>", "Page title shown in browser tab and bookmarks"],
          ["<meta charset='UTF-8'>", "Inside <head>", "Character encoding (supports all international characters)"],
          ["<meta name='viewport'>", "Inside <head>", "Responsive scaling for mobile devices"],
          ["<link rel='stylesheet'>", "Inside <head>", "Links external CSS file"],
          ["<body>", "Inside <html>", "All visible page content"],
        ]
      },
      {
        caption: "Block vs Inline HTML Elements",
        headers: ["Type", "Behavior", "Examples"],
        rows: [
          ["Block", "Starts on new line, takes full width", "<p>, <h1>-<h6>, <div>, <ul>, <ol>, <table>, <form>"],
          ["Inline", "Flows within text, does NOT start new line", "<a>, <span>, <strong>, <em>, <img>, <b>, <i>, <br />"],
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
      "How are HTML comments written? What syntax do they use?",
      "Give the HEX codes for white, black, red, green, blue, cyan, yellow, and magenta.",
      "What does DTD stand for and who is the authoritative source?",
      "What is the difference between block-level and inline elements?",
      "Give 4 examples of empty (self-closing) elements.",
      "What does the <meta charset='UTF-8'> element do?",
      "What is the purpose of the lang attribute on the <html> element?",
    ],
    commonMistakes: [
      "Writing element names in UPPERCASE (<P>, <DIV> instead of <p>, <div>)",
      "Not closing tags (forgetting </p>, </div>, </body>, etc.)",
      "Confusing element with tag — ELEMENT = both tags + content",
      "Not quoting attribute values (src=photo.jpg instead of src='photo.jpg')",
      "Putting visible content in the <head> section (it belongs in <body>)",
      "Forgetting to add the <!DOCTYPE html> declaration as the FIRST line",
      "Overlapping tags incorrectly: <b><i>text</b></i> is WRONG, should be <b><i>text</i></b>",
      "Saying DOCTYPE is a tag — it is a DECLARATION/INSTRUCTION not an HTML tag",
    ],
    quickRevision: [
      "<!DOCTYPE html> → FIRST line; tells browser to use HTML5 rules",
      "<html lang='en'> → root element containing everything",
      "<head> → METADATA (NOT visible): title, meta, CSS links, scripts",
      "<body> → ALL visible content (text, images, forms, tables, links)",
      "Container: <p>text</p> | Empty (self-closing): <br />, <img />, <input />",
      "6 rules: well-formed | proper nesting | lowercase | close tags | empty=self-close | values in quotes",
      "Block: starts new line (<p>, <div>, <h1>) | Inline: flows with text (<span>, <a>, <strong>)",
      "Colors: name | #HEX | rgb() | hsl() | rgba() | hsla()",
      "#FFFFFF=white, #000000=black, #FF0000=red, #00FF00=green, #0000FF=blue",
      "Attribute = modifier INSIDE opening tag | Comment = <!-- text -->",
      "W3C = authoritative source for HTML DTDs",
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
      },
      {
        title: "HTML Hyperlinks — Types and Syntax",
        points: [
          "Basic link: <a href='page.html'>Click here</a>",
          "EXTERNAL link: <a href='https://www.google.com'>Google</a> — absolute URL with protocol",
          "INTERNAL link: <a href='about.html'>About</a> — relative URL within same site",
          "EMAIL link: <a href='mailto:test@email.com'>Email us</a> — opens email client",
          "ANCHOR link (same page): <a href='#section1'>Jump to Section</a> — links to id='section1'",
          "target='_blank' — opens link in a NEW tab/window",
          "target='_self' — opens link in SAME tab (default)",
          "target='_parent' — opens in parent frame",
          "target='_top' — opens in full body of window",
          "title='hint text' — shows tooltip on hover",
          "Anchor target: <h2 id='section1'>Section Title</h2> — the destination",
        ]
      },
      {
        title: "HTML File Paths — Absolute vs Relative",
        points: [
          "ABSOLUTE path: complete URL or path from root. Example: https://example.com/images/photo.jpg",
          "RELATIVE path: path relative to current file's location",
          "Same folder: <img src='photo.jpg'> — file in same directory",
          "Child folder: <img src='images/photo.jpg'> — file inside subdirectory",
          "Parent folder: <img src='../photo.jpg'> — go up ONE folder level",
          "Two levels up: <img src='../../photo.jpg'>",
          "From root: <img src='/images/photo.jpg'> — starts at domain root",
          "Use relative paths for internal resources — works regardless of domain",
        ]
      },
      {
        title: "HTML Multimedia Elements",
        points: [
          "IMAGE: <img src='photo.jpg' alt='description' width='300' height='200' />",
          "alt attribute — REQUIRED for accessibility: shown when image fails to load, read by screen readers",
          "width and height — specify dimensions in pixels",
          "AUDIO: <audio controls><source src='sound.mp3' type='audio/mpeg'></audio>",
          "VIDEO: <video controls width='400'><source src='clip.mp4' type='video/mp4'></video>",
          "controls attribute — shows play/pause/volume controls",
          "autoplay — plays automatically on page load",
          "loop — repeats media when finished",
          "muted — starts with no sound",
          "IFRAME: <iframe src='https://www.example.com' width='600' height='400'></iframe>",
          "iframe embeds another web page within your page",
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
      { term: "<table>", definition: "The container element that establishes a table. Must contain <tr> rows as direct children (or inside <thead>/<tbody>/<tfoot>)." },
      { term: "<tr> (Table Row)", definition: "Defines a row in a table. Contains <td> or <th> cells as direct children." },
      { term: "<td> (Table Data)", definition: "Defines individual data cells in a table row. Contains the actual data content." },
      { term: "<th> (Table Header)", definition: "Defines header cells for a column or row. Typically bold and centered by default. Has semantic meaning for accessibility." },
      { term: "colspan", definition: "Attribute that makes a table cell span multiple COLUMNS horizontally (spans to the RIGHT). Syntax: <td colspan='3'>." },
      { term: "rowspan", definition: "Attribute that makes a table cell span multiple ROWS vertically (spans DOWNWARD). Syntax: <td rowspan='4'>." },
      { term: "<caption>", definition: "Provides a short description of the table's contents. Placed immediately after the <table> tag." },
      { term: "<thead>, <tbody>, <tfoot>", definition: "Semantic table sectioning elements. <thead> groups header rows, <tbody> groups body rows, <tfoot> groups footer rows. Improve structure, CSS styling, and accessibility." },
      { term: "HTML Form", definition: "Part of a web page with areas for users to enter or choose information. The collected data is then processed by server-side scripts (PHP, ASP.net, etc.)." },
      { term: "<form> element", definition: "The container element for all form fields. Key attributes: action (where to send data), method (GET or POST), name (identifies the form)." },
      { term: "<input />", definition: "The MOST USED form element. The 'type' attribute specifies what control is created (text, password, submit, file, checkbox, radio, hidden, etc.)." },
      { term: "<textarea>", definition: "A multi-line text input field. Has rows and cols attributes to specify dimensions. Has opening and closing tags." },
      { term: "<select> and <option>", definition: "<select> creates a dropdown list. <option> defines each item in the dropdown. The selected attribute marks the default choice." },
      { term: "<label>", definition: "Describes/labels an input field. The 'for' attribute links it to an input's 'id'. Clicking the label focuses the associated input." },
      { term: "action attribute", definition: "Form attribute that specifies WHERE the form data is sent when submitted. Usually a server-side script URL (e.g., action='process.php')." },
      { term: "method attribute", definition: "Form attribute that specifies HOW form data is sent. GET appends data to URL (visible). POST sends in HTTP body (more secure, invisible). Default: GET." },
      { term: "Sequence (Programming Construct)", definition: "Executing instructions ONE AFTER ANOTHER from top to bottom. The default flow of a program." },
      { term: "Selection (Programming Construct)", definition: "Executing DIFFERENT code based on a condition — if/else, switch/case. A decision-making construct." },
      { term: "Iteration (Programming Construct)", definition: "Repeating a block of code multiple times — for loops, while loops. Also called LOOPING." },
      { term: "Server-side Script", definition: "Code (PHP, ASP.net, Node.js) that runs on the WEB SERVER before the result is sent to the browser. Used to process form data, query databases, generate dynamic pages." },
      { term: "Client-side Script", definition: "Code (JavaScript) that runs in the USER'S BROWSER after the page is loaded. Used for form validation, DOM manipulation, interactivity." },
    ],
    keyConcepts: [
      {
        title: "Table Structure — Full Hierarchy",
        points: [
          "<table> — wraps everything; establishes the table",
          "<caption> — table description (placed right after <table> tag)",
          "<thead> — semantic header section (contains header rows)",
          "<tbody> — semantic body section (contains data rows)",
          "<tfoot> — semantic footer section (contains footer rows)",
          "<tr> — defines a table row (inside thead/tbody/tfoot)",
          "<th> — header cell: bold, centered by default; semantic meaning",
          "<td> — data cell: contains actual data content",
          "border='1' attribute adds visible borders (use CSS for better control)",
          "width='n%' specifies table width (use percentages for responsiveness)",
          "CSS: border-collapse: collapse — merges adjacent borders into one",
          "CSS: tr:hover — adds hover effect on entire row",
        ]
      },
      {
        title: "Spanning Cells — colspan and rowspan",
        points: [
          "colspan='n' — cell spans n COLUMNS horizontally (to the RIGHT)",
          "rowspan='n' — cell spans n ROWS vertically (DOWNWARD)",
          "colspan='3' means the cell occupies 3 column spaces",
          "rowspan='4' means the cell occupies 4 row spaces downward",
          "Syntax: <td colspan='3'>Merged Cell</td>",
          "Syntax: <td rowspan='4'>Side Cell</td>",
          "When using rowspan/colspan, remove the displaced cells from the code",
          "Use spanning to create merged header cells or side labels in tables",
        ]
      },
      {
        title: "HTML Form Attributes and Structure",
        points: [
          "<form action='script.php' method='post' name='myForm'>",
          "action — WHERE form data goes (URL of server-side script). Required.",
          "method='GET' — appends data to URL as query string (visible, limit ~2000 chars)",
          "method='POST' — sends data in request body (more secure, no size limit) — preferred",
          "name — identifies the form for scripting purposes",
          "enctype='multipart/form-data' — REQUIRED for file uploads",
          "Every input needs a 'name' attribute to identify data on the server",
          "<input type='submit' value='Send Form' /> — submits form to action URL",
          "<input type='reset' value='Clear' /> — resets all fields to default values",
        ]
      },
      {
        title: "HTML Form Input Types — Complete List",
        points: [
          "type='text' — single line text box (most common)",
          "type='password' — text box with characters masked for security",
          "type='email' — text box with email format validation",
          "type='number' — numeric input (can specify min/max/step)",
          "type='radio' — radio button: ONE selection only from a group (same name=)",
          "type='checkbox' — checkbox: MULTIPLE selections allowed independently",
          "type='submit' — button that submits the form data to action URL",
          "type='reset' — button that resets all form fields to their default values",
          "type='file' — file browser + text box for file uploads",
          "type='hidden' — NOT displayed; passes data invisibly to server",
          "type='button' — generic clickable button (no default action)",
          "type='color' — color picker widget",
          "type='range' — slider control for numeric ranges",
          "type='date' — date picker calendar widget",
          "type='tel' — telephone number input",
          "type='url' — URL input with validation",
        ]
      },
      {
        title: "Three Fundamental Programming Constructs",
        points: [
          "ALL programs are built from exactly three constructs: Sequence, Selection, and Iteration",
          "1. SEQUENCE — instructions execute one after another from top to bottom (default flow)",
          "2. SELECTION — different code runs based on a condition. Examples: if/else, if/else if/else, switch/case, ternary (?:)",
          "3. ITERATION (LOOPING) — a block of code repeats multiple times. Examples: for loop, while loop, do...while loop",
          "if statement syntax: if (condition) { code } else { code }",
          "for loop syntax: for (let i = 0; i < 10; i++) { code }",
          "while loop syntax: while (condition) { code }",
          "do...while always executes AT LEAST ONCE before checking condition",
          "These constructs apply to JavaScript, PHP, and ALL programming languages",
        ]
      },
      {
        title: "Server-side vs Client-side Scripting",
        points: [
          "CLIENT-SIDE (JavaScript): runs in the USER'S BROWSER, after page loads",
          "CLIENT-SIDE uses: form validation before submission, DOM manipulation, animations, interactivity",
          "CLIENT-SIDE source code is VISIBLE to user (can be viewed with DevTools)",
          "SERVER-SIDE (PHP, ASP.net, Node.js): runs on the WEB SERVER, before response is sent",
          "SERVER-SIDE uses: process form data, query databases, generate dynamic pages, user authentication",
          "SERVER-SIDE code is NOT visible to users (only the HTML output is sent)",
          "HTML forms COLLECT data → SERVER-SIDE scripts PROCESS the data",
          "PHP is the most popular server-side scripting language for web forms",
          "After processing, server sends back an HTML response to the browser",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: 'Table Spanning — MEMORIZE',
        content: 'colspan = spans COLUMNS (HORIZONTAL, to the RIGHT). rowspan = spans ROWS (VERTICAL, DOWNWARD). colspan="3" = cell takes 3 column spaces. rowspan="4" = cell takes 4 row spaces downward. Always remove the displaced cells!'
      },
      {
        type: 'warning',
        title: 'radio vs checkbox — KEY DIFFERENCE',
        content: 'type="radio" = ONE selection only from a group (same name attribute = same group). type="checkbox" = MULTIPLE independent selections allowed. This distinction is a very common exam question!'
      },
      {
        type: 'tip',
        title: 'form method GET vs POST',
        content: 'GET = appends data to URL (visible in address bar, limited size ~2000 chars, easily bookmarked). POST = sends data in HTTP request body (more secure, no size limit, cannot be bookmarked). Use POST for sensitive data like passwords!'
      },
      {
        type: 'success',
        title: 'Three Programming Constructs',
        content: 'All programs use EXACTLY THREE constructs: (1) SEQUENCE — code runs top to bottom. (2) SELECTION — if/else/switch for decisions. (3) ITERATION — for/while loops for repetition. EVERYTHING in programming is one of these three!'
      },
      {
        type: 'extra',
        title: 'type="hidden" Input',
        content: 'Hidden inputs (<input type="hidden">) are NOT displayed to users but ARE submitted with the form. Used to pass extra data to the server (e.g., user ID, form version). Very common in web development — know this for the exam!'
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
      "What are the three programming constructs? Describe each.",
      "What is the difference between method='GET' and method='POST' in HTML forms?",
      "What does the action attribute of a form do?",
      "What is the difference between a client-side script and a server-side script?",
      "Write the HTML for a form that collects a name and email address and submits via POST.",
    ],
    commonMistakes: [
      "Confusing colspan (COLUMNS/horizontal/RIGHT) with rowspan (ROWS/vertical/DOWN)",
      "Forgetting to remove displaced cells when using rowspan or colspan",
      "Thinking radio buttons allow multiple selections — only checkboxes do",
      "Not specifying table width in percentages (use % not px for responsiveness)",
      "Confusing the action (WHERE data goes) and method (HOW data is sent) attributes",
      "Thinking the third programming construct is 'function' — it is ITERATION (looping)",
      "Confusing GET (visible in URL) with POST (in HTTP body) for form methods",
    ],
    quickRevision: [
      "Table structure: <table> → <thead>/<tbody>/<tfoot> → <tr> → <th>/<td>",
      "colspan = HORIZONTAL span (to the RIGHT) | rowspan = VERTICAL span (DOWNWARD)",
      "<caption> = placed right after <table> tag, describes table",
      "Most used form element: <input /> with type attribute",
      "radio = ONE selection from group (same name) | checkbox = MULTIPLE selections",
      "hidden input = passes data to server without displaying to user",
      "action = WHERE data goes | method = HOW (GET=URL/visible, POST=body/secure)",
      "3 programming constructs: SEQUENCE (top→bottom), SELECTION (if/else), ITERATION (loops)",
      "Server-side: PHP, ASP.net, Node.js — run on server, code not visible to user",
      "Client-side: JavaScript — runs in browser, code visible to user",
      "HTML forms COLLECT data → server-side scripts PROCESS the data",
      "border-collapse: collapse = merges adjacent borders",
    ],
  },
  {
    id: 6,
    title: "CSS Fundamentals — Selectors & Styling",
    description: "CSS overview, types of style sheets, CSS rule structure, selectors (tag, class, ID, descendant, pseudo-class, universal), and background properties.",
    weeksCovered: "Weeks 6-7",
    definitions: [
      { term: "CSS Rule/Rule Set", definition: "A complete CSS statement telling browsers how to render specific HTML elements. Format: selector { property: value; property: value; }" },
      { term: "Selector", definition: "The part of a CSS rule that TARGETS or selects specific HTML elements to apply styles to. Must match HTML element, class, or ID." },
      { term: "Declaration Block", definition: "Everything between the curly brackets {} in a CSS rule — contains one or more property:value pairs (declarations), each ending with a semicolon." },
      { term: "CSS Property", definition: "The styling characteristic to be applied (e.g., color, font-size, margin, background-color, text-align)." },
      { term: "CSS Value", definition: "The specific setting for a property (e.g., blue, 14px, 10%, bold). Format: property: value; (semicolon required between declarations)." },
      { term: "ID Selector (#)", definition: "Preceded by # sign. Targets the ONE unique element with that ID. Specificity score: 100. Example: #header { } targets <div id='header'>." },
      { term: "Class Selector (.)", definition: "Preceded by . (dot). Can be applied to MULTIPLE elements. Specificity score: 10. Example: .note { } targets all elements with class='note'." },
      { term: "Universal Selector (*)", definition: "Selects ALL elements on the page. Specificity score: 0. Most commonly used to remove default margins/padding: * { margin: 0; padding: 0; }." },
      { term: "Descendant Selector", definition: "Selects elements that are descendants (children/grandchildren) of a specific ancestor. Uses a space between selectors. Example: blockquote p { } selects all <p> inside <blockquote>." },
      { term: "Pseudo-class", definition: "Defines a special STATE of an element. Uses colon (:). Examples: a:hover (link when hovered), a:visited (visited link), p:first-child." },
      { term: "Pseudo-element", definition: "Applies to a PART of an element. Uses double colon (::). Examples: p::first-letter, p::before, p::after." },
      { term: "Specificity", definition: "The algorithm determining which CSS rule WINS when multiple rules target the same element. Hierarchy: Inline(1000) > ID(100) > Class(10) > Element(1)." },
      { term: "Cascade", definition: "When specificity is EQUAL, the LATER/LAST CSS rule in the file wins. This is the 'cascading' part of CSS." },
      { term: "CSS Link Pseudo-classes", definition: "Four states of <a> elements: a:link (unvisited, blue), a:visited (visited, purple), a:hover (mouse over), a:active (being clicked). MUST be in L-V-H-A order." },
      { term: "CSS background-color", definition: "Sets the background color of an element. Example: background-color: #333; Can use color names, HEX, RGB, or transparent." },
      { term: "CSS background-image", definition: "Sets a background image. Example: background-image: url('image.jpg'); Default: repeats in both directions." },
      { term: "CSS font-family", definition: "Specifies the font. Use font stacks with fallbacks. Example: font-family: 'Arial', sans-serif; Always end with a generic family (serif, sans-serif, monospace)." },
      { term: "CSS font-size", definition: "Sets text size. Can use absolute (16px, 12pt) or relative (em, rem, %) units." },
      { term: "CSS font-weight", definition: "Controls text boldness. Values: normal, bold, bolder, lighter, or numeric (100-900). 700 = bold." },
    ],
    keyConcepts: [
      {
        title: "Three Types of Style Sheets — Full Detail",
        points: [
          "EXTERNAL: Separate .css file. Linked in <head> with <link rel='stylesheet' href='style.css'>. Best for sites with many pages.",
          "Benefits of External CSS: (1) All styling in limited files, (2) Bandwidth savings, (3) Content separated from presentation, (4) Different styles for different media, (5) Change entire site by modifying ONE file",
          "INTERNAL (Embedded): <style> tag inside <head>. Applies ONLY to that single page. Used when one page has a unique style different from others.",
          "INLINE: style attribute directly on element (<p style='color:red'>). Highest specificity. Hardest to maintain — mixes content with presentation. Use sparingly.",
          "Priority order (HIGHEST to LOWEST): Inline > Internal > External > Browser default",
        ]
      },
      {
        title: "All CSS Selector Types",
        points: [
          "Tag/Element: p { color: blue; } — targets ALL <p> elements",
          "Class: .note { color: red; } — targets elements with class='note' (multiple elements)",
          "ID: #header { background: navy; } — targets ONE unique element with id='header'",
          "Universal: * { margin: 0; } — targets ALL elements",
          "Descendant: blockquote p { } — all <p> inside <blockquote>",
          "Pseudo-class: a:hover { } — state-based (when link is hovered)",
          "Pseudo-element: p::first-letter { } — part of element",
          "Grouping: h1, h2, h3 { } — applies same rule to multiple selectors",
        ]
      },
      {
        title: "CSS Link States — MUST Know Order",
        points: [
          "Links have FOUR pseudo-class states that can all be styled with CSS",
          "a:link — unvisited link (default: blue, underlined)",
          "a:visited — link already clicked by user (default: purple)",
          "a:hover — link when mouse is hovering over it (default: cursor changes)",
          "a:active — link being clicked right now (default: red)",
          "CRITICAL: Must be declared in L-V-H-A order! (Think: Love Venus Hate Apples)",
          "Example: a:hover { color: orange; text-decoration: none; }",
          "text-decoration: none — removes default underline from links",
        ]
      },
      {
        title: "CSS Specificity Hierarchy",
        points: [
          "Inline style (style=''): 1000 points — STRONGEST",
          "ID selector (#name): 100 points",
          "Class selector (.name): 10 points",
          "Element/Tag selector (p, div): 1 point — WEAKEST",
          "Universal selector (*): 0 points",
          "When specificity is EQUAL, the LAST rule wins (cascade)",
          "!important overrides ALL specificity — use only when necessary",
          "Example: p{blue}=1, .note{red}=10, #main{green}=100 → GREEN wins",
        ]
      },
      {
        title: "CSS Font and Text Properties",
        points: [
          "font-family: 'Arial', sans-serif; — specify font with fallback stack",
          "font-size: 16px; — text size (px, em, rem, pt)",
          "font-weight: bold; OR 700; — boldness (normal=400, bold=700)",
          "font-style: italic; OR normal; — italic or normal",
          "color: #333; — text color (not background color!)",
          "text-align: left | right | center | justify;",
          "text-decoration: none | underline | overline | line-through;",
          "line-height: 1.5; — spacing between lines",
          "letter-spacing: 0.1em; — spacing between characters",
          "text-transform: uppercase | lowercase | capitalize;",
        ]
      },
      {
        title: "CSS Background Properties",
        points: [
          "background-color: #333; — solid color background",
          "background-image: url('image.jpg'); — image background",
          "background-repeat: repeat | repeat-x | repeat-y | no-repeat; — how image repeats",
          "background-position: center | top left | 50% 50%; — image position",
          "background-size: cover | contain | 100px 200px; — image size",
          "background-attachment: scroll | fixed; — scroll with page or stay fixed",
          "Shorthand: background: color image repeat position / size;",
        ]
      }
    ],
    highlights: [
      {
        type: 'info',
        title: 'CSS Specificity Scores (MEMORIZE)',
        content: 'Inline style = 1000 | ID selector (#) = 100 | Class selector (.) = 10 | Element selector = 1 | Universal (*) = 0. Higher score WINS. When equal, LAST rule in file wins. Example: p{1}+.note{10}+#main{100} → #main style WINS.'
      },
      {
        type: 'warning',
        title: 'CSS Link States — LVHA Order is REQUIRED',
        content: 'Link pseudo-classes MUST be declared in this order: a:link → a:visited → a:hover → a:active. Remember: "Love Venus Hate Apples". Writing them in wrong order causes unexpected visual behavior!'
      },
      {
        type: 'tip',
        title: 'Benefits of External CSS',
        content: '(1) All styling in limited style sheets (2) Bandwidth savings (3) Content separated from presentation (4) Different styles for different media (screen vs print) (5) Change entire site by modifying ONE .css file. Best practice for any real project!'
      },
      {
        type: 'success',
        title: 'ID vs Class — When to Use Each',
        content: 'ID (#): use for ONE unique element per page (site header, main nav). Specificity = 100. Class (.): use for MULTIPLE elements that share a style (buttons, cards). Specificity = 10. NEVER use the same ID twice on a page!'
      },
      {
        type: 'extra',
        title: 'div vs span — Critical Distinction',
        content: '<div> = BLOCK-LEVEL container (creates new line, takes full width). <span> = INLINE container (flows within text). Both are generic containers designed for use with CSS. Use <div> for sections/regions; <span> for inline text styling.'
      }
    ],
    tables: [
      {
        caption: "CSS Selector Types — Full Reference",
        headers: ["Selector Type", "Syntax Example", "What It Targets", "Specificity Score"],
        rows: [
          ["Tag/Element", "p { }", "All <p> elements", "1"],
          ["Class", ".note { }", "All elements with class='note'", "10"],
          ["ID", "#header { }", "ONE element with id='header'", "100"],
          ["Universal", "* { }", "ALL elements on the page", "0"],
          ["Descendant", "div p { }", "All <p> inside any <div>", "1+1=2"],
          ["Pseudo-class", "a:hover { }", "Anchor when mouse hovers", "10+1=11"],
          ["Inline", "style='color:red'", "That specific element only", "1000"],
          ["Grouping", "h1, h2, h3 { }", "All h1, h2, and h3 elements", "1 each"],
        ]
      },
      {
        caption: "Types of CSS Style Sheets",
        headers: ["Type", "Location/Syntax", "Best Used When", "Priority"],
        rows: [
          ["External", "<link rel='stylesheet' href='style.css'>", "Styling multiple pages", "Lowest of three"],
          ["Internal", "<style> tag in <head>", "One page has unique style", "Middle"],
          ["Inline", "style='' attribute on element tag", "Single occurrence", "Highest of three"],
        ]
      },
      {
        caption: "CSS Link States (LVHA Order)",
        headers: ["State", "CSS Selector", "When It Applies", "Default Appearance"],
        rows: [
          ["1. Link", "a:link { }", "Unvisited link", "Blue, underlined"],
          ["2. Visited", "a:visited { }", "Link already clicked", "Purple, underlined"],
          ["3. Hover", "a:hover { }", "Mouse over the link", "Cursor changes"],
          ["4. Active", "a:active { }", "Link being clicked right now", "Red"],
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
      "Given p{blue}, .text{red}, #main{green} on the same element — which rule applies? Why?",
      "What is the difference between a pseudo-class and a pseudo-element?",
      "What is the difference between <div> and <span>?",
      "What are the four CSS link states and in what order must they be declared?",
      "What does a:hover do? Write the CSS syntax.",
      "What is the difference between background-color and background-image?",
      "List 5 CSS font/text properties and their functions.",
      "When specificity is equal, which CSS rule is applied?",
    ],
    commonMistakes: [
      "Confusing the . (class) and # (ID) selectors",
      "Thinking ID and class selectors have the same specificity (ID=100, class=10)",
      "Forgetting that CSS declarations end with SEMICOLONS",
      "Not knowing the L-V-H-A order for link pseudo-classes",
      "Using ID selectors for elements that appear multiple times on the page",
      "Confusing color (text color) with background-color (background of element)",
      "Forgetting that when specificity is EQUAL, the LAST rule wins",
      "Writing descendant selectors with a comma instead of space (div,p is grouping, not descendant)",
    ],
    quickRevision: [
      "CSS = Cascading Style Sheets (controls PRESENTATION — how pages look)",
      "3 types: External (<link> to .css file) | Internal (<style> in <head>) | Inline (style='' on element)",
      "Rule = selector { property: value; property: value; }",
      "Specificity: inline(1000) > #id(100) > .class(10) > element(1) > *(0)",
      "Equal specificity → LAST rule in file wins (cascade)",
      "4 Link states (LVHA): a:link → a:visited → a:hover → a:active",
      "* = universal selector (all elements) | div p = descendant (all p inside div)",
      ":hover = when mouse is over | :visited = already clicked | :active = being clicked",
      "Class (.name) = MULTIPLE elements | ID (#name) = ONE unique element",
      "Benefits of external CSS: one file controls whole site, separates content from presentation",
    ],
  },
  {
    id: 7,
    title: "CSS Units, Positioning & Layout",
    description: "Absolute vs relative CSS units, all position values (static, relative, fixed, absolute, sticky), CSS specificity in depth, and CSS website layout design.",
    weeksCovered: "Weeks 8-9",
    definitions: [
      { term: "CSS Units", definition: "Measurements used for CSS properties (width, margin, font-size, etc.). Cannot have whitespace between number and unit (e.g., '12px' is valid, '12 px' is INVALID). Exception: 0 needs no unit." },
      { term: "Absolute Units", definition: "Fixed units that don't change with screen size or context. Best for print. Examples: px (most common), cm, mm, in, pt (1/72 inch), pc (12pt)." },
      { term: "Relative Units", definition: "Units relative to another measurement. Scale between screen sizes — ideal for responsive design. Examples: em, rem, vw, vh, %, fr." },
      { term: "px (pixel)", definition: "Most common absolute unit for screen design. 1px = 1/96th of 1 inch. Best for borders, shadows, fixed dimensions." },
      { term: "em", definition: "Relative to the font-size of the PARENT element. 1em = parent's font-size. Compounding can occur in nested elements." },
      { term: "rem", definition: "Relative to the font-size of the ROOT (<html>) element. More predictable than em — doesn't compound." },
      { term: "vw / vh", definition: "Viewport width/height. 1vw = 1% of viewport width. 100vw = full viewport width. 1vh = 1% of viewport height. 100vh = full viewport height." },
      { term: "fr (fraction)", definition: "Fractional unit used exclusively for CSS Grid. 1fr = 1 part of available space. grid-template-columns: 1fr 2fr gives columns in 1:2 ratio." },
      { term: "CSS Box Model", definition: "Every HTML element is a rectangular box with FOUR layers from inside out: Content → Padding → Border → Margin. Total element size includes all four layers." },
      { term: "Content", definition: "The innermost box — contains the actual text, images, or other content. Controlled by width and height properties." },
      { term: "Padding", definition: "Transparent space INSIDE the border, between content and border. Adds to element's visual size. Background color shows through padding." },
      { term: "Border", definition: "A line surrounding the padding and content. Can have width, style, and color. Example: border: 1px solid black;" },
      { term: "Margin", definition: "Transparent space OUTSIDE the border. Creates separation between elements. Does NOT show the element's background." },
      { term: "box-sizing: border-box", definition: "Makes width/height include padding and border (NOT margin). Easier to work with — the element won't grow larger than specified width." },
      { term: "position: static", definition: "DEFAULT for all elements. Follows normal document flow. top/left/right/bottom have NO effect on static elements." },
      { term: "position: relative", definition: "Positioned relative to its OWN NORMAL position. top/left/right/bottom moves it from its natural position. Still occupies its original space." },
      { term: "position: fixed", definition: "Positioned relative to the VIEWPORT (browser window). STAYS IN PLACE during scrolling. Does NOT leave a gap (removed from flow)." },
      { term: "position: absolute", definition: "Positioned relative to nearest ANCESTOR that has a non-static position. If none exists, uses document body/html. REMOVED from normal flow — does not leave a gap." },
      { term: "position: sticky", definition: "Acts RELATIVE until the user scrolls past a threshold, then acts FIXED (sticks). Requires at least ONE of: top, right, bottom, or left." },
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
      },
      {
        title: "CSS Box Model — Full Detail",
        points: [
          "Every HTML element = a rectangular box with 4 layers",
          "CONTENT — innermost: actual text/images; width and height properties control it",
          "PADDING — between content and border; transparent; background shows through; adds to visual size",
          "BORDER — surrounds padding; has: width, style (solid/dashed/dotted), color",
          "MARGIN — outside border; creates space between elements; always transparent",
          "Order from inside out: Content → Padding → Border → Margin",
          "Default: Total width = content width + left/right padding + left/right border",
          "box-sizing: border-box — width/height include padding and border (NOT margin). EASIER to use!",
          "Margin shorthand: margin: top right bottom left; (clockwise from top)",
          "margin: auto — centers block elements horizontally",
          "Padding shorthand: padding: top right bottom left;",
        ]
      },
      {
        title: "Flexbox — Key Properties",
        points: [
          "Enable: display: flex; on the container element",
          "flex-direction: row (default) | row-reverse | column | column-reverse",
          "justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly (main axis)",
          "align-items: stretch | flex-start | flex-end | center | baseline (cross axis)",
          "flex-wrap: nowrap (default) | wrap | wrap-reverse",
          "gap: 20px — spacing between flex items",
          "flex: 1 — makes item grow to fill available space",
          "Best for: navigation bars, centering content, cards in a row",
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
      "Explain all 5 CSS position values with examples of when each is used.",
      "What is the difference between position:fixed and position:absolute?",
      "For position:sticky to work, what additional property must you specify?",
      "What does 100vh and 100vw represent?",
      "What is the difference between em and rem?",
      "What is the fr unit used for?",
      "Explain the CSS Box Model and its four components in order from inside to outside.",
      "What is the difference between margin and padding?",
      "What does box-sizing: border-box do?",
      "What is the difference between Flexbox and CSS Grid?",
      "Why can't you put a space between a CSS value and its unit?",
      "Write the CSS to center a div using flexbox.",
      "What is the shorthand property order for margin/padding?",
    ],
    commonMistakes: [
      "Thinking position:fixed stays with its parent — it's relative to the VIEWPORT",
      "Forgetting position:sticky requires top/right/bottom/left value to work",
      "Writing '12 px' with a space — CSS units CANNOT have spaces (except 0)",
      "Confusing em (relative to PARENT) with rem (relative to ROOT element)",
      "Using absolute units (px) for all sizing in responsive web design — use relative units",
      "Confusing padding (INSIDE border, shows background) with margin (OUTSIDE border, transparent)",
      "Not using box-sizing: border-box — causes elements to be larger than expected width",
    ],
    quickRevision: [
      "Absolute units: px, cm, mm, in, pt (1/72in), pc (12pt) — fixed, don't scale",
      "Relative units: em (parent), rem (root), vw (viewport width %), vh (viewport height %), %, fr (grid)",
      "100vw = full viewport width | 100vh = full viewport height",
      "em = parent font-size | rem = root (<html>) font-size (more consistent)",
      "NO SPACE between value and unit: 12px ✓, 12 px ✗ (0 is the exception)",
      "5 position values: static(default) | relative(own position) | fixed(viewport) | absolute(ancestor) | sticky(relative→fixed)",
      "fixed → NO gap, stays during scroll | absolute → NO gap, scrolls with ancestor",
      "sticky REQUIRES: top, right, bottom, or left value",
      "Box Model (inside→out): CONTENT → PADDING → BORDER → MARGIN",
      "box-sizing: border-box — width includes padding + border (recommended)",
      "margin: auto — centers block element horizontally",
      "padding shows background, margin is always transparent",
      "Flexbox = 1D layout | Grid = 2D layout",
      "display: flex → justify-content (main axis), align-items (cross axis)",
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
