var validate = require("deep-email-validator");
const emailValidator = require('deep-email-validator');
var http = require("http");
var fs = require("fs");
var dns = require('dns');
// Import events module
var events = require('events');
var os = require("os");

var validator = require("email-validator");

console.log (validator.validate("abc@abc.c")); // true

// console.log (validate.validate('abc@abc.c'));


async function isEmailValid(email) {
 return emailValidator.validate(email)
}

isEmailValid('test@test.com');

const main = async () => {
  let res = await validate.validate('asdf@gmail.com')
  // {
  //   "valid": false,
  //   "reason": "smtp",
  //   "validators": {
  //       "regex": {
  //         "valid": true
  //       },
  //       "typo": {
  //         "valid": true
  //       },
  //       "disposable": {
  //         "valid": true
  //       },
  //       "mx": {
  //         "valid": true
  //       },
  //       "smtp": {
  //         "valid": false,
  //         "reason": "Mailbox not found.",
  //       }
  //   }
  // }

  // Can also be called with these default options
  await validate.validate({
    email: 'name@example.org',
    sender: 'name@example.org',
    validateRegex: true,
    validateMx: true,
    validateTypo: true,
    validateDisposable: true,
    validateSMTP: true,
  })
  return res;
};

console.log(main);

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");


var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");

fs.readFile('logics.txt', function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});


console.log("Program Ended");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/')

console.log("Hello World!");

console.log( __dirname );

function printHello() {
   console.log( "After two seconds");
}

// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
// clearTimeout(t);



dns.lookup('rightcampaign.com', function onLookup(err, address, family) {
   console.log('address:', address);
   dns.reverse(address, function (err, hostnames) {
      if (err) {
         console.log(err.stack);
      }

      console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
   });  
});


