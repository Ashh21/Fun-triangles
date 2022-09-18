const sideInput = document.querySelectorAll(".side-input");
const calcBtn = document.querySelector("#calculate-btn");
const message = document.querySelector("#output");






function calculateSum(a, b) {
    const sumOfSquares = a * a + b * b ;
    return sumOfSquares;
}

function calculateHypotenuse() {
   const sumOfSquares = calculateSum(
     Number(sideInput[0].value),
     Number(sideInput[1].value)
     ) ;

     const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
     message.innerText = "The length of hypotenuse is " + lengthOfHypotenuse     
}

calcBtn.addEventListener("click", calculateHypotenuse );