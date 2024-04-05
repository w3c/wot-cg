// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "What is WoT",
  tagline:
    "Welcome to the tutorial page of Web of Things created by W3C Web of Things Community Group",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://w3c.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment , it is often '/<projectName>/'

  // @ts-ignore
  baseUrl: process.env.baseurl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "w3c", // Usually your GitHub org/user name.
  projectName: "wot-cg", // Usually your repo name.
  deploymentBranch: "docusaurus-whatiswot",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/w3c/wot-cg",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "What is WoT",
        logo: {
          alt: "My Site Logo",
          src: "img/Logo-and-Frontpage/Default_Logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },

          {
            href: "https://github.com/w3c/wot-cg",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "W3C WoT Community",
                href: "https://www.w3.org/community/wot/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/w3c/wot-cg",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} W3C Web of Things Community Group. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
