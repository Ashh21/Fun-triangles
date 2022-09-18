const angles = document.querySelectorAll(".input");
const btn = document.querySelector("#check-btn");
const message = document.querySelector("#output");

function sumOfAngles(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function isTriangle(){
    sum = sumOfAngles(
     Number(angles[0].value),
     Number(angles[1].value),
     Number(angles[2].value) );
     if ( sum === 180 ){
        message.innerText = "Yay! The angles form a triangle"
     } else{
        message.innerText = "Nope! The angles does not form a triangle"
     }

}

btn.addEventListener("click", isTriangle ) 