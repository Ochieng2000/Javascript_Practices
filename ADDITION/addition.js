let firstNum = parseInt(Math.random()*10);
let secondNum = parseInt(Math.random()*10);
let total = firstNum + secondNum;
let num1 = document.querySelector('.firstNumber');
num1.innerHTML = firstNum;
let num2 = document.querySelector('.secondNumber');
num2.innerHTML = secondNum;

let button = document.querySelector('button');
button.addEventListener('click', function(){
    let Total = document.querySelector('#total').value;
    Total = Number(Total);
    if (Total === total){
        alert('Correct. You are bright !!');
        window.location.reload();
        document.querySelector('#total').textContent = "";       
    } 
    else if(Total == ""){
        alert('You have not Entered any Asnwer !!!  Please Enter Your Answer' );
    }
    else {
        alert('Sorry. Incorrect. The correct answer was ' + total + '.');
        window.location.reload();    
    }
});