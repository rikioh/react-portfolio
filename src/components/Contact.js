
import React from "react";

function Contact() {
  return (
    <div className="card " style={{width: '100%'}}>
    <div className="card-body">
      <h1 className="card-title">Contacts:</h1>
      <hr className="my-4" />
      <div className="contact-info grey">
        <h3><strong>Rikio Campbell</strong></h3>
        <p>Seattle, WA</p>
        <p><a className="link" href="mailto: rikiocamp@gmail.com">Email</a></p>
        <p><a className="link" href="https://www.linkedin.com/in/rikio-campbell-152a52106">LinkedIn</a></p>
        <p><a className="link" href="https://github.com/rikioh">GitHub Portfolio</a></p>
        <p><a className="link" href="./Assets/resume.pdf" download> Resume</a></p>
        <br />
        <br />
      </div>
    </div>
  </div>
  );
}

export default Contact;