import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

export const Header = ({ isMain = false, title = "", style = {} }) => (
  <header style={style}>
    {isMain ? (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    ) : (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          ut
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )}
  </header>
)

export default Header
