import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = styled.ul`
  display: flex;
  list-style: none;
  font-family: sans-serif;
  text-align: center;
  justify-content: space-around;
  li {
    transition: all 0.1s ease-in;
    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
    &:hover {
      transform: translateX(2px);
      a {
        color: #666;
      }
    }
  }
`

const Navbar = () => {
  return (
    <nav>
      <Navigation>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/examples">Examples</Link>
        </li>
        <li>
          <Link to="/images">Images</Link>
        </li>
        <li>
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
            Gatsby Docs
          </a>
        </li>
      </Navigation>
    </nav>
  )
}

export default Navbar
