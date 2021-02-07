import React, { ReactNode } from 'react'
import Router from 'next/router'

import Head from 'next/head'
import DotMenu from '$src/assets/images/home/dots-menu.png'

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
        <span></span>
        <p
          className={styles.brandTitle}
        onClick={() => Router.push('/')}
        >
          Trefle Plant
        </p>
        <button className={styles.dotMenu}>
          <img src={DotMenu} alt="menu" />
        </button>
      </nav>
    </header>
    {children}
  </div>
)

export default Layout
