

function createUser(username , score){
	this.username = username
	this.score = score

}

createUser.prototype.printMe = function(){
	console.log(`Price of ${this.username} is ${this.score}`);
		
}
createUser.prototype.increament = function(){
	this.score++;
}

const user1 =  new createUser("Chai" , 25) // here new key word not only used to create new object of this but also for this prototype printMe and increament are in space so to bind it we you new ***
const user2 = new createUser("tea",250)

user1.printMe()


// A new object is created:
// The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked:
// The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called:
// The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this (the newly created object) to be the intended return value.

// The new object is returned:
// After the constructor function has been called, if it doesn’t return a non-primitive value (object, array, function, etc.), the newly created object is returned.

