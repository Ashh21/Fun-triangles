const angles = document.querySelectorAll(".input");
const btn = document.querySelector("#check-btn");
const message = document.querySelector("#output");

function sumOfAngles(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function isTriangle(){
   const angle1 = Number(angles[0].value)
   const angle2 = Number(angles[1].value)
   const angle3 =  Number(angles[2].value)

    sum = sumOfAngles(
         angle1, angle2, angle3
     );
     if(angle1 <= 0 || angle2 <= 0 || angle3 <= 0){
        message.innerText = "Input value should be positive and non-zero"
     } else if  ( sum === 180 ){
        message.innerText = "Yay! The angles form a triangle"
     } else{
        message.innerText = "Nope! The angles does not form a triangle"
     }

}

btn.addEventListener("click", isTriangle ) 