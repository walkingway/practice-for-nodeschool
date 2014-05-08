var fs = require('fs');
var count = 0;

fs.readFile(process.argv[2], function(error, data){
	if (error) {
		throw error;
	} else {
		var str = data.toString();
		var count = str.split("\n").length - 1;
		console.log(count);
	}
});
