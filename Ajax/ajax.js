
let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhr.send();
    xhr.onload = () =>{
    if(xhr.status === 200){
        let data = xhr.responseText;
        let mobile = JSON.parse(data);
        console.log(mobile);
        dispalyJSONData(mobile);
    }
    if(xhr.status === 404){
        let data = xhr.responseText;
        console.log(data);
    }    
};
}); 
let dispalyJSONData = (mobile) =>{
    let htmlTemplate = '';
    htmlTemplate = `<ul>
                        <li>USERID: ${mobile.userId}</li>
                        <li>ID: ${mobile.id}</li>
                        <li>TITLE: ${mobile.title}</li>
                        <li>COMPLTED: ${mobile.completed}</li>
                    </ul>`
     document.querySelector('.text').innerHTML = htmlTemplate;               
}; 


