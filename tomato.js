const pomodoro=25;
const shortBreak=5;
const longBreak = 10;
var timer = 0;
var currentTime=null;
var workTime= 25;
var breakTime= 5;


const sound = document.createElement('audio');
sound.setAttribute("src", "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");


window.onload = function(){

  document.getElementById("pomo").addEventListener("click", function(){go(pomodoro);});
  document.getElementById("sb").addEventListener("click",function(){go(shortBreak);});
  document.getElementById("lb").addEventListener("click", function(){go(longBreak);});
  document.getElementById("addPomo").addEventListener("click",function(){alterTime(1, "pomoTime");});
  document.getElementById("subtractPomo").addEventListener("click", function(){alterTime(-1, "pomoTime");});
  document.getElementById("addBreak").addEventListener("click",function(){alterTime(1, "breakTime");});
  document.getElementById("subtractBreak").addEventListener("click", function(){alterTime(-1, "breakTime");});

  document.getElementById("usePomo").addEventListener("click",function(){go(workTime);});
  document.getElementById("useBreak").addEventListener("click", function(){go(breakTime);});
};


function alterTime(num, element){
 if(element=="pomoTime"){
     workTime=workTime+num;
  if(workTime>=0){
    document.getElementById(element).innerHTML = workTime;
  }
  else if (workTime<0) {
    workTime=0;  
}
}

else{ 
    breakTime=breakTime+num;
 if(breakTime>=0){
    document.getElementById(element).innerHTML = breakTime;
  }
  else if (breakTime<0) {
    breakTime=0;
  }
}
}




function go(time){

time=time*60;                    //From minutes to seconds

  if(currentTime != null){
    clearInterval(currentTime);
    currentTime=null;
  }
  if(time !=0){ 
      currentTime= setInterval(myTimer, 1000);
      timer=time;
}   
}


function myTimer(){
  timer--;
  var min=parseInt(timer/60);
  var sec = timer%60;
  if(timer==0){
    document.getElementById("timer").innerHTML = "Time is up!";
    document.getElementById("head").innerHTML = "Time is up!";
    clearInterval(currentTime);
    sound.play();
  }
  else{
    updateTime(sec, min, "timer");
    updateTime(sec, min, "head");
  }

}

function updateTime(sec, min, id){
  if(sec<10 && min<10){
    document.getElementById(id).innerHTML = "0"+min +" : 0" + sec;
  }
  else if(min<10){
    document.getElementById(id).innerHTML = "0" +min +" : " + sec;
  }
  else if(sec<10){
    document.getElementById(id).innerHTML = min +" : 0" + sec;
  }
  else{
    document.getElementById(id).innerHTML = min +" : " + sec;
  }


}

