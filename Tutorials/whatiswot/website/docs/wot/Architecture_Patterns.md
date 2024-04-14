---
id: wot/architecture-patterns
---

# WoT - Architecture Patterns

In this section, we will introduce and discuss different architecture patterns and how devices interact with controllers, agents, and servers. 

Before, we explained the server and client models and how they operate. Now, let's see how they're applied in WoT architectures.

## Device Controllers

A common deployment pattern is a local device controlled by a user-operated remote controller. 

> Let’s recall the smart house example from the previous section. A remote controller can interact with the electronic devices through the local home network. At least one electronic device acts as a server, capable of receiving and responding to requests, while the remote controller acts as a client, sending messages for actions like sensor readings or device activation.

![smart-home-request](/img/11-Architecture-Patterns/smart-home-request-response.png)

## Thing-to-Thing

In this pattern devices communicate directly with each other.

> Let's take a heater and a temperature sensor. When the sensor detects a change in room condition, for example, as temperature drops below a set threshold, it sends a control message to the electronic device to turn on the heater.

![thing-to-thing](/img/11-Architecture-Patterns/thing-to-thing.png)

## Gateways

The smart home gateways pattern is achieved by placing a gateway between a home network and the internet to manage electronic devices inside the house. They can receive commands from a remote controller over the internet and serve as both clients and servers.

> For instance, the remote controller - in this case a smartphone, turns on the electronic device - the security camera. Then gateway acts as a client for the camera has the client role and as a server for the smartphone.

> Conversely, when the security camera sends a message to the smartphone, the gateway acts as a server for the security camera while it also acts as a client for the smartphone. If the camera plays the client role, it can bypass the firewalls easily.

![gateway](/img/11-Architecture-Patterns/gateway.png)

## Digital Twins

Digital twins are models of real-world devices hosted on cloud servers or edge devices. They are useful for representing real-world devices that may not be continuously online or to test simulations and services before they are deployed to real devices.

![digital-twin](/img/11-Architecture-Patterns/digital-twin.png)

Digital twins can model one or more devices. Digital Twins can be categorized in different ways depending on whether the device is connected to the cloud or a gateway.

## Cross-domain Collaboration

Lastly, in cross-domain collaborations, each system interacts with systems from other domains. In those models, this can occur directly in a peer-to-peer manner or indirectly through collaboration platforms.

> For example, Smart Factory with Smart City, Smart City with Smart Home may collaborate to exchange information to optimize operations.

![cross-domain-collab](/img/11-Architecture-Patterns/cross-domain-collab.png)
