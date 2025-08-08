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

Each affordance is defined not just by its semantic role, but by accompanying metadata, such as the interaction metadata, a data schema describing the input and output structure and forms specifying protocol bindings.

To understand this better, let's expand on the example from the last video. This is a snippet of the interaction affordances of a smart coffee machine. How an affordance is actually activated - e.g., via a network request, will be covered in a later video.


``` json
{
  "properties": {
    "coffeeBeansLeft": {
      "title": "Remaining Coffee Beans",
      "description": "Amount of remaining coffee beans in grams",
      "type": "number",
      "minimum": 0,
      "maximum": 500,
      "readOnly": true,
      "observable": false,
      "forms": [ ... ]
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
      "forms": [ ... ]
    }
  },
  "events": {
    "lowOnWater": { 
        "title": "Low Water Level",
        "forms": [ ... ]
    }
  }
}

```

### Types of interaction affordances

#### Properties

> Zoom into coffeeBeansLeft property

Properties define the state, sensor values or configuration parameters of a Thing. They can be read, observed or written to. In our example, coffeeBeansLeft is a property that returns how many grams of coffee beans remain in the machine. This property can be read but not observed nor written to.

#### Actions

> Zoom into brewCoffee action

Actions define operations that a Consumer application can trigger. These are used when something needs to happen within the Thing, like a process starting or a task being performed. For instance, brewCoffee is an action that starts brewing a cup of coffee. It takes an input - the size of the coffee - and is invoked by the Consumer.

#### Events

> Zoom into lowOnWater

Events represent notifications that a Thing emits to the subscribers of the event, often asynchronously. These are used for real-time updates or alerts. In our case, lowOnWater is an event triggered when the water level is low. A Consumer can subscribe to this event and be notified when it occurs. This event definition currently has no data field, meaning it simply signals that the condition occured. However, events can also carry data - for example, lowOnWater could include the exact amount of water left in milliliters.

### Interaction Metadata

> Highlight the relevant parts as an animation

Each affordance includes interaction metadata, which provides context about how it can be used. This includes:
 - title and description: Human-readable labels.
 - properties can have flags like readOnly, writeOnly, or observable.
 - actions can be marked as safe, idempotent, or synchronous.

 This metadata ensures clients know how to interact with the affordance over the network.

### Data 

Interaction affordances also define data schemas that describe the structure of inputs and outputs. These schemas use JSON Schema - as introduced in our preliminary series - to define data types, allowed values and nested structures. In our example, the brewCoffee action expects an input object with a size property, which must be either "small", "medium" or "large". Data schemas are crucial for validation, tooling and interoperability.

### Summary

That wraps up this tutorial. In the next video, we’ll dive deeper into protocol bindings and see exactly how to interact with a Thing over the network.