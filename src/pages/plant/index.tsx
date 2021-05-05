import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import Layout from '$src/components/Layout'
import Text from '$src/components/Text'
import Img from '$src/components/Image'

import InfosImage from '$src/assets/images/infos.png'

import { plant } from '../../stubs'

import styles from './styles.module.scss'

export const PlantInfo:React.FC = () => {
  return (
    <Layout title="Trefle plant">
      <div className={styles.plantWrapper}>
        <div className={styles.image}>
          <Img
            src={plant.image_url}
            alt={plant.common_name}
          />
        </div>
        <div className={styles.plantNameWrapper}>
          <Text
            as="h1"
            fontFamily="playfairDisplay"
            textAlign="center"
            size="titleS"
          >
            {plant.common_name}
          </Text>
        </div>
        <Text
          color="green"
          size="x-small"
          italic
        >
          {plant.scientific_name}
        </Text>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <Text
          fontFamily="playfairDisplay"
          as="h3"
          size="large"
        >
          Images
        </Text>
        <div className={styles.imagesWrapper}>
          {plant.main_species && Object.entries(plant.main_species.images['flower']).map(([key, image]) => (
            <ParallaxProvider key={key}>
              <Parallax y={[20, -20]} className={styles.imgWrapper}>
                <Img src={image.image_url} alt={key} />
                <Text italic size="x-small" mt="mtSmall" color="darkGrey">{image.copyright}</Text>
              </Parallax>
            </ParallaxProvider>
          ))}
        </div>
        <div className={styles.infosWrapper}>
          <div className={styles.img}>
            <Img src={InfosImage} alt="" />
          </div>
          <h2>Where find a Cactus ?</h2>
        </div>
      </div>
    </Layout>
  )
}

export default PlantInfo
