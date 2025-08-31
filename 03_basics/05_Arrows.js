 const user ={
  userName: 'Devansh',
  price: 999,
  welcomeMessage: function(){
    console.log(`${this.userName} , welcome `) 
    // here we have to use this to get it if it is in with in the scope
    console.log(this) 
    // yaha this scope ke andar hai tho pura bata dega 
  }

 }
 user.welcomeMessage()
 user.userName ="Nishant"
 user.welcomeMessage()

 console.log(this) // here this reference to the empty {} as this is in the ndoe environment 

//  function chai(){
//   let chaiName = "Adrak"
//   console.log(this.chaiName) // here this gives undefined as this works in object ,function m use nahi karenge
//  }
//  chai()

 const chai = () =>{
  let ChaiName= "Adrak"
  console.log(this.ChaiName) // here in Arrows also it is undefined
 }
 chai()

 const addTwo = (num1,num2) => num1+num2 // in this arrow inmplicit return occurs
 console.log(addTwo(2,5))