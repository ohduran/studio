import React from "react"
import { Link } from "gatsby"
import "../global.css"

const ListItem = ({ to, src, title, subtitle }) => {
  return (
    <Link to={to} className="p-5 bg-nord-4 rounded-md">
      <figure>
        <img src={src} className="shadow-xl" alt="BookList Demo"></img>
        <figcaption className="mt-2 text-nord-1 text-center text-sm font-semibold">
          {title}
        </figcaption>
        {subtitle ? (
          <figcaption className="mt-1 text-nord-1 text-center text-xs">
            {subtitle}
          </figcaption>
        ) : (
          ""
        )}
      </figure>
    </Link>
  )
}

export default ListItem
