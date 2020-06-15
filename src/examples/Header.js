import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        title
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      siteMetadata: { title, author },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      {/* <h2>by {data.site.siteMetadata.author}</h2> */}
      <h1>{title}</h1>
      <h2>by {author}</h2>
    </div>
  )
}

export default Header
