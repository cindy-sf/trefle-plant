import React, { useState } from 'react'

interface Props {
  src: string
  alt: string
}

export const Image:React.FC<Props> = ({ src, alt }) => {
  const [shouldRenderImage, setShouldRenderImage] = useState(true)

  if (!shouldRenderImage) return null

  return <img src={src} alt={alt} onError={() => setShouldRenderImage(false)} />
}

export default Image
