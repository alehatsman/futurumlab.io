import styled from 'styled-components'

import { storiesOf } from '@storybook/react'

import LeadBlock from './LeadBlock'

const Wrapper = styled.div`
  width: 80vw;
`

storiesOf('LeadBlock', module)
  .add('default', () => (
    <Wrapper>
      <LeadBlock />
    </Wrapper>
  ))
