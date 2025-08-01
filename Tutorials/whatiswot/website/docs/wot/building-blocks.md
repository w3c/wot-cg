---
sidebar_label: Building Blocks
---

# WoT Building Blocks

<iframe width="100%" height="400" src="https://www.youtube.com/embed/Wk1PZgYhG4w?si=mWl9Tu-vrwYxmiPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href = "https://github.com/w3c/wot-cg/blob/main/Tutorials/whatiswot/10-Building_Blocks/10-Building-Blocks.mp4">Click here if YouTube does not work go to our GitHub.</a>  

<br />
<br />

This is the first tutorial in our Web of Things series. Here, we’ll provide a brief overview of the main building blocks that make up the Web of Things architecture — Thing Description, Binding Templates, Discovery, Scripting API and Profiles. In separate later tutorials, we will explore each individual building block in more detail.

## What are building blocks?

Building blocks allow the implementation of systems that conform with the abstract WoT Architecture. Let us take a closer look at the WoT building blocks.

![wot-building-blocks](/img/12-Building-Blocks/wot-building-blocks-new.png)

A Thing always has a Thing Description. It is a key building block that provides metadata describing a Thing and its network interface. This TD can be shared directly by the Thing or through the TD Directory — which is what we call Discovery. Things and Consumers can be programmed with the Scripting API.

## Thing Description

Let us begin with the Thing Description, or TD — a key component of WoT.

All TDs can be processed just like normal JSON documents. Essentially, a TD defines an information model using a semantic vocabulary and a serialized JSON representation. It provides both human- and machine-readable metadata describing the capabilities of a Thing.

A TD describes a Thing instance with general metadata such as name, ID, and description. It typically also contains Interaction Affordance metadata and Protocol Bindings (such as Modbus and HTTP), as well as both public and local IP addresses.

![thing description content](/img/12-Building-Blocks/td.png)

## Bindings

The second building block is WoT Binding Templates.

The IoT uses a wide variety of protocols to access devices because no single protocol can cover all use cases and requirements. One of the main challenges of the WoT is enabling interactions across this wide variety of platforms. Binding Templates guide application clients on how to use a TD to extract protocol-specific metadata — for example, how to communicate using HTTP or Modbus. Essentially, they are blueprints for interacting with Things that use different protocols and content types.

![wot-binding-templates](/img/12-Building-Blocks/wot-binding-templates.png)

Here is an example of a TD. This is the JSON serialization of a temperature controller. It tells the consumer to send a Modbus request to read the temperature in the local network.

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
The Thing can also be proxied by a gateway where an HTTP request will be sent instead of a Modbus request.

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

The WoT TD building block enhances interoperability. The goal is to enable communication within the machines or controllers.

> For example, a programmer can read the robot's TD and program the controller accordingly to automate processes. The controller then controls the robot by sending requests.

## Discovery

The next building block we will cover is WoT Discovery.

WoT Thing Descriptions must be known or accessible to other systems and devices. WoT Discovery accomplishes this by defining mechanisms for distributing and accessing TDs over the network. These mechanisms simplify access to Things and services and support their integration. They are not limited to a local area network - they also support remote discovery. The Thing Description Directory service provides mechanisms to register and retrieve TDs after authentication and authorization.

![discovery-mechanism](/img/12-Building-Blocks/discovery-mechanism-new.png)

## Scripting API

The WoT Scripting API is an optional building block that lets developers build applications using reusable scripts. It provides a simple and consistent way to interact with Things described by TDs — such as reading properties, invoking actions, and subscribing to events.

> Once you have a TD, you can use the API to build dashboards or automate device logic without worrying about the underlying protocols.

## Profiles

By design, TDs are flexible and able to describe anything without any limitations.

> However, in some cases - let's say you are trying to communicate with your smart bulb with your smartphone, the lack of limitation of the TDs causes an unnecessary implementation load to communicate with every Thing.

To streamline this process, WoT introduces Thing Profiles. Profiles limit the capabilities of the TDs, which in turn enables out of the box interoperability among Things and devices. It also makes it possible to communicate with only minor configuration operations, such as entering a key or IP address.

> For example, developers wouldn't have to think about which protocols to choose.

## Summary

To summarize, WoT building blocks enable implementing device logic by reusable scripts executed in a runtime system for IoT applications which aims to improve productivity and reduce integration costs.