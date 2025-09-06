class user{
  constructor(username , email ,password){
    this.username = username
    this.email = email 
    this.password = password
  } 
  encryptPassword(){
    return `${this.password}abc`
  }
  CapitalizeUser (){
    return `${this.username.toUpperCase()}`
  }
}

const chai = new user("chai","chai@gmail.com", 156)
console.log(chai.encryptPassword());
console.log(chai.CapitalizeUser());

// behind the seen 

function User(username , email ,password){
    this.username = username
    this.email = email 
    this.password = password
  } 

User.prototype.encryptPassword = function(){
   return `${this.password}abc`

}
User.prototype.CapitalizeUser = function(){
   return `${this.username.toUpperCase()}`
}

const tea = new user("tea","tea@gmail.com", 156)
console.log(tea.encryptPassword());
console.log(tea.CapitalizeUser());

