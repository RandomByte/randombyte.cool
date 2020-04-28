const express = require("express");
const app = express();
const g = require("./g");

const port = 3000;

app.get("/", (req, res) => {
	res.send("Hi There!");
});

app.use("/g", g);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
