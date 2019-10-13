import styled from 'styled-components'

import Button from '@/components/Button'

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px 0 20px;
  
  background: #000;

  ${Button} {
    margin-top: 25px;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 4.8rem;
  font-weight: bold;
  color: #fff;
`

export const Description = styled.div`
  margin-top: 25px;
  font-weight: 300;
  font-size: 2rem;
  color: #fff;
  line-height: 1.5;
  width: 600px;
`

export const Copyright = styled.div`
  margin-top: 25px;
  color: #fff;
  font-size: 1.4rem;
`

export const Bold = styled.span`
  font-weight: bold;
`
