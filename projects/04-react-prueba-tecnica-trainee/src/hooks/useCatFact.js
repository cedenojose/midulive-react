import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/fact'

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshRandomFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }

  // Recuperar la cita al cargar la pagina
  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact))
  }, [])

  return { fact, refreshRandomFact }
}

export default useCatFact
