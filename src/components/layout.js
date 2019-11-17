import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import banner from "../assets/img/banner.jpg"

export const Banner = () => (
  <div
    style={{
      width: "100%",
      height: "auto",
      textAlign: "right",
      backgroundColor: "#78715F",
      padding: 0,
    }}
  >
    <img
      style={{
        marginBottom: 0,
      }}
      src={banner}
      alt="Lire au Nicaragua. Pour que les enfants aient accès à la lecture. Pour que tous puissent s'instruire et se former. L'association Nicarali soutient le développement d'un réseau de bibliothèques publiques au Nicaragua."
    />
  </div>
)

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
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )}
  </header>
)

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const isRoot = location.pathname === `${__PATH_PREFIX__}/`
    const centeredStyle = {
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }

    return (
      <div style={{ backgroundColor: "#FCC865" }}>
        <Header style={centeredStyle} isMain={isRoot} title={title} />
        {isRoot ? <Banner /> : null}
        <main style={centeredStyle}>{children}</main>
        <footer style={centeredStyle} />
      </div>
    )
  }
}

export default Layout
