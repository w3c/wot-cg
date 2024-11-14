## Table of Contents

- Introduction and Definition
- TD Components
- Interactions
- Protocols

## Preliminary Script

### Introduction and Definition

- In this video, we will provide a general overview of a fundamental concept in the Web of Things — the Thing Description, or TD. A TD acts as a unique blueprint for the respective Thing, offering a standardized way to describe its functionality and how a Consumer should interact with it.

- Thing Descriptions are written using the JSON-LD format, making it both machine and human-readable. To understand this better, let's take a look at a simple example — a smart coffee machine — and break down the components in its Thing Description:

**Code: Complete Thing Description — Coffee Machine Example**

```json
{
    "@context": ["https://www.w3.org/2022/wot/td/v1.1"
               {"schema":"https://schema.org/"}], 
    "id": "urn:uuid:0804d572-cce8-422a-bb7c-4412fcd56f06",
    "title": "Smart Coffee Machine",
    "description" : "Remote controllable coffee machine",
    "schema:manufacturer":"ACME Corporation",
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

- Then, in the definitions of Interaction Affordances, we specify ways a Consumer application can interact with the Thing, through its various properties, actions, and events exposed on its network interfaces. The example here shows the property `coffeeBeansLeft`, which describes the current state of the coffee beans; the action `brewCoffee`, which triggers brewing; and the event `lowOnWater`, which alerts the Consumer when the machine is low on water. We’ll explore Interaction Affordances in greater detail in the next video of this series. 

- The Security Metadata defines security mechanisms required to ensure secure access to the Thing by the Consumer application. This way the Consumer application knows what type of credentials are needed to execute different operations.

- To add keywords that are not part of the TD standard, we can add Semantic Annotations. These allow other systems to consistently interpret the device’s terms and functions. Here, we annotate using `schema.org` to add the name of the manufacturer, which is not part of the core TD specification.

- Finally, we can link the Thing Description to other documents, such as documentation or a user interface.

### Ending

- This overview should give you a solid foundation for understanding the role of Thing Descriptions in the Web of Things. The next videos will explain the components in detail.



