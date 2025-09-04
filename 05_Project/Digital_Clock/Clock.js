const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date();
  clock.innetHTML = date.toLocaleTimeString();
},1000);