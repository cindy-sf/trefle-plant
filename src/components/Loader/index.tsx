import React from 'react'

import Illustration from '$src/assets/images/gif/loader2.gif'

import styles from "./styles.module.scss"

export const Loader = () => (
  <div className={styles.loader}>
    <img
      src={Illustration} alt="Chargement ..."
    />
  </div>
)

export default Loader
