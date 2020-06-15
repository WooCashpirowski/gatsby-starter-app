import React from "react"
import Layout from "../components/Layout"
import { Button } from "../components/Button"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: sans-serif;
  width: 80%;
  margin: 1rem auto;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      flex: 6;
      padding: 0.5rem;
    }
    p {
      flex: 6;
      padding: 1rem;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`

const productTemplate = ({
  data: {
    product: {
      title,
      price,
      image: { fixed },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <>
        <Link to="/products">Go back</Link>
        <ProductWrapper>
          <h1>{title}</h1>
          <div>
            <Img fixed={fixed} />
            <p>{info}</p>
          </div>
          <h3>{price} USD</h3>
          <Button style={{ margin: "0 0 1rem" }}>Add to cart</Button>
        </ProductWrapper>
      </>
    </Layout>
  )
}

export const query = graphql`
  query getProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 350) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default productTemplate
