const fetch = require('node-fetch-npm');
const url = require('../calls/toFetch')
// const JSONStream = require('jsonstream')


module.exports = {
     fetchStart:  async(req, res, next) => {
         
        console.log("realizando petición...")
        const response = await fetch(url.SPOT_A_HOME)
        const data = await response.json();
        console.log('finalizada')
        return data;
      }
}