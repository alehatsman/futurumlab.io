import socialIcons from './SocialIcons'

import styled from 'styled-components'

const Wrapper = styled.nav`
  margin-top: 40px;
`

const Item = styled.a`
  &:not(:first-child) {
    margin-left: 10px;
  }
`

const SocialIcons = () => (
  <Wrapper>
    {
      Object.keys(socialIcons).map(key => {
        const Icon = socialIcons[key]
        return (
          <Item key={key}>
            <Icon />
          </Item>
        )
      })
    }
  </Wrapper>
)

export default SocialIcons
