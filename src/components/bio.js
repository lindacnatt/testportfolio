/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/PinkLindaSquare.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: "column",
      }}
    >
      <div>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>
          <strong>{author.name}</strong> {author.summary}
          {` `}
        </p>
      </div>
    </div>
  )
}

export default Bio
