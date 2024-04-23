/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// ANSWER

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const kilogramInput = parseFloat(document.getElementById("search").value);

  if (isNaN(parseFloat(kilogramInput))) {
    alert("Please enter a valid number.");
    return;
  }

  const pounds = kilogramInput * 2.2046;
  const grams = kilogramInput / 0.0010000;
  const ounces = kilogramInput * 35.274;

  const result = `Mass in pounds: ${pounds.toFixed(2)}lb <br> Mass in grams: ${grams.toFixed(2)}g <br> Mass in ounces: ${ounces.toFixed(2)}oz`;

  const outputDiv = document.getElementById("output");
  outputDiv.style.display = "block";
  outputDiv.innerHTML = result;
});