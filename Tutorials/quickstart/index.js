// importing dependencies
const { Servient, Helpers } = require("@node-wot/core");
const { HttpClientFactory } = require("@node-wot/binding-http");
const { CoapClientFactory } = require("@node-wot/binding-coap");
const { MqttClientFactory } = require("@node-wot/binding-mqtt");

// create a Servient and add HTTP, CoAP and MQTT bindings
let servient = new Servient();
servient.addClientFactory(new HttpClientFactory());
servient.addClientFactory(new CoapClientFactory());
servient.addClientFactory(new MqttClientFactory());

let wotHelper = new Helpers(servient);

const WoT = await servient.start();

const coffeeMachineTD = await wotHelper
  .fetch("http://plugfest.thingweb.io:8083/smart-coffee-machine") //TODO: Change with a simpler implementation
const presenceSensorTD = await wotHelper
  .fetch("http://plugfest.thingweb.io:8083/presence-sensor") //TODO: Create Thing implementation
const smartClockTD = await wotHelper
  .fetch("http://plugfest.thingweb.io:8083/smart-clock") //TODO: Create Thing implementation
    
const coffeeMachineThing = await WoT.consume(coffeeMachineTD);
const presenceSensorThing = await WoT.consume(presenceSensorTD);
const smartClockThing = await WoT.consume(smartClockTD);

// your own code goes here
