import { useEffect, useState } from 'react'

const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()

  // Recuperar la Imagen cada vez que hay una cita nueva
  useEffect(() => {
    if (!fact) {
      return
    }
    // const firstWord = fact.split(' ')[0]

    // primeras 3 palabras
    const threeFirstWord = fact.split(' ').slice(0, 3).join(' ')
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`
    setImageUrl(CAT_ENDPOINT_IMAGE_URL)

    // setImageUrl(CAT_ENDPOINT_IMAGE_URL)
    // fetch(CAT_ENDPOINT_IMAGE_URL)
    //   .then((resp) => resp.json())
    //   .then((datas) => {
    //     setImageUrl(CAT_ENDPOINT_IMAGE_URL)
    //   })
  }, [fact])

  return { imageUrl }
} // Devuelve {imageUrl: 'https://cataas....'}

export default useCatImage
