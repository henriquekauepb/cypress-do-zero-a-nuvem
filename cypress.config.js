const { defineConfig } = require("cypress");

module.exports = defineConfig({
      env:{
      PROTOCOLO_API_BASE_URL: 'https://restful-booker.herokuapp.com/'
      },

      projectId: "9rxk1n",
      viewportHeight: 880,
      viewportWidth: 1280,
      
      e2e: {

      },
      
});
