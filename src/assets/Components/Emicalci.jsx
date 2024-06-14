import React, { useState } from 'react'
import './emi.css'


function Emicalci() {

    
   let [principle, setPrinciple] = useState();
// console.log(cal1);
let [time, setTime] = useState(0);
let [rate, setRate] = useState(0);
let [add, setAdd] = useState(0);

let cal1Value = ({ target: { value } }) => {
    setPrinciple(value)
    // console.log(value);
}
let cal2Value = ({ target: { value } }) => {
    setTime(value)
}
let cal3Value = ({ target: { value } }) => {
    setRate(value)
}

let totalResult = () => {
    if(principle && time && rate)
        {
            (principle*time*rate)/100
        }
    
}
  return (
    
    <div className='container'>

            <div className='heading'>
                <h1>EMI Calculator</h1>
                {/* <h2 onChange={cal1Value}>Principle:{principle} </h2>
                <h2>Time:{time}</h2>
                <h2>Rate:{rate}</h2> */}
                
            </div>
            <div className='datainputs'>
            <p>principle amount</p>
                <input type="text" placeholder='Interest' value={principle} onChange={cal1Value} />
                <input type="range" max={100000} value={principle} onChange={cal1Value} />
                
                <p>years</p>
                <input type="text" placeholder='Rate' value={time} onChange={cal2Value} />
                <input type="range" value={time} onChange={cal2Value} min={1} max={20} />
             
                <p> rate of interest</p>
                <input type="text" placeholder='Time'value={rate} onChange={cal3Value} />
                <input type="range" value={rate} onChange={cal3Value} min={1} max={20}/>
               

                <h2>Value:{(principle*time*rate)/100}</h2>
            </div>
            {/* <div className='clickRes'>
                <button onClick={totalResult}>Result</button>
            </div> */}


        </div>
    )
}
export default Emicalci