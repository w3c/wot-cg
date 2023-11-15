---
sidebar_position: 4
---

In WoT we are dealing with interacting with devices over the network. Thus, we need to look at how such a communication is modelled.

**Why are Network Device Architectures Important?**

The WoT focuses on the protocols that operate on the application layer that use TCP and UDP from the transport layer. Thus, it is important to understand OSI layers and how sending and receiving data works.

Okay, so we were talking about sending JSON and changing the temperature of this object before:

```json
{
  "type": "Temperature",
  "value": 35
}
```

So let's see the magic behind the network.

## OSI Layers

### Application Layer

Let's assume that we have the temprature data in the payload in the application layer of the temperature sensor and we want to send it via a HTTP request to the dashboard.

Application layer is an abstraction layer service that masks the rest of the application from the transmission process.

### Presentation Layer

Then our payload, moves to the Presentation Layer, where our data will be encrypted.

![encryption](/img/9-OSI-Layers/encryption.png)

### Session Layer

After that encryption, Session Layer comes where we open a session with the device we want to talk with.

### Transport Layer

Next layer is Transport Layer.

This layer includes protocols like TCP and UDP which are meant to route data from sender to receiver.

In this layer, all the information that we have in the application layer encapsulated as payload and TCP and UDP adds their own headers.

<img src="/img/9-OSI-Layers/tcp-udp-header.png" alt="tcp-udp-header" width="300"/>

### Network Layer

Then network layers comes, where we define how the devices are linked together and how they communicate inside the network.

For Example: information about the IP address is declared in that layer.

### Datalink Layer

In datalink layer, it is determined how to structure bits into data.

For Example: information about the MAC address is declared in that layer.

### Physical Layer

And lastly, our package arrives to the Physical layer, where the raw bit streams are transmitted over a physical medium such as Ethernet cable or Wi-Fi.

### Summary

To sum up, we had the temperature data in our sensor and pass it down the OSI layers to change the temperature value in the dashboard. These two are interacting through the network.

Performing this we were able to send the temperature data.

In order for the thermomether to receive the data, it has to go through all the OSI layers but in reverse order. At the end of the process , we can observe that the temperature will change on the indicator.

## Different Network Topologies

There are different Network Topologies, such as:

- Server Client Model
- Broker Client Model
- Peer to Peer Model

In all of these, the underlying network technology is not changing much but rather how you connect the nodes themselves.
WoT can be applied on different network device topologies. It is not specific to any of them.

### Server Client Model

One of the most widely used is Server Client Model. It consists of one server, and one or more clients. In this model, the server is reactive, and the client is proactive meaning that the server waits for the request and responds to the clients.

![server-client-model](/img/9-OSI-Layers/server-client-model.png)

Common Server-Client Protocols are HTTP WebSocket and CoAP.

If server and client are very tightly coupled, it is very hard one to evolve independently from another. There are architectures that ensure they are not tightly coupled, like REST. Refering the other videos.
Similar to REST, WoT also encourages systems that are not tightly coupled. The REST concept where every recource has URI is also a primary design choise of the WoT.

### Broker Client Model

Second model we will explain is Broker Client Model. In this model, multiple clients connected to a central broker. Also, it refferred as Publisher-Subscriber however, Broker- Client is more spesific since there can be PubSub without broker.

![broker-client-model](/img/9-OSI-Layers/broker-client-model.png)

Broker does not contain any application logic, it simply a router that receives messages and send them to the clients that are listening.

In this model, if one of the clients is inactive, data sent by broker waits for the clients to be active again. This feature is called decoupling of time.

Or it can happen the other way around as well. For example, 2 clients can send data to Broker and Broker distributes it to the other client or clients.

### Peer to Peer Model

And the last one is Peer to Peer Model. This is a true distributed system where there is no single point to get data from. There is no central one in this model and all of them have the same funcionality.

Example of this model are BitTorrent and Bitcoin.

![peer-to-peer-model](/img/9-OSI-Layers/peer-to-peer-model.png)
