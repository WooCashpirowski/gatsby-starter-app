import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/img3.jpg"
import Img from "gatsby-image"
import styled from "styled-components"

const ImgWrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 2rem auto 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const SingleImg = styled.article`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  width: 33%;
  padding: 1rem 0 0;
  margin: 1rem 0.2rem 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "img1.jpg" }) {
      childImageSharp {
        fixed(width: 300, grayscale: true) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    fluid: file(relativePath: { eq: "img2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <ImgWrapper>
      <SingleImg>
        <h3>basic image</h3>
        <img src={img} width="100%" alt="img1" />
      </SingleImg>
      <SingleImg>
        <h3>fixed image/blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} alt="img2" />
      </SingleImg>
      <SingleImg>
        <h3>fluid image/svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} alt="img3" />
      </SingleImg>
    </ImgWrapper>
  )
}

export default Images
