# Building Blocks

## Table of Contents

- Explaining Building Block Concept
- TD
- Bindings
- Discovery
- Scripting API
- Profiles
- Summary

## Preliminary Script

- In this video, we give a short introduction to each building block of the Web of Things — Thing Description, Binding Templates, Discovery, and Scripting API. Later, in separate videos, we will explore each individual building block in more detail.

### But what are building blocks, exactly?

- Building blocks allow the implementation of systems that conform with the abstract WoT Architecture. Let's take a closer look at the WoT building blocks.

- A Thing always has a TD, a Thing Description. It is a key building block that provides metadata describing a Thing and its network interface. This TD can be shared directly by the Thing or through the TD Directory — which is what we call Discovery. Things and consumers can be programmed with the Scripting API.

### Thing Description

- Let’s begin with the Thing Description, or TD — a key component of the WoT.

- All TDs can be processed just like normal JSON documents. Essentially, a TD defines an information model using a semantic vocabulary and a serialized JSON representation. It provides human- and machine-readable metadata describing the capabilities of a Thing.

- A TD describes a Thing instance with general metadata such as name, ID, and description. A TD can also contain Interaction Affordance metadata and Protocol Bindings such as Modbus and HTTP, as well as both public and local IP addresses.

- Here is an example of a TD. This is the JSON serialization of a TD of a temperature controller. It tells the consumer to send a Modbus request to read the temperature in the local network. The Thing can be proxied by a gateway where an HTTP request will be sent instead of a Modbus request.

<!-- Reference picture from whiteboard. Create an asset that could be used in the future as well.
|Temperature Controller|
|Current Temperature   |
|Modbus | Local Network| 
Can be side by side with code snippet.-->

```js
{
  "title":"Temperature Controller",
  "properties":{
    "temperature":{
        "type":"integer",
        "forms":[{
            "href":"modbus+tcp://192.168.1.50:183/1/1",
            "modv:functionName":"readHoldingRegisters",
            "contentType":"text/octet-stream;length=2"
        }]
    }
  }
}

```

```js
{
  "title":"Temperature Controller",
  "properties":{
    "temperature":{
        "type":"integer",
        "forms":[{
            "href":"https://mywotgateway.com/temperaturecontroller/properties/temperature",
            "htv:methodName":"GET",
            "contentType":"application/json"
        }]
    }
  }
}

```

<!-- - The WoT TD building block enhances interoperability. The goal is to enable communication within machines or controllers. -->

<!-- Change robot to better match temperature controller example. Dashboard thermometer thingy
Thing (Box cube shape) <-- Temperature sensor image   

ALL OF THIS AFTER BINDINGS -->

### Bindings

- The second building block is WoT Binding Templates.

- The IoT uses a variety of protocols for accessing devices because no single protocol is enough to cover the different use cases and requirements. The challenge of the WoT is to enable interactions of a variety of different IoT platforms.

- The Binding Templates address an application client to use the TD so that they can extract metadata of the protocols such as HTTP, Modbus, etc. In general, Binding Templates provide a collection of blueprints that give guidance on how to interact with different Things that use different transport protocols and content types.

### Discovery

- The next building block is WoT Discovery.

- WoT Thing Descriptions must be known or accessible to other systems and devices.

- WoT Discovery accomplishes this by defining mechanisms for distributing and accessing WoT TD over the network.

- These mechanisms are used to simplify access to Things and services, and to support their integration. They are not limited to a local area network; they also support remote discovery.

- Thing Description Directory service provides mechanisms to register and retrieve WoT metadata and TDs after authentication and authorization.

### Scripting API

- Next is an optional building block of W3C, the WoT Scripting API.

- The Scripting API makes it easier to develop IoT applications by providing an ECMAScript-based API, similar to the Web browser APIs.

<!-- Show code directly, Don't care about ECMA, "With this you can build your applications" (start with dashboard, then show the code) -->

- “Once you get the TDs, you build apps”?
TODO: Needs more content

### Profiles

- By nature, TD is flexible and able to describe anything without any limitations.

- In some cases, depending on the Thing’s purpose, it may be a good idea to limit the TD to prevent unnecessary implementation load.

### Summary

- To summarize, WoT enables implementing device logic by reusable scripts executed in a runtime system for IoT applications which aims to improve productivity and reduce integration costs.
