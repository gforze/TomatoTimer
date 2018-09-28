var pomo=1500;
var short= 300;
var long = 600;
var timer = 0;
var curTime=null;
var t = 25;
var b = 5;


const sound = document.createElement('audio');
sound.setAttribute("src", "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");


window.onload = function(){

  document.getElementById("pomo").addEventListener("click", function(){go(pomo);});
  document.getElementById("sb").addEventListener("click",function(){go(short);});
  document.getElementById("lb").addEventListener("click", function(){go(long);});
  document.getElementById("addPomo").addEventListener("click",function(){alterPomo(1);});
  document.getElementById("subtractPomo").addEventListener("click", function(){alterPomo(-1);});
  document.getElementById("addBreak").addEventListener("click",function(){alterBreak(1);});
  document.getElementById("subtractBreak").addEventListener("click", function(){alterBreak(-1);});

  document.getElementById("usePomo").addEventListener("click",function(){go(t*60);});
  document.getElementById("useBreak").addEventListener("click", function(){go(b*60);});
};

function startPomo(time){
  timer=time;

}
function alterPomo(num){
  t=t+num;
  if(t>=0){
    document.getElementById("pomoTime").innerHTML = t;
  }
  else if (t<0) {
    t=0;
  }

}

function alterBreak(num){
  b=b+num;
  if(b>=0){
    document.getElementById("breakTime").innerHTML = b;
  }
  else if (b<0) {
    b=0;
  }
}



function go(time){
  if(curTime != null){
    clearInterval(curTime);
    curTime=null;
  }
    if (time==pomo){
      curTime=setInterval(myTimer, 1000);
      timer=pomo;

    }
    else if (time==short) {
      curTime=setInterval(myTimer, 1000);
      timer=short;

    }
    else if (time==long) {
      curTime = setInterval(myTimer, 1000);
      timer=long;

    }
    else{
      curTime= setInterval(myTimer, 1000);
      timer=time;
    }
}


function myTimer(){
  timer--;
  var min=parseInt(timer/60);
  var sec = timer%60;
  if(timer==-1){
    document.getElementById("timer").innerHTML = "Time is up!";
    document.getElementById("head").innerHTML = "Time is up!";
    clearInterval(curTime);
    sound.play();
    alert("Time is up!!")
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

