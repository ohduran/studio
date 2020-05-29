import React from "react"
import NavBar from "../components/NavBar"

const DefaultLayout = ({ children, className }) => {
  return (
    <div className={className ? className : ""}>
      <NavBar />
      {children}
      <footer style={{ marginTop: "10vh" }}></footer>
    </div>
  )
}

export default DefaultLayout
