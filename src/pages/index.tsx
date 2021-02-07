import { useState } from 'react'
import Router from "next/router";

import GirlWithPlant from '$src/assets/images/home/girl-with-plant.png'
import Text from '../components/Text'
import Input from '../components/Input'
import Layout from '../components/Layout'

import styles from './styles.module.scss'

const IndexPage = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleRedirectToSearch = () => {
    Router.push({
      pathname: '/search',
      query: { q: searchValue },
    })
  }

  const handleChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value)
  }

  return (
    <Layout title="Trefle Plant">
      <div className={styles.wrapper}>
        <div className={styles.illustration}>
          <img src={GirlWithPlant} alt="Trefle plant" />
        </div>
       <div className={styles.content}>
          <div style={{ marginBottom: '1rem' }}>
            <Text as="h1" size="titleL">
              Trefle Plant
            </Text>
          </div>
          <Text size="medium">
            Parcourrez une liste de plantes basé 
            sur la base de données de {' '}
            <a className={styles.link} title="Trefle.io" href="https://trefle.io/" target="_blank">
              <Text
                color="green"
                size="medium"
                as="span"
              >
                Trefle.io
              </Text>
            </a>
          </Text>
          <div>
            <Input
              value={searchValue}
              onChange={handleChange}
              onSubmit={handleRedirectToSearch}
            />
          </div>
       </div>
      </div>
    </Layout>
  )
}

export default IndexPage
