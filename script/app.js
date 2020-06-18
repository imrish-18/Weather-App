
// use call back function
const request = require('request')
const chalk = require('chalk')
const geocode = require('./geocode')
const forecast=require('./forecast')
// process.argv is used to take input from user
console.log(process.argv)
const address=process.argv[2]
//using location
geocode(address, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
// using longitude and latitude
forecast(29.2523,78.6881, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})