// importing dependencies
const { Servient, Helpers } = require("@node-wot/core");
const { HttpClientFactory, HttpsClientFactory } = require("@node-wot/binding-http");
const { CoapClientFactory } = require("@node-wot/binding-coap");
const { MqttClientFactory } = require("@node-wot/binding-mqtt");

// create a Servient and add HTTP, CoAP and MQTT bindings
let servient = new Servient();
servient.addClientFactory(new HttpClientFactory());
servient.addClientFactory(new HttpsClientFactory());
servient.addClientFactory(new CoapClientFactory());
servient.addClientFactory(new MqttClientFactory());

let wotHelper = new Helpers(servient);

const WoT = await servient.start();

const coffeeMachineTD = await wotHelper
  .fetch("https://zion.vaimee.com/things/urn:uuid:7ba2bca0-a7f6-47b3-bdce-498caa33bbaf")
// Alternatively, this Thing self-hosts its TD at http://plugfest.thingweb.io:8081/coffee-machine that you can fetch
const presenceSensorTD = await wotHelper
  .fetch("https://zion.vaimee.com/things/urn:uuid:0a028f8e-8a91-4aaf-a346-9a48d440fd7c")
const smartClockTD = await wotHelper
  .fetch("https://zion.vaimee.com/things/urn:uuid:913cf8cb-3687-4d98-8d2f-f6f27cfc7162")
    
const coffeeMachineThing = await WoT.consume(coffeeMachineTD);
const presenceSensorThing = await WoT.consume(presenceSensorTD);
const smartClockThing = await WoT.consume(smartClockTD);

//Your own code goes here
