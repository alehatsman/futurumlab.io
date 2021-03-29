import React, { FC } from 'react'
import { Global } from '@emotion/react'
import { globalStyles } from '@/styles/globals'
import '@/styles/font_faces.css'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      {children}
    </>
  )
}

export default Layout
