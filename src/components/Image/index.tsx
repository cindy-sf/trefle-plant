import React from 'react'

interface Props {
  src: string
  alt: string
}

export const Image:React.FC<Props> = ({ src, alt }) => {
  let imgUrl = src

  const getImageExtension = (urlSrc: Props['src']) => {
    const fileExtension = urlSrc.replace(/^.*[\\\/]/, '')
    return fileExtension.split('.').pop()
  }

  const extension = getImageExtension(src)

  if (extension !== 'jpg') {
    imgUrl = src + '.jpg'
  }

  return <img src={imgUrl} alt={alt} />
}

export default Image
