import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = () => {
    console.log({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message,
    });
    axios
      .post("https://jd-media.netlify.app/.netlify/functions/sendEmail", {
        name,
        company,
        email,
        phone,
        message,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log(name);
        console.log(company);
        console.log(email);
        console.log(phone);
        console.log(message);
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <img
          className="titleImg"
          src="https://fontmeme.com/permalink/200730/10411606f28819617f6443bc6808a36b.png"
          alt="calligraphy-fonts"
          border="0"
          style={{ width: "30%" }}
        />
        <p></p>
        <div className="wrapper">
          <div className="company-info">
            <h3>Joshua Dalton</h3>
            <ul>
              <li>
                <i className="fa fa-phone"></i> (+64) 021 176 0342
              </li>
              <li>
                <i className="fa fa-envelope-o">
                  {" "}
                  joshuadaltonphotography@gmail.com
                </i>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3>Email Me</h3>
            <form>
              <p>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </p>
              <p>
                <label>Company:</label>
                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                />
              </p>
              <p>
                <label>Email Address:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </p>
              <p>
                <label>Phone Number:</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </p>
              <p className="full">
                <label>Message:</label>
                <textarea
                  name="message"
                  rows="5"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </p>
              <p className="full">
                <button
                  onClick={(e) => {
                    sendEmail();
                    e.preventDefault();
                    alert("Message Sent!");
                  }}
                >
                  Submit
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
