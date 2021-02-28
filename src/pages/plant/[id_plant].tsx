import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import type { Plant, Image } from '$src/types/plant'

import FallbackImage from '$src/assets/images/search/plant-placeholder.jpg'
import Loader from '$src/components/Loader'
import Layout from '$src/components/Layout'
import Text from '$src/components/Text'
import Img from '$src/components/Image'

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
        const plantResult:Plant = await response.json()
        // console.log(plantResult.main_species.images['flower'])
        setPlant({
          ...plantResult,
          main_species: {
            id: 123,
            images: {
              flower: [
                {
                  copyright: '',
                  id: 1,
                  image_url: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGVhZnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
                },
                {
                  copyright: '',
                  id: 1,
                  image_url: 'https://images.unsplash.com/photo-1550147760-44c9966d6bc7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                },
                {
                  copyright: '',
                  id: 1,
                  image_url: 'https://images.unsplash.com/photo-1533037440921-f788628f8d0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                },
                {
                  copyright: '',
                  id: 1,
                  image_url: 'https://images.unsplash.com/photo-1587411320692-d6a3504f38ca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bGVhZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                },
              ]
            },
          }
        })
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
      <>
        <div className={styles.plantWrapper}>
          <div className={styles.image}>
            <Img
              src={plant.image_url || FallbackImage}
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
              {plant.common_name || 'Nom inconnu'}
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
        <div>
          <Text
            fontFamily="playfairDisplay"
            as="h3"
            size="large"
          >
            Images
          </Text>
          <div className={styles.fondoWrapper}>
            <div className={styles.fondo}> 
              <div data-sr-id="0"></div>
              <div data-sr-id="2"></div>
              <div data-sr-id="3"></div>
              <div data-sr-id="4"></div>
              <div data-sr-id="5"></div>
              <div data-sr-id="6"></div>
              <div data-sr-id="7"></div>
            </div>
            {/* {Object.keys(plant.main_species.images['flower']).map((elem) => {
              <p>{elem}</p>
            })} */}
            {Object.entries(plant.main_species.images['flower']).map(([key, image]) => (
              <div className={styles.imgWrapper}>
                <Img key={image.id} src={image.image_url} alt="" />
              </div>
            ))}
          </div>
        </div>
      </>
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
