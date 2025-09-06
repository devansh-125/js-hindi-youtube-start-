let greeting = ['Good Morning', "Good Evening"]
let herosPower = {
  thor: "hammer",
  spiderman: "slice",
  getSpidermanPower: function(){
    console.log(`Spiderman Power is ${this.spiderman}`)
  }
}

Object.prototype.devansh = function(){
  console.log("Devansh is present everywhere")
}
// to made devansh a prototype here we made for Object as we know all the things goes from object means all are objects in js 
// like array string ...

herosPower.devansh() // we want to made this as a function here so 

greeting.devansh() // here greeting is object but as we decleare devansh as function of Object it works 
// In this you access the top level hierarchy Object here