import React from "react"
import Layout from "../components/Layout"
import Header from "../examples/Header"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { description },
    },
  } = data
  return (
    <Layout>
      <Header />
      <hr></hr>
      <h5>PageQuery example</h5>
      <h4>{description}</h4>
    </Layout>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
      }
    }
  }
`

export default examples
