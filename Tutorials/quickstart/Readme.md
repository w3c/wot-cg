# Web of Things Quick Start Tutorial

## Resources and Prerequisites

- package.json with dependencies: This will install the dependencies needed
- index.js with boilerplate: You should fill this with your own code.

### Prerequisites

- Node.js 18: You can install via the [official download page](https://nodejs.org/en/download).
- Optional: HTTP, CoAP and MQTT clients if you want debug or understand what happens behind node-wot. Some recommended ones:
  - HTTP: [CLI-based](https://curl.se/) | [UI-based](https://www.postman.com/)
  - CoAP: [CLI-based](https://www.npmjs.com/package/coap-cli) | [UI-based](https://github.com/mkovatsc/Copper4Cr)
  - MQTT: [CLI-based](https://mosquitto.org/download/) | [UI-based](https://mqttx.app/downloads)

## Task

Write a script that brews a coffee of your when you arrive at home if it is earlier than 9 am.

We have three WoT Things provided:

- Coffee Machine
- Presence Sensor
- Smart Clock

You can interact with them over the Internet and send requests.
You should read their Thing Description to understand how to interact with them.
The Node.js based library, node-wot, simplifies this process and will be installed as a dependency.
