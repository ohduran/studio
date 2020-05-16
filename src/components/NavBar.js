import React from "react"
import { Link } from "gatsby"
import "../global.css"
import logo from "../static/logos/logo-alvaro-duran-light.png"

const NavBar = () => {
  return (
    <>
      <header
        className="p-2 bg-gray-900 shadow-lg grid z-10"
        style={{
          gridTemplateColumns: "max-content 1fr",
        }}
      >
        <Link to="/">
          <img className="h-12 xs:h-16" src={logo} alt="logo" />
        </Link>
        <nav className="col-start-2 text-right mr-2"></nav>
      </header>
    </>
  )
}

export default NavBar
