/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://publius.money",
  generateRobotsTxt: true,
  // ...other options
}
