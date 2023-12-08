---
id: Architecture Patterns
---

In this tutorial, we will explain architecture patterns, and how devices / things interact with controllers, agents, and servers.

Previously we have explained the server and client models and described how this architecture works.

Now we will show how they are used in the WoT architectures.

We will introduce 6 architecture patterns in this tutorial:

- Device Controllers
- Thing-to-Thing
- Gateways
- Digital Twins
- Cross-domain Collaboration
- System Integration

## Device Controllers

So, first, let’s start with the device controllers. A common deployment pattern is a local device controlled by a user-operated remote controller. Let’s remember the smart house example from the previous tutorial.

A remote controller can interact with the electronic devices through the local home network. In this pattern, at least one device electronic device has a server role that can accept a request and respond.

![smart-home-request](/img/11-Architecture-Patterns/smart-home-request.png)

Another device remote controller has a client role that can send a message with a request like to read a sensor value or to turn on the device.

![smart-home-response](/img/11-Architecture-Patterns/smart-home-response.png)

## Thing-to-Thing

Let’s move to the second architecture pattern, Thing-to-Thing. In this scenario we have an electronic device, let's say a heater and a temperature sensor.

When a sensor detects a change in room condition such as temperature drops below the threshold, it issues a control message “turn on” to the electronic device to power on the heater.

![thing-to-thing](/img/11-Architecture-Patterns/thing-to-thing.png)

## Gateways

Third architecture that we will intorduce is Gateways.

Smart home gateways pattern is achieved by placing a gateway between a home network and the Internet to manage electronic devices inside the house. It can also receive commands from a remote controller over the Internet.

In this pattern, the home gateway has both client and server roles.

For instance, when the remote controller in this case a smartphone, turns on the electronic device let's say security camera in the client role and the smartphone in the server role.

On the other way around, when the security camera sends a message to the smartphone, the gateway acts as a server role for the security camera and it acts as a client for the smartphone. If the camera is in a client role, it can pass the firewalls easily.

![gateway](/img/11-Architecture-Patterns/gateway.png)

## Digital Twins

The next one is Digital twins. Digital Twin is a model of a device or a group of devices that resides on a cloud server or edge devices. It is useful to represent real-world devices that may not be continuously online or to test simulations and services before they are deployed to real devices.

![digital-twin](/img/11-Architecture-Patterns/digital-twin.png)

It can model one or more devices. Digital Twins can be categorized in different ways depending on weather a device is connected to the cloud or gateway.

## Cross-domain Collaboration

Lastly, we will move to cross-domain collaboration. In cross-domain collaborations, each system involves other systems in other domains. For example, Smart Factory with Smart City, Smart City with Smart Home.

In those models, you can exchange information directly with each other in a peer-to-peer manner or indirectly via some collaboration platform.

![cross-domain-collab](/img/11-Architecture-Patterns/cross-domain-collab.png)
