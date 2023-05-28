var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

var showCurrentTime = function()
{
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://live.staticflickr.com/65535/52933421435_4f4568f6e8_n.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "https://live.staticflickr.com/65535/52932974006_e308dd2edc_n.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://live.staticflickr.com/65535/52932376942_cb4d1fc95c_n.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://live.staticflickr.com/65535/52933126799_bdd93783fb_n.jpg";
    messageText = "Lunch Time!";
  }
  else if (time == naptime)
  {
    image = "https://live.staticflickr.com/65535/52931365722_8918e0d65d.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://live.staticflickr.com/65535/52933007256_3fedda1c44_n.jpg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://live.staticflickr.com/65535/52932988441_515eee2294_w.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://live.staticflickr.com/65535/52933027651_0259ac819c_n.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);