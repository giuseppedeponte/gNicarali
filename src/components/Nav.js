import React from "react"
import { Link } from "gatsby"

export const Nav = props => {
  return (
    <nav>
      <ul
        style={{
          fontSize: 12,
          marginLeft: 0,
          display: `flex`,
          flexWrap: `wrap`,
          listStyle: `none`,
          padding: 0,
          lineHeight: 1.25,
        }}
      >
        <li>
          <Link to="/association">L'association</Link>
        </li>
        &emsp;
        <li>
          <Link to="/partenaires">Nos partenaires</Link>
        </li>
        &emsp;
        <li>
          <Link to="/fr/blog">Actualités</Link>
        </li>
        &emsp;
        <li>
          <Link to="/es/blog">Nicarali en espagnol</Link>
        </li>
        &emsp;
        <li>
          <Link to="/participer">Participer</Link>
        </li>
        &emsp;
        <li>
          <Link to="/contact">Contactez-nous</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
