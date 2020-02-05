import React from 'react'
import styled from '@emotion/styled'

import Button from '@/components/Button'

import {
  FooterWrapper,
  Title,
  Description,
  Copyright,
  Bold
} from './Footer.styled'

import Social from './Social'

const Footer = () => (
  <FooterWrapper>
    <Title>{"Let's work together"}</Title>
    <Description>
      {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown`}
    </Description>
    <Button label="Contact Us" />
    <Social />
    <Copyright>
      2019 All rights reserved. - <Bold>Futurum Lab</Bold>
    </Copyright>
  </FooterWrapper>
)

export default styled(Footer)``
