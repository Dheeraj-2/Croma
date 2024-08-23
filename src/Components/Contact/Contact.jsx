import React from "react";
import "./Contact.css";
// import { useState} from "react";
import message from "../../Img/msg-icon.png";
import location from "../../Img/location-icon.png";
import phone from "../../Img/phone-icon.png";
import mail from "../../Img/mail-icon.png";
import white from "../../Img/white-arrow.png";

const Contact = () => {
  return (
    <div className="contact ${sticky? 'dark-nav' : ''}">
      <div className="contact-col">
        <h3>
          Send us a message <img src={message} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ad
          natus culpa, quod qui, debitis labore repellendus iusto, non officiis
          odio nulla harum quas earum adipisci? Eius dolore voluptatibus
          explicabo.
        </p>
        <ul>
          <li>
            <img src={mail} alt="" className="mail" />
            Contact@greatStack.com
          </li>
          <li>
            {" "}
            <img src={phone} alt="" className="phone" />
            +1 234 567 890
          </li>
          <li>
            <img src={location} alt="" className="location" />
            123 Main St, New York, NY 10001 <br />
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <from>
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label>Phone Number</label>
          <input
            type="nummber"
            name="phone"
            placeholder="Enter you mobile"
            required
          />
          <label>Message</label>
          <textarea
            name="messag"
            rows="6"
            placeholder="Enter your massage"
            required
          ></textarea>
          <a href="mailto:'dheerajmandal86@gmail.com'">
            <button type="submit" className="btn dark-btn">
              Submit now <img src={white} alt="" />
            </button>
          </a>
        </from>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;
