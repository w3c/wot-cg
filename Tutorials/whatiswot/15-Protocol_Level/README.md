# Video 15: Forms and Protocol Bindings

## Table of Contents

- Introduction
- What are Protocol Bindings?
- Forms Structure
    - WoT Operations
    - Protocol and URI
    - Content Type
    - Protocol-Specific Vocabulary
- Protocol Bindings in Practice
    - HTTP
    - CoAP
    - MQTT
    - Modbus
- Summary

### Introduction

In the previous tutorial, we explored Interaction Affordances — properties, actions, and events — and how they describe what a Thing can do. In this video, we will focus on the next important question: How do those interactions actually happen over the network?

In the Web of Things, this is handled through protocol bindings. Protocol bindings define how a Consumer communicates with a Thing using concrete protocols like HTTP, CoAP, MQTT, etc.

### What are Protocol Bindings?

A protocol binding maps an operation of an interaction affordance — such as reading a property or invoking an action — to a specific network message: communication protocol and endpoint, and the parameters required by the protocol. By the end of this video, you'll understand how the Consumer knows where to send a request, which protocol to use, and how to encode the data.

### Forms Structure

A form describes a way to interact with an affordance over a specific protocol. It can be thought of as a simple instruction to the Consumer: "To perform this type of operation on this affordance, send a request in this way to this address." Now let's break down the key parts of a form.

#### WoT Operations

Each form can declare one or more operations, using the `op` field. Operations describe what semantic action(s) the Consumer can perform — for example: reading or writing a property, invoking an action, or subscribing to an event. These operation types are defined by the WoT specification and are independent of any specific protocol. You can find a full list on the TD specification.

If `op` is omitted, default operations are inferred based on the affordance type. For example, forms of a readable property are assumed to include the `readproperty` operation unless stated otherwise.

#### Protocol and URI

The most important field in a form is `href`. The `href` is a URI that tells the client where to interact with the Thing and which protocol to use. The protocol is inferred directly from the URI scheme.
- `https://` -> HTTP
- `coap://` -> CoAP
- `mqtt://` -> MQTT

This design allows the Thing Description concept to stay protocol-agnostic while still enabling concrete protocol-level interactions. A single affordance can expose multiple forms as well, offering the same interaction over different protocols.

#### Content Type

Forms also specify a `contentType`, which tells the client how the payload is encoded. Common examples include:
- `application/json` -> JSON
- `application/cbor` -> CBOR
- `text/plain` -> TEXT

This ensures that both the Thing and the Consumer agree on how data is serialized and parsed. If no content type is specified, protocol-specific defaults may apply, but explicitly declaring them improves interoperability.

#### Protocol-Specific Vocabulary

While WoT aims to stay protocol-independent, forms allow protocol-specific extensions when needed. These are expressed through additional fields defined in protocol binding specifications.

### Protocol Bindings in Practice

Now that we understand the structure of forms, let's see how protocol bindings work in practice. When a Consumer wants to interact with a Thing, it does not need any prior knowledge about the protocol being used. Instead, it reads the Thing Description, looks at the available forms, and selects one it understands.  Let's revisit our smart coffee machine example from the last video and fill out the forms for our interaction affordances so far.

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

#### HTTP

HTTP follows a request–response model and integrates naturally with existing web infrastructure. In WoT, HTTP bindings are typically used for reading and writing properties, invoking actions, and accessing Thing metadata. HTTP is a good choice when devices are web-connected and when interoperability with existing web services is important.

```json
"properties": {
  "coffeeBeansLeft": {
    "title": "Remaining Coffee Beans",
    "description": "Amount of remaining coffee beans in grams",
    "type": "number",
    "readOnly": true,
    "forms": [
      {
        "href": "https://coffee.example.com/properties/coffeeBeansLeft",
        "op": "readproperty",
        "contentType": "application/json"
      }
    ]
  }
}
```

Here, the form tells the Consumer that it can read the property `coffeeBeansLeft` using HTTP and expects a JSON response. Because this is a readproperty operation, the Consumer knows to perform an HTTP GET request.

#### CoAP

CoAP is a lightweight protocol designed for constrained devices and low-power networks. It provides a similar interaction model to HTTP, but with much lower overhead, making it suitable for embedded systems and IoT deployments with limited resources.

Let's use CoAP to invoke the `brewCoffee` action:

```json
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
        "href": "coap://coffee.example.com/actions/brewCoffee",
        "op": "invokeaction",
        "contentType": "application/json"
      }
    ]
  }
}
```

This time, the form uses a `coap://` URI to indicate CoAP instead of HTTP. From the Consumer's perspective, invoking the action works the same as with HTTP — the only difference is the underlying protocol, which is optimized for constrained devices.

#### MQTT

```json
"events": {
  "lowOnWater": {
    "title": "Low Water Level",
    "forms": [
      {
        "href": "mqtt://broker.example.com/coffee/events/lowOnWater",
        "op": "subscribeevent",
        "contentType": "application/json"
      }
    ]
  }
}
```

MQTT is a lightweight, publish/subscribe messaging protocol that is ideal for connecting IoT devices and low-power hardware over constrained networks. Instead of direct requests, Consumers publish messages to topics or subscribe to receive updates.

#### Modbus

Modbus is a traditional industrial protocol widely used in automation and control systems. While it predates modern web technologies, WoT protocol bindings make it possible to expose Modbus-based devices through a standardized Thing Description. This allows legacy industrial equipment to be integrated into modern web-based systems, without changing the underlying protocol.

WoT effectively acts as a semantic and interaction layer on top of Modbus, bridging the gap between industrial systems with web applications.

### Summary

To summarize:

- Protocol bindings define how interactions are executed over the network
- They are expressed using `forms` in the Thing Description
- Different protocols fit different interaction patterns
- WoT unifies them under a single, consistent interaction model
