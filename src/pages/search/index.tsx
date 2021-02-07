import React, { useState, useEffect } from 'react'
import Router from "next/router";

import type { Plants } from '$src/types/plant'

import Input from '$src/components/Input'
import Layout from '$src/components/Layout'
import Loader from '$src/components/Loader'
import Text from '$src/components/Text'
import PlantCard from '$src/components/Card'
import NoResult from './components/NoResult'
import OnboardingIllu from '$src/assets/images/search/search-onboarding.png'

import styles from './styles.module.scss'

const Search = () => {
  const [query, setQuery] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')
  const [plants, setPlants] = useState<Plants>()

  const getQueryParam = (query: string) => {
    return new URLSearchParams(window.location.search).get(query)
  }
  
  const handleChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value)
  }
  
  const handleSubmit = ():void => {
    setQuery(inputValue) 

    Router.push({
      query: { q: inputValue },
    })
  }

  useEffect(() => {
    const runEffect = async () => {
      if (window.location.search || query) {
        const q = getQueryParam('q') || inputValue

        setQuery(q)
        setInputValue(q)
        setPlants(undefined)

        try {
          const response = await fetch(`/api/plants/search/${q}`)
          const plantsResult = await response.json()
          setPlants(plantsResult)
        } catch (error) {}
      }
    }

    runEffect()
  }, [query])

  return (
    <Layout title="Rechercher une plante">
      <div className={styles.inputSearch}>
        <Input
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={inputValue}
        />
      </div>
      {plants === undefined && !query && (
        <div className={styles.onboardingWrapper}>
          <div className={styles.onboardingIllu}>
            <Text textAlign="center">Effectuer une recherche ... </Text>
            <img src={OnboardingIllu} alt="Effectuer une recherche"/>
          </div>
        </div>
      )}
      {plants === undefined && query && (
        <Loader />
      )}
      {plants?.length === 0 && <NoResult />}
      {plants && plants.length !== 0 && (
        <>
          <div className={styles.plantCardWrapper}>
          <Text size="small">
            {plants.length} résultat{plants.length > 1 ? 's' : ''} pour « {' '} 
            <Text as="span" color="green" italic> {query}
            </Text> »
          </Text><br/>
            {plants.map(plant => <PlantCard key={plant.id} plant={plant} />)}
          </div>
        </>
      )}
    </Layout>
  )
}

export default Search
