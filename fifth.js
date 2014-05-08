var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list){
	if(err) throw err;
	//这里注意var file变量引用属性名，对于数组就是索引
	for(var file in list){
		if(path.extname(list[file]) == ('.' + process.argv[3]))
			console.log(list[file]);
	}
});

