import React, { FC } from 'react'
import socialIcons from './SocialIcons'

import styled from '@emotion/styled'

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  width: 264px;
  margin-top: 78px;
`

const Item = styled.a`
  &:not(:first-child) {
    margin-left: 10px;
  }
`

const SocialIcons: FC = () => (
  <Wrapper>
    {
      (Object.keys(socialIcons) as Array<keyof typeof socialIcons>).map(key => {
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
