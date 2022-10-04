const sideInput = document.querySelectorAll(".side-input");
const calcBtn = document.querySelector("#calculate-btn");
const message = document.querySelector("#output");






function calculateSum(a, b) {
    const sumOfSquares = a * a + b * b ;
    return  sumOfSquares;
}

function calculateHypotenuse() {
  const sideOne = Number(sideInput[0].value)
  const sideTwo = Number(sideInput[1].value)
   const sumOfSquares = calculateSum(
     sideOne, sideTwo
     ) ;

     if (sideOne <= 0 || sideTwo <= 0 ){
      message.innerText = "All fields should be filled and Input value should be non-zero and positive"
    }
    else{
      const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
     message.innerText = "The length of hypotenuse is " + lengthOfHypotenuse 
    }

}

calcBtn.addEventListener("click", calculateHypotenuse );