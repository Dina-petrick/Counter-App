const daysEl = document.getElementById('days') 
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const newYear = '1 jan 2023';

function btnDays(){

    const newYearDate = new Date(newYear);
    const currentYear = new Date();

    const totalSeconds = (newYearDate - currentYear)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = FormatTime(days);
    hoursEl.innerHTML = FormatTime(hours);
    minsEl.innerHTML = FormatTime(mins);
    secondsEl.innerHTML = FormatTime(seconds);

} 


function FormatTime(time){
    return time < 10 ? `0${time}` : time ;
}
btnDays();

setInterval(btnDays,1000);