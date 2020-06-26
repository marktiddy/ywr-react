import React from "react"
import { Jumbotron } from "react-bootstrap"
import notebook from "../images/notebook.jpg"
import logo from "../images/logo.png"

const Jumbo = () => {
  return (
    <Jumbotron
      style={{
        backgroundImage: `url(${notebook})`,
        backgroundSize: "cover",
        borderRadius: 0,
      }}
    >
      <img
        src={logo}
        alt="Logo"
        className="logo"
        style={{ height: "30%", width: "30%", margin: 0, padding: 0 }}
      />
    </Jumbotron>
  )
}

export default Jumbo
