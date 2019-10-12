import * as React from 'react'

import { HeaderWrapper, LogoWrapper, LogoText, NavWrapper, NavItem } from './Header.styled'
import Logo from './Logo'

const Header = () => (
  <HeaderWrapper>
    <LogoWrapper>
      <Logo />
      <LogoText>futurum lab</LogoText>
    </LogoWrapper>
    <NavWrapper>
      <NavItem active>About</NavItem>
      <NavItem>Blog</NavItem>
      <NavItem>Meetups</NavItem>
      <NavItem>Workshops</NavItem>
      <NavItem>Courses</NavItem>
    </NavWrapper>
  </HeaderWrapper>
)

export default Header
