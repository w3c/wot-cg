# Applications in Smart Homes and Smart Cities

## Table of Contents

- Smart Homes
- Architecture Patterns
  - Controllers
  - Gateways
- Smart Cities

## Preliminary Script

- In this two-part tutorial, we will introduce the W3C Web of Things by exploring its application domains and common architecture patterns. In this video, our focus will be Smart Homes and Smart Cities.

### Smart Homes

- In smart homes, the ability to connect and manage multiple assets remotely over the network is highly beneficial.

- The interesting aspect of smart homes isn’t tied to a specific solution you buy, but rather in how WoT enables flexibility. Manufacturers can provide Thing Descriptions (TDs) for their devices, which lets anyone build and customize their own systems. By following these open standards, devices can communicate with each other across brands, allowing for seamless integration. This approach ensures that devices remain adaptable and private, and don’t become obsolete, as they can continuously support new use cases and technologies.

- This helps with various activities within the home, such as controlling lights, adjusting room temperature, managing home appliances, and enhancing security using smartphones. These capabilities optimize energy and resource consumption.

**Graphic:** `House with many WoT-powered devices, showcasing Thing Description of the house`

#### Architecture patterns

Now that we’ve covered the basics of smart homes, let’s take a closer look at the architecture patterns that enable these systems to work efficiently.

1. **Controllers:**

- A common pattern involves using a controller, locally and/or remotely, to interact with devices on the home network by consuming the Thing Description.

- Devices are represented by TDs and act as servers, responding to commands from client controllers (e.g., smartphones) for actions such as adjusting settings or activating sensors.

**Graphic:** `TD of the house transitions into a phone interface (controller) demonstrating interactions with different devices`

2. **Gateways:**

- Gateways are another pattern commonly found in Smart Homes.

- Gateways connect home networks to the internet, enabling remote management and monitoring.

- They can use the local TD of a device and provide web-level access management, allowing devices to be accessed and managed both locally and remotely over the web. Internally, the device uses an app for local control, while externally, a protocol is used to manage remote interactions.

- They facilitate communication between local devices and external controllers, enhancing accessibility and control.

**Graphic:** `Old Video 11 Cloud Gateway Animation`

### Smart cities

- In smart cities, WoT's domain-agnostic nature enables scalability across various municipal systems, making it more flexible than traditional IoT solutions. 

- WoT's ability to seamlessly integrate different domains — such as water management, air quality monitoring, and traffic control — makes it a perfect fit for urban environments. WoT leverages open standards like Thing Descriptions (TDs) and built-in web protocols in addition to traditional IoT protocols and this allows devices from different systems and manufacturers to communicate.

- This flexibility ensures smart cities can scale as needed, adding new devices and systems without being tied to a single vendor or technology. Multi-ownership also becomes an option — different organisations or managers oversee different Things, while WoT ensures seamless interoperability across all of them.

> Show TDs for every Thing.

- Additionally, WoT's use of open standards supports a wide range of protocols, making it adaptable to various architectures, whether client-server or publish-subscribe, with or without cloud involvement. This versatility allows smart cities to choose the best approach for their infrastructure.
