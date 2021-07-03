import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const LecturerPage = () =>{

    function pushedNo(e) {
      e.preventDefault();
  
      document.getElementById("h1-element").innerHTML = "You graduated 5 years ago???"
    }

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_semhhwo', 'template_id6q8hm', e.target, 'user_bLQYyBsBgDwyW1yacj3na')
        .then((result) => {
            console.log(e.target)
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
      <div  style={{backgroundColor: '#4791db'}}>

      <h1>Welcome to wagging or no wagging?</h1>

      <h2>Are you attending your lecture today?</h2>

      <h1 id = "h1-element"></h1>

      <h1 id></h1>

      <form className="contact-form" onSubmit={sendEmail}>
        <input type="submit" value="Wag" />
      </form>

      <form className="Contact-form-No" onSubmit={pushedNo}>
        <input type="submit" value="No Wag"/>
      </form>
      

        </div>
      
    );
  }

export default LecturerPage;