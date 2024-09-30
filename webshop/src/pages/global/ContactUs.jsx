import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

function ContactUs() {
  const form = useRef();
  const [message, setMessage] = useState("Saada meil");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3243ol8', 'template_1gufkfe', form.current, {
        publicKey: 'CME-RDF3qRWLUROE-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <div>{message}</div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label><br />
        <input type="text" name="from_name" /><br />
        <label>Email</label><br />
        <input type="email" name="from_email" /><br />
        <label>Message</label><br />
        <textarea name="message" /><br />
        <input onClick={() => setMessage("Meil saadetud")} type="submit" value="Send" /><br />
      </form>
    </div>
  )
}

export default ContactUs