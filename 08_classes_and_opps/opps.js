const user = {
  userName : "Devansh Caudhary",
  loginCount: 8,
  isLoggedIn: true,

  getUserDetails: function(){
    console.log(`${this.userName}`) //  here if we write console.log(`${userName}`) -> this give error because this is out of the execution context of the function so we have write this to note the out of box variable

  }
}
console.log(user.getUserDetails());


// Constructor Function

function User(userName,loginCount,isLoggedIn){
  this.userName =  userName
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn
  return this
}
const userOne = new User("Shivam",14, true)
const userTwo = new User("Kush",12, false)
// console.log(userOne);    // we see that over wrting is take place we loss userOne


// two prevent this we use new key word 
console.log(userOne);
console.log(userTwo);


// new -> this keyword create an empty space which is called instance it create new object 