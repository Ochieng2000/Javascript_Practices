
 function countdownTimer(){
     const date = new Date("January 01, 2023 00:00:00").getTime();
     const current = new Date().getTime();

     const second = 1000;
     const minute = second * 60;
     const hour = minute * 60;
     const day = hour * 24;
     const difference = date- current;

    let timeDays = Math.floor(difference / day);
    let timeHours = Math.floor((difference % day) / hour);
    let timeMinutes= Math.floor((difference % hour) / minute);
    let timeSeconds = Math.floor((difference % minute) / second);

    document.querySelector(".days").innerHTML= timeDays;
    document.querySelector(".hours").innerHTML= timeHours;
    document.querySelector(".minutes").innerHTML= timeMinutes;
    document.querySelector(".seconds").innerHTML= timeSeconds;
 }
 setInterval(countdownTimer, 1000);