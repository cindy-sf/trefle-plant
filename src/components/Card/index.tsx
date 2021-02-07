import React from 'react'

import Text from '$src/components/Text'
import type { Plant } from '$src/types/plant'

import fallBackPicure from '$src/assets/images/search/plant-placeholder.jpg'

import styles from './styles.module.scss'

export const PlantCard:React.FC<{ plant: Plant }> = ({ plant }) => (
  <article>
    <article className={styles.plantCard}>
      <div className={styles.plantImage}>
        <img src={plant.image_url || fallBackPicure} alt={plant.common_name} />
      </div>
      <Text>{plant.common_name ||'Nom inconnu'}</Text>
      <Text>{plant.family}</Text>
    </article>
  </article>
)

export default PlantCard
