import React from "react"
import NavBar from "../components/NavBar"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <footer style={{ marginTop: "10vh" }}></footer>
    </>
  )
}

export default DefaultLayout
