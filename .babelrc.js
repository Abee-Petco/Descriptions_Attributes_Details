module.exports = {
  "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
  ],
  "compact": true,
  "env": {
      "test": {
          "plugins": [
              "@babel/plugin-transform-runtime",
          ]
      }
  }
}