import http from "http";
import fs from "fs";
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const html = `
            <html>
                <head>
                    <title>My First Page</title>
                    <link rel="stylesheet" href="/public/css/styles.css"/>
                </head>
                <div class="app__message">
                    <h1>Hello World</h1>
                </div>
            </html>
        `;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (req.url === "/public/css/styles.css") {
    fs.readFile("./public/css/styles.css", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/css" });
        res.end("File not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }
    });
  }
});

server.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
