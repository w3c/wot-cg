## Table of Contents

- Introduction and Definition
- TD Components
- Interactions
- Protocols

## Preliminary Script

### Introduction and Definition

- In this video, we will provide a general overview of a fundamental concept in the Web of Things — the Thing Description, or TD. A TD acts as a unique blueprint for the respective Thing, offering a standardized way to describe its functionality and how to interact with it.

- Thing Descriptions are written using the JSON-LD format, making it both machine and human-readable. To understand this better, let's take a look at a simple example — a smart coffee machine — and break down the components in its Thing Description:

**Code: Complete Thing Description — Coffee Machine Example**

```json
{
    "@context": ["https://www.w3.org/2019/wot/td/v1"], 
    "id": "urn:dev:ops:Coffee-Machine-1234",
    "title": "Smart Coffee Machine",
    "description" : "Simplified example of a smart coffee machine",
    "securityDefinitions": { ... },
    "security": { ... },
    "properties": {
        "coffeeBeansLeft": { ... }
    },
    "actions": {
        "brewCoffee": { ... }
    },
    "events": {
        "lowOnWater": { ... }
    },
    "links": [ ... ]
}
```

### TD Components

**Code: Complete Thing Description — Coffee Machine Example**

<!-- Mark each component on the graphic example and briefly explain what they do -->

- The Thing Descriptions begins with the Thing's metadata. It provides the essential information about the device, like its unique ID, title, and description.

- Then, in the Definitions of Interaction Affordances, we specify ways you can interact with the device, through its various properties, actions, and events. The example here shows the property `coffeeBeansLeft`, which describes the current state of the coffee beans; the action `brewCoffee`, which triggers brewing; and the event `lowOnWater`, which alerts you when the machine is low on water. We’ll explore Interaction Affordances in greater detail in the next video of this series. 

- The Security Metadata defines security requirements and mechanisms, that ensure secure access to the device by the user.

- To enable universal understanding, we can add Semantic Annotations. These allow other systems to consistently interpret the device’s terms and functions.

- Finally, we can link the Thing Description to other documents, such as documentation or a user interface.

### Ending

- This overview should give you a solid foundation for understanding the role of Thing Descriptions in the Web of Things.



