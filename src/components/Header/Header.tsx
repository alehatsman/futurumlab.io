import React, { FC } from 'react'
import styled from '@emotion/styled'

import {
  HeaderWrapper,
  LogoWrapper,
  LogoText,
  NavWrapper,
  NavItem
} from './Header.styled'
import Logo from './Logo'

const Header: FC = () => (
  <HeaderWrapper>
    <LogoWrapper>
      <Logo />
      <LogoText>futurum lab</LogoText>
    </LogoWrapper>
    <NavWrapper>
      <NavItem active>About</NavItem>
      <NavItem>Articles</NavItem>
      <NavItem>Meetups</NavItem>
      <NavItem>Courses</NavItem>
    </NavWrapper>
  </HeaderWrapper>
)

export default styled(Header)``
