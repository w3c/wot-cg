---
sidebar_position: 5
---

We will give a introduction to the W3C Web of Things including its application domains and we will continue with architecture patterns, and building blocks.

So let's start with what is WoT.

It is a set of standards defined for the interoperability of different Internet of Things platforms and application domains by the World Wide Web Consortium (W3C).

The WoT aims to preserve and complement existing IoT standards and solutions by providing a standardized approach for connecting and integrating smart devices, services, and applications into the Web.

Now, let us introduce some of the WoT application domains: Smart Homes, Industrial Applications, Agriculture, and Smart Cities.

## Smart Homes

In spaces like smart homes, it is very beneficial that multiple assets can be connected and managed over the network.

Depending on the conditions at home, various activities can be performed in the house or remotely.

For example, turning on lights, changing room temperature, turning home appliances on and off, managing sound and security with a smartphone. Thus, energy and other resource consumption can be optimized.

![smart-home](/img/10-Application-Domains/smart-homes.png)

Let’s look at our smart home example closer.
You can have direct remote access through gateway and routers,
or interactions happen through an intermediary like a cloud application.

Services running in the cloud collect data from edge devices and provide the data to users of the smart home through edge devices such as phones or PCs.

Multiple edge devices are connected to the gateways through local communication protocols such as KNX, ECHONET, ZigBee, DECT ULE, and Wi-SUN.

Multiple gateways can exist in one home, whilst each gateway can support multiple local protocols.

![smart-home-connection](/img/10-Application-Domains/smart-home-connection.png)

## Industrial Applications

The next one is the Industrial applications of WoT. Let’s zoom in on this factory.
Industrial applications may resemble smart home applications but they have to support more complex use cases such as advanced monitoring of the connected manufacturing equipment as well as the manufactured products and predictions of any possible machine failures.

![inside-of-factory](/img/10-Application-Domains/inside-of-factory.png)

Let's look at one smart factory example in detail. This time, different factory equipment is automated based on industrial protocols such as PROFINET, Modbus, OPC UA TSN, EtherCAT, or CAN. Since industrial environments like factories, have more strict requirements, there are multiple controllers that are connected to the manufacturing equipment.

An industrial edge device collects data from various controllers and enables remote monitoring via a dashboard or analyzes it for preventative maintenance.

![factory-connections](/img/10-Application-Domains/factory-connections.png)

## Agriculture Systems

Another domain-specific application is in agriculture systems.

With WoT, soil conditions can be monitored and optimal plans for watering and fertilizing can be created. Depending on the need, agricultural devices can be controlled remotely. Thus the quality and quantity of the harvest can be increased.

![agriculture](/img/10-Application-Domains/agriculture.png)

## Smart Cities

The last application domian we will explain is Smart Cities.

Similar to smart homes, monitoring of smart cities is possible. 
In this case, end users are citizens, municipalities, and government agencies.  
In smart cities, bridges, dams, and canals can be monitored for material conditions or deterioration for maintenance repair work. 
Thus, significant damage is prevented. 
Parking slots and street lights can be monitored for crowd management and optimized usage too.


![smart-city](/img/10-Application-Domains/smart-city.png)


### What's More?

There are many more domain-specific examples in the WoT Architecture document besides the one that we listed in this video. If you want to learn more, you can check the website:

https://www.w3.org/TR/wot-architecture/




