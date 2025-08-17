let score = "33abs"

let Value = Number(score);
console.log(Value); // 33
console.log(typeof Value); // NaN - Not a Number isme numbers per rely na kare js m thodi problem hai strict check nahi hai

score = null
Value = Number(score);
console.log(typeof score); //  Object yaha null ka type object hota hai 
console.log( Value); // 0