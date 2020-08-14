import React from "react"
import bg from "../images/bg4.jpg"
// import { css } from "@emotion/core"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import LayoutStyles from "./layout.module.scss"
import headerStyles from './header.module.scss'

const Layout = props => {
  return (
    <div className={LayoutStyles.container}>
      <div
        css={{
          backgroundImage: `
          linear-gradient(to left bottom, rgba(126, 213, 111, .5), rgba(40, 180, 133, .9)), url(${bg})
        `,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={LayoutStyles.content}
      >
        <Header className={headerStyles.activeList} />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
