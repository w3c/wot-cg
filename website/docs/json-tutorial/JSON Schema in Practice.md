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
