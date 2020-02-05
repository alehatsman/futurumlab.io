import styled from 'styled-components'

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
