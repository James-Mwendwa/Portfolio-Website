import Head from "next/head";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
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
          <form>
            <input type="text" required placeholder="Name" />
            <input type="text" required placeholder="Email" />
            <textarea
              cols="30"
              rows="10"
              placeholder="Type your message here..."
            />
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
