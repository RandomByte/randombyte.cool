const express = require("express");
const router = new express.Router();

const repoName = /\/([a-z0-9-_.]*)/i;

router.use(function(req, res, next) {
	const pathname = req.path;
	const match = pathname.match(repoName);
	if (match && match.length) {
		const targetUrl = `https://github.com/RandomByte${match[0]}`;
		console.log(`Redirecting to ${targetUrl}...`);
		res.redirect(targetUrl, 308);
	} else {
		next();
	}
});

module.exports = router;
