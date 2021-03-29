import React, { FC } from 'react'
import styled from '@emotion/styled'

import Layout from '@/components/layout'

import Seo from '@/components/seo'
import Header from '@/components/Header'
import LeadBlock from '@/components/LeadBlock'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import PointsBlock from '@/components/PointsBlock'
import OurTeamBlock from '@/components/OurTeamBlock'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;

  ${Header} {
    margin-top: 30%;
  }

  ${LeadBlock} {
    margin-top: 100px;
  }

  ${Footer} {
    margin-top: 147px;
    bottom: 0;
  }
`

const Home: FC = () => (
  <Layout>
    <HomeWrapper>
      <Seo title='Home' />
      <Content>
        <Header />
        <LeadBlock />
        <PointsBlock />
        <OurTeamBlock />
      </Content>
      <Footer />
    </HomeWrapper>
  </Layout>
)

export default Home
