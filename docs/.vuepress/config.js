module.exports = {
  title: "LEO的博客",
  description: "我的心路历程",
  dest: "dist",
  base: "/huangjjblog/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: require("./nav"),
    sidebar: require("./sidebar"),
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页 ！"
  },
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: "./components"
      }
    ]
  ]
}
