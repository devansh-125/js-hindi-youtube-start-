const name= "Devansh"
const repoCount= 2
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`) // this is the new way to write string 
console.log("Hello my name is " + name + " and my repoCount is "+ repoCount ) // this is the old way to write the string but in todays time this is not used 

const gameName = new String('Devnishck') 

console.log(gameName)

// let gameName ="Devnish"
// console.log(gameName.toUpperCase())
// gameName ="Nishant"
// console.log(gameName.toUpperCase())

const new1 = gameName.substring(0,4);
const new2 = gameName.slice(-6,5);
console.log(
  new1,
  new2
)