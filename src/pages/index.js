import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="home" />
      <div className={indexStyles.index}>
        <h1>HI, I'M RUPAK DEY...</h1>
        <h2>a immature web developer😉</h2>
      </div>
    </Layout>
  )
}

export default IndexPage
