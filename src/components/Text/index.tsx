import React, { FC, ReactChild } from 'react'

import classNames from 'classnames'

import styles from './styles.module.scss'
interface Props {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3'
  children: ReactChild | string | ReactChild[]
  italic?: boolean
  color?: 'black' | 'white' | 'green' | 'darkGrey'
  size?: 'titleL' | 'titleM' | 'titleS' | 'large'|
         'largeImportant' | 'medium' | 'mediumImportant' | 
         'small' | 'smallImportant'
  textAlign?: 'center' | 'left'
  mt?: 'mtSmall'
  mb?: 'mtSmall'
}

export const Text:FC<Props> = ({ children, as, italic, color, size, textAlign, mt, mb }) => {
  const Tag = as as keyof JSX.IntrinsicElements
  const classes = [
    italic && styles.italic,
    color && styles[color],
    size && styles[size],
    textAlign && styles[textAlign],
    mt && styles.mtSmall,
    mb && styles.mbSmall,
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
