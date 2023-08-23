const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'http://www.automationpractice.pl',
   includeShadowDom: true,
   viewportHeight: 1080,
   viewportWidth: 1920
  },
})