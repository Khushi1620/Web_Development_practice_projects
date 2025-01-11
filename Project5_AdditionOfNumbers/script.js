const button = document.querySelector('button');
button.addEventListener('click', ()=> {
  const num1 = document.getElementById("first").value;
  const number1 = Number(num1);
  const num2 = document.getElementById("second");
  const number2 = Number(num2.value);
  if (isNaN(number1) || isNaN(number2)) {
    return;
  }

  const ans = number1 + number2;
  const res = document.getElementsByClassName('result');
  res[0].textContent = ans;
});