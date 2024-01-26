const { Plugin } = require("obsidian")

module.exports = class extends Plugin {
  async onload() {
    this.addCommand({
      id: "translucency-toggle",
      name: "Toggle",
      callback: async () => {
        if (this.app.vault.getConfig("translucency")) {
          this.app.vault.setConfig("translucency", false)
          this.app.customCss.disableTranslucency()
        } else {
          this.app.vault.setConfig("translucency", true)
          this.app.customCss.enableTranslucency()
        }
      }
    })
  }
}
