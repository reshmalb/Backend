const fs = require("fs");
const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === "/") {
		res.write("<html>");
		res.write("<head><title> My first server</title></head>");
		res.write(
			'<body><form action="/message" method="POST"><input type="text" name="message"> <button>send</button></form></body>'
		);
		res.write("</html>");
		return res.end();
	}
	if (url === "/message" && method === "POST") {
		const body = [];
		req.on("data", (chunk) => {
			body.push(chunk);
			console.log(body);
		});

		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			const message = parsedBody.split("=")[1];
			console.log(message);
			// fs.writeFileSync('message.txt',message)
			fs.writeFile("message.txt", message, (error) => {
				res.statusCode = 302;
				res.setHeader("Location", "/");
				return res.end();
			});
		});
	}

	console.log("listening to  port 3000 ");
	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title> My first server</title></head>");
	res.write("<body><h1> Welcome to my first server</h1></body>");

	res.write("</html>");
	res.end();
};
module.exports = {
	handler: requestHandler,
};
