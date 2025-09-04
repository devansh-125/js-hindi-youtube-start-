# Project related to DOM
 # Solution Code

 ## project1 (Color Schema Switcher)
 ```javascript
 // Project one Solution code 
  
  
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

console.log(buttons)
buttons.forEach(function (button){
  console.log(button)
  button.addEventListener('click' , function(e){
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }else if(e.target.id === 'pink'){
      body.style.backgroundColor = e.target.id
    }else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }else{
      body.style.backgroundColor = e.target.id
    }
  })
});
 


 ```

## Project 2 BMI calculation
``` javascript
const h = document.querySelector('#height');
const w = document.querySelector('#weight');
const button = document.querySelector('#button');
const result = document.querySelector('#result');

button.addEventListener('click', function () {
  let height = parseFloat(h.value);
  let weight = parseFloat(w.value);

  if (!height || !weight) {
    result.innerHTML = " Please enter valid numbers!";
    result.style.color = "red";
    return;
  }

  let bmi = weight / ((height / 100) ** 2);

  if (bmi < 18.6) {
    result.innerHTML = `Under Weight : ${bmi.toFixed(2)}`;
    result.style.color = "orange";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    result.innerHTML = `Normal Range : ${bmi.toFixed(2)}`;
    result.style.color = "green";
  } else {
    result.innerHTML = `Over Weight : ${bmi.toFixed(2)}`;
    result.style.color = "red";
  }
});


```
 