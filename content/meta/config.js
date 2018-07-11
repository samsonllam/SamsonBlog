const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Samson Lam - PersonalBlog", // <title>
  shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "greg lobinski",
  authorTwitterAccount: "greglobinski",
  // info
  infoTitle: "Samson Lam",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Samson Lam - PersonalBlog",
  manifestShortName: "PersonalBlog", // max 12 characters
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
