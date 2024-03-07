import useCatImage from '../hooks/useCatImage'

const Image = ({ fact }) => {
  const { imageUrl } = useCatImage({ fact })
  console.log('imageUrl', imageUrl)
  return (
    <>
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word of ${fact}`} />}
    </>
  )
}
export default Image
