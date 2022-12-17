const counters = document.querySelectorAll('.counter');

counters.forEach(function(e){
    e.innerText = "0";
    increamentCounter();
    function increamentCounter(){
        let currentNumber = + e.innerText; 
        const dataCeil = e.getAttribute("data-ceil");
        const increament = dataCeil/ 15;
        currentNumber = Math.ceil(currentNumber + increament);
        
        if(currentNumber < dataCeil){
            e.innerText = currentNumber;
            setTimeout(increamentCounter, 50)
        }
        else{
            e.innerText = dataCeil;
        }
    }    
})
