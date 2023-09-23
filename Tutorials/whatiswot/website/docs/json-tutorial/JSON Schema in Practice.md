---
sidebar_position: 4
---

As we discussed in the previous tutorial, JSON Schema is a declarative format for “describing the structure of other data”. Now we will explain its implementation.

# Declaring a JSON Schema

There are many different drafts of JSON Schema, and it is not always easy to tell which draft is it. Thus, we use the schema keyword to declare which version is used. WoT uses Draft7, that's why throughout this tutorial we will use Draft7.

{"$schema": http://json-schema.org/draft-07/schema}

It is not mandatory, but a good practice to specify a unique ID to be able to reach schemas.

{"$id": "http://example.com/temperatureSchema"}

In JSON Schema, an empty object is a completely valid schema that will accept any valid JSON.

It can be also used truly in a place of the empty object to represent a schema that matches anything, or false for a schema that matches nothing.

![empty-json-schema](/img/empty-json-schema.png)

![true-json-schema](/img/true-json-schema.png)

## The Type Keyword

One of the most useful common things to do in a JSON Schema is to restrict a specific type by using a type keyword.

![string-schema](/img/string-schema.png)

Similar to this, numeric types can also be defined.
There are two numeric types in JSON Schema: integer and number. They share the same validation keywords. Number accepts integers and floating numbers.
Whereas numeric type integer rejects floating points.

![number-schema](/img/number-schema.png)

## Objects

Objects are the mapping type in JSON. They map "keys" to "values". In JSON, the "keys" must always be strings.

```json
{
  "type": "object"
}
```

### Properties

The properties which are a key-value pair on an object are defined using the properties keyword. The value of properties is an object, where each key is the name of a property and each value is a schema used to validate that property.

Here is an example JSON Schema defined with the keyword "properties":

```json
{
  "type": "object",
  "properties": {
    "number": { "type": "number" },
    "streetName": { "type": "string" }
  }
}
```

This example is accepted by the JSON Schema:

```json
{
  "number": 1600,
  "streetName": "Boltzmann"
}
```

Whereas the second one is **not accepted** because the value of a number is a string:

```json
{
  "number": "1600",
  "streetName": "Boltzmann"
}
```

### Additional Properties

In addition to the last example, The additionalProperties keyword can be used to control the handling of extra stuff, which is, properties whose names are not listed in the properties keyword. If it is false, then it does not accept additional properties. Otherwise, you can specify what type can be given too.

A JSON Schema which has the additionalProperties keyword:

```json
"additionalProperties": {
	"type": "string"
	}
```

It accepts:

```json
{
  "number": 1600,
  "streetName": "Boltzmann"
}
```

And also accepts:

```json
{
  "number": "1600",
  "streetName": "Boltzmann",
  "direction": "NW"
}
```

### Required Properties

By default, the properties defined by the properties keyword are not required. However, one can provide a list of required properties using the required keyword.

Here is an example JSON Schema with the keyword "required":

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "email": { "type": "string" },
    "address": { "type": "string" },
    "telephone": { "type": "string" }
  },
  "required": ["name", "email"]
}
```

It accepts:

```json
{
  "name": "William Shakespeare",
  "email": "bill@tum.de
}
```

This one is **not accepted** as it does not contain email information and it is defined required:

```json
{
  "name": "William Shakespeare",
  "address": "Henley Street, 80945"
}
```

## Array

Arrays are used for ordered elements. In JSON, each element in an array can be of a different type.

```json
{
 "type": "array"
}
```

This schema accepts:

```json
[3, "different", { "types": "of values" }]
```

But **does not accept** this as it is not an array:

```json
{"Not": "an array"}
```
