---
id: json1
---

# JSON

We will now take a closer look at JSON since it is the most used payload format in the Web of Things, as well as the way Thing Descriptions are represented. So, let’s start with what is JSON.

## What is JSON?

JSON is a lightweight data-interchange format.
It is easy for humans to read and write, and easy for machines to parse and generate.

Let’s take a look at how parsing and generating happens.

### Parsing

```json
{
  "type": "Temperature",
  "value": 35
}

```

### Generating



Generated JSON:

```json
{
  "Name": "Web of Things",
  "Abbreviation": "WoT"
}
```

### Quick Facts about JSON

It was standardized by ECMA and IETF in around 2013, the current version is 2017 [RFC 8259]

It is used for data exchange but also for configuration files. It can be translated to other popular formats like XML, YAML in both ways, and other formats.

Even though JSON stands for Java Script Object Notation, it does not only consist of objects but also allows primitive types such as strings and numbers. The confusion comes from the very early versions of JSON which only included objects and would not allow the primitive types to exist on their own.