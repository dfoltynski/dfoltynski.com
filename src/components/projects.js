import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import BackgroundSvg1 from "../images/projects_background_1.svg"
import BackgroundSvg2 from "../images/projects_background_2.svg"

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projects__title">meetme</h1>
      <img
        className="projects__img"
        src="https://i.imgur.com/ecUxXbB.png"
        alt="project_photo"
      />
      <div style={{ display: "flex" }}>
        <FontAwesomeIcon
          style={{ margin: "1em", width: "40px", height: "40px" }}
          icon={faGlobeEurope}
        />
        <FontAwesomeIcon
          style={{ margin: "1em", width: "40px", height: "40px" }}
          icon={faGithub}
        />
      </div>
      <p className="project__desc">
        Application for setting up meetings with random people when you are
        bored
      </p>
      <img
        className="background__svg1 background__svg1--project"
        src={BackgroundSvg1}
        alt="projects_background_1"
      />
      <img
        className="background__svg2 background__svg2--project"
        src={BackgroundSvg2}
        alt="projects_background_2"
      />
    </section>
  )
}

export default Projects
