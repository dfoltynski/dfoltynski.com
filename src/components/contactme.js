import React from "react"

const ContactMe = () => {
  return (
    <section style={{ position: "relative" }}>
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
