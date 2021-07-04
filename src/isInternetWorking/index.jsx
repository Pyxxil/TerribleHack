import React from 'react';

const isInternetWorking = () =>{
const divStyle = {
    color: 'blue',
    fontSize: '200px',
    margin: 0,
    lineHeight: 0,
}
    return(
        <div>
    <p>Is your internet working?</p>
    <div style={divStyle}>
    <p>Yes</p>
    </div>
    </div>
    );
}

export default isInternetWorking;