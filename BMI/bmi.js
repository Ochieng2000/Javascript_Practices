function calculate(){
    const height = document.querySelector('#height');
    const weight = document.querySelector('#weight');
    let calculator = document.querySelector('button');
    const Result = document.querySelector('.result');
    const Text = document.querySelector('.text')
    const Height = parseInt(height.value)/100;   
    const Weight = parseInt(weight.value);

    if(height.value == "" || weight.value == ""){
        alert("Please Enter a Value before proceeding.");
    }
    else{
        if(parseInt(Height) < 0.4 || parseInt(Weight) < 2){
        alert('Invalid Inputs!!');
               
    }
    else{
        calculator = (Weight/(Height*Height)).toFixed(2);
        Result.innerHTML = calculator; 
        if(calculator > 30){
            Text.innerHTML = "You are Obese.";
            Text.style.color = "red";
        }
        else if(calculator >= 25 && calculator <= 30){
            Text.innerHTML = "You are Overweight!!";
            Text.style.color = "red";
        }
        else if(calculator >= 18.5 && calculator < 25){
            Text.innerHTML = "Your Weight is Normal."
            Text.style.color = "black";
        }
        else{
            Text.innerHTML = "You are Underweight!!";
            Text.style.color = "red";
        }
        }   
    }       
}