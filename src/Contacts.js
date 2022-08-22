import React from "react";

function Contacts() {
  return (
    <div className="contacts">
      <h2>Contact Info</h2>
      <div className="socials">
        <h3>Email</h3>
        <p>jamesmwendwa.dev@gmail.com</p>

        <a href="https://github.com/James-Mwendwa">Github</a>
      </div>

      <div className="formPage">
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <textarea name="" id="" cols="30" rows="10">
            Your Message
          </textarea>

          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
