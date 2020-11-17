import React, { FC, ReactChild } from 'react'

import classNames from 'classnames'

import styles from './styles.module.scss'
interface Props {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3'
  children: ReactChild | string | ReactChild[]
  italic?: boolean
  color?: 'black' | 'white' | 'green'
  size?: 'titleL' | 'titleM' | 'titleS' | 'large'|
         'largeImportant' | 'medium' | 'mediumImportant' | 
         'small' | 'smallImportant'
  textAlign?: 'center' | 'left'
}

export const Text:FC<Props> = ({ children, as, italic, color, size, textAlign }) => {
  const Tag = as as keyof JSX.IntrinsicElements
  const classes = [
    italic && styles.italic,
    color && styles[color],
    size && styles[size],
    textAlign && styles[textAlign],
  ]

  return (
    <Tag className={classNames(styles.text, classes)}>
      {children}
    </Tag>
  )
}

Text.defaultProps = {
  as: 'p',
  color: 'black',
  textAlign: 'left',
  size: "medium",
}

export default Text
