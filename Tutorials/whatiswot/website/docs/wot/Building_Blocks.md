---
id: wot/building-blocks
---

# WoT Building Blocks

The third section of introduction to WoT is Building Blocks. In this tutorial, we will explain each building block, WoT Thing description, Wot Discovery, WoT Binding templates, and WoT Scripting API.

## Concept of Building Blocks

Let’s first look into the concept of building blocks - they allow the implementation of systems that conform with the abstract WoT Architecture.

![wot-building-blocks](/img/12-Building-Blocks/wot-building-blocks.png)

Let's take a closer look at the individual WoT building blocks.

- A Thing always has a TD.
- TD is a key building block that provides metadata describing a Thing and its network interface.
- This TD can be shared directly by the Thing or through a TD Directory.
- TDs can be restricted by profiles for easier implementation.
- Things and consumers can be programmed with the scripting API.
- The WoT Scripting API is optional, and the Binding Templates are informative.

## WoT Thing Description

A WoT Thing Description (TD) serves as a crucial aspect of the Web of Things framework.

All TDs can be represented in JSON-LD and can be processed just like a normal JSON. Essentially, a TD defines an information model using a semantic vocabulary and a serialized JSON representation. It acts as the key building block that provides human and machine-readable metadata describing the capabilities of a Thing and its network interfaces.

The TD describes Thing instances with general metadata such as name, ID, and description. Additionally, TDs can also contain Interaction Affordance metadata and Protocol bindings.

![thing description content](/img/12-Building-Blocks/td.png)

The WoT TD building block enhances interoperability. The goal is to enable communication within the machines or controllers.

> For example, a programmer can read the robot's TD and program the controller accordingly to automate processes. The controller then controls the robot by sending requests.

## WoT Discovery

WoT Thing Descriptions must be known or accessible to other systems and devices. The WoT Discovery building block accomplishes this by defining mechanisms for distributing and accessing WoT Thing Description over the network.

These mechanisms simplify access to Things and services and support their integration. They are not limited to a local area network but they also support remote discovery.

To achieve these functionalities, WoT Discovery uses a two-stage process:

1. In the first stage, an introduction is made with one of the several first-contact mechanisms such as QR codes, mDNS, and DIDs.

2. The second stage is the exploration phase where TDs are made available in TD directories so that they can be managed and searched for.

After the introduction, WoT Discovery defines a set of second-stage "exploration" mechanisms that provide actual access to metadata. This can be done in 2 ways: a single TD can be retrieved or a link for TD directories becomes available. It is a database with a REST API to access TDs.

Thing Description Directory service provides mechanisms to register, and retrieve WoT metadata and TDs after authentication and authorization.

Thus we can summarize the Discovery mechanism like this:

![discovery-mechanism](/img/12-Building-Blocks/discovery-mechanism.png)

## WoT Binding Templates

In the Internet of Things, various protocols are utilized for accessing devices, as no single protocol can adequately cover all use cases and requirements. The challenge of the WoT is to enable interactions of a variety across different IoT platforms.

WoT Binding Templates address this challenge by providing a framework for application clients to utilize Thing Descriptions (TDs). These templates enable the extraction of metadata regarding protocols (e.g., HTTP, MQTT), payload formats (e.g., JSON, CBOR), and their usage within specific IoT frameworks (e.g., ECHONET, OPC).

![wot-binding-templates](/img/12-Building-Blocks/wot-binding-templates.png)

In essence, Binding Templates provides a collection of blueprints that give guidance on how to interact with different Things that use different transport protocols and content types, or that are different IoT platforms or standards that use certain combinations of transport protocols and content types.

## WoT Profile

Now we will introduce the WoT profile.

The TD is flexible in nature and able to describe anything without any limitations.

> However, in some cases - let's say you are trying to communicate with your smart bulb with your smartphone, the lack of limitation of the TDs causes an unnecessary implementation load to communicate with every Thing.

To streamline this process, WoT introduces Thing Profiles. Profiles limit the capabilities of the TDs, which in turn enables out of the box interoperability among Things and devices. It also makes it possible to communicate with only minor configuration operations, such as entering a key or IP address.

> For example, developers wouldn't have to think about which protocols to choose.

## WoT Scripting API

Lastly, we will introduce the WoT Scripting API, which is an optional building block of W3C WoT. It makes it easier to develop IoT applications by providing an ECMA Script-based API similar to the Web browser APIs.

This is achieved by integrating a scripting runtime system into the WoT Runtime, where the WoT Scripting API enables the use of portable application scripts that define the behavior of Things, Consumers, and Intermediaries.

We will focus on consumers. The development phase becomes easier with functions like read property and invoke action, since you don’t have to decide on the protocols when programming controllers. It turns abstract run time scripts into concrete protocol messages.

To summarize, WoT enables implementing device logic by reusable scripts, executed in a runtime system for IoT applications, which aims to improve productivity and reduce integration costs.
