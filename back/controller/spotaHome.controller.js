const fetchProof = require('node-fetch-npm');
const url = require('../calls/toFetch')


module.exports = {
     fetchAll:  async(req, res, next) => {
        console.log("realizando petición...")
        const response = await fetch(url.SPOT_A_HOME)
        const data = await reponse.json();
        return res.status(200).json(data);
      },
    }


