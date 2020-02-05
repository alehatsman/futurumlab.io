import React from 'react'
import styled from '@emotion/styled'

import Layout from '@/components/layout'

import SEO from '@/components/seo'
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
  <Layout>
    <HomeWrapper>
      <SEO title="Home" />
      <Content>
        <Header />
        <LeadBlock />
      </Content>
      <Footer />
    </HomeWrapper>
  </Layout>
)

export default Home
