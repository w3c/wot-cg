# Video 11: Application and architecture patterns in Smart Homes and Smart Cities

- In this two-part tutorial, we will introduce the W3C Web of Things by exploring its application domains and common architecture patterns. In this video our focus will be Smart Homes and Smart Cities.

## Brief Introduction:

- The WoT aims to preserve and complement existing IoT standards and solutions by providing a standardized approach for connecting and integrating smart devices, services, and applications into the Web.

## Smart Homes

### Introduce smart homes:
- In smart homes, the ability to connect and manage multiple assets remotely over the network is highly beneficial.

- This helps within various activities within the home, such as controlling lights, adjusting room temperature, managing home appliances, and enhancing security using smartphones. These capabilities enable optimization of energy and resource consumption.

**Graphic:** `House with many WoT-powered devices, showcasing Thing Description of the house`

### Architecture patterns:

1. **Remote Controllers:**

- A common pattern involves using a remote controller to interact with devices via the home network.
- Devices act as servers, responding to commands from client controllers (e.g., smartphones) for actions such as adjusting settings or activating sensors.

**Graphic:** `TD of the house transitions into a phone interface (controller) demonstrating interactions with different devices`

2. **Gateways:**

- Gateways connect home networks to the internet, enabling remote management and monitoring.
- They facilitate communication between local devices and external controllers, enhancing accessibility and control.

**Graphic:** `Old Video 11 Cloud Gateway Animation`

## Smart cities

### Introduce smart cities:

- Similar to smart homes, monitoring of smart cities is possible. In this case, end users are citizens, municipalities, and government agencies.

- In smart cities, bridges, dams, and canals can be monitored for material conditions or deterioration for maintenance repair work to prevent significant damage. Parking slots and street lights can be monitored for crowd management and optimized usage too.

# Video 12: Application and architecture patterns in Industrial and Agriculture Systems

## Brief introduction

- Industrial applications of WoT involve more complex use cases compared to smart homes.

## Industrial systems

### Introduce industrial systems:

-  Industrial applications may resemble smart home applications but have broad requirements for instance, advanced monitoring of the connected manufacturing equipment as well as the manufactured products and predictions of any possible machine failures.

- Mention different protocols in factories and show TDs


## Agriculture systems

### Introduce agriculture systems:

- Another domain-specific application is in agriculture systems.

- With WoT, soil conditions can be monitored and optimal plans for watering and fertilizing can be created. Depending on the need, agricultural devices can be controled remotely. Thus the quality and quantity of the harvest can be increased.

### Architecture Patterns:

1. **Cross-domain Collaboration**

- In cross-domain collaborations, each system involves other systems in other domains. For example, Smart Factory with Smart City, Smart City with Smart Home. In those models, you can exchange information directly with each other in a peer-to-peer manner or indirectly via some collaboration platform. 



