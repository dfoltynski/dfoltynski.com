import React from "react"
import Header from "./header"
import wave from "../images/wave.gif"

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="homepage">
        <p className="homepage__introduction">
          Hi <img src={wave} alt="wave.gif" width="42px" /> I'm
        </p>
        <h1 className="homepage__name">David</h1>
      </div>
    </>
  )
}

export default HomePage
