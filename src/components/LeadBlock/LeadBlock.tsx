import React, { FC } from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  LeadBlockWrapper,
  Preview,
  Images,
  Image,
  Header,
  SubHeader,
  Description,
  Button
} from './LeadBlock.styled'

const LeadBlock: FC<{ className?: string }> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "png/preview-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 328) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "png/preview-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "png/preview-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 254) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LeadBlockWrapper className={className}>
      <Preview>
        <Header>Software Company</Header>
        <SubHeader>We build amazing products.</SubHeader>
        <Description>
          Quick and efficient product development using modern technologies and best practices.
        </Description>
        <Button>Contact Us</Button>
      </Preview>
      <Images>
        <Image>
          <Img fluid={data.image1.childImageSharp.fluid} />
        </Image>
        <Image>
          <Img fluid={data.image2.childImageSharp.fluid} />
        </Image>
        <Image>
          <Img fluid={data.image3.childImageSharp.fluid} />
        </Image>
      </Images>
    </LeadBlockWrapper>
  )
}

export default styled(LeadBlock)``
