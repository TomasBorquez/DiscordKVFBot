function piroca (param2) {
  const randomDick = `8${"=".repeat(Math.floor(Math.random() * 20))}D`
  if (param2) return (`la pija de ${param2} mide: ${randomDick}`)
  else return (`tu pichulita mide: ${randomDick}`)
}

export default piroca