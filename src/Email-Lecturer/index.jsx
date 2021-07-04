import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import "./index.css";

const LecturerPage = () =>{

    function pushedNo(e) {
      e.preventDefault();
  
      document.getElementById("h1-element").innerHTML = "You graduated 5 years ago???"
    }

    function sendEmail(e) {
      document.getElementById("h1-element").innerHTML = "We sent an email to your lecturer!"
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
      <div className="lecture-page-main-container">
      
      <br /><br /><br /><br /><br />
      <h1>Let your lecturer know you're not coming!</h1>
      <h3>To wag or not to wag?</h3>
      <br /><br /><br /><br />
      <h2>Are you attending your lecture today?</h2>

      <form className="contact-form" onSubmit={pushedNo}>
        <input className="wag-button green" type="submit" value="Attending"/>
      </form>

      <form className="contact-form" onSubmit={sendEmail}>
        <input className="wag-button red" type="submit" value="Not Attending" />
      </form>

      <h1 id = "h1-element"></h1>
      
      </div>
      
    );
  }

export default LecturerPage;