---
id: JSON Schema in Practice
---

As we discussed in the previous tutorial, JSON Schema is a declarative format for “describing the structure of other data”. Now we will explain its implementation.

# Declaring a JSON Schema

When declaring a JSON Schema, it's important to specify which version of the schema you're using. JSON Schema has several drafts, and distinguishing between them can be challenging. To specify the version, we use the "schema" keyword.  WoT uses Draft7, that's why throughout this tutorial we will use Draft7.

```json
{"$schema": "http://json-schema.org/draft-07/schema"}
```

It is not mandatory, but it is a good practice to specify a unique ID to be able to reach schemas.

```json
{"$id": "http://example.com/temperatureSchema"}
```

In JSON Schema, an empty object is a completely valid schema that will accept any valid JSON input.

```json
{}
```

Moreover, it can be used to denote a schema that matches any JSON data, or alternatively, set as false to indicate a schema that doesn't match anything.

![empty-json-schema](/img/6-JSON-Schema-In-Practice/empty-json-schema.png)

![true-json-schema](/img/6-JSON-Schema-In-Practice/true-json-schema.png)

## The Type Keyword

One of the most useful common things to do in a JSON Schema is to restrict a specific type by using a type keyword.

![string-schema](/img/6-JSON-Schema-In-Practice/string-schema.png)

Similar to this, numeric types can also be defined.
There are two numeric types in JSON Schema: integer and number and they share the same validation keywords. Number accepts integers and floating-point numbers, while integer specifically excludes floating-point numbers.

![number-schema](/img/6-JSON-Schema-In-Practice/number-schema.png)

## Objects

In JSON, objects serve as the mapping type, associating "keys" with corresponding "values". Notably, in JSON, the "keys" must always be represented as strings.

```json
{
  "type": "object"
}
```

## Properties

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

In addition to the last example, The additionalProperties keyword can be used to control the handling of extra properties whose names are not explicitly listed in the properties keyword. If set to "false", the schema doesn't accept additional properties. Conversely, you can specify the allowed types for additional properties.

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

This one is **not accepted** as it does not contain email information and it is defined as required:

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
{ "Not": "an array" }
```

### Items

The "items" keyword in JSON Schema allows control over whether additional items are permitted in an array. The value of the items keyword is a schema that all additional items must pass for the keyword to validate. It can be set to false, indicating that no additional items are allowed, or it can specify a type for the items in the array.

For example this schema accepts items of type number:

```json
{
  "type": "array",
  "items": {
    "type": "number"
  }
}
```

Therefore accepts:

```json
[1, 2, 3, 4, 5]
```

But **does not accept** this as the 3rd element is of type string and not a number:

```json
[1, 2, "3", 4, 5]
```

## Boolean

The Boolean type in JSON Schema only matches two specific values: "true" and "false". It's important to note that other values that might evaluate to true or false, such as 1 and 0, are not considered valid according to the schema.

The JSON Schema with type defined as Boolean can be written as this:

```json
{
  "type": "boolean"
}
```

And it only accepts:

```json
true
```

```json
false
```

and **does not accept** this as the type is not boolean but string:

```json
"true"
```

## Null

When a schema specifies the type of null, it has only one acceptable value: null.

The JSON Schema can be defined as:

```json
{
  "type": "null"
}
```

This schema only accepts:

```json
null
```

and **does not accept** others such as:

```json
false
```

```json
0
```

## ContentMedia Type

The contentMediaType keyword specifies the MIME type of the contents within a string, as described in RFC 2046. If you want to specify any type that is not JSON, it is possible to do so with these content media types.

This schema indicates the string contains an HTML document, encoded using the same encoding as the surrounding document:

```json
{
  "type": "string",
  "contentMediaType": "text/html"
}
```

This schema indicates that a string contains a PNG image, encoded using Base64:

```json
{
  "type": "string",
  "contentEncoding": "base64",
  "contentMediaType": "image/png"
}
```
