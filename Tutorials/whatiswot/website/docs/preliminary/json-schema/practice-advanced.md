---
sidebar_label: JSON Schema in Practice - Advanced Topics
---

# JSON Schema in Practice - Advanced Topics

<iframe width="100%" height="400" src="https://www.youtube.com/embed/gZa2vxmrm4Q?si=6SVnfrqxF-H_dQhB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If YouTube does not work, <a href = "https://github.com/w3c/wot-cg/blob/main/Tutorials/whatiswot/7-JSON_Schema_in_Practice_2/7-JSON-Schema-Demo.mp4">click here to watch from our GitHub repository.</a>  

<br />
<br />



In the previous tutorial, we have learned the basics of JSON Schema. In this tutorial, we will continue with more advanced topics such as generic keywords, schema composition and schema conditionality.

## Generic Keywords

JSON Schema utilizes several annotation keywords, including:

- title
- description
- default

While none of these annotation words are required, they are beneficial for self-documentation purposes.
Both "title" and "description" must be strings.
The default keyword specifies a default value.

The style of the JSON Schema:

```json
{
  "title": "Match anything",
  "description": "Description of the Schema.",
  "default": "Default value"
}
```

## Enumerated Values

The **enum** keyword is used to restrict a value to a fixed set of values. It must be an array with at least one element, where each element is unique.

An example JSON Schema with enum keyword:

```json
{
  "enum": ["red", "green"]
}
```

This schema accepts:

```json
"red"
```

```json
"green"
```

but **does not accept**:

```json
"blue"
```

## Constant Values

The **const** keyword is used to restrict a value to a single value.

An example JSON Schema with the const keyword:

```json
{
  "properties": {
    "country": {
      "const": "USA"
    }
  }
}
```

This schema only accepts:

```json
{ "country": "USA" }
```

and **does not accept**:

```json
{ "country": "Canada" }
```

```json
{ "country": "Germany" }
```

## Schema Composition

JSON Schema includes a few keywords for combining Schemas together.
The most used ones are allOf, anyOf, oneOf, and not.
All of these keywords must be set to an array, where each item is a Schema.

- **allOf**: (AND) Must be valid against **all** of the subSchemas
- **anyOf**: (OR) Must be valid against **any** of the subSchemas
- **oneOf**: (XOR) Must be valid against **exactly one** of the subSchemas

### allOf

To validate allOf, the given data must be valid against all of the given subSchemas.

An example JSON Schema defined with the keyword allOf:

```json
{
  "allOf": [{ "type": "string" }, { "maxLength": 7 }]
}
```

This schema accepts this as it is both a string and its length does not excede 7:

```json
"short"
```

But **does not accept** this as its length is larger than 7:

```json
"long string"
```

### anyOf

To validate anyOf, the given data must be valid against any (one or more) of the given subSchemas.

An example JSON Schema with the keyword anyOf:

```json
{
  "anyOf": [
    { "type": "string", "maxLength": 5 },
    { "type": "number", "minimum": 0 }
  ]
}
```

It is enough when only one of these criteria is satisfied.

So this one is accepted as it is string with the length of 5:

```json
"short"
```

And also this one is accepted because it is a number and larger than 0:

```json
12
```

But this one is **not accepted** since it does not fit none of the criteria:

```json
"long string"
```

### oneOf

To validate oneOf, the given data must be valid against exactly one of the given subSchemas.

An example JSON Schema with the keyword oneOf:

```json
{
  "oneOf": [
    { "type": "number", "multipleOf": 5 },
    { "type": "number", "multipleOf": 2 }
  ]
}
```

This schema will accept numbers which are either multiple of 5 or multiple of 2. It will perform an XOR operation.

It accepts this one as it is multiple of 5:

```json
25
```

and this as it is multiple of 2:

```json
4
```

however this one is **not accepted** because it is both multiple of 2 and 5:

```json
10
```

### not

The not keyword declares that an instance validates if it doesn’t validate against the given subSchema.

An example JSON Schema with the not keyword:

```json
{
  "not": { "type": "string" }
}
```

It will accept this as the type is number:

```json
25
```

And this as it is of type boolean:

```json
true
```

But this is **not accepted** since it is of type string:

```json
"10"
```

## Schema Conditionality

The if, then and else keywords allow the application of a subSchema based on the outcome of another Schema, as it is in other programming languages.

If the main schema is valid, the "then" subSchema must also be valid, and the "else" subSchema is ignored. Conversely, if the main schema is invalid, the "else" subSchema must be valid, and the "then" subSchema is ignored.

Here is an example JSON Schema defined with the keywords if, then, else:

```json
{
  "type": "object",
  "if": {
    "properties": {
      "country": { "const": "USA" }
    }
  },
  "then": {
    "properties": {
      "nationality": { "const": "American" }
    }
  },
  "else": {
    "properties": {
      "nationality": { "const": "Canadian" }
    }
  }
}
```

This schema will accept:

```json
{
  "country": "USA",
  "nationality": "American"
}
```

And **does not accept**:

```json
{
  "country": "Canada",
  "nationality": "American"
}
```
