fs = require('fs')

fs.readFile('liste', 'utf8', function (err,data) {
    if (err) {
	return console.log(err);
    }
    r = data.trim().split('\n');
    console.log(r[Math.floor(Math.random() * r.length)] + " !!!");
});
