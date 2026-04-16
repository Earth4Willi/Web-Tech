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
  }
];

export default quizQuestions;
