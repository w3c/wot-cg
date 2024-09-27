# Applications in Smart Homes and Smart Cities

## Table of Contents

- Smart Homes
- Architecture Patterns
  - Controllers
  - Gateways
- Smart Cities

## Preliminary Script

- In this two-part tutorial, we will introduce the W3C Web of Things by exploring its application domains and common architecture patterns. In this video our focus will be Smart Homes and Smart Cities.

### Smart Homes

- In smart homes, the ability to connect and manage multiple assets remotely over the network is highly beneficial.

- The interesting part about smart homes isn’t tied to a specific solution you buy, but rather in how WoT enables flexibility. Manufacturers can provide Thing Descriptions (TDs) for their devices, which lets anyone build and customize their own systems. By following these open standards, devices can communicate with each other across brands, allowing for seamless integration. This approach ensures that devices remain adaptable and private, and don’t become obsolete, as they can continuously support new use cases and technologies.

- This helps within various activities within the home, such as controlling lights, adjusting room temperature, managing home appliances, and enhancing security using smartphones. These capabilities enable optimization of energy and resource consumption.

**Graphic:** `House with many WoT-powered devices, showcasing Thing Description of the house`

#### Architecture patterns

In smart homes, we can already notice common architecture patterns. In this video, we will explain Controller and Gateway patterns.

1. **Controllers:**

- A common pattern involves using a controller, both locally and remotely, to interact with devices via the home network by consuming the Thing Description.

- Devices are represented by TDs and act as servers, responding to commands from client controllers (e.g., smartphones) for actions such as adjusting settings or activating sensors.

**Graphic:** `TD of the house transitions into a phone interface (controller) demonstrating interactions with different devices`

2. **Gateways:**

- Consumer can control it both locally or fully remotely.
- Gateways connect home networks to the internet, enabling remote management and monitoring.
- They facilitate communication between local devices and external controllers, enhancing accessibility and control.

**Graphic:** `Old Video 11 Cloud Gateway Animation`

### Smart cities

- Similar to smart homes, monitoring of smart cities is possible. In this case, end users are different from citizens to municipalities and government agencies.

- Smart cities need to cover multiple domains like water management / air quality monitoring and etc. (Like a website selling cars/pumps/breaks (multiple things in one place)). Since WoT is composed of open standards, it can be reliably used by municipalities.

- In smart cities, bridges, dams, and canals can be monitored for material conditions or deterioration for maintenance repair work to prevent significant damage. Parking slots and street lights can be monitored for crowd management and optimized usage too.

- Different managers who manage different Things - multiownership.

> Show TDs for every Thing.

Since it’s so big there’s usually a mix of architectures.
