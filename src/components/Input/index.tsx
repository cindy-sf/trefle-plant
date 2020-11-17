import React from 'react'

import styles from './styles.module.scss'

interface Props {
  value: string
  onSubmit: () => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input:React.FC<Props> = ({ value, onSubmit, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="Rechercher une plante..."
        className={styles.input}
        value={value}
        onChange={onChange}
      />
      <button className={styles.searchBtn} onClick={onSubmit}>&#8594;</button>
    </div>
  )
}

export default Input
