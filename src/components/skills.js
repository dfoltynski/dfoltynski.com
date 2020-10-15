import React from "react"
import { skills } from "../data/skills"

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        height: "unset",
      }}
    >
      <div className="skills">
        {skills.map(skill => (
          <div className="skill">
            <p className="skill__name">{skill.name}</p>
            <div className="skill__bar--full">
              <div
                className="skill__bar"
                style={{ width: `${skill.skill_bar}` }}
              ></div>
            </div>
            <p className="skill__level">{skill.skill_level}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
