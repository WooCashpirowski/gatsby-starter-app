import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProductsWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 3rem;
  font-family: sans-serif;
  article {
    width: 300px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    margin: 1rem;
    text-align: center;
    padding: 0.5rem;
    transition: all 0.2s ease-in;
    &:hover {
      transform: scale(1.05);
      box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.2);
    }
    span {
      margin-left: 2rem;
      color: #666;
    }
    a {
      color: black;
      text-decoration: none;
    }
  }
`

const Products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <ProductsWrapper>
        {products.map(product => (
          <article key={product.id}>
            <Img fluid={product.image.fluid} alt={product.title} />
            <h3>
              {product.title} <span>{product.price} USD</span>
            </h3>
            <Link to={`/products/${product.slug}`}>More details</Link>
          </article>
        ))}
      </ProductsWrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        title
        slug
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Products
