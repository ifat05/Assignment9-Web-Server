// Import required modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// Port Number
const PORT = 3000;

// Function to serve HTML pages
function serveFile(filePath, contentType, statusCode, response) {

    fs.readFile(filePath, (err, data) => {

        if (err) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.end("500 - Internal Server Error");
        }
        else {
            response.writeHead(statusCode, {
                "Content-Type": contentType
            });
            response.end(data);
        }

    });

}

// Create Server
const server = http.createServer((req, res) => {

    if (req.url === "/style.css") {

        serveFile(
            path.join(__dirname, "public", "style.css"),
            "text/css",
            200,
            res
        );

    }

    else if (req.url === "/" || req.url === "/home") {

        serveFile(
            path.join(__dirname, "pages", "home.html"),
            "text/html",
            200,
            res
        );

    }

    else if (req.url === "/about") {

        serveFile(
            path.join(__dirname, "pages", "about.html"),
            "text/html",
            200,
            res
        );

    }

    else if (req.url === "/contact") {

        serveFile(
            path.join(__dirname, "pages", "contact.html"),
            "text/html",
            200,
            res
        );

    }

    else if (req.url === "/services") {

        serveFile(
            path.join(__dirname, "pages", "services.html"),
            "text/html",
            200,
            res
        );

    }

    else {

        serveFile(
            path.join(__dirname, "pages", "404.html"),
            "text/html",
            404,
            res
        );

    }

});

// Start Server
server.listen(PORT, () => {

    console.log(`Server is running at http://localhost:${PORT}`);

});