let result = document.querySelector('#output');
let calculate =(number) =>{
    result.value = result.value + number;
}
let Equal=()=>{
    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert ("Enter a valid input.")
    }
} 
const clr = ()=>{
    result.value = ""
}
function del(){
    result.value = result.value.slice(0, -1);
}