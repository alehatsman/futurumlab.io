import styled from '@emotion/styled'

import Button from '@/components/Button'

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px 0 20px;
  
  background: #000;

  ${Button} {
    margin-top: 64px;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 4.8rem;
  font-weight: bold;
  color: #fff;
`

export const Description = styled.p`
  margin-buttom: 0;
  margin-top: 25px;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  color: #fff;
  line-height: 1.5;
  width: 38%;
`

export const Copyright = styled.div`
  margin-top: 23px;
  color: #fff;
  font-size: 1.4rem;
`

export const Bold = styled.span`
  font-weight: bold;
`
