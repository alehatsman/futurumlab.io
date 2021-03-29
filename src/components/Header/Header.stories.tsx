import styled from '@emotion/styled'

import { storiesOf } from '@storybook/react'

import Header from './Header'

const Wrapper = styled.div`
  width: 80vw;
`

storiesOf('Header', module)
  .add('default', () => (
    <Wrapper>
      <Header />
    </Wrapper>
  ))
