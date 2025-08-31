// console.log('Today time' , Temporal.Now.instant())  -> this is the future proposal that is gonna implement so that it is easy for us 

let myDate= new Date()
console.log(myDate.toLocaleDateString()); // 31/8/2025
console.log(typeof myDate); // Object

let createdDate = new Date(2005 , 2, 25)
console.log(createdDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) // this is long value which give the time in milisecond
console.log(createdDate.getTime())