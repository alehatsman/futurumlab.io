import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Router from 'next/router'
import withGA from 'next-ga'

import { GlobalStyle } from '@/styles/global'

const GA_ID = ''

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
      }
    }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <>
          <GlobalStyle />
          <Head>
            <title>Aleh Atsman - Personal Blog</title>
          </Head>
          <Component {...pageProps} />
        </>
      </Container>
    )
  }
}

export default withGA(GA_ID, Router)(MyApp)
