import React from "react"
import "../global.css"

const ListSection = ({ title, children, className, titleClassName }) => {
  return (
    <section className={`mt-10 w-9/12 mx-auto ${className ? className : ""}`}>
      <h2
        className={`text-4xl text-nord-13 font-family-zilla font-bold ${
          titleClassName ? titleClassName : ""
        }`}
      >
        {title}
      </h2>
      <nav className="mt-5 grid grid-cols-3">{children}</nav>
    </section>
  )
}

export default ListSection
