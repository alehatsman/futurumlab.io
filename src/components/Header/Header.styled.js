import styled from 'styled-components'

import colors from '@/styles/colors'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LogoText = styled.span`
  margin-left: 15px;
  padding-left: 10px;
  font-size: 3.2rem;
  font-weight: bold;
  color: ${colors.font};
  background: linear-gradient(90deg, ${colors.yellow} 50%, #fff 50%);
`

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
`

export const NavItem = styled.a`
  position: relative;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 30px;
  }

  ${({ active }) => active && `
    &::after {
      content:"";
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 0.5em;
      border-bottom: 3px solid ${colors.yellow};
    }  
  `}
`
