---
sidebar_label: Smart Homes and Cities
---

# Smart Homes and Cities

<iframe width="100%" height="400" src="https://www.youtube.com/embed/XR1vduVPtoA?si=FGshRSPSv95EqSAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href = "https://github.com/w3c/wot-cg/blob/main/Tutorials/whatiswot/11-Applications_in_Smart_Homes_and_Smart_Cities/11-Applications-in-Smart-Homes-and-Smart-Cities.mp4">Click here if YouTube does not work go to our GitHub.</a>  

<br />
<br />

WoT, as we already know, is a set of standards defined for the interoperability of different Internet of Things platforms and application domains by the World Wide Web Consortium (W3C). It aims to preserve and complement existing IoT standards and solutions by providing a standardized approach for connecting and integrating smart devices, services, and applications into the Web.

In this section we will explore some of the Web of Things application domains and common architecture patterns. The focus of this tutorial will be Smart Homes and Smart Cities.

## Smart Homes

In smart homes, the ability to connect and manage multiple assets remotely over the network is highly beneficial. The interesting aspect of smart homes isn’t tied to a specific solution you buy, but rather is found in the ways WoT enables flexibility. A manufacturer can provide a Thing Description for their device, which lets anyone build and customize their own systems. By following these open standards, devices can communicate with each other across manufacturers, allowing for seamless integration. This approach also ensures that devices remain adaptable and private, and don’t become obsolete, as they can continuously support new use cases and technologies.

![smart-home](/img/10-Application-Domains/smart-homes.png)

> This helps with various activities within the home, such as controlling lights, adjusting room temperature, managing home appliances, and enhancing security using smartphones. These capabilities optimize energy and resource consumption.

### Architecture patterns

Now that we’ve covered the basics of smart homes, let’s take a closer look at the architecture patterns that enable these systems to work efficiently in a typical local network and remote-control scenario.

#### Controllers

A common pattern involves using a controller, locally and/or remotely, to interact with devices on the home network by consuming their Thing Description (TD). Devices are represented by TDs and typically act as servers, responding to commands from client controllers (for example, smartphones) for actions such as reading sensor values or actuating devices.

![smart-home](/img/10-Application-Domains/smart-homes.png)

#### Gateways

Gateways are another pattern commonly found in Smart Homes. They connect home networks to the internet, enabling remote management and monitoring.

A gateway can use the local TD of a device to provide web-level access management, allowing devices to be accessed and managed both locally and remotely over the web. In the local network, the device uses one protocol for control, while externally, another protocol is typically used to manage remote interactions. The gateways facilitate this communication between local devices and external controllers by adapting the TD's protocol.

![gateway](/img/10-Application-Domains/gateway.png)

:::tip
The TD itself remains the same in structure — only the protocol binding details are adapted to match the communication method.
:::

Let's look at an example of a smart home. Here different devices — such as solar panels, thermostats, and security cameras — may all use different local protocols. Gateways unify these devices by reading their local TDs, translating their communication into internet-friendly protocols, and providing secure access. Through this setup, devices can remain operable in the local network while also becoming accessible to cloud servers and remote applications.

![smart-home-connection](/img/10-Application-Domains/smart-home-connection.png)

## Smart Buildings

Smart buildings such as offices, schools, government facilities, shops, and hotels are the next important step towards building a smart city. Unlike homes, the Things are owned and managed by the building owner, rather than by the individuals who just control them.

> The features of these buildings mainly focus on comfort — like proper airflow — and safety — like fire alarms and security systems.

![smart-building](/img/10-Application-Domains/smart-building.png)

They often use protocols like BACnet, Modbus, and KNX for local control, which are not typical in a smart home. WoT can enhance interoperability, allowing different systems to work together more seamlessly. Since a smart city consists of many smart buildings and additional infrastructure, smart buildings are a crucial step toward scaling up to a fully connected city.

## Smart Cities

In a smart city, WoT's domain-agnostic nature enables scalability across various municipal systems, making it more flexible than traditional IoT solutions.

WoT's ability to seamlessly integrate different domains - such as water management, air quality monitoring, and traffic control — makes it a perfect fit for urban environments. WoT leverages open standards like Thing Descriptions and built-in web protocols in addition to traditional IoT protocols. This allows devices from different systems and manufacturers to communicate. This flexibility ensures that smart cities can scale as needed, adding new devices and systems without being tied to a single vendor or technology. Multi-ownership also becomes an option — different organisations or managers oversee different Things, while WoT ensures seamless interoperability across all of them.

Additionally, WoT's use of open standards supports a wide range of protocols, making it adaptable to various architectures, whether client-server or publish-subscribe, with or without cloud involvement. This versatility allows smart cities to choose the best approach for their infrastructure.

![smart-city](/img/10-Application-Domains/smart-city.png)

## What's More?

There are many more domain-specific examples in the WoT Architecture document besides the ones that we listed in this tutorial. If you want to learn more, you can refer to the WoT Architecture document available at:

<https://www.w3.org/TR/wot-architecture/>
