import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import './header.module.scss'
import HeaderStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={HeaderStyles.header}>
      {/* <h4>
        <Link className={HeaderStyles.head} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h4> */}

      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeList}
              to="/"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeList}
              to="/blog"
            >
              codeStore
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeList}
              to="/contact"
            >
              contact
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeList}
              to="/about"
            >
              about
            </Link>
          </li>
        </ul>
      </nav>

      {/* <h1>
        <Link className={HeaderStyles.title} to="/">
          Hi, I'm Rupak Dey
        </Link>
      </h1> */}
    </header>
  )
}

export default Header
