import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Structure of the tutorial",
    Svg: require("@site/static/img/Default_Logo.png").default,
    description: (
      <>
        Throughout this tutorial, we will explain the Web of Things, its
        applications and tools for newcomers. This tutorial is structured in two
        stages. First part includes concepts from basic to advanced. Second part
        supports them with demos and applications.
      </>
    ),
  },
  {
    title: "What to expect",
    Svg: require("@site/static/img/logo-large-blue.png").default,
    description: (
      <>
        It is aimed to make newcomers learn about Web of Things and speed their
        learning process. Each section is short, therefore you can learn about
        WoT bit by bit. At any time, you can come back and use this page as
        reference. This material does not consist of only explanations but is
        also supported with code snippets that you can work on and try by
        yourself.
      </>
    ),
  },
  {
    title: "Learning Objectives",
    Svg: require("@site/static/img/tools.png").default,
    description: (
      <>
        At the end, you will have all the tools in your belt to build WoT
        applications. With all these tools, you can build actual software such
        as dashboards, protocol proxies andtranslators,smart internet-connected
        devices,mash ups of WoT devices and services, in many domains such as
        Smart Homes, Factory Automation.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
