const decreaseButt = document.getElementById("decreaseButt");
const resetButt = document.getElementById("resetButt");
const increaseButt = document.getElementById("increaseButt");
const countLabel = document.getElementById("countLabel");

const submitButt = document.getElementById("submitButt");
const stepLabel = document.getElementById("stepLabel");
const curStep = document.getElementById("step");

let count = 0;
let step = 1;

decreaseButt.onclick = function(){
    count -= step;
    countLabel.textContent = count;
}

increaseButt.onclick = function(){
    count += step;
    countLabel.textContent = count;
}

resetButt.onclick = function(){
    count = 0;
    step = 1;
    curStep.textContent = 1;
    countLabel.textContent = count;
}

document.getElementById("submitButt").onclick = function(){
    step = Number(stepInput.value);
    curStep.textContent = step;
    console.log(step);
    document.getElementById("stepInput").value = "";
}