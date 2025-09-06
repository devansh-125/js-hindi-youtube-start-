
class User{
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`Username is ${this.username}`);
    
  }

}

class Teacher extends User{
  constructor(username, email,password){
    super(username) // this is good key word super we do this work by call where we take your own this to store the value
    this.email  = email
    this.password = password
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`)
  }
}

const guru = new Teacher("Devansh","dev@gmail.com",125)
console.log(guru)
guru.addCourse()
guru.logMe()