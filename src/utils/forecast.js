const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=ae55ae669c53880964f21db71b76cb61&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body}) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location try another one!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " +  body.current.feelslike + " degress out.")
            
        }
        })
        }
        module.exports = forecast