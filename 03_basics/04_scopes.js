function One(){
  const userName = "Devansh"
  function two(){
    const website = "abc.com"
    console.log(userName) // here we access this
  }
  // console.log(website) // we do not access this here because of the two function scope is in between two
  two()
}
One()


//+++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++++++++
console.log(addOne(5)) // here we can access this addOne before decleartion 

function addOne(num){
  return num+1

}

// console.log(addTwo(5)) // This give error as it is store in variable and used before decleration 

const addTwo = function(num){
  return num+2
}
console.log(addTwo(5)) 