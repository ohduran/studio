import React from "react"
import "../global.css"

const ListSection = ({ title, children, className, titleClassName }) => {
  return (
    <section className={`${className ? className : ""} mt-10 w-9/12 mx-auto`}>
      <h2
        className={`${
          titleClassName ? titleClassName : ""
        } text-4xl font-family-zilla font-bold `}
      >
        {title}
      </h2>
      <nav className="mt-5 grid gap-3 grid-cols-3">{children}</nav>
    </section>
  )
}

export default ListSection
