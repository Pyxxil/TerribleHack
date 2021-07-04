import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import ReactSpinnerTimer from "react-spinner-timer";
import "./styles.css";



function IrdStolen(){
    const [show, setShow] = useState(false);
    const [ loaded, setLoaded ] = useState(false);

    const handleChange = (lap) => {
        if (lap.isFinish) setLoaded(true);
        else console.log("Running!! Lap:", lap.actualLap);
    };

      return (
        <>
        {show ?
            <div className = "irdstolen">
            <>
            
            <ReactSpinnerTimer
            timeInSeconds={3}
            totalLaps={1}
            isRefresh={false}
            onLapInteraction={handleChange}
            />
            {loaded ? <p>Good news! It wasn't stolen (until now)</p> : <p>(Definitely not stealing your IRD no.)</p>}
            </>
            </div>
            :
            <div className = "irdstolen">
                <img className = "irdimg" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Inland_Revenue_Department_%28New_Zealand%29_logo.svg/2880px-Inland_Revenue_Department_%28New_Zealand%29_logo.svg.png" height = "100px" width = "300px" />
                <form className="ContactFormIrd" onSubmit ={() => setShow(true)}>
                    <h1>Is my IRD stolen?</h1>
                    <NumberFormat format="###-###-###" className = "irdtextinput"/>
                    <input className = "sumbitbutton" type="submit"/>
                    
                </form>
            </div>
            }
        </>
        
      )
}

export default IrdStolen;