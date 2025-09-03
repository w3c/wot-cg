import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Structure of the tutorial",
    Svg: require("@site/static/img/Logo-and-Frontpage/Default_Logo.png")
      .default,
    description: (
      <>
        Throughout this tutorial, you can learn about the Web of Things, its applications and tools for newcomers. 
        All topics start with basic and advanced concepts. 
        Then, hands-on exercises demonstrate the concepts with off-the-shelf libraries.
      </>
    ),
  },
  {
    title: "What to expect",
    Svg: require("@site/static/img/Logo-and-Frontpage/question.png").default,
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
    Svg: require("@site/static/img/Logo-and-Frontpage/tools.png").default,
    description: (
      <>
        At the end, you will have all the tools in your belt to build WoT
        applications. With all these tools, you can build actual software such
        as dashboards, protocol proxies and translators, smart internet-connected
        devices, mash ups of WoT devices and services, in many domains such as
        Smart Homes, Factory Automation.
      </>
    ),
  },
  {
    title: "Official WoT Page",
    Svg: require("@site/static/img/Logo-and-Frontpage/logo-large-blue.png")
      .default,
    description: (
      <>
        This site is intended for the use of beginners to learn about the Web of
        Things concepts. The official site of Web of Things can be found at
        <a href="https://www.w3.org/WoT/"> w3.org/WoT/</a>.
      </>
    ),
  },
];

const CommunityList = [
  {
    title: "Contribute & Collaborate",
    Svg: require("@site/static/img/Logo-and-Frontpage/collaborate.png").default,
    description: (
      <>
        This tutorial is a community-driven effort and always evolving.
        Each stage in our workflow is reviewed collaboratively as it progresses through storyboards, scripts, videos, and website updates.  
        You can contribute directly to its development by providing feedback and opening issues through GitHub. 
        <br />
        <a href="https://github.com/w3c/wot-cg"> GitHub Repository </a>
      </>
    ),
  },
  {
    title: "Stay Connected",
    Svg: require("@site/static/img/Logo-and-Frontpage/connect.png").default,
    description: (
      <>
        Stay up to date with the tutorial's progress and connect with the community. 
        We host a weekly call to share updates and ideas. You can also join our Discord server or follow the latest developments in our GitHub repository.  
        <br />
        <a href="https://www.w3.org/events/meetings/49f500a0-5914-4cc1-84fc-081768f19126/">
          Weekly Call
        </a>{" "}
        | <a href="https://discord.gg/RpB2jwr9"> Discord </a>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>
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
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className={clsx(styles.features, styles.blueBanner)}>
        <div className="container">
          <div className="row">
            {CommunityList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
