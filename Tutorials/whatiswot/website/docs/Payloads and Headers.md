---
sidebar_position: 2
---

# Payloads and Headers

In the Web of Things, there are smart devices exchanging data and such data is sent via protocols. All protocols have different mechanisms to separate the data into headers and payloads. So, it is important to understand the difference and how they are relevant for the Web of Things. Thus, this video we going to talk about payloads, headers, different types of payloads, and the most used one in the Web of Things scope.

This is an introductory series that presents technologies and standards relevant to the Web of Things.

In web of things, there are smart devices exchanging a lot of data. Such data is sent via payloads, therefore it is important to understand what are payload and headers that describe them. Thus, in this page we will talk about Payloads, headers, different types of Payloads, the most used one in the Web of things scope, JSON and why it is important.

In computing, the payload is the part of transmitted data that is the actual intended message of the application and nothing to do with the protocol itself.
It is also called the body of the message. It is not mandatory in most protocols.

We can approach with an analogy, where we consider protocols as a truck. A payload should not tell what it should be done by itself. In that sense, we can think of protocol as a truck.
Here, we can think of the parcel contents as the payloads of a protocol.
The parcel contents should not contain any information about their destination, the fact that they are transported with a truck or the color of the truck.
In a protocol, payloads are very similar to parcel contents carried by a truck

The header is part of a message that can and should be understood by the protocol stack. All the information that the payload should not contain, goes to the header.

Let's continue with the parcel-truck example. In that example, the header would be the etiquette on the parcel.

This is what an HTTP header can look like. A header can contain information like request context, response context, status and it can indicate payload type.

There are different payload types: JSON, XML, CBOR, Text, Audio…

So let us show you an example of JSON payload. This is a temperature payload, a single number. And this is a configuration payload. It is a JSON object consisting of key/ value pairs desiredUnit and updateInterval. The temperature payload is sent from the sensor and the configuration is sent to the sensor.

Temparature payload:

```
90
```

Configuration Payload:

```json
{
  "desiredUnit": "celcius",
  "updateInterval": 30
}
```

Why is JSON important?

Because JSON is very relevant in the scope of the Web of Things, payloads are preferred mostly in JSON. Also, many other API and configuration files use JSON.

Here, you can see an example of a TD in JSON format. We will go later into the details of how a TD should be structured and understood.

```json
{
     "@context": "https://www.w3.org/2022/wot/td/v1.1",
     "title": "MyLampThing",
                …
     "security": "basic_sc",
      "properties": {
           "status": {
                "type": "string", "forms": [{"href": "https://mylamp.example.com/status"}]
            }
     },
     "actions": {
          "toggle": {
               "forms": [{"href": "https://mylamp.example.com/toggle"}]
          }
     },
     "events":{
          "overheating":{
               "data": {"type": "string"},
               "forms": [{
                    "href": "https://mylamp.example.com/oh", "subprotocol": "longpoll" }]
          }
     }
}
```

It is light-weight compared to XML and human-readable compared to CBOR. You can see the difference in the representation of the same data in JSON, XML, and CBOR.

JSON Example:

```json
[
  {
    "type": "Temperature Sensor",
    "lastCalibration": "2018-11-13",
    "measurement": {
      "value": 25,
      "unit": "Celsius"
    },
    "isActive": true,
    "precision": 0.1
  },
  {
    "type": "Humidity Sensor",
    "lastCalibration": null,
    "measurement": {
      "value": 60,
      "unit": "Percent"
    },
    "isActive": true
  },
  {
    "name": "Brightness Sensor",
    "lastCalibration": "2020-01-19",
    "measurement": {
      "value": 2,
      "unit": "Lux"
    },
    "isActive": false
  }
]
```

XML Example:

```xml
<root>
   <element>
      <isActive>true</isActive>
      <lastCalibration>2018-11-13</lastCalibration>
      <measurement>
         <unit>Celsius</unit>
         <value>25</value>
      </measurement>
      <precision>0.1</precision>
      <type>Temperature Sensor</type>
   </element>
   <element>
      <isActive>true</isActive>
      <lastCalibration null="true" />
      <measurement>
         <unit>Percent</unit>
         <value>60</value>
      </measurement>
      <type>Humidity Sensor</type>
   </element>
   <element>
      <isActive>false</isActive>
      <lastCalibration>2020-01-19</lastCalibration>
      <measurement>
         <unit>Lux</unit>
         <value>2</value>
      </measurement>
      <name>Brightness Sensor</name>
   </element>
</root>

```

CBOR Example:

```
83A564747970657254656D70657261747572652053656E736F726F6C61737443616C6962726174696F6E7819323031382D31312D31335432303A32303A33392B30303A30306B6D6561737572656D656E74A26576616C7565181964756E69746743656C73697573686973416374697665F569707265636973696F6EFB3FB999999999999AA464747970656F48756D69646974792053656E736F726F6C61737443616C6962726174696F6EF66B6D6561737572656D656E74A26576616C7565183C64756E69746750657263656E74686973416374697665F5A4646E616D65714272696768746E6573732053656E736F726F6C61737443616C6962726174696F6E7819323032302D30312D31395432303A32303A33352B30303A30306B6D6561737572656D656E74A26576616C75650264756E6974634C7578686973416374697665F4
```

It is well-established and has a schema language called JSON Schema. It can be used to describe and validate JSON data.
