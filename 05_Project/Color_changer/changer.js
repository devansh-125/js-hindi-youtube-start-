
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