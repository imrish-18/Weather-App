// console.log('starting...');
// // msg will print after the time given to setTimeout()
// setTimeout(()=>{
// console.log('2 sec timer...')
// },2000)

// setTimeout(()=>{
//     console.log('0 sec timer...')
//     },0)
    

// for(let i=0;i<10;i++)
// console.log(Math.random());
// console.log('stoping....')

const req=require('request');
const request = require('request');
const url=
'http://api.weatherstack.com/current?access_key=6e1c3a3bdc20126dd2f144618e44b7c0&query=bijnor'
request({ url: url, json: true }, (error, response) => {
    console.log(
        ' It is currently ' + response.body.current.temperature + 
        ' degress out. There is a ' + response.body.current.precip 
        + '% chance of rain.')
})

// TOKEN FOR WEATHER STACK .COM 6e1c3a3bdc20126dd2f144618e44b7c0
// TOKEN FOR MAPBOX pk.eyJ1IjoicmlzaHNoYXJtYTkwMTIiLCJhIjoiY2tiazdzeG9uMDBlNDJ1cXQ5eXRwNnFsbiJ9.sw50PE8rcRUxNSqqVJEYgw
Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

