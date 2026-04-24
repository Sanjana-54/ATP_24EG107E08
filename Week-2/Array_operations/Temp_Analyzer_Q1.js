/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/

//List of temperatures
const temperatures = [32, 35, 28, 40, 38, 30, 42];

   //filter() temperatures above 35
let r=temperatures.filter((element)=>element>35)
console.log("Temperatures above 35 are:",r)

   //map() to convert all temperatures from Celsius → Fahrenheit
let r1=temperatures.map(element=>(element*9/5)+32)
console.log("Temperatures converted to Fahrenheit are:",r1)

  //reduce() to calculate average temperature
let r2=temperatures.reduce((acc,element)=>acc+element,0)
let avg=r2/temperatures.length
console.log("Average temperature:",avg)

  //find() first temperature above 40
let r3=temperatures.find(element=>element>40)
console.log("First temperature above 40:",r3)

 //findIndex() of temperature 28
let r4=temperatures.findIndex(element=>element==28)
console.log("Index of 28:",r4)
