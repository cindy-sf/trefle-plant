import React from 'react'

interface Props {
  src: string
  alt: string
}

export const Image:React.FC<Props> = ({ src, alt }) => {
  return <img src={src} alt={alt} />
}

export default Image
