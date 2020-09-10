import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from './CloudService/firebase'
function App() {
const messagingfunctionality = firebase.messaging();
messagingfunctionality.requestPermission().then(() => {
  return messagingfunctionality.getToken()
}).then ((token: string) => {
  prompt ("The token is " , token )
  console.log('The token is = ', token);
  
})
  // Making use of usestate to update the time
  // let currentTime: { milliseconds: number; seconds: number; minute: number; hours: number; } = {
  //   milliseconds: 0,
  //   seconds : 0,
  //   minute : 0,
  //   hours : 0, 
  // }

  const [milliseconds, setMilliseconds] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [statustimer, setStatustimer] = useState<boolean>(false)
  // usinguseEffect to render the setinterval on every change
  const fucntiontototellstatustobutton = () => {
    setStatustimer(!statustimer)
  }
  const topausethetimer = () => {
    setStatustimer(false);
  }
  const stopTimer = () => {
    setStatustimer(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setMilliseconds(0);
  }
  useEffect(() => {
    let timer: any;
    if (statustimer) {
      timer = setInterval(() => {
       if (hours === 24){
        stopTimer();
       }
        else if (minutes === 59) {
          setMinutes(0);
          setHours(hours + 1);
        }
        else if (seconds === 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
        }
        else if (milliseconds === 99) {
          setMilliseconds(0);
          setSeconds(seconds + 1);
        } else {
          setMilliseconds(milliseconds + 1)
        }
        return clearInterval(timer);
      }, 10)
    }
  }, [hours, milliseconds, statustimer, seconds, minutes]);
  console.log(seconds);

  return (
    <div className="App">
      <h1 className = "Heading">Timer</h1>
      <div className="timer">
        {("0" + hours).slice(-2)}:{("0" + minutes).slice(-2)}:{("0" + seconds).slice(-2)}:{("0" + milliseconds).slice(-2)}
      </div>
      <div className = "button-div">
        <button className="button" onClick={fucntiontototellstatustobutton}>
          Start
      </button>
        <button className="button" onClick={topausethetimer}>
          Pause
      </button>
        <button className="button" onClick={stopTimer}>
          Stop
      </button>
      </div>
    </div>
  );
}

export default App;
