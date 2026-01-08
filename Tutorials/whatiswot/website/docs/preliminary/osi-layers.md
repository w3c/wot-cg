---
sidebar_label: OSI Layers and Network Topologies
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# OSI Layers and Network Topologies

<iframe width="100%" height="400" src="https://www.youtube.com/embed/QMNkZidA3UY?si=aB2BfW7BFBmAy34F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If YouTube does not work, <a href = "https://github.com/w3c/wot-cg/blob/main/Tutorials/whatiswot/9-OSI_Layers/9-OSI-Layers.mp4">click here to watch from our GitHub repository.</a>  

<br />
<br />

In WoT we are dealing with devices interacting over the network. To understand how this happens, we need to look at how such communication is modelled.

**Why are Network Device Architectures Important?**

The WoT focuses on the protocols that operate on the application layer and use TCP and UDP from the transport layer. Thus, it is essential to understand OSI layers and how sending and receiving data works.

Now, let's simplify it further. We were talking about sending JSON data and changing the temperature of this object before:

```json
{
  "type": "Temperature",
  "value": 35
}
```

So let's see the magic behind the underlying processes across the network.

## OSI Layers

### Application Layer

Let's assume that we have the temperature data in the payload in the application layer of the temperature sensor and we want to send it via a HTTP request to the dashboard.

Application layer is an abstraction layer service that masks the rest of the application from the transmission process.

### Presentation Layer

Then our payload, moves to the Presentation Layer, where our data will be encrypted.

![encryption](/img/9-OSI-Layers/encryption.png)

### Session Layer

Following encryption, the Session Layer comes into play. This layer is where we establish a session with the device we wish to communicate with.

### Transport Layer

Next comes the Transport Layer.

This layer includes protocols like TCP and UDP which are meant to route data from sender to receiver.

In this layer, the information from the application layer is encapsulated as payload, and TCP and UDP add their own headers.

![tcp udp header](/img/9-OSI-Layers/tcp-udp-header.png)

### Network Layer

Following the Transport Layer, we encounter the Network Layer. Here, we define how devices are interconnected and how they communicate within the network. For instance, information about IP addresses is managed at this layer.

### Datalink Layer

Moving down the OSI model, we reach the Data Link Layer. Here, the structuring of bits into data is determined. For instance, information about MAC addresses is handled at this layer.

### Physical Layer

And lastly, our package arrives to the Physical layer, where the raw bit streams are transmitted over a physical medium such as Ethernet cable or Wi-Fi.

### Summary

In summary, we started with temperature data from our sensor and transmitted it down the OSI layers to update the temperature value on the dashboard. These components interacted with each other through the network.

Performing this, we were able to send the temperature data.

In order for the thermometer to receive the data, it has to go through all the OSI layers but in reverse order. At the end of the process, we can observe the temperature change on the indicator.

<figure id="fig-osi-layers-summary">
<img src={useBaseUrl('/img/tutorial/OSI-Layers/layers.png')} alt="OSI layers overview from application to physical layer" /> <figcaption><strong>Figure 1.</strong> Summary of OSI layers.</figcaption></figure>

## Different Network Topologies

There are different Network Topologies, such as:

- Client-Server Model
- Broker-Client Model
- Peer-to-Peer Model

In all of these models, the underlying network technology remains largely consistent; the variation lies in how the nodes are interconnected. WoT can be applied across different network device topologies without being specific to any particular one.

### Client-Server Model

One of the most widely used topologies is the Client-Server Model shown in [Figure 2](#fig-server-client-model). It consists of one server and one or more clients. In this model, the server is reactive, waiting for requests and responding to clients. Clients, on the other hand, are proactive in initiating requests.

<figure id="fig-server-client-model">
<img src={useBaseUrl('/img/9-OSI-Layers/server-client-model.png')} alt="Client-Server Model" />
<figcaption><strong>Figure 2.</strong> Client–Server Model.</figcaption> </figure>

Common protocols used in the Server-Client Model include HTTP, WebSocket, and CoAP.

If server and client are very tightly coupled, it is very hard one to evolve independently from another. Architectures like REST address this issue by promoting loose coupling, a principle also embraced by WoT. The REST concept where every resource has URI is also a primary design choice of the WoT.

### Broker-Client Model

The Broker-Client Model is another significant topology. In this model, multiple clients connect to a central broker. While it's often referred to as Publisher-Subscriber, the term Broker-Client is more precise as PubSub can exist without a broker.

<figure id="fig-broker-client-model">
<img src={useBaseUrl('/img/9-OSI-Layers/broker-client-model.png')} alt="Broker-Client Model" />
<figcaption><strong>Figure 3.</strong> Broker–Client Model.</figcaption> </figure>

The broker does not contain any application logic, it is simply a router that receives messages and sends them to clients that are listening.

In this model, if one of the clients is inactive, data sent by the broker waits for the client to become active again. This feature is called decoupling of time.

Alternatively, multiple clients can send data to the broker, which then distributes it to other clients.

### Peer-to-Peer Model

Lastly, we have the Peer-to-Peer Model, a true distributed system where there's no central point to retrieve data from. As seen in [Figure 4](#fig-peer-to-peer-model), each node in this model has equal functionality.

Examples of this model include BitTorrent and Bitcoin.

<figure id="fig-peer-to-peer-model">
<img src={useBaseUrl('/img/9-OSI-Layers/peer-to-peer-model.png')} alt="Peer-to-peer topology" />
<figcaption><strong>Figure 4.</strong> Peer-to-Peer Model.</figcaption> </figure>
