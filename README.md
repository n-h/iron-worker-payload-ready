#Iron.io Worker - Payload Ready
Simple Interface for getting your Iron.io Worker payload

### Usage
```
var IronWorkerPayloadReady = require('iron-worker-payload-ready');

IronWorkerPayloadReady(function(payload) {
	// Run your code here
	console.log('here is the payload data in json or string depending on payload');
	console.log(payload);
});
```

###Installation
Add "iron-worker-payload-ready" to your "dependencies" in your `package.json` file in your project's folder

```

{
	"name": "Name of your iron.io worker",
	"version": "0.0.1",
	"dependencies": {
		"iron-worker-payload-ready": "latest"
	}
}
```