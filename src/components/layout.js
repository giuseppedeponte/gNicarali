import React from "react"

import { rhythm } from "../utils/typography"

// import style from "../assets/style/layout.module.css"

import Header from "./Header"
import Nav from "./Nav"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const isRoot = location.pathname === `${__PATH_PREFIX__}/`

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(20),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header isMain={isRoot} title={title} />
        <Nav />
        <main>{children}</main>
        <footer />
      </div>
    )
  }
}

export default Layout
