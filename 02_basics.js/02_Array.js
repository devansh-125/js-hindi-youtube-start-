const mom_side= ["Rahul","Ajad","Mona"]
const dad_side = ["Arun","Shivam","Anuj"]


// mom_side.push(dad_side) // so here we use push so there is an array in array 
// console.log( mom_side)
 const all2 = mom_side.concat(dad_side) // concat is used to add the elemts by not just the whole array in between 
console.log(all2)

const all  = [...mom_side , ...dad_side] // ... se spread ho gya hai same kam karta hai 
console.log(all)

const another_array = [1,2,3,[2,8,9],8 ,[2,"Hello",[1,"Devansh"]]]
const new_array = another_array.flat(Infinity)
console.log(new_array)

console.log(Array.isArray("Devansh"))
console.log(Array.from("Devansh"))
console.log(Array.from({name: "Devansh"})) // intresting because it give empty array as i unable to understand by which thing he made the array key or value 

let x=100;
let y=200;
let z = 300;
console.log(Array.of(x,y,z))