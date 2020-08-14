import React from "react"
import bg from "../images/bg4.jpg"
// import { css } from "@emotion/core"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import LayoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={LayoutStyles.container}>
      <div
        css={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
        className={LayoutStyles.content}
      >
      <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
