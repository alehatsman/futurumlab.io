import React, { FC } from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

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
          <StaticImage src='../../images/png/preview-1.png' alt='Preview' />
        </Image>
        <Image>
          <StaticImage src='../../images/png/preview-2.png' alt='Preview' />
        </Image>
        <Image>
          <StaticImage src='../../images/png/preview-3.png' alt='Preview' />
        </Image>
      </Images>
    </LeadBlockWrapper>
  )
}

export default styled(LeadBlock)``
