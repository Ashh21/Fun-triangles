
const sideOne = document.querySelector("#side-one");
const sideTwo = document.querySelector("#side-two");
const sideThree = document.querySelector("#side-three");
const calculate = document.querySelector("#calculate-area");
const output = document.querySelector("#output");

function calculateArea(e) {
  e.preventDefault();

  const sideOneValue = Number(sideOne.value);
  const sideTwoValue = Number(sideTwo.value);
  const sideThreeValue = Number(sideThree.value);

  if (
    sideOneValue + sideTwoValue > sideThreeValue &&
    sideTwoValue + sideThreeValue > sideOneValue &&
    sideOneValue + sideThreeValue > sideTwoValue
  ) {
    const semiPerimeter =
      (sideOneValue + sideTwoValue + sideThreeValue) / 2;

    const result = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - sideOneValue) *
        (semiPerimeter - sideTwoValue) *
        (semiPerimeter - sideThreeValue)
    ).toFixed(4);
    output.innerText = `Area of a triangle is ${result} `;
  } else {
    output.innerText = "Enter valid values for each sides";
  }
}

calculate.addEventListener("submit", calculateArea);