import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <nav>
    <ul>
      <li
        onClick={() =>
          window.scrollTo(0, document.getElementById("homepage").offsetTop)
        }
      >
        Home
      </li>
      <li
        onClick={() =>
          window.scrollTo(0, document.getElementById("projects").offsetTop)
        }
      >
        Projects
      </li>
      <li
        onClick={() =>
          window.scrollTo(0, document.getElementById("skills").offsetTop - 50)
        }
      >
        Skills
      </li>
      <li
        onClick={() =>
          window.scrollTo(0, document.getElementById("contactme").offsetTop)
        }
      >
        Contact me
      </li>
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
