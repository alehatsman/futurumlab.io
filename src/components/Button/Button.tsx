import React from 'react'
import styled from '@emotion/styled'

import { ButtonWrapper } from './Button.styled'

interface Props {
  label: string
  onClick?: () => void
  className?: string
}

const Button = ({ label, onClick, className }: Props) => (
  <ButtonWrapper className={className} onClick={onClick}>
    {label}
  </ButtonWrapper>
)

export default styled(Button)``
