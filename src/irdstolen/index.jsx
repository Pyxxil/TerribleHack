import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import ReactSpinnerTimer from "react-spinner-timer";



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
            <>
            <ReactSpinnerTimer
            timeInSeconds={3}
            totalLaps={1}
            isRefresh={false}
            onLapInteraction={handleChange}
            />
            {loaded ? <p>Good news! It wasn't stolen (until now)</p> : <p>(Definitely not stealing your IRD no.)</p>}
            </>
            :
                <form className="ContactFormIrd" onSubmit ={() => setShow(true)}>
                    <h1>Is my IRD stolen?</h1>
                    <NumberFormat format="###-###-###"/>
                    <input type="submit"/>
                    
                </form>
            }
        </>
        
      )
}

export default IrdStolen;