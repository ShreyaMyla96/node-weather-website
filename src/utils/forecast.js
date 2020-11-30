const request = require('request')

/* 
const url = 'http://api.weatherstack.com/current?access_key=ffc1911be98321ad92d4ed9f98a579e1&query=37.8267,-122.4233'
request({ url:url, json:true }, (error,response) => {

    if(error){
        console.log('Unable to connect to weather service!!')
    } else if(response.body.error) {
        console.log('Unable to find location')
    }else{
        console.log('It is currently ' + response.body.current.temperature + '.' + 'It feels like ' + response.body.current.feelslike)
    }
    
 })

*/

// The above code is comeenetd. Implemented in a different way, so that we can use callback function and make forecast function reusable

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=ffc1911be98321ad92d4ed9f98a579e1&query=' + latitude + ',' + longitude + '&units=f'
    request({ url:url, json:true }, (error,response) => {
        if(error){
            callback('Unable to connect to weather service!!', undefined)
        } else if(response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback (undefined, response.body.current.weather_descriptions[0]+'. It is currently ' + response.body.current.temperature + ' degrees out. ' + 'But it feels like ' + response.body.current.feelslike + ' degrees out. And the humidity is ' + response.body.current.humidity + '%')
        }

    })


}


module.exports = forecast

