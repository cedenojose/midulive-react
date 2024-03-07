const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  // fetch(CAT_ENDPOINT_RANDOM_FACT)
  //   .then((response) => {
  //     if (!response.ok) {
  //       setFactError('No se ha podido recuperar la cita')
  //     }
  //     return response.json()
  //   })
  //   .then((data) => {
  //     const { fact } = data
  //     setFact(fact)
  //   })

  // Otra manera
  const resp = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await resp.json()
  const { fact } = data
  return fact
}
