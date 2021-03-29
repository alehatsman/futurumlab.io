import React, { FC } from 'react'
import styled from '@emotion/styled'

import { ButtonWrapper } from './Button.styled'

interface Props {
  label: string
  onClick?: () => void
  className?: string
}

const Button: FC<Props> = ({ label, onClick, className }) => (
  <ButtonWrapper className={className} onClick={onClick}>
    {label}
  </ButtonWrapper>
)

export default styled(Button)``
