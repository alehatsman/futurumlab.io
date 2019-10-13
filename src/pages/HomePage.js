import React from 'react'

import styled from 'styled-components'

import Header from '@/components/Header'
import LeadBlock from '@/components/LeadBlock'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;

  ${LeadBlock} {
    margin-top: 100px;
  }

  ${Footer} {
    bottom: 0;
  }
`

const Home = () => (
  <HomeWrapper>
    <Content>
      <Header />
      <LeadBlock />
    </Content>
    <Footer />
  </HomeWrapper>
)

export default Home
