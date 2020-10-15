import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons"
const Skills = () => {
  return (
    <section
      style={{
        height: "unset",
      }}
    >
      <div className="skills">
        <div className="skill">
          <p className="skill__name">React.js</p>
          <div className="skill__bar--full">
            <div className="skill__bar"></div>
          </div>
          <p className="skill__level">regular</p>
        </div>
        <div className="skill">
          <p className="skill__name">Javascript</p>
          <div className="skill__bar--full">
            <div className="skill__bar"></div>
          </div>
          <p className="skill__level">advanced</p>
        </div>
        <div className="skill">
          <p className="skill__name">HTML</p>
          <div className="skill__bar--full">
            <div className="skill__bar"></div>
          </div>
          <p className="skill__level">advanced</p>
        </div>
        <div className="skill">
          <p className="skill__name">CSS</p>
          <div className="skill__bar--full">
            <div className="skill__bar"></div>
          </div>
          <p className="skill__level">advanced</p>
        </div>
        <div className="skill">
          <p className="skill__name">Node.js</p>
          <div className="skill__bar--full">
            <div className="skill__bar"></div>
          </div>
          <p className="skill__level">regular</p>
        </div>
        <div className="skill">
          <p className="skill__name">MySQL</p>
          <div className="skill__bar--full">
            <div className="skill__bar"></div>
          </div>
          <p className="skill__level">beginner/regular</p>
        </div>
        <div className="skill">
          <p className="skill__name">MongoDB</p>
          <div className="skill__bar--full">
            <div className="skill__bar"></div>
          </div>
          <p className="skill__level">regular</p>
        </div>
        <div className="skill">
          <p className="skill__name">Figma</p>
          <div className="skill__bar--full">
            <div className="skill__bar"></div>
          </div>
          <p className="skill__level">advanced</p>
        </div>
      </div>
    </section>
  )
}

export default Skills

// import React from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faReact,
//   faHtml5,
//   faCss3,
//   faNodeJs,
//   faFigma,
// } from "@fortawesome/free-brands-svg-icons"
// const Skills = () => {
//   return (
//     <main>
//       <div className="skills">
//         <div className="skill">
//           <div className="skill__bar">
//             <FontAwesomeIcon
//               style={{
//                 float: "left",
//                 marginLeft: "-1em",
//                 width: "42px",
//                 height: "42px",
//               }}
//               icon={faReact}
//             />
//             <div className="skill__bar--full"></div>
//           </div>
//         </div>
//         <FontAwesomeIcon icon={faHtml5} />
//         <FontAwesomeIcon icon={faCss3} />
//         <FontAwesomeIcon icon={faNodeJs} />
//         <FontAwesomeIcon icon={faFigma} />
//       </div>
//     </main>
//   )
// }

// export default Skills
