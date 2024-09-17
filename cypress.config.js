const { defineConfig } = require("cypress");



const { configurePlugin } = require("cypress-mongodb");



module.exports = defineConfig({
  env: {
    mongodb: {
      uri: 'mongodb+srv://dba:dba123@petapi.fvpq0.mongodb.net/?retryWrites=true&w=majority&appName=petapi',
      database: 'test',
      collection: 'dogs'
    }
  },

  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on);
    },
  },
});
