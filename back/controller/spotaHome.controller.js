const fetch = require('node-fetch-npm');
const url = require('../calls/toFetch')
const JSONStream = require('jsonstream')


module.exports = {
     fetchAll:  async(req, res, next) => {
        
        console.log("realizando petición...")
        const response = await fetch(url.SPOT_A_HOME)
        const data = await response.json();
        console.log('finalizada')
        return res.status(200).json(data);
      },
    
    prueba: async(req,res,next) => {
      const response = await fetch(url.SPOT_A_HOME);
      // console.log(response.body)
      try{
        let i = 0;
        let array = [];
        let array2 = []
        console.log(response.body.PassThrough)
        for await (const chunk of response.body)
        {
          i++
          if(i<1000){
            const data = chunk.toString();
            const dataj = JSON.stringify(data)
            array.push(JSON.parse(dataj))

          }else{
            return res.json(chunk)
            // res.json(JSON.stringify(chunk));
          }
          if(i > 1000 && i < 20000){
            console.log("estado 2")
            array2.push(chunk)
          }
          // res.json(array2)
        }
      }catch (err){
        console.log(err)
      }

    }
    }

