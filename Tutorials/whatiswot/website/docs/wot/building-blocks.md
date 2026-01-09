---
sidebar_label: Building Blocks
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# WoT Building Blocks

<iframe width="100%" height="400" src="https://www.youtube.com/embed/Wk1PZgYhG4w?si=mWl9Tu-vrwYxmiPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If YouTube does not work, <a href = "https://github.com/w3c/wot-cg/blob/main/Tutorials/whatiswot/10-Building_Blocks/10-Building-Blocks.mp4">click here to watch from our GitHub repository.</a>  

<br />
<br />

With this tutorial, we begin to explain the concepts specific to the Web of Things. Be sure to review the [Preliminary tutorial](/docs/preliminary/payloads) to understand what the Web of Things builds upon. Here, we’ll provide a brief overview of the main building blocks that make up the Web of Things architecture — Thing Description, Binding Templates, Discovery, Scripting API, and Profiles. In separate later tutorials, we will explore each individual building block in more detail.

## What are building blocks?

Building blocks allow the implementation of systems that conform with the abstract WoT Architecture. Let us take a closer look [Figure 1](#fig-wot-building-blocks) at the WoT building blocks. 

<figure id="fig-wot-building-blocks">
  <img src={useBaseUrl('/img/12-Building-Blocks/wot-building-blocks.png')} alt="WoT building block structure" />
  <figcaption><strong>Figure 1.</strong> WoT building block structure.</figcaption>
</figure>

A Thing always has a Thing Description (TD). It is a key building block that provides metadata describing a Thing and its network interfaces. This TD can be hosted directly by the Thing or through a TD Directory — which is what we call Discovery. Things and Consumers can be programmed with the Scripting API.

## Thing Description

Let us begin with the Thing Description, or TD — a key component of WoT. This building block enhances interoperability with a goal of enabling communication within the machines or controllers.

All TDs can be processed just like normal JSON documents. Essentially, a TD defines an information model using a semantic vocabulary and a serialized JSON representation. It provides both human- and machine-readable metadata describing the capabilities of a Thing.

A TD describes a Thing instance with general metadata such as name, ID, and description. It typically also contains Interaction Affordance metadata and Protocol Bindings, such as Modbus or HTTP.

<figure id="fig-thing-description">
  <img src={useBaseUrl('/img/12-Building-Blocks/td.png')} alt="Thing Description content overview" />
  <figcaption><strong>Figure 2.</strong> Thing Description content overview.</figcaption>
</figure>

## Bindings

The second building block is WoT Binding Templates.

The IoT uses a wide variety of protocols to access devices because no single protocol can cover all use cases and requirements. One of the main challenges of the WoT is enabling interactions across this wide variety of platforms. Binding Templates guide application clients on how to use a TD to extract protocol-specific metadata — for example, how to communicate using HTTP or Modbus. Essentially, they are blueprints for interacting with Things that use different protocols and content types.

<figure id="fig-wot-binding-templates">
  <img src={useBaseUrl('/img/12-Building-Blocks/wot-binding-templates.png')} alt="Overview of binding templates." />
  <figcaption><strong>Figure 3.</strong> Overview of binding templates.</figcaption>
</figure>

Here is an excerpt of an example TD. This is the JSON serialization of a temperature controller. It tells the consumer to send a Modbus request to read the temperature in the local network.

```js
{
  // ...
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
  // ...
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

## Discovery

The next building block we will cover is WoT Discovery.

WoT Thing Descriptions must be known or accessible to other systems and devices. WoT Discovery accomplishes this by defining mechanisms for distributing and accessing TDs over the network. These mechanisms simplify access to Things and services and support their integration. They are not limited to a local area network - they also support remote discovery. The Thing Description Directory service provides mechanisms to register and retrieve TDs after authentication and authorization.

<figure id="fig-discovery-mechanism">
<img src={useBaseUrl('/img/12-Building-Blocks/discovery-mechanism.png')} alt="WoT discovery mechanism" />
<figcaption><strong>Figure 4.</strong> Overview of the WoT discovery mechanism.</figcaption> </figure>

## Scripting API

The WoT Scripting API is an optional building block that lets developers build applications using reusable scripts. It provides a simple and protocol-agnostic way to interact with Things described by TDs — such as reading properties, invoking actions, and subscribing to events.

:::tip
Once you have a TD, you can use the API to build dashboards or automate device logic without worrying about the underlying protocols.
:::

## Profiles

By design, TDs are flexible and able to describe anything without any limitations. However, in some cases — let's say you are trying to use your smartphone to communicate with your smart bulb — the lack of TD limitation causes an unnecessary implementation load to communicate with every Thing, as the Consumer implementation needs to handle all the possibilities.

To streamline this process, WoT introduces Thing Profiles. Profiles limit the capabilities of the TDs, which in turn enables out of the box interoperability between Things and Consumer implementations. It also makes it possible to communicate with only minor configuration operations, such as entering a key or IP address.

> For example, a profile based on HTTP would restrict the methods that the Thing can support, reducing the implementation effort for developers of Consumer applications.

## Summary

To summarize, WoT building blocks enable implementing device logic by reusable scripts executed in a runtime system for IoT applications which aims to improve productivity and reduce integration costs.
