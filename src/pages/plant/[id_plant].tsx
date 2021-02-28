import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import type { Plant } from '$src/types/plant'

import FallbackImage from '$src/assets/images/search/plant-placeholder.jpg'
import Loader from '$src/components/Loader'
import Layout from '$src/components/Layout'
import Text from '$src/components/Text'
import Image from '$src/components/Image'

import styles from './styles.module.scss'

export const PlantInfo:React.FC = () => {
  const router = useRouter()
  const { id_plant } = router.query

  const [plant, setPlant] = useState<Plant>()
  const [isFetchingData, seIsFetchingData] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const response = await fetch(`/api/plants/details/${id_plant}`)
        const plantResult = await response.json()
        setPlant(plantResult)
      } catch (error) {
        setError(true)
      }
      finally {
        seIsFetchingData(false)
      }
    }

    fetchPlant()
  }, [id_plant])

  const renderError = () => {
    if (error) return <p>@todo, pas de plante</p>
  }

  const renderLoader = () => {
    if (isFetchingData) return <Loader />
  }

  const renderPlantDetail = () => {
    if (plant) return (
      <div className={styles.plantWrapper}>
        <div className={styles.image}>
          <Image
            src={plant.image_url || FallbackImage}
            alt={plant.common_name}
          />
        </div>
        <div className={styles.plantNameWrapper}>
          <Text
            as="h1"
            fontFamily="playfairDisplay"
            textAlign="center"
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
    )
  }

  return (
    <Layout title={`Trefle plant | ${plant?.common_name || ''}`}>
      {renderLoader()}
      {renderError()}
      {renderPlantDetail()}
    </Layout>
  )
}

export default PlantInfo
