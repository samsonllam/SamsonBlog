const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Samson Lam - PersonalBlog", // <title>
  shortSiteTitle: "Samson Lam - PersonalBlog", // <title> ending for posts and pages
  siteDescription: "Samson Lam - PersonalBlog",
  siteUrl: "https://samsonlam.nets.hk",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Samson Lam",
  authorTwitterAccount: "samsonllam",
  // info
  infoTitle: "Samson Lam",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Samson Lam - PersonalBlog",
  manifestShortName: "SamsonBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "samson_lam@hku.hk",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/samsonllam" },
    { name: "linkedin", url: "https://www.linkedin.com/in/samson-lam/" }
  ]
};
