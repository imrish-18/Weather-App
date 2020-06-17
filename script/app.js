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
const url='http://api.weatherstack.com/current?access_key=6e1c3a3bdc20126dd2f144618e44b7c0&query=New%20York'

request({url:url},(error,response)=>{
const data=JSON.parse(response.body);
console.log(data);
})