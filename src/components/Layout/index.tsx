import React, { ReactNode } from 'react'
import Router from 'next/router'

import Head from 'next/head'

import styles from './styles.module.scss'

interface Props {
  children?: ReactNode
  title?: string
}

const Layout:React.FC<Props> = ({ children, title = 'Trefle Plant' }) => (
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <nav className={styles.nav}>
        <p
          className={styles.brandTitle}
          onClick={() => Router.push('/')}
        >
          Trefle Plant
        </p>
      </nav>
    </header>
    {children}
  </div>
)

export default Layout
