import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Head from "next/head";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        "service_7sun1h9",
        "template_233gs2n",
        form.current,
        "Sq1FmuU5JhDw9P9YJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Portfolio | Contacts</title>
      </Head>
      <div>
        <div className="socials">
          <GitHubIcon />
          <LinkedInIcon />
        </div>
        <h2>Contacts</h2>
        <div className="formPage">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required autoComplete="off" />
            <label>Email</label>
            <input type="email" name="user_email" required autoComplete="off" />
            <label>Message</label>
            <textarea name="message" required autoComplete="off" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
