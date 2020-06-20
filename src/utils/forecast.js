const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6e1c3a3bdc20126dd2f144618e44b7c0&query='+
    longitude+','+latitude+'&units=m'
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                weather_description:response.body.current.weather_descriptions[0],
                temperature:' It is currently ' + response.body.current.temperature +' degree out',
                precip:         'There is a ' + response.body.current.precip +
                '% chance of rain in '+response.body.location.name
                       })
        }
    })
}

module.exports = forecast