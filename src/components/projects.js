import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGlobeEurope,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import BackgroundSvg1 from "../images/projects_background_1.svg"
import BackgroundSvg2 from "../images/projects_background_2.svg"
import { projects } from "../data/projects"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

const Projects = () => {
  return (
    <section style={{ margin: "0" }} id="projects">
      <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={10}
        totalSlides={5}
        isPlaying={true}
        infinite={true}
      >
        <Slider>
          {projects.map(project => (
            <Slide index={project.id}>
              <h1 className="projects__title">{project.project_title}</h1>
              <img
                className="projects__img"
                src={project.project_img}
                alt={project.project_title}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href={project.website_link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    style={{ margin: "1em", width: "40px", height: "40px" }}
                    icon={faGlobeEurope}
                  />
                </a>
                <a href={project.github_link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    style={{ margin: "1em", width: "40px", height: "40px" }}
                    icon={faGithub}
                  />
                </a>
              </div>
              <p className="project__desc">{project.short_desc}</p>
            </Slide>
          ))}
        </Slider>
        <div>
          <ButtonBack
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              border: "none",
              color: "#1e1e1e",
              fontSize: "45px",
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </ButtonBack>
          <ButtonNext
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              border: "none",
              color: "#1e1e1e",
              fontSize: "45px",
            }}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </ButtonNext>
        </div>
      </CarouselProvider>

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
