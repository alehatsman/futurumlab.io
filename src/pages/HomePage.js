import React from 'react'

import styled from 'styled-components'

import Header from '@/components/Header'
import LeadBlock from '@/components/LeadBlock'
import Content from '@/components/Content'

const HomeWrapper = styled.div`
  ${LeadBlock} {
    margin-top: 100px;
  }
`

const Home = () => (
  <HomeWrapper>
    <Content>
      <Header />
      <LeadBlock />
    </Content>
  </HomeWrapper>
)

export default Home
