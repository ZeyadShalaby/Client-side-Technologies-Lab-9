/*class Clock {
    constructor (timeDiv){
        this.timeDiv =timeDiv;
        let tim = document.querySelector(this.timeDiv);
        let t = new Date();
        let time = t.toLocaleTimeString([], {hour: '2-digit',
        minutes: '2-digit',
        seconds: '2-digit'});
        tim.innerHtml = time;

        setInterval(this.updateTime.bind(this), 1000)

    }

    updateTime(){

        let tim = document.querySelector(this.timeDiv);
        let t = new Date();
        let time = t.toLocaleTimeString([], {hour: '2-digit',
        minutes: '2-digit',
        seconds: '2-digit'});
        tim.innerHtml = time;

    }
}

new Clock('#time') 
*/


  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('showClock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }


  
function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime, 1000);
