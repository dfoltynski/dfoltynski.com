import React from "react"
import Header from "./header"
import wave from "../images/wave.gif"
import BackgroundSvg1 from "../images/homepage_background_1.svg"
import BackgroundSvg2 from "../images/homepage_background_2.svg"

const HomePage = () => {
  return (
    <main>
      <Header />
      <div className="homepage">
        <p className="homepage__introduction">
          Hi <img src={wave} alt="wave.gif" width="78px" /> I'm
        </p>
        <h1 className="homepage__name">David</h1>
        <p className="homepage__profession">
          <p style={{ color: "#0984E3" }}>Web Developer</p>
          <p style={{ color: "#74B9FF", marginTop: "-24px" }}>Designer</p>
        </p>
      </div>
      <img
        className="background__svg1"
        src={BackgroundSvg1}
        alt="BackgroundSvg1"
      ></img>
      <img
        className="background__svg2"
        src={BackgroundSvg2}
        alt="BackgroundSvg2"
      ></img>
    </main>
  )
}

export default HomePage
