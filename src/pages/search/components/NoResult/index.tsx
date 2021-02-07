import React from 'react'

import Text from '$src/components/Text'

import Illustration from '$src/assets/images/search/no-result.png'

import styles from './styles.module.scss'

export const NoResult:React.FC = () => (
  <>
    <Text
      textAlign="center"
      size="largeImportant"
    >
      Désolé, aucun résultat <br/> trouvé...
    </Text>
    <Text
      textAlign="center"
      color="darkGrey"
      mt="mtSmall"
    >
      Veuillez effectuer une nouvelle recherche.
    </Text>
    <div className={styles.illustration}>
      <img src={Illustration} alt="Aucun résultat"/>
    </div>
  </>
)

export default NoResult
