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
    updateElement(element, workTime);
  }
  else if (workTime<0) {
    workTime=0;  
}
}

else{ 
    breakTime=breakTime+num;
 if(breakTime>=0){
    updateElement(element, breakTime);
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
  
  if(timer==0){
    updateElement("timer", "Time is up!");
    updateElement("head", "Time is up!");
    clearInterval(currentTime);
    sound.play();
  }
  else{
    let string=formatTime(timer);
    updateElement("timer", string);
    updateElement("head",  string);
  }

}

function updateElement(id, string){
    document.getElementById(id).innerHTML = string;
}
function formatTime(timer){
  let min=parseInt(timer/60);
  let sec = timer%60;
  
  if(sec<10 && min<10){
    return ( "0"+min +" : 0" + sec);
  }
  else if(min<10){
    return ( "0" +min +" : " + sec);
  }
  else if(sec<10){
    return ( min +" : 0" + sec);
  }
  else{
    return( min +" : " + sec);
  }


}

