---
sidebar_label: Introduction
---

# Introduction to JSON

<iframe width="100%" height="400" src="https://www.youtube.com/embed/7wzzwdrGFZw?si=mpDrp9FKdNywXDFf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href = "https://github.com/w3c/wot-cg/blob/main/Tutorials/whatiswot/3-JSON/3-JSON.mp4">Click here if YouTube does not work go to our GitHub.</a>  

<br />
<br />


We will now take a closer look at JSON since it is the most used payload format in the Web of Things, as well as the way Thing Descriptions are represented.

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

- It was standardized by ECMA and IETF in around 2013, the current version is 2017 [RFC 8259]

- It is used for data exchange but also for configuration files. It can be translated to other popular formats like XML, YAML in both ways, and other formats.

## JSON Data types

Even though JSON stands for Java Script Object Notation, it does not only consist of objects but also allows primitive types. The confusion comes from the very early versions of JSON which only included objects and would not allow the primitive types to exist on their own.

### Primitive types

JSON accepts the following primitive data types: String, Number, Boolean, and null. 

### Structured types

There are 2 structured types in JSON.

#### Name/Value pairs

This type is also known as key/value pairs. Keys are always of the type String and always start and end with quotation marks. In various programming languages, this can be called an object, struct, dictionary, hash table or keyed list.

```json
{ "foo": "Web of Things" }
```

#### Ordered list of values

This type is also commonly known as arrays. JSON accepts arrays of different types and it is also possible to list objects in them as well. In most programming languages, this can be called an array, vector, list, or sequence.

```json
[ 28, "Web of Things", true ]
```

### Examples

Let's take a look at 2 examples.

#### Example of an object

 For this example we will use data sent by a humidity sensor. In between 2 curly brackets, we can see the name and value pairs that show the data structure and the data itself sent by the sensor.

 ```json
{ 
    "type": "Humidity Sensor", 
    "lastCalibration": null,
    "measurement": { 
    "value": 60, 
    "unit": "Percent"
    }, 
    "isActive": true 
}
```

#### Example of an array

In this example we will demonstrate the ability of JSON to list objects as elements of an array. In between 2 square brackets you can see our 2 JSON objects, separated by a comma - the data presented in the array is aggregated sensor values from the different sensors.

```json
[
  {
    "type": "Temperature Sensor",
    "lastCalibration": "2018-11-13T20:20:39",
    "measurement": {
      "value": 25,
      "unit": "Celsius"
    },
    "isActive": true
  },
  {
    "type": "Humidity Sensor",
    "lastCalibration": null,
    "measurement": {
      "value": 60,
      "unit": "Percent"
    },
    "isActive": true
  }
]

```
