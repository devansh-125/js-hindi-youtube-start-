// function addTwoNumbers (number1,number2){ // So here number1 and number2 are the parameters 
//   console.log(number1+number2)
// }

// // addTwoNumbers(3,5) // here 3,4 are called as arguments just name  
 
// const result  = addTwoNumbers(3,5)
// console.log(result) // here result give undefined why because function just print the value does not return the val 

function addTwoNumbers (number1,number2){ 
  let result = number1+ number2
  return result
}
const result =  addTwoNumbers(2,6)
console.log("Result: ",result) // here it returns the value 
