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

- In this video, we give a short introduction to each building block of the Web of Things — Thing Description, Binding Templates, Discovery, Scripting API and Profiles. In separate later videos, we will explore each individual building block in more detail.

### But what are building blocks, exactly?

- Building blocks allow the implementation of systems that conform with the abstract WoT Architecture. Let's take a closer look at the WoT building blocks.

- A Thing always has a TD, a Thing Description. It is a key building block that provides metadata describing a Thing and its network interface. This TD can be shared directly by the Thing or through the TD Directory — which is what we call Discovery. Things and consumers can be programmed with the Scripting API.

### Thing Description

- Let’s begin with the Thing Description, or TD — a key component of WoT.

- All TDs can be processed just like normal JSON documents. Essentially, a TD defines an information model using a semantic vocabulary and a serialized JSON representation. It provides both human- and machine-readable metadata describing the capabilities of a Thing.

- A TD describes a Thing instance with general metadata such as name, ID, and description. It typically also contains Interaction Affordance metadata and Protocol Bindings (such as Modbus and HTTP), as well as both public and local IP addresses.

### Bindings

- The second building block is WoT Binding Templates.

- The IoT uses a wide variety of protocols to access devices because no single protocol can cover all use cases and requirements. One of the main challenges of the WoT is enabling interactions across this wide variety of platforms.

- Binding Templates guide application clients on how to use a TD to extract protocol-specific metadata — for example, how to communicate using HTTP or Modbus. Essentially, they are blueprints for interacting with Things that use different protocols and content types.

- Here is an example of a TD. This is the JSON serialization of a temperature controller. It tells the consumer to send a Modbus request to read the temperature in the local network. The Thing can also be proxied by a gateway where an HTTP request will be sent instead of a Modbus request.

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

- The WoT TD building block enhances interoperability. The goal is to enable communication within the machines or controllers.

- Typically, a programmer can read the robot's TD and program the controller accordingly.

- The controller then sends a request to the device from our example to change the temperature.

### Discovery

- The next building block is WoT Discovery.

- WoT Thing Descriptions must be known or accessible to other systems and devices.

- WoT Discovery accomplishes this by defining mechanisms for distributing and accessing TDs over the network.

- These mechanisms simplify access to Things and services and support their integration. They are not limited to a local area network - they also support remote discovery.

- The Thing Description Directory service provides mechanisms to register and retrieve TDs after authentication and authorization.

### Scripting API

- The WoT Scripting API is an optional building block that lets developers build applications using reusable scripts.

- It provides a simple and consistent way to interact with Things described by TDs — such as reading properties, invoking actions, and subscribing to events.

- Once you have a TD, you can use the API to build dashboards or automate device logic without worrying about the underlying protocols.

### Profiles

- By design, TDs are flexible and able to describe anything without any limitations.

- However, in some cases, depending on the Thing’s purpose, it may be a good idea to limit the TD to prevent unnecessary implementation load. The WoT Profiles help this by constraining TD features.

### Summary

- To summarize, WoT building blocks enable implementing device logic by reusable scripts executed in a runtime system for IoT applications which aims to improve productivity and reduce integration costs.
