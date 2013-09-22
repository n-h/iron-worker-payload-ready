var fs = require('fs');

function TypeCast(str) {
	try {
		return JSON.parse(str);
	} catch (e) {
		return str;
	}
}

// Wraps loading of payload file and passes payload data to callbackFunction when file is loaded
// Exits if payload is not readable
var IronWorkerReady = function(callbackFunction) {
	var payloadIndex = -1;

	process.argv.forEach(function(val, index, array) {
		if(val == "-payload") {
			payloadIndex = index + 1;
		}
	});

	if(payloadIndex == -1) {
		console.error("No payload argument");
		process.exit(1);
	}

	if(payloadIndex >= process.argv.length) {
		console.error("No payload value");
		process.exit(1);
	}

	fs.readFile(process.argv[payloadIndex], 'ascii', function(err, data) {
		if(err) {
			console.error("Could not open file: %s", err);
			process.exit(1);
		}

		callbackFunction(TypeCast(data));
	});
};
module.exports = IronWorkerReady;