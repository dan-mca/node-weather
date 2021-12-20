const request = require('request')
const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=84dcd47080ff5c56f2da979d1bab4282&query=' + latitude + ',' + longitude;
  
  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service')
    } else if (body.error) {
      callback('Unable to find location')
    } else {
      const temp = body.current.temperature
      const precip = body.current.precip
      callback(undefined, `It is currently ${temp} degress out. There is a ${precip}% chance of rain`)
    }
  })
}

module.exports = forecast