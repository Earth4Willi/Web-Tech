export interface QuizQuestion {
  id: number;
  unit: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // UNIT 1 - Web Technologies Overview
  {
    id: 1, unit: 1,
    question: "What does the acronym HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Hyperlink Text Management Language"],
    correct: 0,
    explanation: "HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages."
  },
  {
    id: 2, unit: 1,
    question: "Who invented the World Wide Web?",
    options: ["Bill Gates and Paul Allen", "Tim Berners-Lee and Robert Cailliau", "Brendan Eich and Netscape", "Rasmus Lerdorf and IBM"],
    correct: 1,
    explanation: "The WWW was invented by Tim Berners-Lee and Robert Cailliau, researchers at CERN in Geneva, Switzerland in 1989."
  },
  {
    id: 3, unit: 1,
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Styling System", "Central Style Structure"],
    correct: 1,
    explanation: "CSS stands for Cascading Style Sheets. It is a style language used to describe the presentation of HTML documents."
  },
  {
    id: 4, unit: 1,
    question: "JavaScript was originally created by whom?",
    options: ["Tim Berners-Lee", "Rasmus Lerdorf", "Brendan Eich", "Linus Torvalds"],
    correct: 2,
    explanation: "JavaScript was created by Brendan Eich at Netscape and introduced in December 1995, initially named 'LiveScript'."
  },
  {
    id: 5, unit: 1,
    question: "What does AJAX stand for?",
    options: ["Asynchronous JavaScript and XML", "Advanced JavaScript and XHTML", "Automated Java and XML", "Asynchronous Java eXtension"],
    correct: 0,
    explanation: "AJAX stands for Asynchronous JavaScript and XML. It is a group of web development technologies used together to create interactive web applications."
  },
  {
    id: 6, unit: 1,
    question: "What does PHP stand for?",
    options: ["Personal Home Page", "PHP: Hypertext Preprocessor", "Programmable Hypertext Protocol", "Personal Hypertext Processor"],
    correct: 1,
    explanation: "PHP stands for PHP: Hypertext Preprocessor (a recursive acronym). It was originally created by Rasmus Lerdorf in 1994."
  },
  {
    id: 7, unit: 1,
    question: "Which of the following is NOT a web technology?",
    options: ["ReactJS", "Bootstrap", "Angular", "Microsoft Excel"],
    correct: 3,
    explanation: "Microsoft Excel is a spreadsheet application, not a web technology. ReactJS, Bootstrap, and Angular are all popular web technologies."
  },
  {
    id: 8, unit: 1,
    question: "SGML stands for:",
    options: ["Standard Generalized Markup Language", "Special Graphic Markup Language", "Structured General Meta Language", "Simple Generalized Markup Logic"],
    correct: 0,
    explanation: "SGML stands for Standard Generalized Markup Language. It is an ISO standard from which HTML and XML are derived."
  },
  {
    id: 9, unit: 1,
    question: "The web relies on which three mechanisms to make resources available?",
    options: ["FTP, HTTP, and SMTP", "URLs, HTTP protocols, and Hypertext", "DNS, IP addresses, and Cookies", "HTML, CSS, and JavaScript"],
    correct: 1,
    explanation: "The web relies on: a uniform naming scheme (URLs), protocols for access (HTTP), and hypertext for navigation (HTML)."
  },
  {
    id: 10, unit: 1,
    question: "JavaScript was standardized under which name by Ecma International?",
    options: ["LiveScript", "JScript", "ECMAScript", "WebScript"],
    correct: 2,
    explanation: "JavaScript was standardized as ECMAScript by Ecma International in June 1997 due to licensing issues between Netscape and Microsoft."
  },
  {
    id: 11, unit: 1,
    question: "What is XML primarily used for?",
    options: ["Styling web pages", "Universal format for structured documents and data", "Adding interactivity to web pages", "Managing databases"],
    correct: 1,
    explanation: "XML (Extensible Markup Language) is a universal format for structured documents and data on the World Wide Web."
  },
  {
    id: 12, unit: 1,
    question: "Which organization maintains HTML standards?",
    options: ["ISO", "IEEE", "W3C", "ANSI"],
    correct: 2,
    explanation: "The World Wide Web Consortium (W3C) maintains HTML standards and specifications."
  },
  {
    id: 13, unit: 1,
    question: "What type of language is HTML?",
    options: ["Programming language", "Scripting language", "Markup language", "Query language"],
    correct: 2,
    explanation: "HTML is a markup language, not a programming language. It uses tags to structure content for display in web browsers."
  },
  {
    id: 14, unit: 1,
    question: "What year did the World Wide Web project start?",
    options: ["1985", "1990", "1995", "2000"],
    correct: 1,
    explanation: "The World Wide Web project started in 1990 at CERN, following Tim Berners-Lee's 1989 proposal."
  },
  {
    id: 15, unit: 1,
    question: "Which protocol does the Web use for communication?",
    options: ["FTP", "SMTP", "HTTP", "SSH"],
    correct: 2,
    explanation: "The Web uses HTTP (HyperText Transfer Protocol) as its primary communication protocol."
  },

  // UNIT 2 - Web Browsers, Servers & Design Process
  {
    id: 16, unit: 2,
    question: "What is a web browser?",
    options: ["A program that creates web pages", "Application software for accessing and rendering information on the web", "A type of web server", "A database management tool"],
    correct: 1,
    explanation: "A web browser is application software designed to enable users to access, retrieve, and view documents and other resources on the web."
  },
  {
    id: 17, unit: 2,
    question: "Which subsystem of a browser is responsible for visual representation of URI inputs?",
    options: ["Browser Engine", "Rendering Engine", "JavaScript Interpreter", "Networking subsystem"],
    correct: 1,
    explanation: "The Rendering Engine is responsible for the visual representation of URI inputs, displaying HTML and XML documents including embedded content."
  },
  {
    id: 18, unit: 2,
    question: "Which is NOT a major web browser?",
    options: ["Chrome", "Firefox", "Apache", "Safari"],
    correct: 2,
    explanation: "Apache is a web SERVER, not a web browser. The major browsers are Chrome, Firefox, MS Edge, Opera, and Safari."
  },
  {
    id: 19, unit: 2,
    question: "What is the primary function of a web server?",
    options: ["Store and manage user passwords", "Deliver web pages on request to clients using HTTP", "Create HTML documents", "Monitor network traffic"],
    correct: 1,
    explanation: "The primary function of a web server is to deliver web pages on the request of clients using the Hypertext Transfer Protocol (HTTP)."
  },
  {
    id: 20, unit: 2,
    question: "Which phase of the web design process comes first?",
    options: ["Visual Design", "Site Development", "Project Definition", "Site Testing"],
    correct: 2,
    explanation: "Project Definition is the first phase of the web design process, where goals, objectives, and project scope are identified."
  },
  {
    id: 21, unit: 2,
    question: "How many major subsystems does the web browser reference architecture contain?",
    options: ["5", "6", "8", "10"],
    correct: 2,
    explanation: "The web browser reference architecture consists of eight major subsystems including User Interface, Browser Engine, Rendering Engine, Networking, JavaScript Interpreter, XML Parser, Display Backend, and Data Persistence."
  },
  {
    id: 22, unit: 2,
    question: "The Data Persistence subsystem in a browser stores:",
    options: ["Only cookies", "Only bookmarks", "Various data like bookmarks, cookies, and security certificates", "Only cache"],
    correct: 2,
    explanation: "The Data Persistence subsystem stores various data including bookmarks, toolbar settings, cookies, security certificates, and cache."
  },
  {
    id: 23, unit: 2,
    question: "Which web server is pronounced 'engine-x'?",
    options: ["Apache", "Nginx", "IIS", "Lighttpd"],
    correct: 1,
    explanation: "Nginx is pronounced 'engine-x'. It is one of the major web servers along with Apache, Tomcat, and IIS."
  },
  {
    id: 24, unit: 2,
    question: "How many phases are in the web design process as outlined in the course?",
    options: ["5", "6", "8", "10"],
    correct: 2,
    explanation: "The web design process has 8 phases: Project Definition, Project Scope, Site Architecture, Visual Design, Site Development, Site Testing, Launching, and Site Maintenance."
  },
  {
    id: 25, unit: 2,
    question: "The Browser Engine subsystem is responsible for:",
    options: ["Displaying HTML content", "Loading a given URI and supporting browsing actions", "Processing JavaScript", "Managing cookies"],
    correct: 1,
    explanation: "The Browser Engine provides an interface for the rendering engine and is responsible for loading a given URI, supporting browsing actions like forward, back, and refresh."
  },
  {
    id: 26, unit: 2,
    question: "What does the Networking subsystem handle in a browser?",
    options: ["File transfers and HTTP protocols", "JavaScript execution", "Displaying web content", "Managing user accounts"],
    correct: 0,
    explanation: "The Networking subsystem is where file transfer protocols FTP and HTTP are enforced. It also resolves MIME types of files."
  },
  {
    id: 27, unit: 2,
    question: "What is the purpose of domain names in web addressing?",
    options: ["They are required for IP communication", "They replace difficult-to-remember IP addresses", "They encrypt web traffic", "They store web page content"],
    correct: 1,
    explanation: "Domain names are used because IP addresses are difficult to remember. Domain names provide a human-readable alternative."
  },
  {
    id: 28, unit: 2,
    question: "Which phase involves arranging the structure of a website's navigation and content?",
    options: ["Visual Design", "Site Architecture", "Project Definition", "Project Scope"],
    correct: 1,
    explanation: "Site Architecture involves arranging the structure, hierarchy, and navigation of the website's content."
  },
  {
    id: 29, unit: 2,
    question: "The User Interface of a browser includes all EXCEPT:",
    options: ["Address bar", "Back/forward buttons", "Bookmarking menu", "The main web page display window"],
    correct: 3,
    explanation: "The User Interface includes the address bar, navigation buttons, bookmarking menu — basically every part EXCEPT the main window where the requested page is displayed."
  },
  {
    id: 30, unit: 2,
    question: "Which of the following is a major web server?",
    options: ["Chrome", "Bootstrap", "Apache Tomcat", "Node.js"],
    correct: 2,
    explanation: "Apache Tomcat is a major web server. Chrome is a browser, Bootstrap is a CSS framework, and Node.js is a JavaScript runtime."
  },

  // UNIT 3 - HTML Fundamentals
  {
    id: 31, unit: 3,
    question: "What is the correct HTML5 document declaration?",
    options: ["<!DOCTYPE HTML5>", "<!DOCTYPE html>", "<DOCTYPE html>", "<!html>"],
    correct: 1,
    explanation: "The correct HTML5 document type declaration is <!DOCTYPE html>. This tells the browser to use HTML5 standards."
  },
  {
    id: 32, unit: 3,
    question: "Which tag wraps the entire HTML document?",
    options: ["<body>", "<head>", "<html>", "<document>"],
    correct: 2,
    explanation: "The <html> tag wraps the entire HTML document and is referred to as the root element."
  },
  {
    id: 33, unit: 3,
    question: "What is the difference between <b> and <strong>?",
    options: ["They are identical", "<b> makes text bold; <strong> means the text is important", "<strong> is deprecated", "<b> is for headings"],
    correct: 1,
    explanation: "<b> defines bold text visually, but <strong> indicates the text is 'important', carrying semantic meaning beyond just visual formatting."
  },
  {
    id: 34, unit: 3,
    question: "HTML comments are written using which syntax?",
    options: ["// This is a comment", "/* comment */", "<!-- comment -->", "## comment ##"],
    correct: 2,
    explanation: "HTML comments use the syntax <!-- comment -->. These are not displayed by the browser."
  },
  {
    id: 35, unit: 3,
    question: "What tag is used for the page title shown in the browser tab?",
    options: ["<heading>", "<title>", "<header>", "<meta>"],
    correct: 1,
    explanation: "The <title> tag is used within the <head> section to specify the title of a web page, which appears in the browser tab."
  },
  {
    id: 36, unit: 3,
    question: "An attribute is:",
    options: ["A type of HTML element", "An instruction that clarifies or modifies an element", "The same as a tag", "The content inside a tag"],
    correct: 1,
    explanation: "Attributes are instructions that clarify or modify an element, allowing extra information to be added. They are placed in the opening tag."
  },
  {
    id: 37, unit: 3,
    question: "Which is an example of an empty (self-closing) element?",
    options: ["<p>text</p>", "<div>content</div>", "<br />", "<span>text</span>"],
    correct: 2,
    explanation: "<br /> is an empty element — it has no content and is self-closing. Empty elements use a closing forward slash."
  },
  {
    id: 38, unit: 3,
    question: "The <head> section of an HTML document contains:",
    options: ["The visible content of the page", "Meta information, title, links, and scripts", "Navigation elements only", "The page footer"],
    correct: 1,
    explanation: "The <head> section contains meta information, the page title, links to CSS files, and script references — not visible content."
  },
  {
    id: 39, unit: 3,
    question: "What does attribute values must always be enclosed in?",
    options: ["Square brackets", "Parentheses", "Quotation marks", "Angle brackets"],
    correct: 2,
    explanation: "Attribute values must always be contained in quotation marks. e.g., <img src=\"myphoto.jpg\" />"
  },
  {
    id: 40, unit: 3,
    question: "Which of the following is a rule for syntactically correct HTML?",
    options: ["Use uppercase for element names", "Tags do not need to be closed", "All tags must nest properly and not overlap", "Attribute values do not need quotes"],
    correct: 2,
    explanation: "One of the six rules for syntactically correct HTML is that all tags must nest properly and not overlap."
  },
  {
    id: 41, unit: 3,
    question: "The hexadecimal color code for white is:",
    options: ["#000000", "#FFFFFF", "#FF0000", "#00FF00"],
    correct: 1,
    explanation: "#FFFFFF is the hexadecimal color code for white. #000000 is black, #FF0000 is red, and #00FF00 is green."
  },
  {
    id: 42, unit: 3,
    question: "What is a 'Container' element in HTML?",
    options: ["An element with no content", "An element that contains content between its start and end tags", "A special HTML5 element", "A layout element only"],
    correct: 1,
    explanation: "Elements that have content between their start and end tags are referred to as Container elements (e.g., <p>Paragraph text</p>)."
  },
  {
    id: 43, unit: 3,
    question: "The <meta name='viewport'> tag is used for:",
    options: ["Adding metadata for search engines", "Controlling the viewport for responsive design", "Setting the page language", "Adding author information"],
    correct: 1,
    explanation: "The viewport meta tag is used to control how the page is displayed on different screen sizes, essential for responsive design."
  },
  {
    id: 44, unit: 3,
    question: "What does the <body> element contain?",
    options: ["Only text content", "Metadata and scripts", "All visible page content including text, images, links", "Only CSS styles"],
    correct: 2,
    explanation: "The <body> element contains all the information displayed on a web page — background, text, links, images, and all visible content."
  },
  {
    id: 45, unit: 3,
    question: "The DOCTYPE declaration tells the browser:",
    options: ["Who created the document", "The document language rules for proper HTML interpretation", "The page title", "Which CSS to load"],
    correct: 1,
    explanation: "DOCTYPE specifies the rules for the document language so the browser knows how to interpret the HTML code and display it properly."
  },

  // UNIT 4 - HTML Formatting, Lists, Links, Multimedia
  {
    id: 46, unit: 4,
    question: "How many heading levels does HTML support?",
    options: ["3", "4", "6", "8"],
    correct: 2,
    explanation: "HTML supports 6 heading levels from <h1> (largest) to <h6> (smallest)."
  },
  {
    id: 47, unit: 4,
    question: "Which tag creates an ordered (numbered) list?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
    explanation: "The <ol> (ordered list) tag creates a numbered list. Items inside use <li> tags."
  },
  {
    id: 48, unit: 4,
    question: "Which type attribute value on <ol> produces lowercase roman numerals?",
    options: ["type='I'", "type='i'", "type='a'", "type='1'"],
    correct: 1,
    explanation: "type='i' produces lowercase Roman numerals (i. ii. iii. iv). type='I' produces uppercase Roman numerals."
  },
  {
    id: 49, unit: 4,
    question: "A definition list uses which combination of tags?",
    options: ["<dl>, <dt>, <dd>", "<ul>, <li>, <dl>", "<ol>, <dt>, <li>", "<list>, <term>, <def>"],
    correct: 0,
    explanation: "A definition list uses <dl> (definition list), <dt> (definition term), and <dd> (definition description)."
  },
  {
    id: 50, unit: 4,
    question: "The <del> tag represents:",
    options: ["Deleted files", "Text that has been deleted/strikethrough", "A delete button", "Deprecated HTML"],
    correct: 1,
    explanation: "The <del> tag defines deleted text, usually displayed with a strikethrough style."
  },
  {
    id: 51, unit: 4,
    question: "The <abbr> element is used for:",
    options: ["Abbreviating long paragraphs", "Defining abbreviations or acronyms", "Making text smaller", "Aligning text"],
    correct: 1,
    explanation: "The <abbr> element defines an abbreviation or acronym, providing useful information to browsers, translation systems, and search engines."
  },
  {
    id: 52, unit: 4,
    question: "The <bdo> element is used to:",
    options: ["Make text bold", "Override text direction (bi-directional override)", "Create block divisions", "Define borders"],
    correct: 1,
    explanation: "The <bdo> (Bi-Directional Override) element is used to override the current text direction. With dir='rtl', text flows right-to-left."
  },
  {
    id: 53, unit: 4,
    question: "Which HTML tag defines emphasized text (italic-like, but semantic)?",
    options: ["<i>", "<b>", "<em>", "<strong>"],
    correct: 2,
    explanation: "<em> defines emphasized text. Browsers display it in italic, but it carries semantic meaning unlike the visual-only <i> tag."
  },
  {
    id: 54, unit: 4,
    question: "Which list style creates circle bullet points?",
    options: ["list-style-type: square", "list-style-type: disc", "list-style-type: circle", "list-style-type: round"],
    correct: 2,
    explanation: "list-style-type: circle creates circle bullet points. 'disc' is the default filled bullet, 'square' creates square bullets."
  },
  {
    id: 55, unit: 4,
    question: "The <ins> tag represents:",
    options: ["Input elements", "Inserted/underlined text", "Internal styles", "An instruction"],
    correct: 1,
    explanation: "The <ins> tag defines inserted text, typically displayed with an underline, indicating content that has been added."
  },
  {
    id: 56, unit: 4,
    question: "What does <blockquote> represent?",
    options: ["A block of code", "A section quoted from another source", "A block-level quote button", "Bold quoted text"],
    correct: 1,
    explanation: "<blockquote> defines a section that is quoted from another source, typically indented by browsers."
  },
  {
    id: 57, unit: 4,
    question: "The <sub> tag creates:",
    options: ["Subtitle text", "Subscripted text (below baseline)", "Subtracted text", "Sub-heading text"],
    correct: 1,
    explanation: "The <sub> tag defines subscripted text, displayed below the normal text baseline (like H₂O)."
  },
  {
    id: 58, unit: 4,
    question: "Which tag is used for superscripted text?",
    options: ["<sub>", "<sup>", "<super>", "<top>"],
    correct: 1,
    explanation: "<sup> defines superscripted text, displayed above the normal text baseline (like x² or footnote numbers)."
  },
  {
    id: 59, unit: 4,
    question: "The <mark> tag is used for:",
    options: ["Adding a bookmark", "Marking/highlighting text", "Marking deprecated code", "Creating list markers"],
    correct: 1,
    explanation: "The <mark> tag defines marked or highlighted text, usually displayed with a yellow background."
  },
  {
    id: 60, unit: 4,
    question: "The <pre> tag displays text:",
    options: ["In a smaller font", "With predefined formatting preserved", "As preformatted headings", "With premium styling"],
    correct: 1,
    explanation: "The <pre> (preformatted) tag displays text with whitespace, line breaks, and formatting preserved exactly as written."
  },

  // UNIT 5 - HTML Tables & Forms
  {
    id: 61, unit: 5,
    question: "Which tag defines a table data cell?",
    options: ["<tr>", "<th>", "<td>", "<tc>"],
    correct: 2,
    explanation: "The <td> (table data) tag defines individual data cells within a table row."
  },
  {
    id: 62, unit: 5,
    question: "The colspan attribute allows a cell to:",
    options: ["Span multiple rows", "Span multiple columns", "Change cell color", "Add padding to cells"],
    correct: 1,
    explanation: "The colspan attribute lets you create cells that span multiple columns of a table. Column cells always span to the right."
  },
  {
    id: 63, unit: 5,
    question: "Which semantic element denotes the table body?",
    options: ["<thead>", "<tbody>", "<tfoot>", "<tdata>"],
    correct: 1,
    explanation: "The <tbody> element signifies the table body section, grouping the main rows of data."
  },
  {
    id: 64, unit: 5,
    question: "What does the <caption> element provide in a table?",
    options: ["A column header", "A short description of the table's contents", "The table footer", "Cell formatting"],
    correct: 1,
    explanation: "The <caption> element provides a short description of the table's contents. It appears above or below the table."
  },
  {
    id: 65, unit: 5,
    question: "Table rows are defined using:",
    options: ["<td>", "<th>", "<tr>", "<row>"],
    correct: 2,
    explanation: "The <tr> (table row) tag defines a row in a table. Each row then contains <td> or <th> cells."
  },
  {
    id: 66, unit: 5,
    question: "What does rowspan='4' mean in an HTML table?",
    options: ["The cell spans 4 columns", "The cell spans 4 rows downward", "The table has 4 rows", "The cell padding is 4px"],
    correct: 1,
    explanation: "rowspan='4' means the cell spans 4 rows downward. Rows always span downward in HTML tables."
  },
  {
    id: 67, unit: 5,
    question: "The most used HTML form tag is:",
    options: ["<form>", "<select>", "<input />", "<button>"],
    correct: 2,
    explanation: "The most used form tag is the <input /> tag, which specifies the type of input expected using the 'type' attribute."
  },
  {
    id: 68, unit: 5,
    question: "Which input type creates a password field?",
    options: ["type='secure'", "type='hidden'", "type='password'", "type='secret'"],
    correct: 2,
    explanation: "type='password' creates a password input field where characters are masked for security."
  },
  {
    id: 69, unit: 5,
    question: "Scripts that process user data on the server are called:",
    options: ["Client-side scripts", "Server-side scripts", "Inline scripts", "External scripts"],
    correct: 1,
    explanation: "Server-side scripts are programs that process user-supplied data (via forms) based on business logic and send responses to users via the browser."
  },
  {
    id: 70, unit: 5,
    question: "Which input type creates a file upload control?",
    options: ["type='upload'", "type='file'", "type='attach'", "type='document'"],
    correct: 1,
    explanation: "type='file' defines a textbox with a browse button for file uploads."
  },
  {
    id: 71, unit: 5,
    question: "Which input type is used for selections where only one option can be chosen at a time?",
    options: ["checkbox", "submit", "radio", "select"],
    correct: 2,
    explanation: "Radio buttons (type='radio') allow only one selection from a group at a time, unlike checkboxes which allow multiple selections."
  },
  {
    id: 72, unit: 5,
    question: "The border-collapse CSS property on a table:",
    options: ["Removes the table border", "Collapses adjacent borders into a single border", "Collapses the table", "Adds a border shadow"],
    correct: 1,
    explanation: "border-collapse: collapse merges adjacent cell borders into a single border, creating a cleaner table appearance."
  },
  {
    id: 73, unit: 5,
    question: "The <th> element compared to <td> is:",
    options: ["Identical in function", "A table header cell, typically bold and centered", "Used for table footers", "Only for the first column"],
    correct: 1,
    explanation: "The <th> element is a table header cell. It contains header information for a column and is typically bold and center-aligned by default."
  },
  {
    id: 74, unit: 5,
    question: "Which input type creates a checkbox?",
    options: ["type='check'", "type='toggle'", "type='checkbox'", "type='tick'"],
    correct: 2,
    explanation: "type='checkbox' defines a checkbox input, allowing users to select multiple options."
  },
  {
    id: 75, unit: 5,
    question: "HTML forms are used primarily to:",
    options: ["Style web pages", "Collect information from users", "Create navigation menus", "Display images"],
    correct: 1,
    explanation: "HTML forms include areas where users can enter information. They are used by web developers to collect information from users."
  },

  // UNIT 6 - CSS Fundamentals
  {
    id: 76, unit: 6,
    question: "What does the term 'Cascading' in CSS refer to?",
    options: ["The waterfall-like appearance of styles", "The process of determining the priority of styling rules", "Multiple stylesheets linked together", "Animated effects in CSS"],
    correct: 1,
    explanation: "Cascading refers to the process of determining the priority of styling rules when multiple rules target the same element."
  },
  {
    id: 77, unit: 6,
    question: "An external CSS file is linked using which HTML tag?",
    options: ["<script>", "<style>", "<link>", "<import>"],
    correct: 2,
    explanation: "An external stylesheet is linked using the <link> tag placed in the <head> section: <link rel='stylesheet' href='mystyle.css' />"
  },
  {
    id: 78, unit: 6,
    question: "Which type of CSS style has the highest priority?",
    options: ["External", "Internal", "Inline", "Browser default"],
    correct: 2,
    explanation: "Inline styles have the highest specificity (1000 points) and override both internal and external styles when applied directly to elements."
  },
  {
    id: 79, unit: 6,
    question: "An ID selector in CSS is written with which prefix?",
    options: [".", "#", "*", "@"],
    correct: 1,
    explanation: "An ID selector is preceded by the pound (#) sign. Example: #main { color: blue; }"
  },
  {
    id: 80, unit: 6,
    question: "A class selector in CSS is preceded by:",
    options: ["#", "*", ".", "@"],
    correct: 2,
    explanation: "A class selector's name is preceded by a full stop (.). Example: .note { background-color: blue; }"
  },
  {
    id: 81, unit: 6,
    question: "The universal CSS selector is represented by:",
    options: ["#", ".", "*", "!"],
    correct: 2,
    explanation: "The universal selector is indicated with an asterisk (*). It applies styles to every single element on the web page."
  },
  {
    id: 82, unit: 6,
    question: "In CSS specificity hierarchy, which has the highest score?",
    options: ["Element selector (1)", "Class selector (10)", "ID selector (100)", "Inline style (1000)"],
    correct: 3,
    explanation: "In CSS specificity: Inline styles score 1000, ID selectors 100, Class selectors 10, Element selectors 1. Inline styles win all conflicts."
  },
  {
    id: 83, unit: 6,
    question: "An internal CSS style is placed in which section of the HTML?",
    options: ["<body>", "<footer>", "<head>", "<main>"],
    correct: 2,
    explanation: "Internal styles are defined in the <head> section of an HTML page using the <style> tag."
  },
  {
    id: 84, unit: 6,
    question: "What is a CSS declaration?",
    options: ["The selector name", "A property:value pair", "The entire CSS rule", "The curly braces"],
    correct: 1,
    explanation: "A CSS declaration consists of a property and a value pair (e.g., color: blue;). Multiple declarations form a declaration block."
  },
  {
    id: 85, unit: 6,
    question: "The <div> element in HTML is:",
    options: ["An inline element", "A block-level element for divisions", "A form element", "A table element"],
    correct: 1,
    explanation: "The <div> (division) element is a block-level element designed to be used with CSS for creating logical divisions within a document."
  },
  {
    id: 86, unit: 6,
    question: "The <span> element in HTML is:",
    options: ["A block-level element", "An inline element for styling portions of text", "A table spanning element", "A form control"],
    correct: 1,
    explanation: "The <span> element is an inline element, the inline equivalent of <div>. It is used to style portions of text within a line."
  },
  {
    id: 87, unit: 6,
    question: "A descendant selector in CSS separates elements with:",
    options: ["A comma", "A colon", "A space", "A plus sign"],
    correct: 2,
    explanation: "A descendant selector separates the two selectors by a space (e.g., blockquote p targets <p> elements nested inside <blockquote>)."
  },
  {
    id: 88, unit: 6,
    question: "Pseudo-class selectors apply styles based on:",
    options: ["Class names only", "Element state or position in the document", "ID attributes only", "Inline styles"],
    correct: 1,
    explanation: "Pseudo-classes and pseudo-elements apply styles to elements based on their state or position in the document (e.g., :hover, :first-letter)."
  },
  {
    id: 89, unit: 6,
    question: "The CSS rule that begins with a tag/element name is called:",
    options: ["Class selector", "ID selector", "Tag or element selector", "Universal selector"],
    correct: 2,
    explanation: "The tag or element selector uses the HTML tag name (without angle brackets) directly as the selector (e.g., body { margin: 0; })."
  },
  {
    id: 90, unit: 6,
    question: "Benefits of using CSS include all EXCEPT:",
    options: ["Separation of content from presentation", "Bandwidth savings", "All styling in limited style sheets", "Requiring more HTML code"],
    correct: 3,
    explanation: "CSS actually reduces HTML code needed for styling. Benefits include: limited style sheets, bandwidth savings, and separation of content from presentation."
  },

  // UNIT 7/8 - CSS Units, Positioning, Layout
  {
    id: 91, unit: 7,
    question: "Which CSS unit is relative to the font-size of the root HTML element?",
    options: ["em", "rem", "vw", "px"],
    correct: 1,
    explanation: "rem (root em) is relative to the font-size of the root HTML element, making it more predictable than em which is relative to the parent."
  },
  {
    id: 92, unit: 7,
    question: "What does 100vw equal?",
    options: ["100 pixels", "100% of the element width", "Full width of the viewport", "100 font-size units"],
    correct: 2,
    explanation: "vw = viewport width. 100vw equals the full width of the viewport (the visible browser window area)."
  },
  {
    id: 93, unit: 7,
    question: "Which CSS position value is the default for all HTML elements?",
    options: ["relative", "absolute", "fixed", "static"],
    correct: 3,
    explanation: "All HTML elements have position: static by default. Static positioned elements follow the normal document flow."
  },
  {
    id: 94, unit: 7,
    question: "An element with position: fixed:",
    options: ["Moves with page scrolling", "Stays in the same place even when the page is scrolled", "Is relative to its parent", "Follows normal document flow"],
    correct: 1,
    explanation: "position: fixed positions an element relative to the viewport — it always stays in the same place even if the page is scrolled."
  },
  {
    id: 95, unit: 7,
    question: "An element with position: absolute is positioned relative to:",
    options: ["The viewport", "The nearest positioned ancestor (non-static)", "The document body always", "Its natural document position"],
    correct: 1,
    explanation: "An absolute positioned element is positioned relative to the nearest positioned ancestor (with position other than static). If none exists, it uses the document body."
  },
  {
    id: 96, unit: 7,
    question: "position: sticky behaves like:",
    options: ["Always fixed", "Relative until a scroll threshold, then fixed", "Absolute always", "Static always"],
    correct: 1,
    explanation: "position: sticky toggles between relative and fixed positioning. It acts as relative until a scroll threshold, then sticks in place."
  },
  {
    id: 97, unit: 7,
    question: "CSS Specificity determines:",
    options: ["Which style sheet is loaded first", "Which CSS rule is applied when multiple rules target the same element", "The order of animations", "The element's z-index"],
    correct: 1,
    explanation: "CSS Specificity is the rule that determines which CSS style is applied when multiple rules target the same element."
  },
  {
    id: 98, unit: 7,
    question: "The 'em' unit is relative to:",
    options: ["The root element's font-size", "The font-size of the parent element", "The viewport width", "A fixed measurement"],
    correct: 1,
    explanation: "em is relative to the font-size of the parent element. 1em equals the current font-size of the parent."
  },
  {
    id: 99, unit: 7,
    question: "Which CSS unit is NOT an absolute unit?",
    options: ["px", "cm", "pt", "rem"],
    correct: 3,
    explanation: "rem is a relative unit (relative to root font-size). px, cm, and pt are all absolute units that don't scale."
  },
  {
    id: 100, unit: 7,
    question: "The CSS property that specifies positioning type is:",
    options: ["display", "position", "float", "layout"],
    correct: 1,
    explanation: "The CSS 'position' property specifies the positioning type for an element (static, relative, fixed, absolute, sticky)."
  },
  {
    id: 101, unit: 7,
    question: "For sticky positioning to work, you must specify at least one of:",
    options: ["width or height", "top, right, bottom, or left", "z-index or opacity", "margin or padding"],
    correct: 1,
    explanation: "For sticky positioning, you must specify at least one of the top, right, bottom, or left properties to define where it sticks."
  },
  {
    id: 102, unit: 7,
    question: "Which CSS technique is best for creating responsive layouts?",
    options: ["Absolute units like px", "Relative units like rem, em, vh, vw", "pt units for print", "cm units"],
    correct: 1,
    explanation: "Relative length units (rem, em, vh, vw, %) scale better between different screen sizes, making them ideal for responsive web design."
  },
  {
    id: 103, unit: 7,
    question: "In CSS specificity, the ID selector has a score of:",
    options: ["1", "10", "100", "1000"],
    correct: 2,
    explanation: "In the CSS specificity hierarchy: Inline=1000, ID=100, Class=10, Element=1. ID selectors score 100 points."
  },
  {
    id: 104, unit: 7,
    question: "Absolute CSS units are best used when:",
    options: ["Building responsive websites", "The physical output medium is known, like print", "Creating mobile-first designs", "All screen sizes are different"],
    correct: 1,
    explanation: "Absolute units are best used when the physical output medium is known (like print) or for elements requiring exact, non-scaling dimensions."
  },
  {
    id: 105, unit: 7,
    question: "Which CSS layout technique uses a grid system with fr units?",
    options: ["Flexbox", "CSS Grid", "Float layout", "Positioning"],
    correct: 1,
    explanation: "CSS Grid uses fr (fractional) units. 1fr equals 1 part of the available space, allowing flexible grid-based layouts."
  },

  // UNIT 8/9 - JavaScript Fundamentals
  {
    id: 106, unit: 8,
    question: "JavaScript is described as which type of language?",
    options: ["Server-side only", "Compiled language", "Object-based client-side scripting language", "Database query language"],
    correct: 2,
    explanation: "JavaScript is an object-based client-side scripting language that adds interactivity and programmability to web pages."
  },
  {
    id: 107, unit: 8,
    question: "Which HTML tag is used to embed JavaScript in a web page?",
    options: ["<javascript>", "<js>", "<script>", "<code>"],
    correct: 2,
    explanation: "JavaScript is embedded in HTML using the <script> tag. It can appear in the <head> or <body> sections."
  },
  {
    id: 108, unit: 8,
    question: "In JavaScript, which method shows a popup alert to the user?",
    options: ["console.log()", "document.write()", "alert()", "print()"],
    correct: 2,
    explanation: "alert() shows a popup dialog with a message to the user. console.log() outputs to the browser's developer console."
  },
  {
    id: 109, unit: 8,
    question: "What is the DOM in web development?",
    options: ["Document Object Model", "Data Object Manager", "Digital Output Method", "Display Object Mapping"],
    correct: 0,
    explanation: "DOM stands for Document Object Model. It is a programming interface that represents the HTML document as a tree structure of objects."
  },
  {
    id: 110, unit: 8,
    question: "Which keyword declares a variable in modern JavaScript?",
    options: ["var only", "let and const", "variable and value", "dim and set"],
    correct: 1,
    explanation: "Modern JavaScript uses 'let' for reassignable variables and 'const' for constants. 'var' is older and less predictable due to function scoping."
  },
  {
    id: 111, unit: 8,
    question: "Which method is used to select an element by its ID in JavaScript?",
    options: ["document.selectId()", "document.getElementById()", "document.findId()", "document.queryId()"],
    correct: 1,
    explanation: "document.getElementById() is used to select a single HTML element by its unique ID attribute."
  },
  {
    id: 112, unit: 8,
    question: "An array in JavaScript is:",
    options: ["A single value variable", "An ordered collection of values", "A type of function", "A CSS property"],
    correct: 1,
    explanation: "A JavaScript array is an ordered collection of values (elements) that can hold multiple values in a single variable."
  },
  {
    id: 113, unit: 8,
    question: "A function in JavaScript is used to:",
    options: ["Store a single value", "Group reusable blocks of code", "Select HTML elements", "Apply CSS styles"],
    correct: 1,
    explanation: "A function is a reusable block of code designed to perform a specific task. Functions reduce repetition and improve code organization."
  },
  {
    id: 114, unit: 8,
    question: "Control flow in JavaScript refers to:",
    options: ["The speed of code execution", "The order in which code statements are executed", "How CSS is applied", "Network traffic management"],
    correct: 1,
    explanation: "Control flow refers to the order in which code statements are executed, controlled by conditionals (if/else) and loops (for, while)."
  },
  {
    id: 115, unit: 8,
    question: "Asynchronous JavaScript handles:",
    options: ["Only synchronous operations", "Operations that may take time without blocking the main thread", "Database queries directly", "CSS animations only"],
    correct: 1,
    explanation: "Asynchronous JavaScript handles time-consuming operations (like API calls) without blocking the main thread, using callbacks, Promises, or async/await."
  },
  {
    id: 116, unit: 8,
    question: "console.log() in JavaScript outputs to:",
    options: ["A popup window", "The web page content", "The browser's developer console", "A log file on the server"],
    correct: 2,
    explanation: "console.log() outputs messages to the browser's developer console, useful for debugging JavaScript code."
  },
  {
    id: 117, unit: 8,
    question: "What is an event in JavaScript?",
    options: ["A scheduled task", "Something that happens in the browser (click, keypress, load)", "A type of function", "A CSS selector"],
    correct: 1,
    explanation: "An event is something that happens in the browser — like a user clicking a button, pressing a key, or a page finishing loading."
  },
  {
    id: 118, unit: 8,
    question: "DOM manipulation allows you to:",
    options: ["Only read HTML elements", "Add, remove, and modify HTML elements dynamically", "Style elements with CSS only", "Create server-side scripts"],
    correct: 1,
    explanation: "DOM manipulation allows JavaScript to dynamically add, remove, modify HTML elements and their content, attributes, and styles."
  },
  {
    id: 119, unit: 8,
    question: "Which of the following is a JavaScript data type?",
    options: ["text", "boolean", "heading", "selector"],
    correct: 1,
    explanation: "Boolean is a JavaScript data type representing true/false values. Other data types include string, number, undefined, null, and object."
  },
  {
    id: 120, unit: 8,
    question: "An object in JavaScript is:",
    options: ["A single number value", "A collection of key-value pairs (properties and methods)", "A type of array", "A CSS class"],
    correct: 1,
    explanation: "A JavaScript object is a collection of key-value pairs, where keys are strings (properties/methods) and values can be any data type."
  },

  // Additional questions - Mixed topics
  {
    id: 121, unit: 1,
    question: "What is WordPress primarily used for?",
    options: ["Database management", "Content Management and website creation", "Image editing", "Email management"],
    correct: 1,
    explanation: "WordPress is a popular Content Management System (CMS) and web technology used for creating websites and blogs without extensive coding."
  },
  {
    id: 122, unit: 2,
    question: "Site Testing in the web design process involves:",
    options: ["Writing HTML code", "Verifying that the website works as intended before launch", "Designing the visual layout", "Registering a domain name"],
    correct: 1,
    explanation: "Site Testing verifies that all features work correctly, links are valid, forms submit properly, and the site displays correctly across browsers."
  },
  {
    id: 123, unit: 3,
    question: "The src attribute in an <img> tag specifies:",
    options: ["The image style", "The image source location or URL", "The image size", "The image alternative text"],
    correct: 1,
    explanation: "The src (source) attribute provides the location of the image via its path or URL. It is required for the <img> element."
  },
  {
    id: 124, unit: 4,
    question: "Nested lists in HTML allow:",
    options: ["Only two levels of nesting", "One type of list only", "One type of list inside another", "Unlimited nesting with any list type"],
    correct: 3,
    explanation: "HTML supports nesting lists — you can place an ordered list inside an unordered list or vice versa, with multiple levels of nesting."
  },
  {
    id: 125, unit: 5,
    question: "The <thead> semantic element in a table:",
    options: ["Adds a title to the table", "Groups header rows for better organization and styling", "Spans all columns", "Creates a hidden row"],
    correct: 1,
    explanation: "<thead> signifies and groups the table header rows. Along with <tbody> and <tfoot>, it helps organize the table for readability and CSS styling."
  },
  {
    id: 126, unit: 6,
    question: "The background-repeat CSS property controls:",
    options: ["How many times an animation repeats", "Whether and how a background image repeats/tiles", "The repeat count of an element", "Page refresh intervals"],
    correct: 1,
    explanation: "background-repeat controls whether and how a background image repeats to fill an element's background area."
  },
  {
    id: 127, unit: 7,
    question: "The vh CSS unit represents:",
    options: ["Viewport height — 1vh = 1% of viewport height", "Vertical height in pixels", "Visual height of the font", "Variable height unit"],
    correct: 0,
    explanation: "vh = viewport height. 1vh equals 1% of the viewport height. 100vh equals the full height of the visible browser window."
  },
  {
    id: 128, unit: 8,
    question: "Error handling in JavaScript is done using:",
    options: ["if/else only", "try...catch blocks", "console.error only", "alert() statements"],
    correct: 1,
    explanation: "JavaScript uses try...catch blocks for error handling. Code in try runs normally; if an error occurs, code in catch handles it gracefully."
  },
  {
    id: 129, unit: 3,
    question: "The <link> tag in HTML is used to:",
    options: ["Create hyperlinks on a page", "Link external resources like CSS files to the HTML document", "Link two HTML pages", "Create a navigation menu"],
    correct: 1,
    explanation: "The <link> tag connects external resources (most commonly CSS stylesheets) to the HTML document. It appears in the <head> section."
  },
  {
    id: 130, unit: 6,
    question: "Internal CSS styles are contained within:",
    options: ["The <body> tag", "A separate .css file", "The <style> tag in the <head>", "The <link> tag"],
    correct: 2,
    explanation: "Internal (embedded) styles are defined within <style> tags placed in the <head> section of the HTML document."
  },
  {
    id: 131, unit: 5,
    question: "The width attribute in a table is best specified in:",
    options: ["Only pixels", "Only centimeters", "Percentages (for better responsiveness)", "Only em units"],
    correct: 2,
    explanation: "It is good practice to specify table width in percentages, allowing the table to adjust proportionally to different screen sizes."
  },
  {
    id: 132, unit: 2,
    question: "Site Maintenance in web development refers to:",
    options: ["The initial testing phase", "Ongoing updates, fixes, and improvements after launching", "Creating the site architecture", "Registering the domain"],
    correct: 1,
    explanation: "Site Maintenance is the ongoing phase after launch that involves regular updates, content additions, bug fixes, and performance improvements."
  },
  {
    id: 133, unit: 4,
    question: "File paths describe:",
    options: ["The visual path users take through a website", "The location of a resource in the website's folder structure", "The browser's navigation history", "The URL of an external website"],
    correct: 1,
    explanation: "A file path describes the location of a resource in a website's folder structure and is used when referencing files like images, CSS, and JS."
  },
  {
    id: 134, unit: 8,
    question: "Which method selects all elements matching a CSS selector?",
    options: ["document.getElementById()", "document.getElementsByTagName()", "document.querySelectorAll()", "document.findAll()"],
    correct: 2,
    explanation: "document.querySelectorAll() selects ALL elements matching a given CSS selector, returning a NodeList of all matching elements."
  },
  {
    id: 135, unit: 7,
    question: "Website layout using CSS includes techniques like:",
    options: ["Tables only", "Flexbox, Grid, Box Model, and Positioning", "Only absolute positioning", "Frames and framesets"],
    correct: 1,
    explanation: "CSS Website Layout Design uses the Box Model, Flexbox, Grid, and Positioning techniques to arrange header, navigation, content, sidebar, and footer."
  },
  {
    id: 136, unit: 1,
    question: "ReactJS is best described as:",
    options: ["A database system", "A server-side language", "A frontend JavaScript library for building UIs", "An email protocol"],
    correct: 2,
    explanation: "ReactJS is a popular frontend JavaScript library (developed by Facebook/Meta) for building interactive user interfaces and single-page applications."
  },
  {
    id: 137, unit: 6,
    question: "The background-color CSS property specifies:",
    options: ["The color of text", "The background color of an element", "The border color", "The shadow color"],
    correct: 1,
    explanation: "The background-color property specifies the background color of an element. It can be set using color names, HEX, RGB, or HSL values."
  },
  {
    id: 138, unit: 3,
    question: "Colors in HTML/CSS can be specified using:",
    options: ["Only color names", "Only hexadecimal values", "Color names, HEX, RGB, HSL, RGBA, and HSLA", "Only RGB values"],
    correct: 2,
    explanation: "Colors in HTML/CSS can be specified using color names (red), HEX (#FF0000), RGB (rgb(255,0,0)), HSL, RGBA, and HSLA formats."
  },
  {
    id: 139, unit: 5,
    question: "What is the purpose of the action attribute in an HTML form?",
    options: ["Specifies what happens when a button is clicked", "Specifies where to send the form data when submitted", "Specifies the form's visual style", "Specifies input types"],
    correct: 1,
    explanation: "The action attribute in a <form> tag specifies the URL/script that processes the form data when the form is submitted."
  },
  {
    id: 140, unit: 7,
    question: "Which CSS property creates the grid layout system?",
    options: ["display: flex", "display: grid", "display: block", "display: inline"],
    correct: 1,
    explanation: "display: grid enables CSS Grid layout, allowing a two-dimensional layout system with rows and columns for advanced page layouts."
  },
  {
    id: 141, unit: 8,
    question: "A for loop in JavaScript is used to:",
    options: ["Define functions", "Repeat a block of code a specified number of times", "Handle errors", "Select DOM elements"],
    correct: 1,
    explanation: "A for loop repeatedly executes a block of code a specified number of times. It contains initialization, condition, and increment/decrement."
  },
  {
    id: 142, unit: 1,
    question: "Node.js is best described as:",
    options: ["A web browser", "A JavaScript runtime environment for server-side applications", "A CSS framework", "A database system"],
    correct: 1,
    explanation: "Node.js is a JavaScript runtime that allows JavaScript to run on the server-side, outside of a web browser."
  },
  {
    id: 143, unit: 4,
    question: "The <q> element defines:",
    options: ["A quiz question", "A quality marker", "A short inline quotation", "A question input"],
    correct: 2,
    explanation: "The <q> element defines a short inline quotation. Browsers typically add quotation marks around the content automatically."
  },
  {
    id: 144, unit: 6,
    question: "The CSS selector 'p:first-letter' is an example of:",
    options: ["An ID selector", "A pseudo-element selector", "A class selector", "A descendant selector"],
    correct: 1,
    explanation: "p:first-letter is a pseudo-element selector that applies styles to the first letter of a <p> element."
  },
  {
    id: 145, unit: 5,
    question: "The 'hidden' input type in HTML forms is used to:",
    options: ["Hide the entire form", "Pass data without displaying it to the user", "Create invisible buttons", "Hide validation errors"],
    correct: 1,
    explanation: "The hidden input type defines a hidden text field that passes data to the server without being visible to the user on the form."
  },
  {
    id: 146, unit: 7,
    question: "In CSS, 'px' stands for:",
    options: ["Points", "Pixels", "Percentage", "Print units"],
    correct: 1,
    explanation: "px stands for pixels. 1px = 1/96th of 1 inch. It is an absolute unit commonly used in web design."
  },
  {
    id: 147, unit: 2,
    question: "Domain Registration in web hosting involves:",
    options: ["Writing HTML code", "Buying and registering a unique web address", "Installing a web server", "Creating database tables"],
    correct: 1,
    explanation: "Domain Registration is the process of acquiring a unique domain name (web address) for your website through a domain registrar."
  },
  {
    id: 148, unit: 3,
    question: "The charset='UTF-8' meta tag ensures:",
    options: ["The page uses CSS version 8", "The page loads 8 times faster", "The page uses Unicode character encoding", "The page supports 8 languages"],
    correct: 2,
    explanation: "charset='UTF-8' ensures the page uses UTF-8 Unicode character encoding, supporting a wide range of international characters."
  },
  {
    id: 149, unit: 8,
    question: "An event listener in JavaScript is added using:",
    options: ["element.onEvent()", "element.addEventListener()", "element.attachEvent()", "element.listenTo()"],
    correct: 1,
    explanation: "addEventListener() is the standard way to attach event handlers to elements in JavaScript (e.g., button.addEventListener('click', handler))."
  },
  {
    id: 150, unit: 4,
    question: "The type='A' attribute on an <ol> tag creates:",
    options: ["Lowercase letters", "Uppercase letters", "Arabic numerals", "Lowercase Roman numerals"],
    correct: 1,
    explanation: "type='A' creates ordered lists with uppercase letters (A. B. C. D.). type='a' creates lowercase letters."
  },
  {
    id: 151, unit: 6,
    question: "The background-attachment CSS property controls:",
    options: ["Adding files as attachments", "Whether background image scrolls with the page or stays fixed", "The image format", "How borders attach to elements"],
    correct: 1,
    explanation: "background-attachment controls whether a background image scrolls with the page content or remains fixed in the viewport."
  },
  {
    id: 152, unit: 8,
    question: "Promises in JavaScript handle:",
    options: ["Synchronous code only", "Asynchronous operations that will either resolve or reject", "User authentication", "CSS animations"],
    correct: 1,
    explanation: "Promises represent asynchronous operations that will either resolve (succeed) or reject (fail), providing a cleaner alternative to callbacks."
  },
  {
    id: 153, unit: 5,
    question: "The <tfoot> semantic element in a table:",
    options: ["Creates the first row", "Groups the footer rows of the table", "Adds a caption", "Creates column headers"],
    correct: 1,
    explanation: "<tfoot> signifies the table footer, grouping footer rows. It is typically used for totals, summaries, or column labels."
  },
  {
    id: 154, unit: 3,
    question: "HTML element names should be written in:",
    options: ["UPPERCASE", "CamelCase", "lowercase", "Any case — it doesn't matter"],
    correct: 2,
    explanation: "One of the six rules for syntactically correct HTML is to use all lowercase for element names (e.g., <p> not <P>)."
  },
  {
    id: 155, unit: 7,
    question: "CSS Flexbox is primarily used for:",
    options: ["Creating 2D grid layouts only", "One-dimensional layout (row OR column)", "Absolute positioning", "Animation only"],
    correct: 1,
    explanation: "Flexbox is a one-dimensional layout method for arranging items in a row OR column. CSS Grid handles two-dimensional layouts."
  },
  {
    id: 156, unit: 1,
    question: "Bootstrap is best described as:",
    options: ["A web server", "A CSS/JS front-end framework for responsive design", "A server-side language", "A database management system"],
    correct: 1,
    explanation: "Bootstrap is a popular open-source CSS/JavaScript front-end framework for developing responsive and mobile-first websites."
  },
  {
    id: 157, unit: 6,
    question: "What does the term 'selector' in CSS refer to?",
    options: ["The CSS values applied", "The part that 'selects' or targets which HTML elements to style", "The curly braces in a rule", "The CSS file name"],
    correct: 1,
    explanation: "The selector is the part of a CSS rule that targets specific HTML elements to apply styles to. It tells the browser which elements to style."
  },
  {
    id: 158, unit: 4,
    question: "The <small> HTML tag:",
    options: ["Removes an element from the page", "Defines smaller-sized text", "Creates small containers", "Reduces image size"],
    correct: 1,
    explanation: "The <small> tag defines smaller text. It is typically used for side comments, disclaimers, or legal text."
  },
  {
    id: 159, unit: 8,
    question: "The innerHTML property in JavaScript allows you to:",
    options: ["Only read HTML content", "Get or set the HTML content inside an element", "Delete elements from the DOM", "Only write new elements"],
    correct: 1,
    explanation: "innerHTML is a property that allows you to get or set the HTML content inside an element, enabling dynamic content updates."
  },
  {
    id: 160, unit: 5,
    question: "The method attribute in an HTML form specifies:",
    options: ["The visual style of the form", "The HTTP method (GET or POST) used to send form data", "The encoding format only", "The form's action script only"],
    correct: 1,
    explanation: "The method attribute specifies the HTTP method used to send form data: GET (appends data to URL) or POST (sends data in request body)."
  },
  {
    id: 161, unit: 2,
    question: "Visual Design in the web design process focuses on:",
    options: ["Writing the HTML code", "Creating wireframes and the aesthetic presentation of the site", "Testing browser compatibility", "Setting up the server"],
    correct: 1,
    explanation: "Visual Design focuses on the aesthetic presentation — colors, typography, imagery, spacing, and overall visual identity of the website."
  },
  {
    id: 162, unit: 7,
    question: "An element with position: relative is positioned:",
    options: ["Removed from the document flow", "Relative to the viewport", "Relative to its normal position in the document flow", "Relative to the body only"],
    correct: 2,
    explanation: "position: relative positions an element relative to its natural position in the document flow. top/left/right/bottom adjust it from there."
  },
  {
    id: 163, unit: 6,
    question: "A CSS rule set consists of:",
    options: ["Only a selector", "A selector followed by a declaration block", "Only declarations", "An HTML tag and values"],
    correct: 1,
    explanation: "A CSS rule set consists of a selector followed by a declaration block (enclosed in curly braces containing property:value pairs)."
  },
  {
    id: 164, unit: 3,
    question: "The alt attribute in an <img> tag provides:",
    options: ["An alternate image to load", "Alternative text displayed if the image cannot load", "The image's height", "An animation effect"],
    correct: 1,
    explanation: "The alt attribute provides alternative text displayed when an image cannot load. It also improves accessibility for screen readers."
  },
  {
    id: 165, unit: 8,
    question: "Which JavaScript method removes the last element from an array?",
    options: ["array.shift()", "array.pop()", "array.remove()", "array.delete()"],
    correct: 1,
    explanation: "array.pop() removes and returns the last element from an array. array.shift() removes the first element."
  },
  {
    id: 166, unit: 5,
    question: "Hover effects in HTML tables are achieved using:",
    options: ["JavaScript onclick events only", "CSS :hover pseudo-class on tr or td elements", "The HTML hover attribute", "Table border attributes"],
    correct: 1,
    explanation: "Hover effects on tables use CSS :hover pseudo-class (e.g., tr:hover td { background-color: #722750; }) to change styles on mouseover."
  },
  {
    id: 167, unit: 1,
    question: "Laravel is a web technology primarily associated with:",
    options: ["Frontend JavaScript", "PHP server-side framework", "Database management", "CSS styling"],
    correct: 1,
    explanation: "Laravel is a popular PHP server-side framework designed for building modern web applications with elegant syntax and robust features."
  },
  {
    id: 168, unit: 6,
    question: "The background-position CSS property controls:",
    options: ["The position of the element on screen", "The starting position of a background image", "The z-index of the background", "The position of text in the element"],
    correct: 1,
    explanation: "background-position controls the starting position (origin) of a background image within an element."
  },
  {
    id: 169, unit: 4,
    question: "An anchor tag <a> with href='#section' creates:",
    options: ["A link to an external website", "A link to an email address", "An internal page anchor/bookmark link", "A link to an image"],
    correct: 2,
    explanation: "href='#id' creates an internal anchor link that jumps to an element with that specific ID on the same page."
  },
  {
    id: 170, unit: 8,
    question: "async/await in JavaScript is syntactic sugar for:",
    options: ["Callbacks", "Promises", "Regular functions", "Event listeners"],
    correct: 1,
    explanation: "async/await is syntactic sugar built on top of Promises, making asynchronous code easier to write and read in a synchronous-looking style."
  },
  {
    id: 171, unit: 2,
    question: "Project Scope in web design defines:",
    options: ["The visual aesthetics", "The boundaries, deliverables, and limitations of the project", "The hosting platform", "The server configuration"],
    correct: 1,
    explanation: "Project Scope defines the boundaries, deliverables, timeline, and limitations of the web design project."
  },
  {
    id: 172, unit: 3,
    question: "Which HTML element makes text appear in monospace font by default?",
    options: ["<pre>", "<code>", "<kbd>", "Both <pre> and <code>"],
    correct: 3,
    explanation: "Both <pre> (preformatted text) and <code> (code samples) display in monospace font by default, preserving formatting."
  },
  {
    id: 173, unit: 7,
    question: "The CSS property 'top' only works on elements with position:",
    options: ["static", "any position value", "relative, fixed, absolute, or sticky (not static)", "only absolute"],
    correct: 2,
    explanation: "The top property only affects elements with position: relative, fixed, absolute, or sticky. It has no effect on position: static elements."
  },
  {
    id: 174, unit: 6,
    question: "Multiple CSS selectors can be combined by separating them with:",
    options: ["Semicolons", "Colons", "Commas", "Slashes"],
    correct: 2,
    explanation: "Multiple selectors can be grouped using commas (e.g., h1, h2, h3 { color: blue; }) to apply the same rules to multiple elements."
  },
  {
    id: 175, unit: 8,
    question: "What does 'JSON' stand for in web development?",
    options: ["JavaScript Object Notation", "Java Serialized Object Network", "JavaScript Online Number", "Just Simple Object Naming"],
    correct: 0,
    explanation: "JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format commonly used for API communication."
  },
  {
    id: 176, unit: 5,
    question: "The border attribute in an HTML table tag specifies:",
    options: ["The table's background color", "The thickness of the lines making up the table", "The table's margin", "The number of columns"],
    correct: 1,
    explanation: "The border attribute specifies the thickness (in pixels) of the lines that make up the table's borders."
  },
  {
    id: 177, unit: 4,
    question: "A relative file path like '../images/photo.jpg' means:",
    options: ["An absolute path to the image", "Go up one folder level, then into the images folder", "The image is on an external server", "The image is in the same folder"],
    correct: 1,
    explanation: "The '../' notation means 'go up one directory level'. So '../images/photo.jpg' goes up one level then into the images subfolder."
  },
  {
    id: 178, unit: 2,
    question: "Launching in the web design process means:",
    options: ["Starting the design phase", "Making the website publicly accessible on the internet", "Testing the website", "Creating the initial mockup"],
    correct: 1,
    explanation: "Launching is the phase where the completed, tested website goes live and becomes publicly accessible on the internet."
  },
  {
    id: 179, unit: 8,
    question: "Which statement CORRECTLY describes server-side vs client-side scripting?",
    options: ["Both run in the browser", "Server-side runs on the server; client-side runs in the browser", "Client-side runs on the server", "They are the same thing"],
    correct: 1,
    explanation: "Server-side scripts run on the web server and generate HTML sent to browsers. Client-side scripts (like JS) run in the user's browser."
  },
  {
    id: 180, unit: 6,
    question: "CSS stands for Cascading Style Sheets. The 'style sheet' is:",
    options: ["A physical document", "A grouping of formatting instructions that can control many HTML pages", "A type of HTML file", "A JavaScript object"],
    correct: 1,
    explanation: "A style sheet is a grouping of formatting instructions that can control the appearance of many HTML pages at once."
  },
  {
    id: 181, unit: 7,
    question: "Which CSS technique creates a two-dimensional layout system?",
    options: ["Flexbox", "CSS Grid", "Float", "Inline-block"],
    correct: 1,
    explanation: "CSS Grid creates a two-dimensional layout system with explicit rows and columns. Flexbox handles one dimension (row OR column) at a time."
  },
  {
    id: 182, unit: 3,
    question: "What information goes in the <head> section but NOT the <body>?",
    options: ["Paragraphs and images", "Navigation links and headings", "Title, meta tags, CSS links, and scripts", "Tables and forms"],
    correct: 2,
    explanation: "The <head> contains metadata: page title (<title>), meta tags, links to CSS (<link>), and script references — none of which are visible content."
  },
  {
    id: 183, unit: 5,
    question: "The type='submit' input creates:",
    options: ["A text field", "A reset button", "A pushbutton that submits the form", "A file selector"],
    correct: 2,
    explanation: "type='submit' defines a submit button (pushbutton) that, when clicked, submits the form data to the server."
  },
  {
    id: 184, unit: 4,
    question: "An image tag in HTML is written as:",
    options: ["<image src='photo.jpg'>", "<img src='photo.jpg' />", "<picture href='photo.jpg'>", "<photo src='photo.jpg'>"],
    correct: 1,
    explanation: "The correct HTML image tag syntax is <img src='photo.jpg' alt='description' />. It is a self-closing empty element."
  },
  {
    id: 185, unit: 8,
    question: "The 'fetch' API in JavaScript is used for:",
    options: ["Selecting DOM elements", "Making HTTP requests to servers/APIs", "Fetching CSS files", "Getting local storage data"],
    correct: 1,
    explanation: "The Fetch API provides an interface for making HTTP requests to servers and APIs, returning Promises for handling responses."
  },
  {
    id: 186, unit: 6,
    question: "The :hover pseudo-class applies styles when:",
    options: ["An element is clicked", "A user hovers the mouse pointer over an element", "An element has focus", "A page first loads"],
    correct: 1,
    explanation: "The :hover pseudo-class applies CSS styles when a user moves the mouse pointer over the targeted element."
  },
  {
    id: 187, unit: 2,
    question: "A URL (Uniform Resource Locator) is used to:",
    options: ["Store web page data", "Uniquely identify and locate resources on the web", "Encrypt web traffic", "Authenticate users"],
    correct: 1,
    explanation: "A URL is a unique address that identifies and locates a specific resource on the web (web page, image, file, etc.)."
  },
  {
    id: 188, unit: 4,
    question: "Video and audio elements in HTML5 allow:",
    options: ["Only Flash-based media", "Native browser media playback without plugins", "Server-side video rendering only", "External player plugins only"],
    correct: 1,
    explanation: "HTML5 introduced native <video> and <audio> elements that allow media playback directly in browsers without requiring Flash or other plugins."
  },
  {
    id: 189, unit: 7,
    question: "A whitespace between a CSS numeric value and its unit:",
    options: ["Is required", "Is optional", "Is NOT allowed (invalid)", "Only allowed for absolute units"],
    correct: 2,
    explanation: "A whitespace CANNOT appear between a numeric value and its CSS unit. '12 px' is invalid; it must be '12px' with no space."
  },
  {
    id: 190, unit: 8,
    question: "In JavaScript, which method converts a JSON string to a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toObject()"],
    correct: 1,
    explanation: "JSON.parse() converts a JSON string into a JavaScript object. JSON.stringify() does the reverse (object to JSON string)."
  },
  {
    id: 191, unit: 5,
    question: "Which HTML5 input type creates a color picker?",
    options: ["type='picker'", "type='rgb'", "type='color'", "type='palette'"],
    correct: 2,
    explanation: "type='color' creates a color picker input control that allows users to select a color from a color wheel or palette."
  },
  {
    id: 192, unit: 3,
    question: "The <html lang='en'> attribute specifies:",
    options: ["The encoding of the document", "The language of the HTML document", "The HTML version", "The author's language preference"],
    correct: 1,
    explanation: "The lang attribute specifies the primary language of the HTML document, helping browsers, screen readers, and search engines."
  },
  {
    id: 193, unit: 7,
    question: "In CSS Grid, 'fr' stands for:",
    options: ["frame", "fractional unit — represents a fraction of available space", "front", "frequency"],
    correct: 1,
    explanation: "fr is a fractional unit in CSS Grid. 1fr equals 1 part of the available space. grid-template-columns: 1fr 2fr creates a 1:2 ratio."
  },
  {
    id: 194, unit: 6,
    question: "CSS declarations always end with:",
    options: ["A period (.)", "A comma (,)", "A semicolon (;)", "A colon (:)"],
    correct: 2,
    explanation: "CSS declarations always end with a semicolon (;). Example: color: blue; margin: 0; padding: 10px;"
  },
  {
    id: 195, unit: 8,
    question: "DOM stands for Document Object Model. It represents HTML as:",
    options: ["A flat list of all elements", "A tree structure of objects that can be manipulated with JavaScript", "A CSS styling model", "A database of elements"],
    correct: 1,
    explanation: "The DOM represents an HTML document as a tree structure of objects (nodes). JavaScript can manipulate this tree to dynamically change content."
  },
  {
    id: 196, unit: 4,
    question: "The target='_blank' attribute on a hyperlink causes the link to:",
    options: ["Open in the same tab", "Open in a new browser tab/window", "Download the file", "Open in a frame"],
    correct: 1,
    explanation: "target='_blank' causes the linked page to open in a new browser tab or window rather than the current tab."
  },
  {
    id: 197, unit: 5,
    question: "Type='reset' in an input creates a button that:",
    options: ["Submits the form", "Resets all form fields to their default values", "Opens a dialog box", "Refreshes the page"],
    correct: 1,
    explanation: "type='reset' creates a reset button that, when clicked, clears all form fields and restores them to their default/initial values."
  },
  {
    id: 198, unit: 2,
    question: "Site Development in the web design process is when:",
    options: ["The initial concept is created", "The actual HTML, CSS, and JavaScript code is written", "The domain is registered", "The visual mockups are made"],
    correct: 1,
    explanation: "Site Development is the phase where the actual code (HTML, CSS, JavaScript, backend) is written to bring the design to life."
  },
  {
    id: 199, unit: 6,
    question: "An external style sheet is ideal when:",
    options: ["Only one element needs styling", "One page has a unique style", "The style needs to apply to many pages", "Inline styles are not working"],
    correct: 2,
    explanation: "An external style sheet is ideal when the style applies to many pages, allowing you to update the entire site by changing one file."
  },
  {
    id: 200, unit: 7,
    question: "The 'pt' CSS unit stands for:",
    options: ["Percentage", "Pixel type", "Points (1pt = 1/72 of 1 inch)", "Print units"],
    correct: 2,
    explanation: "pt stands for points. 1pt = 1/72 of 1 inch. Points are traditionally used in print typography."
  },
  {
    id: 201, unit: 8,
    question: "Which JavaScript method is used to add an element at the end of an array?",
    options: ["array.unshift()", "array.push()", "array.append()", "array.add()"],
    correct: 1,
    explanation: "array.push() adds one or more elements to the END of an array. array.unshift() adds to the beginning."
  },
  {
    id: 202, unit: 3,
    question: "What does the DTD (Document Type Definition) specify?",
    options: ["The visual design of the document", "Rules that govern how a document can be marked up", "The database schema", "The server configuration"],
    correct: 1,
    explanation: "DTD specifies the set of rules that govern how a document can be marked up — which elements and attributes are allowed and in what structure."
  },
  {
    id: 203, unit: 6,
    question: "CSS is described as the 'recommended way to control the:' ",
    options: ["Database layer", "Presentation layer in web development", "Application logic layer", "Server configuration layer"],
    correct: 1,
    explanation: "CSS is the recommended way to control the presentation layer in web development, separating visual styling from HTML structure and content."
  },
  {
    id: 204, unit: 4,
    question: "An absolute file path starts from:",
    options: ["The current file's location", "The root of the website", "The parent folder", "An external URL always"],
    correct: 1,
    explanation: "An absolute file path starts from the root of the website (e.g., /images/photo.jpg), while a relative path starts from the current file's location."
  },
  {
    id: 205, unit: 5,
    question: "The <select> element in HTML forms creates:",
    options: ["A text input", "A dropdown selection list", "A multi-line text area", "A radio button group"],
    correct: 1,
    explanation: "The <select> element creates a dropdown selection list, where users can choose one or more options from a list."
  },
  {
    id: 206, unit: 8,
    question: "Error handling with try...catch in JavaScript:",
    options: ["Prevents all errors", "Catches runtime errors and handles them gracefully without crashing", "Only works with network errors", "Is only for syntax errors"],
    correct: 1,
    explanation: "try...catch catches runtime errors that occur during code execution and allows you to handle them gracefully instead of crashing the app."
  },
  {
    id: 207, unit: 7,
    question: "The CSS box model consists of:",
    options: ["Content only", "Content, padding, border, and margin", "Color, font, size, and position", "Width, height, and display"],
    correct: 1,
    explanation: "The CSS box model consists of: content (actual content), padding (space inside border), border (element border), and margin (space outside border)."
  },
  {
    id: 208, unit: 1,
    question: "MongoDB is primarily used for:",
    options: ["Frontend design", "NoSQL database management", "CSS processing", "Serving static files"],
    correct: 1,
    explanation: "MongoDB is a popular NoSQL document database used in web development, especially in the MEAN/MERN stack."
  },
  {
    id: 209, unit: 6,
    question: "CSS declarations are enclosed in:",
    options: ["Square brackets [ ]", "Parentheses ( )", "Curly brackets { }", "Angle brackets < >"],
    correct: 2,
    explanation: "CSS declaration groups (blocks) are surrounded by curly brackets { }. The selector precedes them."
  },
  {
    id: 210, unit: 4,
    question: "HTML5 introduced which type of semantic structural elements?",
    options: ["<div> and <span>", "<header>, <nav>, <section>, <article>, <footer>", "<table> and <form>", "<h1> through <h6>"],
    correct: 1,
    explanation: "HTML5 introduced semantic elements like <header>, <nav>, <section>, <article>, <aside>, and <footer> for better document structure and meaning."
  },

  // ── PASTECH SERVICES QUESTION BANK ── Chapter 1 ──
  {
    id: 211, unit: 1,
    question: "Web Technologies is an umbrella term used to describe a collection of technologies used to:",
    options: ["Store and retrieve data only", "Plan, design, develop and deploy state-of-the-art websites and web applications", "Compile and run server programs", "Create operating systems"],
    correct: 1,
    explanation: "Web Technologies is an umbrella term for a collection of technologies used to plan, design, develop, and deploy state-of-the-art websites and web applications."
  },
  {
    id: 212, unit: 1,
    question: "SGML is a system (ISO standard) used to specify:",
    options: ["Database schemas", "Network protocols", "Document structure", "Programming language syntax"],
    correct: 2,
    explanation: "SGML (Standard Generalized Markup Language) is an ISO standard system used to specify document structure. HTML and XML are both derived from SGML."
  },
  {
    id: 213, unit: 1,
    question: "SGML stands for:",
    options: ["Standard General Markup Logic", "Standard Generalized Markup Language", "Structured General Meta Language", "Standard Graphic Markup Language"],
    correct: 1,
    explanation: "SGML stands for Standard Generalized Markup Language. It is the ISO standard from which both HTML and XML are derived."
  },
  {
    id: 214, unit: 1,
    question: "Which two languages are directly derived from SGML?",
    options: ["PHP and ASP", "CSS and JavaScript", "HTML and XML", "Python and Ruby"],
    correct: 2,
    explanation: "HTML (HyperText Markup Language) and XML (Extensible Markup Language) are both derived from SGML (Standard Generalized Markup Language)."
  },
  {
    id: 215, unit: 1,
    question: "Which language makes it possible to present information on the Internet?",
    options: ["PHP", "CSS", "HTML", "JavaScript"],
    correct: 2,
    explanation: "HTML (HyperText Markup Language) makes it possible to present information on the Internet. Web pages across the world consist of HTML."
  },
  {
    id: 216, unit: 1,
    question: "HTML is not a programming language. This statement is:",
    options: ["False — HTML is a full programming language", "True — HTML is a markup language, not a programming language", "False — HTML can program logic", "True — HTML is a scripting language"],
    correct: 1,
    explanation: "TRUE. HTML is a MARKUP language, not a programming language. It describes structure and presentation but contains no programming logic like loops or conditionals."
  },
  {
    id: 217, unit: 1,
    question: "Which of the following is a universal format for structured documents and data on the World Wide Web?",
    options: ["HTML", "XML", "CSS", "PHP"],
    correct: 1,
    explanation: "XML (Extensible Markup Language) is a universal format for structured documents and data on the World Wide Web."
  },
  {
    id: 218, unit: 1,
    question: "Which technology has no fixed, predefined set of tags and allows individual markup formats to be defined?",
    options: ["HTML", "XML", "CSS", "PHP"],
    correct: 1,
    explanation: "XML has no fixed, predefined set of tags. Users can define their own markup tags, making it extensible and flexible for any kind of structured data."
  },
  {
    id: 219, unit: 1,
    question: "Which of the following is a style sheets language (style language) introduced by W3C?",
    options: ["HTML", "XML", "CSS", "PHP"],
    correct: 2,
    explanation: "CSS (Cascading Style Sheets) is a style language introduced by the World Wide Web Consortium (W3C). It controls the visual presentation of HTML documents."
  },
  {
    id: 220, unit: 1,
    question: "AJAX refers to the process of determining the priority of styling rules. True or False?",
    options: ["True", "False — AJAX is a group of web technologies for asynchronous communication", "True — AJAX controls style priorities", "False — AJAX stands for Cascading"],
    correct: 1,
    explanation: "FALSE. 'Cascading' in CSS refers to the process of determining the priority of styling rules. AJAX (Asynchronous JavaScript and XML) is a group of technologies for asynchronous web communication."
  },
  {
    id: 221, unit: 1,
    question: "AJAX stands for:",
    options: ["Advanced JavaScript and XML", "Asynchronous JavaScript and XML", "Automated Java Extension", "Asynchronous Java and XHTML"],
    correct: 1,
    explanation: "AJAX stands for Asynchronous JavaScript and XML. It is a group of web technologies (HTML, CSS, JavaScript, XML) that work together to create interactive web applications."
  },
  {
    id: 222, unit: 1,
    question: "AJAX, JavaScript, XML, XSLT, and CSS are NOT programming languages. This statement is:",
    options: ["False — all are programming languages", "True — they are web technologies/scripting tools, not programming languages", "Partially true — only AJAX is a language", "False — CSS is a programming language"],
    correct: 1,
    explanation: "TRUE. AJAX, XML, XSLT, and CSS are NOT programming languages. JavaScript is a scripting language (not full programming language in the traditional sense). None of them are classified as full programming languages."
  },
  {
    id: 223, unit: 1,
    question: "Which type of website applications can send data to and retrieve data from servers asynchronously?",
    options: ["HTML", "XML", "CSS", "AJAX"],
    correct: 3,
    explanation: "AJAX (Asynchronous JavaScript and XML) website applications can send and retrieve data from servers asynchronously without reloading the entire page."
  },
  {
    id: 224, unit: 1,
    question: "Which is a cross-platform, general-purpose language originally designed for generating dynamic web pages?",
    options: ["HTML", "XML", "PHP", "AJAX"],
    correct: 2,
    explanation: "PHP is a cross-platform, general-purpose scripting language originally designed for generating dynamic web pages. It was created by Rasmus Lerdorf in 1994."
  },
  {
    id: 225, unit: 1,
    question: "Which of the following are competitors in the web development space?",
    options: ["HTML and XML", "PHP and HTML", "PHP and ASP.net", "AJAX and PHP"],
    correct: 2,
    explanation: "PHP and ASP.net are competitors — they are both server-side scripting technologies that serve the same purpose (dynamic server-side web pages) but from different ecosystems."
  },
  {
    id: 226, unit: 1,
    question: "Which of these is a server-side scripting language?",
    options: ["HTML", "ASP.net", "XML", "None of the above"],
    correct: 1,
    explanation: "ASP.net is a server-side scripting language/framework developed by Microsoft. HTML is a markup language and XML is a data format — neither are scripting languages."
  },
  {
    id: 227, unit: 1,
    question: "Which of these is a client-side scripting language?",
    options: ["HTML", "ASP.net", "PHP", "JavaScript"],
    correct: 3,
    explanation: "JavaScript is the primary client-side scripting language — it runs in the user's browser. ASP.net and PHP are server-side; HTML is a markup language."
  },
  {
    id: 228, unit: 1,
    question: "XHTML mirrors or extends versions of which technology?",
    options: ["XHTML", "XML", "PHP", "HTML"],
    correct: 3,
    explanation: "XHTML (Extensible HyperText Markup Language) mirrors or extends versions of HTML. It is stricter than HTML, following XML syntax rules."
  },
  {
    id: 229, unit: 1,
    question: "ASP stands for:",
    options: ["Active Server Pages", "Advanced Scripting Protocol", "Automatic Server Processing", "Active Style Pages"],
    correct: 0,
    explanation: "ASP stands for Active Server Pages. It is a Microsoft server-side scripting technology for creating dynamic web content."
  },
  {
    id: 230, unit: 1,
    question: "Which is an example of a uniform naming scheme for locating resources on the web?",
    options: ["URL", "HTTP", "HTML", "XML"],
    correct: 0,
    explanation: "URL (Uniform Resource Locator) is an example of a uniform naming scheme for locating resources on the web — one of the three core web mechanisms."
  },
  {
    id: 231, unit: 1,
    question: "Which provides protocols for access to named resources over the Web?",
    options: ["URL", "HTTP", "HTML", "XML"],
    correct: 1,
    explanation: "HTTP (HyperText Transfer Protocol) provides the protocols for access to named resources over the Web — the second of the three core web mechanisms."
  },
  {
    id: 232, unit: 1,
    question: "Which of these is a Hypertext system for easy navigation among resources?",
    options: ["URL", "HTTP", "HTML", "XML"],
    correct: 2,
    explanation: "HTML (HyperText Markup Language) provides hypertext for easy navigation among resources — the third of the three core web mechanisms."
  },
  {
    id: 233, unit: 1,
    question: "A Uniform Resource Identifier (URI) is best described as:",
    options: ["A protocol for web communication", "A character string that identifies a name or resource on the Internet", "A method for styling web pages", "A database query language"],
    correct: 1,
    explanation: "A URI (Uniform Resource Identifier) is a character string that identifies a name or resource on the Internet. URLs and URNs are both types of URIs."
  },
  {
    id: 234, unit: 1,
    question: "A Uniform Resource Locator (URL) provides:",
    options: ["A character string for identifying names only", "A method for referencing objects without the full path", "A method or specifications for finding resources on the Internet (including protocol and path)", "A naming scheme without location information"],
    correct: 2,
    explanation: "A URL (Uniform Resource Locator) provides a method or specifications for finding resources on the Internet, including both the protocol (http://) and the path."
  },
  {
    id: 235, unit: 1,
    question: "Uniform Resource Names (URNs) define a method for:",
    options: ["Finding resources with full protocol and path", "Referencing an object without declaring the full path to the object", "Storing web content on servers", "Encrypting web communication"],
    correct: 1,
    explanation: "URNs (Uniform Resource Names) define a method for referencing an object without declaring the full path to the object — they name resources without specifying location."
  },
  {
    id: 236, unit: 1,
    question: "In the URL http://www.pastech.com, what is the Top-Level Domain?",
    options: ["http", "www", "pastech", ".com"],
    correct: 3,
    explanation: "In http://www.pastech.com: .com is the Top-Level Domain (TLD), pastech is the Domain Name, www is the Subdomain, and http is the Protocol/scheme name."
  },
  {
    id: 237, unit: 1,
    question: "In the URL http://www.pastech.com, what is the subdomain?",
    options: [".com", "pastech", "www", "http"],
    correct: 2,
    explanation: "In http://www.pastech.com: www is the subdomain, pastech is the domain name, .com is the TLD, and http:// is the protocol."
  },

  // ── Chapter 2 ──
  {
    id: 238, unit: 2,
    question: "A web browser is a software application for:",
    options: ["Writing HTML code on a server", "Retrieving, presenting, and traversing information resources on the web", "Creating dynamic server-side scripts", "Managing website databases"],
    correct: 1,
    explanation: "A web browser is a software application designed for retrieving, presenting, and traversing information resources on the World Wide Web."
  },
  {
    id: 239, unit: 2,
    question: "Which browser subsystem lies between the user and the browser engine, including the address bar, back/forward buttons, and bookmarking menu?",
    options: ["Browser engine", "XML parser", "User interface", "Rendering engine"],
    correct: 2,
    explanation: "The User Interface (UI) lies between the user and the browser engine. It includes the address bar, back/forward buttons, bookmarking menu — every part except the main page display window."
  },
  {
    id: 240, unit: 2,
    question: "Which browser subsystem is responsible for loading a given URI and supporting browsing actions such as forward, back, and refresh?",
    options: ["Browser engine", "XML parser", "User interface", "Rendering engine"],
    correct: 0,
    explanation: "The Browser Engine is responsible for loading a given URI and supporting browsing actions such as forward, back, and refresh/reload. It interfaces between the UI and the Rendering Engine."
  },
  {
    id: 241, unit: 2,
    question: "Which browser subsystem is responsible for the visual representation of URI inputs, displaying HTML and XML documents, and setting up the page layout?",
    options: ["Browser engine", "XML parser", "User interface", "Rendering engine"],
    correct: 3,
    explanation: "The Rendering Engine is responsible for the visual representation of URI inputs, displaying HTML and XML (including embedded content), and positioning/laying out all page elements."
  },
  {
    id: 242, unit: 2,
    question: "The Rendering Engine includes an HTML parser. This statement is:",
    options: ["False — the rendering engine has no parser", "True — it includes an HTML parser to process HTML markup", "False — only the XML parser handles HTML", "True — but only for CSS, not HTML"],
    correct: 1,
    explanation: "TRUE. The Rendering Engine includes an HTML parser as part of its components to process and interpret HTML markup before rendering the page layout."
  },
  {
    id: 243, unit: 2,
    question: "MIME stands for:",
    options: ["Multiple Internet Message Extensions", "Multipurpose Internet Mail Extensions", "Multimedia Internet Messaging Encoding", "Multiple Interface MIME Extensions"],
    correct: 1,
    explanation: "MIME stands for Multipurpose Internet Mail Extensions. It identifies the format/type of a file being transferred (e.g., text/html, image/jpeg)."
  },
  {
    id: 244, unit: 2,
    question: "Which browser subsystem is where file transfer protocols FTP and HTTP are enforced, and MIME types of files are resolved?",
    options: ["Browser engine", "Networking", "User interface", "Rendering engine"],
    correct: 1,
    explanation: "The Networking subsystem is where file transfer protocols FTP and HTTP are enforced. It also resolves the MIME types of incoming files."
  },
  {
    id: 245, unit: 2,
    question: "Which browser subsystem is considered one of the most reusable subsystems?",
    options: ["Browser engine", "Networking", "XML parser", "Rendering engine"],
    correct: 2,
    explanation: "The XML parser is considered one of the most reusable subsystems in the browser reference architecture, due to XML's use across many web technologies."
  },
  {
    id: 246, unit: 2,
    question: "Which browser subsystem offers drawing and windowing primitives, user interface widgets, and fonts which may be tied closely to the OS?",
    options: ["Browser engine", "XML parser", "Rendering engine", "Display Backend"],
    correct: 3,
    explanation: "The Display Backend offers drawing and windowing primitives, a set of user interface widgets, and fonts. It is closely tied to the underlying operating system."
  },
  {
    id: 247, unit: 2,
    question: "Which browser subsystem stores bookmarks, toolbar settings, cookies, security certificates, and cache?",
    options: ["Data persistence", "XML parser", "Rendering engine", "Display Backend"],
    correct: 0,
    explanation: "The Data Persistence subsystem stores various data associated with the browsing session including bookmarks, toolbar settings (high-level) and cookies, security certificates, cache (low-level)."
  },
  {
    id: 248, unit: 2,
    question: "Which of the following refers to either hardware or software that helps deliver web content accessible through the Internet?",
    options: ["Data persistence", "Web server", "Web browser", "Web app"],
    correct: 1,
    explanation: "A Web server refers to either hardware (the computer) or software (the application) that helps deliver web content that can be accessed through the Internet."
  },
  {
    id: 249, unit: 2,
    question: "The primary function of a web server is to deliver web pages on request to clients using the:",
    options: ["URL", "HTTP", "HTML", "XML"],
    correct: 1,
    explanation: "The primary function of a web server is to deliver web pages on request to clients using HTTP (HyperText Transfer Protocol)."
  },
  {
    id: 250, unit: 2,
    question: "All of the following are major web servers EXCEPT:",
    options: ["Apache", "IIS", "Apache Tomcat", "PHP"],
    correct: 3,
    explanation: "PHP is a server-side SCRIPTING LANGUAGE, not a web server. Apache, IIS (Internet Information Services), and Apache Tomcat are all major web servers."
  },
  {
    id: 251, unit: 2,
    question: "All of the following are part of the web designing process EXCEPT:",
    options: ["Planning the site structure", "Visual Design", "Launching", "None of the above — all are web design phases"],
    correct: 3,
    explanation: "None of the above — Planning the site structure, Visual Design, and Launching are ALL legitimate phases of the web design process. All options listed ARE web design phases."
  },
  {
    id: 252, unit: 2,
    question: "Which web design phase includes a project brief and a project plan?",
    options: ["Project Definition", "Planning the Site Structure", "Visual Design", "Site Development"],
    correct: 0,
    explanation: "Project Definition includes a project brief and a project plan. This first phase identifies goals, objectives, stakeholders, and documents them in a project brief."
  },
  {
    id: 253, unit: 2,
    question: "Which web design phase includes a site diagram and wireframes as deliverables?",
    options: ["Project Definition", "Site Structure", "Visual Design", "Site Development"],
    correct: 1,
    explanation: "Site Structure (Site Architecture) phase produces deliverables including a site diagram and wireframes that show the layout and navigation of the site."
  },
  {
    id: 254, unit: 2,
    question: "A wireframe is best described as:",
    options: ["A fully colored website mockup", "A non-graphical layout showing structure without visual design", "A complete HTML page", "A database schema diagram"],
    correct: 1,
    explanation: "A wireframe is a non-graphical layout of a web page — it shows structure, element placement, and content hierarchy without color, fonts, or visual design elements."
  },
  {
    id: 255, unit: 2,
    question: "Which web design phase includes a draft of the homepage, client feedback, and approval of the final design?",
    options: ["Project Definition", "Planning the Site Structure", "Visual Design", "Site Development"],
    correct: 2,
    explanation: "Visual Design includes creating a draft homepage, gathering client feedback on designs, and obtaining final design approval before development begins."
  },
  {
    id: 256, unit: 2,
    question: "W3C stands for:",
    options: ["World Wide Web Committee", "World Wide Web Consortium", "World Wide Web Corporation", "World Wide Web Connection"],
    correct: 1,
    explanation: "W3C stands for World Wide Web Consortium. It is the main international standards organization for the World Wide Web, maintaining HTML and CSS standards."
  },
  {
    id: 257, unit: 2,
    question: "All of the following are part of the Site Development phase EXCEPT:",
    options: ["Build and integrate the site", "Build templates and create pages", "Technical/Functional Plan", "None of the above — all are part of Site Development"],
    correct: 3,
    explanation: "None of the above — Building and integrating the site, building templates, creating pages, AND creating a Technical/Functional Plan are ALL parts of the Site Development phase."
  },
  {
    id: 258, unit: 2,
    question: "All of the following are part of Launching a website EXCEPT:",
    options: ["Register a domain", "Find a hosting company", "Upload the website", "None of the above — all are part of Launching"],
    correct: 3,
    explanation: "None of the above — Registering a domain, finding a hosting company, and uploading the website are ALL part of the Launching phase."
  },
  {
    id: 259, unit: 2,
    question: "Wireframes DO include containers for all the major elements of the page. True or False?",
    options: ["False — wireframes do NOT include element containers", "True — wireframes DO include containers for all major page elements", "False — wireframes are just text descriptions", "True — wireframes include only images"],
    correct: 1,
    explanation: "TRUE. Wireframes DO include containers for all the major elements of the page (navigation, content, sidebar, footer, etc.) — just without visual styling or color."
  },

  // ── Chapter 3 ──
  {
    id: 260, unit: 3,
    question: "Which of the following are objects (texts or images) that are links to other texts, images, or pages?",
    options: ["Hypertext", "Markup", "Hyperlinks", "Documents"],
    correct: 2,
    explanation: "Hyperlinks are objects (texts or images) that are links to other texts, images, or pages. Clicking a hyperlink navigates to the linked resource."
  },
  {
    id: 261, unit: 3,
    question: "HTML codes that are enclosed in angle brackets (< and >) are called:",
    options: ["Hypertext", "Markup", "Hyperlinks", "Tags"],
    correct: 3,
    explanation: "Tags are HTML codes enclosed in angle brackets (< and >). For example, <p>, <h1>, <div> are all tags."
  },
  {
    id: 262, unit: 3,
    question: "The individual markup components in HTML are called:",
    options: ["Elements", "Markup", "Hyperlinks", "Tags"],
    correct: 0,
    explanation: "The individual markup components are called elements. An element consists of the start tag, content, and end tag together."
  },
  {
    id: 263, unit: 3,
    question: "In HTML, keywords provided in angle brackets are called:",
    options: ["Elements", "Markup", "Hyperlinks", "Tags"],
    correct: 3,
    explanation: "Tags are the keywords provided in angle brackets in HTML. For example, <p> is a tag that starts a paragraph element."
  },
  {
    id: 264, unit: 3,
    question: "HTML elements should have:",
    options: ["A starting tag and an ending tag", "Only a starting tag", "Only an ending tag", "No tags"],
    correct: 0,
    explanation: "HTML elements should have both a starting tag (opening tag) and an ending tag (closing tag). For example: <p>content</p>. Some empty elements use a self-closing tag."
  },
  {
    id: 265, unit: 3,
    question: "The way a document is marked up with elements and their attributes is defined by:",
    options: ["Document Type Definition (DTD)", "Hypertext Type Definition (HTD)", "Cascading Style Sheet (CSS)", "None of the above"],
    correct: 0,
    explanation: "The Document Type Definition (DTD) defines the way a document can be marked up — which elements and attributes are allowed and how they can be structured."
  },
  {
    id: 266, unit: 3,
    question: "The authoritative source for information about HTML and the HTML DTD is:",
    options: ["The World Wide Web Consortium (W3C)", "The World Wide Web", "The web", "The internet"],
    correct: 0,
    explanation: "The World Wide Web Consortium (W3C) is the authoritative source for information about HTML and the HTML DTD. W3C maintains all official HTML standards."
  },
  {
    id: 267, unit: 3,
    question: "Which tags surround the entire HTML document?",
    options: ["<html></html>", "<META></META>", "<SCRIPT></SCRIPT>", "<STYLE></STYLE>"],
    correct: 0,
    explanation: "The <html></html> tags surround the entire HTML document. It is the root element that contains all other elements."
  },
  {
    id: 268, unit: 3,
    question: "Colors in HTML/CSS are set using which format?",
    options: ["RBG", "RGB", "RBR", "BGR"],
    correct: 1,
    explanation: "Colors are set using RGB (Red, Green, Blue) format. The correct order is R-G-B, not RBG or BGR."
  },
  {
    id: 269, unit: 3,
    question: "Color codes in HTML/CSS are represented as:",
    options: ["Hexadecimal values", "Octal values", "Binary values", "None of the above"],
    correct: 0,
    explanation: "Color codes are represented as hexadecimal values. For example, #FF0000 for red, #00FF00 for green, #0000FF for blue."
  },
  {
    id: 270, unit: 3,
    question: "Which hexadecimal code represents the color blue?",
    options: ["#FF0000", "#00FF00", "#0000FF", "#000000"],
    correct: 2,
    explanation: "#0000FF represents blue. In RGB hex: the first two digits (FF) are Red, next two (00) are Green, last two (FF here) are Blue. So #0000FF = pure blue."
  },
  {
    id: 271, unit: 3,
    question: "Which hexadecimal code represents the color red?",
    options: ["#FF0000", "#00FF00", "#0000FF", "#000000"],
    correct: 0,
    explanation: "#FF0000 represents red. FF in the red channel, 00 in green, 00 in blue = pure red."
  },
  {
    id: 272, unit: 3,
    question: "Which hexadecimal code represents the color green?",
    options: ["#FF0000", "#00FF00", "#0000FF", "#000000"],
    correct: 1,
    explanation: "#00FF00 represents green. 00 in red, FF in green, 00 in blue = pure green."
  },
  {
    id: 273, unit: 3,
    question: "Which hexadecimal code represents the color black?",
    options: ["#FF0000", "#00FF00", "#0000FF", "#000000"],
    correct: 3,
    explanation: "#000000 represents black. All channels (R, G, B) are at their minimum value (00), producing no light = black."
  },
  {
    id: 274, unit: 3,
    question: "Which hexadecimal code represents the color white?",
    options: ["#FF0000", "#00FF00", "#FFFFFF", "#000000"],
    correct: 2,
    explanation: "#FFFFFF represents white. All channels (R, G, B) are at their maximum value (FF), producing full brightness on all channels = white."
  },
  {
    id: 275, unit: 3,
    question: "The <title></title> tags are used within which HTML section?",
    options: ["Body tag", "Head tag", "Header tag", "All of the above"],
    correct: 1,
    explanation: "The <title></title> tags must be placed within the <head> section of an HTML document. The title appears in the browser tab."
  },
  {
    id: 276, unit: 3,
    question: "In the HTML element <h3 class='student'>Pastech IT Services</h3>, what is the attribute?",
    options: ["h3", "class='student'", "Pastech IT Services", "</h3>"],
    correct: 1,
    explanation: "class='student' is the attribute. In this element: h3 is the element name/tag, class='student' is the attribute (name=value pair), 'Pastech IT Services' is the content."
  },
  {
    id: 277, unit: 3,
    question: "Markup instructions tell the browser to:",
    options: ["Connect to a database", "Structure or present the document appropriately", "Upload files to a server", "Run JavaScript code"],
    correct: 1,
    explanation: "Markup instructions indicate how the browser should structure or present a document. Markup is the appropriate set of instructions embedded in the content."
  },

  // ── Chapter 4 ──
  {
    id: 278, unit: 4,
    question: "Which heading tag is the smallest (lowest visual size)?",
    options: ["<h1>", "<h6>", "<h7>", "None of the above"],
    correct: 1,
    explanation: "<h6> is the smallest heading tag. HTML supports heading levels h1 through h6, with h1 being the largest and h6 the smallest."
  },
  {
    id: 279, unit: 4,
    question: "Ordered lists are enclosed in the <ol></ol> tags. True or False?",
    options: ["False — they use <ul></ul>", "True — ordered lists use <ol></ol> tags", "False — they use <list></list>", "True — but only for numbered lists"],
    correct: 1,
    explanation: "TRUE. Ordered lists use the <ol></ol> (ordered list) tags. Items inside use <li> tags. The default numbering is 1, 2, 3..."
  },
  {
    id: 280, unit: 4,
    question: "Unordered lists are also known as:",
    options: ["Numbered lists", "Bullet lists", "Roman numeral lists", "Alphabetic lists"],
    correct: 1,
    explanation: "Unordered lists are also known as bullet lists because items are displayed with bullet points rather than numbers or letters."
  },
  {
    id: 281, unit: 4,
    question: "The unordered list type attribute CANNOT be set to:",
    options: ["Disc", "Square", "Rectangle", "Circle"],
    correct: 2,
    explanation: "Rectangle is NOT a valid value for the unordered list type attribute. Valid values are: disc (default filled circle), square, and circle (empty circle)."
  },
  {
    id: 282, unit: 4,
    question: "Which HTML tag performs preformatted text (preserves whitespace and line breaks)?",
    options: ["<p>", "<pre>", "<pm>", "<format>"],
    correct: 1,
    explanation: "<pre> is the preformatted text tag. It preserves all whitespace, tabs, and line breaks exactly as written in the source code."
  },
  {
    id: 283, unit: 4,
    question: "HTML supports all of the following list types EXCEPT:",
    options: ["Ordered", "Unordered", "Definition", "Description"],
    correct: 3,
    explanation: "The three standard HTML list types are: Ordered (<ol>), Unordered (<ul>), and Definition (<dl>). 'Description' is not a separate list type in HTML."
  },
  {
    id: 284, unit: 4,
    question: "It is possible to nest one type of list within another in HTML documents. True or False?",
    options: ["False — lists cannot be nested", "True — HTML lists can be nested within each other", "False — only same-type lists can nest", "True — but only three levels deep"],
    correct: 1,
    explanation: "TRUE. HTML lists can be nested — you can place an ordered list inside an unordered list, or any combination. Nesting can go multiple levels deep."
  },
  {
    id: 285, unit: 4,
    question: "An ordered list is a list in which the list items are:",
    options: ["Displayed with bullet points", "Numbered sequentially", "Listed randomly", "Displayed with alphabets only"],
    correct: 1,
    explanation: "An ordered list is a list where items are numbered sequentially (1, 2, 3... or A, B, C... etc.) using the <ol> tag."
  },
  {
    id: 286, unit: 4,
    question: "Unordered lists are enclosed in which tags?",
    options: ["<ul></ul>", "<ol></ol>", "<i></i>", "<li></li>"],
    correct: 0,
    explanation: "Unordered lists use the <ul></ul> (unordered list) tags. Each list item inside uses the <li></li> tags."
  },
  {
    id: 287, unit: 4,
    question: "Ordered lists are enclosed in which tags?",
    options: ["<ul></ul>", "<ol></ol>", "<i></i>", "<li></li>"],
    correct: 1,
    explanation: "Ordered lists use the <ol></ol> (ordered list) tags. Each item inside uses the <li></li> tags."
  },
  {
    id: 288, unit: 4,
    question: "Each list item in an ordered or unordered list is placed using which tags?",
    options: ["<ul></ul>", "<ol></ol>", "<i></i>", "<li></li>"],
    correct: 3,
    explanation: "<li></li> (list item) tags are used for each individual item in both ordered and unordered lists."
  },
  {
    id: 289, unit: 4,
    question: "What is the correct HTML tag for the largest heading?",
    options: ["<h6>", "<heading>", "<head>", "<h1>"],
    correct: 3,
    explanation: "<h1> is the largest heading tag. HTML has six heading levels — h1 is the biggest and h6 is the smallest."
  },
  {
    id: 290, unit: 4,
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["<br />", "<break />", "<lb />", "<b>"],
    correct: 0,
    explanation: "<br /> is the correct tag for inserting a line break. It is an empty/self-closing element that creates a new line without starting a new paragraph."
  },
  {
    id: 291, unit: 4,
    question: "What is the correct HTML for creating a hyperlink?",
    options: ["<a name=''>A</a>", "<a>B</a>", "<a href='http://www.example.com'>example</a>", "<a url='http://www.example.com'>example</a>"],
    correct: 2,
    explanation: "The correct syntax uses the href attribute: <a href='http://www.example.com'>example</a>. The href attribute defines the link destination."
  },
  {
    id: 292, unit: 4,
    question: "How do you create an email link in HTML?",
    options: ["<mail href='a@b'>", "<mail>a@b</mail>", "<a href='a@b'>", "<a href='mailto:a@b.com'>"],
    correct: 3,
    explanation: "An email link uses the mailto: protocol in the href attribute: <a href='mailto:a@b.com'>. Clicking this opens the user's email client with the address pre-filled."
  },
  {
    id: 293, unit: 4,
    question: "How can you make a list that displays items with bullets?",
    options: ["<ol>", "<list>", "<ul>", "<bullet>"],
    correct: 2,
    explanation: "<ul> (unordered list) creates a bulleted list. The type of bullet can be controlled with CSS list-style-type: disc/circle/square."
  },
  {
    id: 294, unit: 4,
    question: "A static web page is one that:",
    options: ["Updates automatically based on user interaction", "Contains no links within the document or to other documents", "Requires JavaScript to display", "Is stored in a database"],
    correct: 1,
    explanation: "A static web page contains no links within the document or to other documents — it is a fixed, non-interactive page. Dynamic pages contain links and respond to user input."
  },
  {
    id: 295, unit: 4,
    question: "Creating links in HTML documents adds 'hyper' to hypertext. This statement is:",
    options: ["False — links do not add hypertext functionality", "True — adding links is what makes HTML into hypertext", "False — hypertext exists without links", "True — but only for external links"],
    correct: 1,
    explanation: "TRUE. Creating links in HTML documents adds 'hyper' to hypertext — linking documents together is the defining feature that makes HTML 'HyperText' Markup Language."
  },
  {
    id: 296, unit: 4,
    question: "Links to items located within a single web page or document are called:",
    options: ["Inter-system links", "Intra-system links", "Inter-page links", "Intra-page links"],
    correct: 3,
    explanation: "Intra-page links are links to items located within a single web page or document. They use named anchors (#id) to jump to sections within the same page."
  },
  {
    id: 297, unit: 4,
    question: "Links used to link other pages of the same website are called:",
    options: ["Inter-system links", "Intra-system links", "Inter-page links", "Intra-page links"],
    correct: 1,
    explanation: "Intra-system links link other pages within the same website. They typically use relative URLs since they stay within the same domain."
  },
  {
    id: 298, unit: 4,
    question: "Which type of links are used to link web pages or documents located on other websites or web servers?",
    options: ["Inter-system links", "Intra-system links", "Intra-page links", "Named anchor links"],
    correct: 0,
    explanation: "Inter-system links link web pages or documents located on other websites or web servers. They use absolute URLs (http://www.othersite.com/page)."
  },
  {
    id: 299, unit: 4,
    question: "Which attribute defines the path to the resource to be displayed when a link is clicked?",
    options: ["href", "URL", "URI", "<a>"],
    correct: 0,
    explanation: "The href (Hypertext Reference) attribute defines the path to the resource to be displayed when one clicks on the link. It is used inside the <a> tag."
  },
  {
    id: 300, unit: 4,
    question: "Href stands for:",
    options: ["Hypertext Reference", "Hyperlink Resource File", "HTML Reference File", "Hypertext Resource Format"],
    correct: 0,
    explanation: "Href stands for Hypertext Reference. It is the attribute used in <a> tags to specify the URL of the linked resource."
  },
  {
    id: 301, unit: 4,
    question: "Which attribute defines where the linked document will be opened (same tab, new window, etc.)?",
    options: ["href", "URL", "target", "<a>"],
    correct: 2,
    explanation: "The target attribute defines where the linked document will be opened: _self (same tab/default), _blank (new window/tab), _parent, _top, or a named frame."
  },
  {
    id: 302, unit: 4,
    question: "The URL for intra-page links use:",
    options: ["Absolute URLs", "Relative URLs", "Named anchors (#id)", "External protocols"],
    correct: 2,
    explanation: "Intra-page links use named anchors (e.g., href='#section1') to jump to elements with matching IDs within the same page."
  },
  {
    id: 303, unit: 4,
    question: "The URL for inter-system links is:",
    options: ["Intra-page (named anchors)", "Relative (no domain)", "Absolute (full URL with http://)", "All of the above"],
    correct: 2,
    explanation: "Inter-system links (linking to other websites) use absolute URLs that include the full address: protocol + domain + path (e.g., http://www.example.com/page.html)."
  },
  {
    id: 304, unit: 4,
    question: "The URL for intra-system links (within the same site) is:",
    options: ["Intra-page using named anchors", "Relative (uses partial path without full domain)", "Absolute with full http:// prefix", "All of the above"],
    correct: 1,
    explanation: "Intra-system links use relative URLs because pages are on the same server/domain. Relative URLs only need the path (e.g., ../about.html), not the full http://domain."
  },
  {
    id: 305, unit: 4,
    question: "The file extension .mov belongs to which media format?",
    options: ["Resource Interchange File Format Waveform", "QuickTime", "Moving Picture Experts Group", "Musical Instrument Digital Interface"],
    correct: 1,
    explanation: ".mov is the file extension for QuickTime video files, a multimedia format developed by Apple Inc."
  },
  {
    id: 306, unit: 4,
    question: "The file extension .jpg is part of which format?",
    options: ["Graphics Interchange Format", "Portable Network Graphics", "Joint Photographic Experts Group", "Bitmap"],
    correct: 2,
    explanation: "TRUE. The .jpg/.jpeg file extension is part of the JPEG (Joint Photographic Experts Group) format, commonly used for photographs and compressed images."
  },

  // ── Chapter 5 ──
  {
    id: 307, unit: 5,
    question: "An HTML table is divided into rows using which tag?",
    options: ["<table></table>", "<tr></tr>", "<td></td>", "<row></row>"],
    correct: 1,
    explanation: "The <tr></tr> (table row) tag divides a table into rows. Each row then contains individual cells defined by <td> or <th> tags."
  },
  {
    id: 308, unit: 5,
    question: "Td stands for:",
    options: ["Table Division", "Table Data", "Table Direction", "Table Description"],
    correct: 1,
    explanation: "Td stands for Table Data. The <td> tag defines individual data cells within a table row."
  },
  {
    id: 309, unit: 5,
    question: "Each table row is divided into data cells using which tag pair?",
    options: ["<table></table>", "<tr></tr>", "<td></td>", "<row></row>"],
    correct: 2,
    explanation: "<td></td> (table data) tags are used to divide each row into individual data cells that contain the actual table content."
  },
  {
    id: 310, unit: 5,
    question: "The <th></th> tag defines a:",
    options: ["Table horizontal row", "Table head section", "Table header cell", "Table height"],
    correct: 2,
    explanation: "<th> defines a table header cell. Header cells are typically bold and centered by default, used for column or row headings."
  },
  {
    id: 311, unit: 5,
    question: "Which HTML element surrounds the actual table data in each cell?",
    options: ["<table></table>", "<tr></tr>", "<td></td>", "<row></row>"],
    correct: 2,
    explanation: "<td></td> (table data) surrounds/contains the actual content/data in each table cell."
  },
  {
    id: 312, unit: 5,
    question: "Programs that process form data and send a response to the user via the browser are called:",
    options: ["Servers", "Scripts", "Hosts", "All of the above"],
    correct: 1,
    explanation: "Scripts are programs that process data from forms and send a response to the user via the browser. They can run server-side (PHP, ASP) or client-side (JavaScript)."
  },
  {
    id: 313, unit: 5,
    question: "Information submitted by users via HTML forms is processed by servers using:",
    options: ["Servers", "Scripts", "Hosts", "All of the above"],
    correct: 1,
    explanation: "Information submitted via HTML forms is processed using scripts — programs (like PHP, Python, Node.js) that run on the server to handle form data."
  },
  {
    id: 314, unit: 5,
    question: "Which HTML input type is used to define a pushbutton?",
    options: ["Reset", "File", "Submit", "Button"],
    correct: 3,
    explanation: "type='button' defines a general-purpose pushbutton. type='submit' is specifically for form submission, while type='button' is for any custom button action."
  },
  {
    id: 315, unit: 5,
    question: "Which HTML input type defines a textbox with a browse button for file selection?",
    options: ["Reset", "File", "Submit", "Button"],
    correct: 1,
    explanation: "type='file' defines a textbox with a browse button that allows users to select and upload files from their local computer."
  },
  {
    id: 316, unit: 5,
    question: "The 'text' input type defines a:",
    options: ["Single-line text box", "Double-line text area", "Size-dependent text box", "Multi-line text area"],
    correct: 0,
    explanation: "type='text' defines a single-line text input box. For multi-line text, use the <textarea> element instead."
  },
  {
    id: 317, unit: 5,
    question: "Which HTML element defines a title/caption for a fieldset?",
    options: ["<fieldset></fieldset>", "<name></name>", "<legend></legend>", "None of the above"],
    correct: 2,
    explanation: "<legend></legend> defines the title/caption for a fieldset, providing a label for the group of form controls enclosed in the <fieldset>."
  },
  {
    id: 318, unit: 5,
    question: "Which tag pair is used with <option></option> to create a dropdown list of items in a form?",
    options: ["<select></select>", "<li></li>", "<combo></combo>", "None of the above"],
    correct: 0,
    explanation: "<select></select> is used with <option></option> to create a dropdown selection list. The <select> is the container; <option> defines each choice."
  },
  {
    id: 319, unit: 5,
    question: "Scripting is the act of writing little computer programs that can enhance the appearance and functionality of a web page. Which is this process called?",
    options: ["Servers", "Scripting", "Hosting", "All of the above"],
    correct: 1,
    explanation: "Scripting is the act of writing small computer programs (scripts) that enhance the appearance and functionality of web pages."
  },
  {
    id: 320, unit: 5,
    question: "Scripts are executed either at the server-side or at the client-side. True or False?",
    options: ["False — scripts only run on the server", "True — scripts can run on either the server-side or client-side", "False — scripts only run in the browser", "True — but only for JavaScript"],
    correct: 1,
    explanation: "TRUE. Scripts execute either server-side (PHP, ASP, Python — on the web server) or client-side (JavaScript — in the user's browser)."
  },
  {
    id: 321, unit: 5,
    question: "Which type of scripting fulfills user requests by running a script on the web server to generate dynamic web pages?",
    options: ["Client-side scripting", "Server-side scripting", "Both a & b", "None of the above"],
    correct: 1,
    explanation: "Server-side scripting runs scripts directly on the web server to fulfill user requests and generate dynamic web pages. The output HTML is sent to the browser."
  },
  {
    id: 322, unit: 5,
    question: "The primary advantage of server-side scripting is:",
    options: ["The ability to highly customize the response based on the user's requirements", "Faster rendering in the browser", "No need for a web server", "Better visual animations"],
    correct: 0,
    explanation: "The primary advantage of server-side scripting is the ability to highly customize the response based on the user's requirements, database queries, and business logic."
  },
  {
    id: 323, unit: 5,
    question: "Which type of scripting does all of its processing on the user's own computer?",
    options: ["Client-side scripting", "Server-side scripting", "Both a & b", "None of the above"],
    correct: 0,
    explanation: "Client-side scripting does all processing on the user's own computer (browser). JavaScript is the most common client-side scripting language."
  },
  {
    id: 324, unit: 5,
    question: "The most popular client-side scripting language is:",
    options: ["PHP", "Python", "JavaScript", "ASP"],
    correct: 2,
    explanation: "JavaScript is the most popular client-side scripting language. It runs in every major browser and is essential for interactive web applications."
  },
  {
    id: 325, unit: 5,
    question: "Scripting is considered which type of programming?",
    options: ["Lightweight", "Heavyweight", "Mediumweight", "None of the above"],
    correct: 0,
    explanation: "Scripting is considered lightweight programming. Scripts are simpler and shorter than full programs, designed for specific tasks within web pages."
  },
  {
    id: 326, unit: 5,
    question: "Client-side scripts are interpreted by which component of the browser architecture?",
    options: ["Client-side scripting parsers of the browser", "Server-side scripting parsers", "Both a & b", "None of the above"],
    correct: 0,
    explanation: "Client-side scripts are interpreted by the scripting parsers (JavaScript Interpreter) of the browser architecture, running the code within the browser itself."
  },
  {
    id: 327, unit: 5,
    question: "The action and method attributes belong to which HTML tag?",
    options: ["<form> tag", "<script> tag", "<html> tag", "All of the above"],
    correct: 0,
    explanation: "The action (where to send data) and method (GET or POST) attributes belong to the <form> tag. They define how and where form data is submitted."
  },
  {
    id: 328, unit: 5,
    question: "Which HTML container is used to enclose the actual elements of a scripting language in a web page?",
    options: ["<fieldset></fieldset>", "<script></script>", "<select></select>", "None of the above"],
    correct: 1,
    explanation: "The <script></script> container encloses JavaScript or other scripting language code within an HTML document."
  },
  {
    id: 329, unit: 5,
    question: "Which of the three basic programming constructs enables executing a set of statements one after another in sequence?",
    options: ["Iteration", "Selection", "Sequence", "Looping"],
    correct: 2,
    explanation: "Sequence is the construct that enables executing statements one after another as they appear in a program — the default, top-to-bottom execution flow."
  },
  {
    id: 330, unit: 5,
    question: "Which programming construct enables code to respond to a variety of conditions?",
    options: ["Sequence", "Selection (if/else/switch)", "Iteration", "None of the above"],
    correct: 1,
    explanation: "Selection (if/else, switch/case) is the construct that enables code to respond to various conditions — executing different code paths based on conditions."
  },
  {
    id: 331, unit: 5,
    question: "Which programming construct is used to repeat a sequence of instructions in a program?",
    options: ["Sequence", "Selection", "Iteration (looping)", "Recursion"],
    correct: 2,
    explanation: "Iteration (looping) is the construct used to repeat a sequence of instructions. In JavaScript, for/while/do-while loops implement iteration."
  },
  {
    id: 332, unit: 5,
    question: "Iteration is also referred to as:",
    options: ["Recursion", "Looping", "Selection", "Sequence"],
    correct: 1,
    explanation: "Iteration is also referred to as looping. Both terms describe the process of repeatedly executing a block of code while a condition is met."
  },
  {
    id: 333, unit: 5,
    question: "The external script file cannot contain the <script> tag. True or False?",
    options: ["False — external scripts must have <script> tags", "True — external script files must NOT contain <script> tags", "False — <script> tags are required in all script files", "True — but only for JavaScript files"],
    correct: 1,
    explanation: "TRUE. External JavaScript files (.js files) should NOT contain <script> tags. The <script> tag is only used in the HTML file to reference the external script."
  },

  // ── Chapter 6 ──
  {
    id: 334, unit: 6,
    question: "A style sheet is a grouping of formatting instructions that can control:",
    options: ["Only the color of one page", "The appearance of many HTML pages at once", "Only JavaScript behavior", "Database queries"],
    correct: 1,
    explanation: "A style sheet is a grouping of formatting instructions that can control the appearance of many HTML pages at once — change the stylesheet, change the whole site."
  },
  {
    id: 335, unit: 6,
    question: "Which of the following is NOT a benefit of CSS?",
    options: ["Separate styling rules for different output media", "All styling kept in a limited number of style sheets", "Overall saving in bandwidth", "None of the above — all are CSS benefits"],
    correct: 3,
    explanation: "None of the above — all listed options ARE genuine benefits of CSS. CSS provides media-specific styles, limited style sheets, and bandwidth savings."
  },
  {
    id: 336, unit: 6,
    question: "Which type of style sheet is ideal when the style is applied to many pages?",
    options: ["Inline style sheet", "Internal style sheet", "External style sheet", "Embedded style sheet"],
    correct: 2,
    explanation: "External style sheets are ideal when the style is applied to many pages. One .css file can control the look of an entire website."
  },
  {
    id: 337, unit: 6,
    question: "Which type of style sheet is used when one single document has a unique style?",
    options: ["External style sheet", "Internal (embedded) style sheet", "Inline style", "Universal style"],
    correct: 1,
    explanation: "Internal (embedded) style sheets, placed in the <style> tag in the <head>, are used when one single document has a unique style not shared with other pages."
  },
  {
    id: 338, unit: 6,
    question: "Which type of CSS styling is used when a unique style is to be applied to one single occurrence of an element?",
    options: ["External style sheet", "Internal style sheet", "Inline style (style attribute)", "Class selector"],
    correct: 2,
    explanation: "Inline styles (using the style='' attribute directly on an element) are used when a unique style is to be applied to one single occurrence of an element."
  },
  {
    id: 339, unit: 6,
    question: "A CSS rule is a statement that tells browsers how to render particular elements on an HTML page. A rule set consists of a:",
    options: ["Property followed by a value", "Selector followed by a declaration block", "Tag followed by attributes", "ID followed by a class"],
    correct: 1,
    explanation: "A CSS rule set consists of a selector (which elements to target) followed by a declaration block (in curly braces, containing property:value pairs)."
  },
  {
    id: 340, unit: 6,
    question: "In the CSS syntax li { padding-left: 68px; }, what is the selector?",
    options: ["padding-left", "68px", "li", "{ padding-left: 68px; }"],
    correct: 2,
    explanation: "In li { padding-left: 68px; }, 'li' is the selector — it targets all <li> elements. The declaration block is everything in curly braces."
  },
  {
    id: 341, unit: 6,
    question: "In the CSS syntax li { padding-left: 68px; }, what is the property?",
    options: ["li", "68px", "padding-left", "{ }"],
    correct: 2,
    explanation: "In li { padding-left: 68px; }, 'padding-left' is the CSS property. The value is '68px'. Together they form the declaration."
  },
  {
    id: 342, unit: 6,
    question: "In the CSS syntax li { padding-left: 68px; }, what is the value?",
    options: ["li", "68px", "padding-left", "{ }"],
    correct: 1,
    explanation: "In li { padding-left: 68px; }, '68px' is the CSS value. It specifies the amount of left padding to apply to the list item."
  },
  {
    id: 343, unit: 6,
    question: "Everything between the curly brackets { } in a CSS rule is called the:",
    options: ["Selector", "Property", "Declaration block", "Rule set"],
    correct: 2,
    explanation: "Everything between the curly brackets in a CSS rule is called the declaration block. It contains one or more property:value declarations separated by semicolons."
  },
  {
    id: 344, unit: 6,
    question: "The ID selector in CSS is indicated using which symbol preceding the name?",
    options: ["A full stop (.)", "The pound/hash sign (#)", "An asterisk (*)", "An at sign (@)"],
    correct: 1,
    explanation: "The ID selector is indicated by the pound/hash (#) sign preceding the name. Example: #header { color: blue; } targets the element with id='header'."
  },
  {
    id: 345, unit: 6,
    question: "ID selectors should be used for page elements that appear how many times on a web page?",
    options: ["Multiple times", "Twice", "Once", "Three times"],
    correct: 2,
    explanation: "ID selectors should be used for elements that appear ONCE on a web page. IDs must be unique — each id value can only occur once per HTML document."
  },
  {
    id: 346, unit: 6,
    question: "A class selector in CSS is a name preceded by a:",
    options: ["Hash/pound sign (#)", "Full stop (.)", "Asterisk (*)", "At sign (@)"],
    correct: 1,
    explanation: "A class selector is preceded by a full stop (.) in CSS. Example: .highlight { background: yellow; } targets all elements with class='highlight'."
  },
  {
    id: 347, unit: 6,
    question: "A CSS class can be used how many times on a page?",
    options: ["Only once", "Only twice", "Multiple times — unlimited", "Up to 10 times"],
    correct: 2,
    explanation: "A CSS class can be used multiple times (unlimited) on a page. Unlike IDs, classes are designed to be applied to multiple elements sharing the same style."
  },
  {
    id: 348, unit: 6,
    question: "A tag selector in CSS is simply the HTML tag name but written:",
    options: ["With angle brackets < >", "Without the angular brackets", "With a period in front", "With a hash sign in front"],
    correct: 1,
    explanation: "A tag/element selector is simply the HTML tag name WITHOUT angle brackets. Example: p { color: blue; } targets all <p> elements."
  },
  {
    id: 349, unit: 6,
    question: "Which CSS selector matches any element that is nested at any level inside another element?",
    options: ["Universal selector", "Pseudo-class selector", "Descendant selector", "ID selector"],
    correct: 2,
    explanation: "The descendant selector matches any element nested at any level inside another element. It uses a space between selectors: e.g., div p targets <p> inside <div>."
  },
  {
    id: 350, unit: 6,
    question: "Pseudo-classes and pseudo-elements in CSS are used to apply styles to elements based on:",
    options: ["Their class names only", "Their ID attributes", "Their state or position in the document", "Their element type only"],
    correct: 2,
    explanation: "Pseudo-classes (:hover, :first-child) and pseudo-elements (:first-letter, :before) apply styles based on an element's state or position in the document."
  },
  {
    id: 351, unit: 6,
    question: "The universal CSS selector is indicated with:",
    options: ["A period (.)", "A hash sign (#)", "An asterisk (*)", "An at sign (@)"],
    correct: 2,
    explanation: "The universal selector is indicated with an asterisk (*). It applies styles to every single element on the web page: * { margin: 0; padding: 0; }"
  },
  {
    id: 352, unit: 6,
    question: "The universal selector applies to:",
    options: ["Only <div> elements", "Only elements with no class", "Every single element on the web page", "Only top-level elements"],
    correct: 2,
    explanation: "The universal selector (*) is applied to every single element on the web page — no exceptions. It is commonly used to reset browser default styles."
  },
  {
    id: 353, unit: 6,
    question: "By default, when a background image is set in CSS, it is repeated so it covers the:",
    options: ["First element only", "Left half of the page", "Entire background area of the element", "Top 100px of the element"],
    correct: 2,
    explanation: "By default, a CSS background image is repeated (tiled) so it covers the entire background area of the element (background-repeat: repeat by default)."
  },
  {
    id: 354, unit: 6,
    question: "Background color in CSS can be specified using all of the following EXCEPT:",
    options: ["Color name", "Hex value", "RGB value", "None of the above — all are valid"],
    correct: 3,
    explanation: "None of the above — color names, hex values, and RGB values are ALL valid ways to specify background color in CSS. HSLA and RGBA are also valid."
  }
];

export default quizQuestions;
