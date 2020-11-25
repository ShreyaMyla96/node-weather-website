const request = require('request')

/* 
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hyZXlhbXlsYSIsImEiOiJja2gxM2xzcWowMXY2MzFxeHp4cWlndGM3In0.HffoYREOVmGDbR9Qclr0Lw&limit=1'




request({ url:geoUrl, json:true }, (error, response) => {

    
     console.log('lat : ' + response.body.features[0].center[1] +  '  long: ' + response.body.features[0].center[0])
     
 })

 */

 // The above code is comeenetd. Implemented in a different way, so that we can use callback function and make geocode function reusable.

 const geocode = (address, callback) => {
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hyZXlhbXlsYSIsImEiOiJja2gxM2xzcWowMXY2MzFxeHp4cWlndGM3In0.HffoYREOVmGDbR9Qclr0Lw&limit=1'
    
    request({ url:geoUrl, json:true }, (error, response) => {
        if(error){
            callback('Unable to connect to weather service!!', undefined)
        } else if(response.body.features.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined , {
                "latitude" :  response.body.features[0].center[1],
                "longitude" : response.body.features[0].center[0],
                "location" : response.body.features[0].place_name
            })
        }
    })

 }

 // call to geocode along with parameters is done in app.js page.

 module.exports = geocode



