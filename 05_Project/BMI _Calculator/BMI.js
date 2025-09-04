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
