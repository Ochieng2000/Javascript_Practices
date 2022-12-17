 function showTime(){
    let currentTime = new Date();
    let dayOfweek = currentTime.getDay();    
    let hour = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds= currentTime.getSeconds();
    let session = "AM";
    let nameofDay;

    switch(dayOfweek){
        case 0:
            nameofDay = "Sunday,";
            break;
        case 1:
            nameofDay = "Monday,";
            break;    
        case 2:
            nameofDay = "Tuesday,";
            break;
        case 3:
            nameofDay = "Wednesday,";
            break;
        case 4:
            nameofDay = "Thursday,";
            break;
        case 5:
            nameofDay = "Friday,";
            break;
        case 6:
            nameofDay = "Saturday,";
            break;
        }
    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }
    if(hour == 12){        
        session = "PM";
    }
    if(hour < 10){
        hour = "0"+ hour;
    }
    else{
        hour = hour;
    }
    if(minutes < 10){
        minutes = "0"+ minutes;
    }
    else{
        minutes = minutes;
    }
    if(seconds < 10){
        seconds = "0"+ seconds;
    }
    else{
        seconds = seconds;
    }
    
    let timeNow = nameofDay +" " + hour + ":" + minutes +":"+ seconds + " "+ session;
    document.querySelector(".time").innerHTML = timeNow;
   setTimeout(showTime, 1000);
}
showTime();