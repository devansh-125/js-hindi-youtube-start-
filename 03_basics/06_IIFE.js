// Immediate invoke function Expression (IIEF)

(function chai(){
  console.log("DB Connected")
})();        // here ; is important to write because IIEF does not know where to stop it 

// ()() the first one for the function defination and second one is for execution call 
// this function is used to  prevent from the global scope pollution

// THis is also return in the form of Arrow function

(() => {
  console.log('DB connected twice')
})()