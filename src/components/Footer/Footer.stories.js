import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Footer from './Footer'

const Wrapper = styled.div`
  width: 80vw;
`

storiesOf('Footer', module)
  .add('default', () => (
    <Wrapper>
      <Footer />
    </Wrapper>
  ))
