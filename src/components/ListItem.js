import React from "react"
import { Link } from "gatsby"
import "../global.css"

const ListItem = ({
  to,
  src,
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}) => {
  return (
    <Link
      to={to}
      className={`${className ? className : "bg-nord-4"} p-5 rounded-md`}
    >
      <figure>
        <img src={src} className="shadow-xl" alt="BookList Demo"></img>
        <figcaption
          className={`mt-2 ${
            titleClassName ? titleClassName : "text-nord-1"
          } text-center text-sm font-semibold`}
        >
          {title}
        </figcaption>
        {subtitle ? (
          <figcaption
            className={`mt-1 ${
              subtitleClassName ? subtitleClassName : "text-nord-1"
            } text-center text-xs`}
          >
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
