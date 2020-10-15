import React, { useState, useRef } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navbar = useRef()

  const scrollToSection = (section_name, offset = 0) => {
    window.scrollTo(0, document.getElementById(section_name).offsetTop - offset)
    setIsOpen(false)
    navbar.current.style.transform = "translateX(0)"
  }

  return (
    <>
      <nav ref={navbar}>
        <ul>
          <li onClick={() => scrollToSection("homepage")}>Home</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("skills", 50)}>Skills</li>
          <li onClick={() => scrollToSection("contactme")}>Contact me</li>
        </ul>
      </nav>
      <div
        className="hamburger"
        onClick={() => {
          setIsOpen(!isOpen)
          !isOpen
            ? (navbar.current.style.transform = "translateX(100%)")
            : (navbar.current.style.transform = "translateX(0)")
        }}
      >
        <div className="hamburger__top"></div>
        <div className="hamburger__middle"></div>
        <div className="hamburger__bottom"></div>
      </div>
    </>
  )
}

export default Header
