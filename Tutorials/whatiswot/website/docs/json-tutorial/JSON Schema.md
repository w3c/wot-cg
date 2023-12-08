---
id: json3
---

# JSON Schema

We will now briefly explain Schema Languages and then move to the JSON Schema since it is the one that describes and validate JSON, it is important to know in Web of Things scope.

## Schema

Many payload formats offer a way to describe what a payload instance should look like. Generally, these are called Schema Languages.

For example:

- JSON Schema
- XML Schema
- PDF Schema

## JSON Schema

JSON Schema is a JSON document used to describe and validate how JSON payload instance should look like.

The main idea is to enable senders such as clients to understand how the request should be and for the receiver to automatically validate the payloads. Although, it is a JSON on its own, it is metadata.

For Example, some basic JSON Schemas, “type”: “array” → tells it accepts type array in other JSON documents. This can be defined for other types in JSON as well, such as:

- string
- number
- boolean
- null

Thus, in the receiver end, you can do this validation process to validate. This an example how it could look like in Java Script:

![js-schema](/img/5-JSON-Schema/js-schema.png)

It can look different in other programming languages.
For instance in Python:

```py
validate(instance={"name" : "Eggs", "price" : 34.99}, schema=schema)
```

Java:

```java
Set<ValidationMessage> errors = schema.validate(node);
```

C++:

```c
jsonschema::json_validator<json> validator(sch);
// Will call reporter for each schema violation
validator.validate(data, reporter);
```

Of course, way more advanced validations can be possible with JSON Schema such as:

- Length of a string
- Regular Expressions
- URIs
- Email addresses
- IP addresses
- Max/min for Numbers

In Array:

- How many items
- Allowed Types

In Objects:

- Required Properties
- Amount of Properties
