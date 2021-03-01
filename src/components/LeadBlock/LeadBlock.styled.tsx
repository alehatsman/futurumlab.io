import styled from '@emotion/styled'

export const LeadBlockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Preview = styled.div``

export const Image = styled.div`
  position: absolute;

  &:nth-child(1) {
    top: 0;
    left: 140px;
    width: 328px;
  }

  &:nth-child(2) {
    top: 90px;
    width: 300px;
  }

  &:nth-child(3) {
    top: 250px;
    left: 150px;
    width: 254px;
  }
`

export const Images = styled.div`
  position: relative;
  width: 466px;
  height: 427px;
  margin-left: 57px;
`

export const Header = styled.h4`
  margin: 0;
  font-size: 7.2rem;
  font-weight: bold;
`

export const SubHeader = styled.h6`
  margin: 0;
  margin-top: 8px;
  font-size: 3.2rem;
  font-weight: normal;
`

export const Description = styled.p`
  margin: 16px 0 0 4px;
  font-size: 2rem;
  color: #666;
  font-weight: 300;
  line-height: 3.2rem;
  width: 687px;
`

export const Button = styled.a`
  display: inline-block;
  margin-top: 47px;
  border: 0;
  cursor: pointer;
  padding: 17px 87px;
  font-weight: 900;
  font-size: 24px;
  background-color: #f1d63f;

  &:hover {
    background-color: #ffe86b;
    transition: background-color 800ms linear;
  }
`
