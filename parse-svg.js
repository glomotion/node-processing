var fs = require('fs');
fs.readFile('moo2.json', function(err,json){
	if (err) {
		console.log(err);
	}	
	else {
		var newData = [];
		var parsed = JSON.parse(json);
		for (var i = 0; i < parsed.length; i++) {
			var split = parsed[i].split(' ');
			var newPolygon = [];
			for (var ii = 0; ii < split.length; ii++) {
				var xAndY = split[ii].split(',');
				
				// calc x percentage
				var xProper = calcX(xAndY[0]);
				
				// calc y percentage
				var yProper = calcY(xAndY[1]);
				
				var newPoint = [xProper,yProper];
				newPolygon.push(newPoint);
			};
			newData.push(newPolygon);
		};
		for (var i = 0; i < newData.length; i++) {
			var shape = newData[i];
			for (var ii = 0; ii < shape.length; ii++) {
				console.log(shape[ii][0]+'%',shape[ii][1]+'%,');
			};
			console.log('--------------   end of shape  --------------');
		};
	}
});

function calcX(x) {
	// Total X is 612
	var TOTAL_X = 612;
	var num = 100 / TOTAL_X * x;
	return num.toFixed(3);
}

function calcY(y) {
	// Total Y is 792
	var TOTAL_Y = 792;
	var num = 100 / TOTAL_Y * y;
	return num.toFixed(3);
}