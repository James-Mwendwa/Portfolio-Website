import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Head from "next/head";
import styles from "../styles/Contact.module.css";

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
      <div className={styles.contact}>
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.formPage}>
          <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <input
              className={styles.input}
              type="text"
              name="user_name"
              placeholder="Name"
              required
              autoComplete="off"
            />

            <input
              className={styles.input}
              type="email"
              name="user_email"
              required
              placeholder="Email"
              autoComplete="off"
            />

            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Type your message here..."
              required
              autoComplete="off"
            />
            <input className={styles.submit} type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
