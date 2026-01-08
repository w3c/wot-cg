---
sidebar_label: Industrial and Agriculture Systems
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Industrial and Agriculture Systems

<iframe width="100%" height="400" src="https://www.youtube.com/embed/5DK4v-6hF08?si=sU3Vn-Oym6bkrl43" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If YouTube does not work, <a href = "https://github.com/w3c/wot-cg/blob/main/Tutorials/whatiswot/12-Applications_in_Industrial_and_Agriculture_Systems/12-Applications-in-Industrial-and-Agriculture-Systems.mp4">click here to watch from our GitHub repository.</a> 

The Web of Things offers utility to diverse fields beyond smart homes and cities. This tutorial will focus on industrial and agriculture systems — two major and complex examples — and later, showcase how all domains can collaborate with each other, thanks to WoT.

## Industrial systems

Unlike smart home scenarios, industrial applications have broader and more demanding requirements. These include advanced monitoring of complex connected manufacturing equipment, tracking products and predicting possible machine failures.

TDs also enable a new way to build application logic — whether it's control logic, business logic, or mashups — using simple files instead of being locked into proprietary systems. This decouples devices from vendor-specific applications, offering flexibility and long-term maintainability. With TDs, we can add context to the system by including annotations from domain models, providing more meaning about the ways devices are used within their environment.

> In factories, for example, devices from multiple manufacturers must work together seamlessly. WoT simplifies this by supporting old and new industrial protocols alike. As shown in [Figure 1](#fig-smart-factory), devices inside a factory may use different protocols such as Modbus, Profinet, MQTT, or OPC UA. Each device is described using a Thing Description (TD), which tells other systems exactly how to interact with it. A gateway then collects these TDs, adapts them to a usable protocol (e.g., MQTT), and forwards the information to external servers. This arrangement makes workflows easier to manage, as existing devices can interoperate without additional engineering effort and communication with servers remains secure and scalable.

<figure id="fig-smart-factory">
  <img src={useBaseUrl('/img/11-Architecture-Patterns/smart-factory.png')} alt="Smart factory architecture with protocol gateways" />
  <figcaption><strong>Figure 1.</strong> Example of a smart factory environment where devices use different industrial protocols.</figcaption>
</figure>

## Agriculture systems

Moving on to another domain-specific application of WoT — agriculture systems. Agriculture offers a wide range of automation possibilities, from monitoring soil moisture and automating watering, to handling fertilization schedules and machinery operation. However, finding a single solution that fits all needs is challenging, especially for small and medium-sized farms. 

Agriculture systems also come with their own sets of constraints. Often, devices in agricultural environments are limited in terms of power and connectivity. For example, sensors in a cornfield might rely on batteries and lack access to power sources or network cables. This generally works well with WoT, as metadata can be stored externally and protocols like MQTT let devices send data only when they're online, conserving energy and avoiding unnecessary power drain. Thus WoT's functionality ensures it is both practical and efficient without adding unnecessary complexity.

> Farm owners often aim to automate a single, specific task, like soil monitoring, for example. WoT plays a crucial role as an interoperable interface here, allowing farm owners to integrate only the parts they need without committing to an all-encompassing solution. As shown in [Figure 2](#fig-smart-farm), if a farm owner later decides to expand, this can be done easily. By enabling flexibility and compatibility across different devices and systems, WoT makes it easier for farms to adopt new solutions at their own pace and budget.

<figure id="fig-smart-farm">
  <img src={useBaseUrl('/img/11-Architecture-Patterns/smart-farm.png')} alt="Smart farm architecture with interoperable devices" />
  <figcaption><strong>Figure 2.</strong> Example of an agriculture system using interoperable WoT-based devices.</figcaption>
</figure>

## Cross-domain Collaboration

Thanks to the interoperability of WoT, cross-domain collaborations are also made possible. In cross-domain collaborations, each system involves other systems in other domains. As different platforms and protocols can be used in WoT, information can be easily shared across domains.

<figure id="fig-cross-domain">
  <img src={useBaseUrl('/img/11-Architecture-Patterns/cross-domain.png')} alt="Cross-domain collaboration diagram" />
  <figcaption><strong>Figure 3.</strong> Example illustration of cross-domain collaboration across smart factory, smart city, industrial and agriculture domains.</figcaption>
</figure>

> As seen in [Figure 3](#fig-cross-domain), a Smart Factory and a Smart City can collaborate on energy grid management, where the city's infrastructure is influenced by the factory's energy usage. Similarly, data from agriculture, such as crop yield, can influence production planning in a factory.

## Summary

To summarize, WoT provides numerous advantages across its applications:

- It is domain-agnostic, allowing for seamless integration across various systems.
- It supports multiple protocols, ensuring interoperability among devices from different manufacturers.
- WoT is built on open standards, promoting long-term adaptability and innovation.
- It works with resource-constrained devices, edge or the cloud.

<figure id="fig-summary">
  <img src={useBaseUrl('/img/11-Architecture-Patterns/summary.png')} alt="Summary visual for WoT applications" />
  <figcaption><strong>Figure 4.</strong> Summary of WoT characteristics across application domains.</figcaption>
</figure>

By enabling efficient and secure interactions between devices across different domains, WoT serves as a transformative framework.