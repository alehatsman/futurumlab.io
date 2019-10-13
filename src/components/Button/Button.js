import styled from 'styled-components'

import { ButtonWrapper } from './Button.styled'

const Button = ({ label, onClick, className }) => (
  <ButtonWrapper className={className} onClick={onClick}>
    {label}
  </ButtonWrapper>
)

export default styled(Button)``
