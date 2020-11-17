import { useState } from 'react'

import Layout from '../components/Layout'

import GirlWithPlant from '$src/assets/images/home/girl-with-plant.png'
import Text from '../components/Text'
import Input from '../components/Input'

import styles from './styles.module.scss'

const IndexPage = () => {
  const [searchValue, setSearchValue] = useState('Aloe Vera')
  const [plants, setPlants] = useState(null)

  const handleSubmit = async (search: string):Promise<void> => {
    console.log('coucou')
    // const url = `https://trefle.io/api/v1/plants/search?q=${search}&token=wSkc_R6AF0mUZ34uVC22fOoxu7BNjQ2Zl1MhTrmRFRg`

    const url = `/v1/plants/search?q=${search}&token=wSkc_R6AF0mUZ34uVC22fOoxu7BNjQ2Zl1MhTrmRFRg`
    const response = await fetch(url,
      {
        headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
    const plantsResult = await response.json()
    
    console.log('--response ===', response)
    console.log('--plantsResult ===', plantsResult)

    setPlants(plantsResult)

    console.log('plante state -->', plants)
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
          <div style={{marginBottom: '1rem'}}>
            <Text as="h1" size="titleL">
              Trefle Plant
            </Text>
          </div>
          <Text size="medium">
            Parcourrez une liste de plantes basé 
            sur la base <br className={styles.br} /> de données de {' '}
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
              onSubmit={() => handleSubmit(searchValue)}
            />
          </div>
       </div>
      </div>
    </Layout>
  )
}

export default IndexPage
