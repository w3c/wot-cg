## Thing Description

### Forms
In Thing Description, the ***form context*** is the surrounding Object, such as Properties, Actions, and Events or the Thing itself for meta-interactions.

Form is used to perform an “operation type” operation on form context, make a request method request to submission target.

A WoT producer's Thing Description can contain several form entries, each specifying various protocols and content types. These entries are options that a Consumer could potentially use. A Consumer can select any form entry that is compatible with their capabilities, such as supported protocols and content types. Once a form is chosen, the expectation is that the Consumer will use that form for as many interactions as possible with the WoT producer.

We explain the interaction properties before, to perform any operation  on the affordance, a binding of the operation to the protocol needs to happen. Form provides all of the information so that binding happens and a Consumer can interact with a Thing.

Thing Descriptions require the ability to specify which method to use per operation in form, since there are different method names for different protocols. Common methods found in REST and PubSub protocols are GET, PUT, POST, DELETE, PUBLISH, and SUBSCRIBE. Then, Binding Templates handles the binding existing methods and associated vocabularies to the WoT operations. 

Lets look at the form example of readproperty operation for the HTTP and Modbus protocols.

'''
EXAMPLE 1: Binding example of a readproperty operation to HTTP
{
    "href": "http://example.com/props/temperature",
    "op": "readproperty",
    "htv:methodName": "GET"
}

EXAMPLE 2: Binding example of a readproperty operation to Modbus
{
    "href": "modbus+tcp://127.0.0.1:60000/1",
    "op": "readproperty",
    "modbus:function": "readCoil",
    "modbus:address": 1
}
'''
It is highly protocol dependent, so in the cases header options or other parameters of the protocols need to be included, please take a lok at the spesific protocol.  

More information needed

### Authentication and Authorization in WoT or Security Definitions

WoT environment involves devices that connect to the Internet and exchange data. Thus, it is important to maintain security against malicious entities.

In order to satisfy authentication and authorization in WoT , W3C suggests security schemes that provide well-established security mechanisms that are directly built into protocols eligible as Protocol Bindings for W3C WoT or are widely in use with those protocols. 

A consumer can access to a TD if and only if it already has authorization, otherwise TD shouldn’t store any keys, passwords, or other sensitive information directly providing access. Other security mechanisms handle this. Thus we need to use suitable Security Schema that will fit the needs of our TD.

Each security scheme object used in a TD has different use cases and defines a set of requirements to be met before access can be granted. Thus you can choose which one suits your application better. Some of the schemas that we will explain are:

- #### NoSecuritySchema →"scheme": "nosec”
    - 
- #### BasicSecuritySchema → "scheme": "basic
    - It is the simple authentication method. In this schema a user sends their credentials, in the form of a username and password, in plaintext over a network. Username/password pairs are generally passed in the header via base64 encoding in this schema. Then server extracts the credentials from the header matches them with previosly stored pairs. Since credentials are send without being encrypted or hashed, it does not provide confidentiality.
    - (Cons)It is vulnarable to the attacks like man-in-the-middle if there is no encryption in the network or phishing since it does not provide a way to validate the identity of the server. It also does not allow automatic “logout” when the user closes the browser. This may result in disclosure of the credentials.
    - (Pros) Besides that it is easy to implement and universally supported.
    - This schema can be used for identifiaction purposes.
- #### API Key → "scheme": "apikey”
  - API Key method is a alternative method to the traditional username and password authentication where a user or a client is authenticated by using a unique key called API key to identify the client. Keys are generated on the server side and assigned to a specific client. Hence, a client can identify itself to the server in a secure and unique way.
  - These API Keys can be passed in the header of API request. Then server extracts this key from header, authenticates the client and check wether it is authorised or not.
  - (Pros) It is relatively easy to implement and not as vulnerable to the attacks as Basic Security Schema as the keys have expiry date.
  - (Cons) One of the main limitations is that it identifies clients, not individual users, for secure authentication. In addition to that it does not provide a way to encrypt the API Key in transit. Thus, it should be used together with other security measurements such as SSL/TLS.
  - The best use case is to block anonymous traffic, Since API Key identifies the traffic of an application.
- #### OAuth2 → "scheme": "oauth2”
  - It is a open-standart authorization protocol that allows a user to grant a third-party application access to their resources without sharing their login credentials.
  - You can think it as a authorization framework than a protocol since it gives flexibility to the web developer.
  - Let us explain hoe this schema works: there are 4 roles defined in the OAuth2 protocols:
    - **Resource owner** is the one that provides access to a protected resource. (a user who owns the IoT device is the resource owner.)
    - **Resource server** handles the requests for the protected resource it hosts using a  access token. (IoT device protocol acts as the resource server when a client requests access to a user’s device.)
    - **Client** is an entity  that accesses the protected resources using **Resource Owner**’s authorization. (a mobile
    app that wants to access the IoT device is the client)
    - **Authorization server** issues the access tokens to the client once **Resource Owner**’s identity is verified. (Google’s
    OAuth2 server acts as the authorization server when a
    mobile application requests access to a user’s device.
An authorization grant is a credential that represents the resource owner’s authorization to access its protected resources
used by the client to get an access token. It is obtained
from the authorization server by the client application and
exchanged for an access token that can be used to access the
protected resource. 			

- 4 grant types:
    - Authorization Code:
    - Implicit
    - Resource Owner Password Credentials
    - Client Credentials

Even though it offers both authentication and authorization, it is not a complete solution. It still needs to be properly implemented with considering the possible security attacks.

Security schemes generally may require additional authentication parameters. These additional parameters are listed after name “in”. The value associated with ”in” can take one of the following values:

- header. This specifies that the parameter will be given in a header provided by the protocol with the name of the header provided by the value of name.
- query. The parameter will be appended to the URI as a query parameter, with the name of the query parameter provided by name.
- body. This specifies that the parameter will be provided in the body of the request payload, with the data schema element used provided by name.
- cookie
- uri
- auto
- Hands on nosec ve basic apikey

### Links

-service doc

-alternate

-collection

-item

Let us explain the links.

Link relations are used to describe relations with other Things, specific kind of Thing Models or further documentations information.

In other words,  link context has a relation type resource at link target, where the optional target attributes may further describe the resource.

More information needed


Most of the information here are taken from the paper "Authentication and Authorization Mechanisms in the Web of Things"
by Monika Singh. There are visuals, diagrams and tables in the document that can be useful for the further video creation.
