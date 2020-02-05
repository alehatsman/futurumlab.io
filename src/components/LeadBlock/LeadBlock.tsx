import React from 'react'
import styled from '@emotion/styled'

import { LeadBlockWrapper, Title, Description } from './LeadBlock.styled'

import Button from '@/components/Button'

const LeadBlock = ({ className }: { className?: string }) => (
  <LeadBlockWrapper className={className}>
    <Title>
      Software Consultancy
    </Title>
    <Description>
      {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.`}
    </Description>
    <Button label='Contact Us' />
  </LeadBlockWrapper>
)

export default styled(LeadBlock)``
