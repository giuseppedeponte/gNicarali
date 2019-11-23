import React from "react"
import { Link } from "gatsby"

import style from "../assets/style/nav.module.css"

const pages = {
  association: {
    to: "/association",
    label: "L'association",
  },
  partenaires: {
    to: "/partenaires",
    label: "Nos partenaires",
  },
  frBlog: {
    to: "/fr/blog",
    label: "Actualités",
  },
  esBlog: {
    to: "/es/blog",
    label: "Nicarali en español",
  },
  participer: {
    to: "/participer",
    label: "Participer",
  },
  contact: {
    to: "/contact",
    label: "Contactez-nous",
  },
}

export const Nav = props => {
  return (
    <nav>
      <ul className={style.list}>
        {Object.entries(pages).map(([id, page]) => (
          <li key={id}>
            <Link
              className={style.link}
              activeClassName={style.linkActive}
              to={page.to}
            >
              {page.label}
            </Link>
            &emsp;
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
