function SetUsername(username){
  this.username = username
  console.log("Called");
  
}

function createUser(username, email, password){
 // SetUsername(username) // here by doing this function is called but value the it assigned lost just after call 
  // SetUsername.call(username) // call is used here so that vale assigned in it did not lost (ise bhi kam nahi hua )

  SetUsername.call(this,username) // here we have to give apna this so taht after call the assigned variable stores in apna thia before lost  
  this.email = email
  this.password = password 
}

const dev = new createUser("Devansh", "devansh@gamil.com" , "123")

console.log(dev);
