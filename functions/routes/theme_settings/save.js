//const axios = require('axios')
//const getAppData = require('./../../lib/store-api/get-app-data')

exports.post = ({admin}, req, res) => {  
  const { storeId, params } = req.body  
 
  admin.firestore().doc(`theme_settings/${storeId}`).set(params)
  .then(function(){
    res.send({error:false})
  })  
  .catch(err => {
    console.error(err)
    res.send(err.message)
  });
}
