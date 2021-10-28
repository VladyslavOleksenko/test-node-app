const http = require("http");


const html =
  `<!doctype>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Node.js test app</title>
      <link rel="stylesheet" href="app.css">
    </head>
  <body>
    <h1>Node.js test app</h1>
    <button class="button">click me</button>
  </body>
  <script src="app.js"></script>
  </html>`;
const css =
  `body {
    background-color: #eeffee;
  }`;
const js =
  `document.querySelector(".button").addEventListener("click", () => alert("Great, it works!"));`;


http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
      break

    case "/app.css":
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(css);
      break;

    case "/app.js":
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.end(js);
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not found");
  }

}).listen(3000, () => console.log("Server has been started ..."));