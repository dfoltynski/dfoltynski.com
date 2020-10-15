import React from "react"

const ContactMe = () => {
  return (
    <section id="contactme" style={{ position: "relative" }}>
      <h1 className="getintouch">Get in touch 😄</h1>
      <form>
        <input type="text" placeholder="Name" autoComplete="none" />
        <input type="text" placeholder="E-mail" />
        <br />
        <input type="text" placeholder="Topic" />
        <br />
        <textarea placeholder="Message..." />
        <br />
        <input type="submit" />
      </form>
      <footer>2020 © dfoltynski.pl All rights reserved.</footer>
    </section>
  )
}

export default ContactMe
