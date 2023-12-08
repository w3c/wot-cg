---
id: json2
---

# JSON in Practice

In the previous section, we showed mostly primitive types of JSON. In this section, we will focus on first arrays and objects, and then we will mention common mistakes when writing JSON. At the end, we will demonstrate the usage of JSON generation and parsing.

### JSON Array

In JSON, each value in an array is called an item.
Arrays with items of different types are also allowed.

Accepted types:

- Number
- String
- Boolean
- Null

![json array](/img/4-JSON-In-Practice/json-array.png)

### Nested objects

Nested objects are allowed in JSON. “measurement” keyword is an example of this.

Objects start and end with a curly brackets. It is basically defining keywords and mapping these keywords to values.
In this example, we define the name and value pairs to describe the data sent by sensors.

![nested object](/img/4-JSON-In-Practice/nested-object.png)

There is a JSON array of JSON Objects which means all items are JSON objects in that array.

![json object array](/img/4-JSON-In-Practice/json-object-array.png)

## Common Mistakes

Now we will talk about common mistakes while writing JSON files.

#### Space character

Let's start with the space character which frequently overlooked.
Space is a character too.

So “isActive” is not the same as “isActive ”.

#### Case sensitiveness

Also JSON is case sensitive. Thus, "isActive" with upper case "A" is not the same as “isactive” with lower case "a".

Paying attention to this is important to make sure that object assignments and comparisons work.

#### Quotation marks

Lets continue with the mistakes about quotation marks.

Forgetting quotation marks is wrong, it will show validation errors everywhere.

Also putting them when you should not cause unwanted results.

For example → “name”:”true” is not the same as “name”:true without quotation marks.

The first one is not a boolean but a string; so it will be interpreted as a string. The same problem happens with numbers too.

"value": "90" would be interpreted as string because of the unnecessary quotation marks.

We should always pay attention to the type we want to use and use quotation marks when necessary.
This way, the types will be correctly interpreted by your programming language.

### Comments

Putting comments inside JSON documents is not valid contrast to most of the programming languages.

![comment](/img/4-JSON-In-Practice/comment.png)

### Trailing Commas

Commas should not be used at the final name-value pair.
That is why the first one is not valid but difficult to see if you are using it inside of a Javascript editor rather than a JSON editor.

![json js](/img/4-JSON-In-Practice/json-js.png)

### Programming Language Syntax

Similar to the previous one depending on the programming language that you use syntax might differ. Since JSON will be the object of that programming language before it is parsed and serialized as JSON.

For example, in JSON key-value pairs have to be with quotation marks whereas in JavaScript files it is not necessary to have quotation marks, both work.

The syntax of the keywords might differ as well. For example, true false keywords in JSON, Rust, JavaScript, and Golang are written lowercase while in Python the first letter of these keywords needs to be capitalized.

Similar to the previous one, the null keyword differs in JSON and Python. In JSON and JavaScript it is null with lowercase while in Python, the same meaning is given with the «None» keyword.

## Exercise

Open a code editor. In this example, we used VS Code. Write a JSON file of your choice and save it by giving a file name and adding a .json extension. Then the editor will recognize the file as a JSON document.

Now we will read a JSON file from the file system using a JSON library in Python. We open the JSON file that we have previously saved to the file system with open-as-file key words. Then, we can load that JSON file with the load function into the data object. We can also print it to see what is inside the JSON file.

```py
import json

with open('JSON_example.json') as file:
    data: json.load(file)

print(data)
```

Printing the data object in console can look like this.

```json
[{'name': 'Temperature sensor', ‘sensorID': '20014’,
'type': 'Temperature', 'unit': 'Celsius', 'value': 42}]
```

There are many ways to send a JSON file via different protocols, one of them is using Python and its request library for sending an HTTP request. With this library, you can use the post function to send an HTTP POST request with a JSON Payload. As a parameter, it takes the URL to send to and the JSON object.

```py
import requests

url = 'https://example.com/myResource'
jsonObj = {'someKey': 'someValue'}

x = requests.post(url, json = jsonObj)

print(x.text)
```
