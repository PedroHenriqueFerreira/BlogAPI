const axios = require('axios');

module.exports = {
  afterCreate: async (data) => {
    console.log('afterCreate');
    // axios.post('URL');
  },

  afterUpdate: async (data) => {
    console.log('afterUpdate');
    // axios.post('URL');
  }
}
