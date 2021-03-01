import styled from '@emotion/styled'
import colors from '@/styles/colors'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 52px 50px 0 50px;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LogoText = styled.span`
  margin-left: 15px;
  padding-left: 10px;
  font-size: 3.2rem;
  font-weight: 800;
  color: ${colors.font};
  background: linear-gradient(90deg, ${colors.yellow} 63%, #fff 50%);
  line-height: 47px;
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

  ${({ active }: { active?: boolean }) =>
    active &&
    `
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
