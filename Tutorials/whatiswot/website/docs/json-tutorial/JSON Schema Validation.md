---
sidebar_position: 6
---

In the previous tutorials of JSON Schema, we have shown the features and basic implementations of JSON Schema.
In this tutorial, we will deliver the actual validation process with libraries and examples.

Throughout this tutorial, we will mainly focus on validation with the JavaScript library AJV (https://github.com/ajv-validator/ajv) and the Python library jsonschema(https://github.com/python-jsonschema/jsonschema) but there are many other libraries in different programming languages and tools to validate JSON Schema.

<img src="/img/8-JSON-Schema-3/ajv.png" alt="ajv" width="500"/>
<img src="/img/8-JSON-Schema-3/python-jsonschema.png" alt="python-json-schema" width="630"/>

## Validator Examples

Here are some of the popular ones in different programming languages.

There are many more validators. For further information, you can check the Json schema website (https://json-schema.org/implementations.html#validator-rust).

### json-everything

https://github.com/gregsdennis/json-everything

<img src="/img/8-JSON-Schema-3/json-everything.png" alt="json-everything" width="600"/>

### json-schema-validator

https://github.com/pboettch/json-schema-validator

<img src="/img/8-JSON-Schema-3/json-schema-validator.png" alt="json-schema-validator" width="720"/>

### gojsonschema

https://github.com/xeipuuv/gojsonschema

<img src="/img/8-JSON-Schema-3/gojsonschema.png" alt="go-json-schema" width="650"/>

### jsonschema-rs

https://github.com/Stranger6667/jsonschema-rs

<img src="/img/8-JSON-Schema-3/jsonschema-rs.png" alt="jsonschema-rs" width="600"/>

### json-kotlin-schema

https://github.com/pwall567/json-kotlin-schema

<img src="/img/8-JSON-Schema-3/json-kotlin-schema.png" alt="json-kotlin-schema" width="600"/>

## Basic Validation Flow

This is the basic validation flow that all libraries follow.
The library takes a schema for your JSON data and validates your data according to the schema. Outputs the validation result as a boolean.

![basic-validation](/img/8-JSON-Schema-3/basic-validation.png)

## Javascript AJV

So, let’s start with AJV! It is a JavaScript library.

This is the same temperature sensor example we used before. Let’s examine this in JavaScript code.

```js
const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    temperature: { type: "number" },
    unit: { type: "string" },
    temperatureOf: { type: "string" },
  },
  required: ["temperature", "unit"],
  additionalProperties: false,
};
const validate = ajv.compile(schema);
const data = {
  temperature: 15.7,
  unit: "Celsius",
  temperatureOf: "weather",
};
const valid = validate(data);
if (valid) {
  console.log("JSON SCHEMA is valid");
} else {
  console.log("JSON SCHEMA is invalid");
  console.log(validate.errors);
}
```

These lines allow us to import the AJV:

```js
const Ajv = require("ajv");
const ajv = new Ajv();
```

This is the Schema that describes the JSON:

```js
const schema = {
  type: "object",
  properties: {
    temperature: { type: "number" },
    unit: { type: "string" },
    temperatureOf: { type: "string" },
  },
  required: ["temperature", "unit"],
  additionalProperties: false,
};
```

With this line of code, AJV takes schema as a parameter compiles it to function, and caches it.

```js
const validate = ajv.compile(schema);
```

This is the data to be validated.

```js
const data = {
  temperature: 15.7,
  unit: "Celsius",
  temperatureOf: "weather",
};
```

This step actually validates the data and writes the results into a valid boolean.

```js
const valid = validate(data);
```

This step is for printing the result of the validation. If valid is true then, it prints «JSON Schema is valid.».
Otherwise, it prints the «JSON Schema is not valid.» sentence and the error message.

```js
if (valid) {
  console.log("JSON Schema is valid");
} else {
  console.log("JSON Schema is invalid");
  console.log(validate.errors);
}
```

It outputs that schema is valid since the data that we enter suits the predefined schema.
The output:

```js
"JSON Schema is valid";
```

## Python - jsonschema

Now let's take a look at the same JSON Schema example in Python jsonschema. It is an implementation of the JSON Schema specification for Python.

We will use the same temperature example that we use for AJV but for Python this time.

Let's take a look at the code in detail.

```py
from jsonschema import validate
 
schema = { 
    "type": "object", 
    "properties":    { 
        "temperature": {"type":"number"},
        "unit": {"type": "string"}, 
        "temperatureOf":{"type": "string"} 
    },
    "required":  ["temperature", "unit"],
    "additionalProperties": False 
}

data = { 
    "temperature": 15.7,    
    "unit": "Celsius", 
    "temperatureOf": 34
} 

validate(instance = data, schema = schema) 
```

With this line of code, we are importing the function from the library.

```py
from jsonschema import validate
```

This is the same schema in the previous example.

```py
schema = { 
    "type": "object", 
    "properties":    { 
        "temperature": {"type":"number"},
        "unit": {"type": "string"}, 
        "temperatureOf":{"type": "string"} 
    },
    "required":  ["temperature", "unit"],
    "additionalProperties": False 
}
```

This is the data to be validated.

```py
data = { 
    "temperature": 15.7,    
    "unit": "Celsius", 
    "temperatureOf": 34
} 
```

This validate function takes the data and the schema validates it and prints the result. If the data is valid, it does not print anything. Otherwise, it prints the error message.

```py
validate(instance = data, schema = schema) 
```

The code outputs that the data is not valid since the property; «temperatureOf» needs to be string. However, in the given data it is an integer.
Therefore the output is:

```py
jsonschema.exceptions.ValidationError:
34 is not of type 'string'

Failed validating 'type' in schema['properties’]
['temperatureOf']: {'type': 'string'}

On instance['temperatureOf’]: 34
```
