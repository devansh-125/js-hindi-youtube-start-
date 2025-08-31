//stack(primitive  -> copy of the datatype ) and heap(Non primitive -> reference of the datatype actual value)

// below we clearly see that as this is array so this is non primitive data type so stores in heap so pass by reference here 
let userOne = {
  email: "devansh@gmail.com",
  upi: "XYz25"
}

let userTwo = userOne
userTwo.email = "chaudhary@gmail.com"
console.log(userOne.email)

// below is the example of string so prmitive datatype so pass by value so if i change in one does not effect the another one 

let myName ="Devansh Chaudhary"
let friend = myName 
friend = "Nishant"
console.log(myName)
console.log(friend)