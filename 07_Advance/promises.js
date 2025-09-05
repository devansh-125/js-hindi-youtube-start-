//first 

const promiseOne = new Promise(function(resolve, reject){
  // Do an async task
  // DB calls , cryptography  
  setTimeout(function(){
    console.log("Async task is completed");
    resolve() // this has to be call after task completion so that when then is used 
    
  },1000)
})

promiseOne.then(function(){
  console.log('Promises Comsumed')
})
 

// second
new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task 2 complete")
    resolve()
  },1000)
}).then(function(){
   console.log("Async 2 resolve");
   
}) 


// third
const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({userName: "Devansh" , email: "devansh@125.gmail.com"})
  },1000)
})

promiseThree.then(function(user){
  console.log(user.email);
})

// Fourth one 
const fourthPromise = new Promise(function(resolve , reject){
  setTimeout(function(){
   let error = false;
  if(!error){
    resolve({userName:"Devansh" , favFood : "Aalu parantha"})
  }else{
    reject('ERORR! something went wrong ')
  }

  },5000)
})   
fourthPromise.then((user)=>{
  console.log(user);
  return user.favFood;  
}).then((food)=>{
  console.log(food);
}).catch((error)=>{
  console.log(error)
}).finally(function(){
  console.log('Finally the promise is either resolve or reject');
  
})

// Fifth one  another way to write the fouth one using async await

const fifthPromise = new Promise(function(resolve , reject){
  setTimeout(function(){
   let error = false;
  if(!error){
    resolve({userName:"Devansh" , favFood : "Aalu parantha"})
  }else{
    reject('ERORR! something went wrong ')
  }
  },1000)
}); 

async function consumePromiseFive(){
  try{
    const response = await fifthPromise
    console.log(response.favFood)
  }catch(error){
    console.log(error)
  }

}
consumePromiseFive()


// fetch 
async function getAllAtibute(){
  try{
    const response = await fetch('https://api.github.com/users/devansh-25')
    const data = await response.json()
    console.log(data)
  }catch(error){
    console.log("E :" , error);
  }
}
getAllAtibute()