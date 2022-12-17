
let count = 0;
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const counter = document.querySelector('.counter'); 

decrease.addEventListener('click', function reduceFunction(){
    count--; 
    setColor();
    counter.textContent = count;    
});
increase.addEventListener('click', function addFunction(){
    count++;
    setColor();
    counter.textContent = count;
});
reset.addEventListener('click', function resetFunction(){
    count = 0;
    setColor();
    counter.textContent = count;
});
function setColor(){
    if(count > 0){
        counter.style.color = "white";
    }
    else if(count < 0){
        counter.style.color = "red";
    }
    else{
        counter.style.color = "purple";
    }
}
