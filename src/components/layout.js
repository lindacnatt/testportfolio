import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import "../styling/general.scss"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  if (location.pathname === rootPath) {
    header = (
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
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        padding: `${rhythm(0.5)} ${rhythm(3)}`,
        width: '80%',
      }}
    >
      <main>{children}</main>
      <footer style={{
        display: 'flex',
        justifyContent: ' space-between',

      }}>
        <div className='right' style={{
        }}>
          <p>Linda Cnattingius</p>
          <p>Linda.cnattingius@gmail.com</p>
        </div>
        <div className='left' style={{
        }}>
          <p>LinkedIn</p>
          <p>Github</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
