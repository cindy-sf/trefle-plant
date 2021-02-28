import React from 'react'

import styles from './styles.module.scss'

interface Props {
  value: string
  onSubmit: () => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input:React.FC<Props> = ({ value, onSubmit, onChange }) => {
  const handleKeyPress = (event: React.KeyboardEvent) =>{
    if (value && event.key == 'Enter' ) onSubmit()
    if (!/[a-zA-Z\s]+/g.test(event.key)) event.preventDefault()
  }

  const handleSubmit = () => {
    if (!!value.trim()) onSubmit()
  }

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="Rechercher une plante..."
        className={styles.input}
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button className={styles.searchBtn} onClick={handleSubmit}>&#8594;</button>
    </div>
  )
}

export default Input
