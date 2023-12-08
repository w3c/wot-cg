---
id: Building Blocks
---

The third section of introduction to WoT is Building Blocks. In this tutorial, we will explain each building block, WoT Thing description, Wot Discovery, WoT Binding templates, and WoT Scripting API.

## Building Blocks

Let’s start with building blocks in general. What are building blocks?

Building blocks allow the implementation of systems that conform with the abstract WoT Architecture.

![wot-building-blocks](/img/12-Building-Blocks/wot-building-blocks.png)

Let's look closer to the WoT building blocks.

It is an abstraction of the relationship between the building blocks and the main architectural aspects of a Thing.
A Thing always has a TD.
TD is a key building block that provides metadata describing a Thing and its network interface.
This TD can be shared directly by the Thing or through TD Directory
TDs can be restricted by the profiles for easier implementation
Things and consumers can be programmed with the scripting API.
The WoT Scripting API is optional, and the Binding Templates are informative.

## WoT Thing Description

After this overview, let’s start with WoT Thing description.

All TDs can be represented in JSON-LD and can be processed just as a normal JSON.

And TD defines an information model according to a semantic vocabulary and a serialized representation of JSON. It is the key building block that provides human and machine-readable metadata describing the capabilities of a Thing and its network interfaces.

TD describes Thing instances with general metadata such as name, ID, and description. In addition to that, TDs can also contain Interaction Affordance metadata and Protocol bindings.

The WoT TD building block enhances interoperability. The goal is to enable communication within the machines or controllers.

Typically, a programmer can read the robot's TD and program the controller accordingly to automate processes.

Controller controls the robot by sending requests.

## WoT Discovery

The next building blocks that we will introduce is WoT Discovery.

WoT Thing Descriptions must be known or accessible to other systems and devices.

WoT Discovery building block accomplishes this by defining mechanisms for distributing and accessing WoT Thing Description over the network.

These mechanisms are used to simplify access to Things and services and support their integration. They are not limited to a local area network but they also support remote discovery.

To achieve these functionalities, WoT Discovery uses a two-stage process.

In the first stage, an introduction is made with one of the several first-contact mechanisms such as QR codes, mDNS, and DIDs.

The second stage is the exploration phase where TDs are made available in TD directories so that they can be managed and searched.

After the introduction, WoT Discovery defines a set of second-stage "exploration" mechanisms that provide actual access to metadata.

This can be done in 2 ways: a single TD can be retrieved or a link for TD directories becomes available.

It is a database with a REST API to access TDs.

Thing Description Directory service provides mechanisms to register, and retrieve WoT metadata and TDs after authentication and authorization.

Thus we can summarize the Discovery mechanism like this:

![discovery-mechanism](/img/12-Building-Blocks/discovery-mechanism.png)

## WoT Binding Templates

The third building block is WoT Binding Templates.

The IoT uses a variety of protocols for accessing devices because no single protocol is enough to cover the different use cases and requirements. The challenge of the WoT is to enable interactions of a variety of different IoT platforms.

The Binding Templates address an application client to use the TD so that they can extract metadata of the protocols such as HTTP and MQTT etc., payload formats such as JSON and CBOR, etc. and their usage in an IoT framework context such as ECHONET and OPC.

![wot-binding-templates](/img/12-Building-Blocks/wot-binding-templates.png)

In general, Binding Templates provides a collection of blueprints that give guidance on how to interact with different Things that use different transport protocols, and content types or that are different IoT platforms or standards that use certain combinations of transport protocols and content types.

## WoT Profile

Now we will introduce the WoT profile.

By nature, TD is flexible and able to describe anything without any limitations.

However, in some cases let's say you are trying to communicate with your smart bulb with your smartphone, the lack of limitation of the TDs causes an unnecessary implementation load to communicate with every Thing.

And while implementing a thing profile makes it way easier with providing guidance. For instance, developers don’t have to think about which protocols to choose.

Thus, in those cases, Profile limits the capabilities of the TDs which enables out of box interoperability among things and devices. And make it possible to communicate with only minor configuration operations such as entering a key or IP address.

## WoT Scripting API

Lastly, we will introduce WoT Scripting API, which is an optional building block of W3C WoT. It makes it easier to develop IoT applications by providing an ECMA Script-based API similar to the Web browser APIs.

It makes it easier to develop IoT applications by providing an ECMAScript-based API similar to the Web browser APIs.

This is achieved by integrating a scripting runtime system into the WoT Runtime, where the WoT Scripting API enables the use of portable application scripts that define the behavior of Things, Consumers, and Intermediaries.

We will focus on consumers. The development phase becomes easier with functions like read property and invoke action. Since you don’t have to decide on the protocols when programming controllers. It turns abstract run time scripts into concrete protocol messages.

To summarize, WoT enables implementing device logic by reusable scripts executed in a runtime system for IoT applications which aims to improve productivity and reduce integration costs.
