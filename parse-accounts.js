var fs = require('fs');
fs.readFile('moo.json', function(err,json){
	if (err) {
		console.log(err);
	}	
	else {
		var parsedJson = JSON.parse(json);
		console.log(parsedJson.length);	

		for (var i = parsedJson.length - 1; i >= 0; i--) {
			var email = parsedJson[i].properties.email.stringValue; 
			if (email.indexOf('google.com') !== -1) {
				console.log(email+',');
			}
		};
	}
});
