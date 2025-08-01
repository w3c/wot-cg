# Video 14: Interaction Affordances in Thing Description

## Table of Contents

- Introduction
- Types of interaction affordances
    - Properties
    - Actions
    - Events
- Interaction Metadata
- Data Schema
- Concrete Protocol Information

### Introduction

In this video, we’re going to dive deeper into Thing Descriptions by exploring one of their core concepts - Interaction Affordances. As we previously learned, a TD serves as a description of the possible interactions with a device or service. This is achieved by Interaction Affordances, which formally define three distinct categories of possible interactions: properties, actions and events.

Each affordance is defined not just by its semantic role, but by accompanying metadata, such as the interaction metadata, a data schema descibring the input and output structure and forms specifying protocol bindings.

To understand this better, let's expand on the example from the last video. This is a snippet of the interaction affordances of a smart coffee machine.


``` json
{
  "properties": {
    "coffeeBeansLeft": {
      "title": "Remaining Coffee Beans",
      "type": "number",
      "forms": [
        {
          "href": "https://example.com/light/coffeeBeansLeft",
          "contentType": "application/json",
          "op": "readProperty",
          "htv:methodName": "GET"
        }
      ]
    }
  },
  "actions": {
    "brewCoffee": {
      "title": "Brew Coffee",
      "description": "Starts brewing a cup of coffee",
      "input": {
        "type": "object",
        "properties": {
          "size": {
            "type": "string",
            "enum": ["small", "medium", "large"]
          }
        }
      },
      "forms": [
        {
          "href": "https://example.com/light/brewCoffee",
          "contentType": "application/json",
          "op": "invokeAction",
          "htv:methodName": "POST"
        }
      ]
    }
  },
  "events": {
    "lowOnWater": { 
        "title": "Low Water Level",
        "forms": [
            {
                "href": "https://example.com/light/lowOnWater",
                "op": "subscribeEvent" 
            }
        ]
    }
  }
}

```

### Types of interaction affordances

#### Properties

> Zoom into coffeeBeansLeft property

Properties define the state of a Thing. They are readable or writable, and often represent sensor values or configuration settings. In our example, coffeeBeansLeft is a property that returns how many coffee beans remain in the machine. This property is read using a GET request to the provided URL.

#### Actions

> Zoom into brewCoffee action

Actions define operations that a client can trigger. These are used when something needs to happen, like a process starting or a task being performed. For instance, brewCoffee is an action that starts brewing a cup of coffee. It takes an input - the size of the coffee - and is invoked with a POST request.

#### Events

> Zoom into lowOnWater

Events represent notifications that a Thing emits, often asynchronously. These are used for real-time updates or alerts. In our case, lowOnWater is an event triggered when the water level is low. A client can subscribe to this event and be notified when it occurs.

### Interaction Metadata

> Highlight the relevant parts as an animation

Each affordance includes interaction metadata, which provides context about how it can be used. This includes:
 - title and description: Human-readable labels.
 - forms: Which define the URLs, protocols and content types for invoking the affordance
 - op: The type of operation, such as readProperty, invokeAction or subscribeEvent.

 This metadata ensures clients know how to interact with the affordance over the network.

### Data 

Interaction affordances also define data schemas that describe the structure of inputs and outputs. These schemas use JSON Schema to define data types, allowed values and nested structures.

In our example, the brewCoffee action expects an input object with a size property, which must be either "small", "medium" or "large". Data schemas are crucial for validation, tooling and interoperability.

### Concrete Protocol Information

Lastly, the forms section of each affordance specifies protocol bindings. This includes:
    - The protocol-specific endpoint to interact with.
    - contentType: the expected data formaat
    - op: the operation being performed
    - and additional protocol-specific fields. In our example we have used htv:methodName for HTTP.

Thing Descriptions are protocol-agnostic at their core. That means a single affordance can have multiple forms, each describing how to use a different protocol. For instance, brewCoffee could be exposed via both HTTP and CoAP with different forms. This flexibility enables interoperability across networks, making WoT as adaptable as possible.
