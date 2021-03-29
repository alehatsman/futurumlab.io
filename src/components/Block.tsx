import React, { FC } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.article`
  display: block;
`

const Separator = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 158px;
`

const Header = styled.header`
  margin-top: 30px;
  position: relative;
`

const HeaderText = styled.h4`
  margin: 0;
  left: 15px;
  font-style: normal;
  font-weight: 900;
  font-size: 65px;
  position: relative;
  background: linear-gradient(90deg ,#F1D63F 63%,#fff 50%);
`

const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

interface BlockProps {
  header: string
}

const Block: FC<BlockProps> = ({ children, header }) => {
  return (
    <Wrapper>
      <Separator>
        <svg width='230' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'><path stroke='#000' stroke-width='2' stroke-dasharray='10 10' d='M0 1h230' /></svg>
      </Separator>
      <Content>
        <Header>
          <HeaderText>
            {header}
          </HeaderText>
        </Header>
        {children}
      </Content>
    </Wrapper>
  )
}

export default Block
