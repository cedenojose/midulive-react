import './App.css'
import Image from './components/Image'
import useCatFact from './hooks/useCatFact'
import useCatImage from './hooks/useCatImage'

const App = () => {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main className='contenedor'>
      <h1>App de Gatitos</h1>
      <button type='button' onClick={handleClick}>Get new fact</button>
      {/* {factError && <p className='error'>Ups {factError}</p>} */}
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word of ${fact}`} />}
        <Image fact={fact} />
      </section>
    </main>
  )
}
export default App
