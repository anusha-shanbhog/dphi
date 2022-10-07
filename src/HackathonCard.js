import './HackathonCard.css';
import data from './data.json'
let days = 2; //starting number of days
let hours = 0; // starting number of hours
let minutes = 2; // starting number of minutes
let seconds = 5; // starting number of seconds

// converts all to seconds
let totalSeconds =
days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

//temporary seconds holder
let tempSeconds = totalSeconds;

// calculates number of days, hours, minutes and seconds from a given number of seconds
const convert = (value, inSeconds) => {
if (value > inSeconds) {
    let x = value % inSeconds;
    tempSeconds = x;
    return (value - x) / inSeconds;
} else {
    return 0;
}
};

//sets seconds
const setSeconds = (s) => {
document.querySelector("#seconds").textContent = s + "s";
};

//sets minutes
const setMinutes = (m) => {
document.querySelector("#minutes").textContent = m + "m";
};

//sets hours
const setHours = (h) => {
document.querySelector("#hours").textContent = h + "h";
};

//sets Days
const setDays = (d) => {
document.querySelector("#days").textContent = d + "d";
};

// Update the count down every 1 second
var x = setInterval(() => {
//clears countdown when all seconds are counted
if (totalSeconds <= 0) {
    clearInterval(x);
}
setDays(convert(tempSeconds, 24 * 60 * 60));
setHours(convert(tempSeconds, 60 * 60));
setMinutes(convert(tempSeconds, 60));
setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
totalSeconds--;
tempSeconds = totalSeconds;
}, 1000);

function HackathonCard() {
    const Card = data.HackathonCard

    return (
        Card.map((record,i)=> 
        <div class="container" key={i}>
        <div class="card">
        <div class="card-header">
 <img src={record.icon} alt={record.title} />
</div>
<div class="card-body">
   <br/>
   <center>
   
<span class="tag tag-teal">{record.status}</span>


<br/><br/>
<h4 > {record.title}</h4>
   <br/>
   <div>Ends in:
       <div id="countdown-container">
   <div id="countdown">
       <span id="hours">0h</span> :
       <span id="minutes">0m</span> : <span id="seconds">0s</span>
   </div>
</div>
</div>
 <br/>
 <button class="button-37" role="button">Participate now!</button>
 </center>
   </div>
</div>    
   </div>)
        )
}
     
  export default HackathonCard