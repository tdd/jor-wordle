import React from 'react'

function GuessInput({ onGuess }) {
  const [guess, setGuess] = React.useState('')

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        onChange={(e) => setGuess(formatGuess(e.target.value))}
        pattern='[A-Z]{5}'
        required
        type='text'
        value={guess}
      />
    </form>
  )

  function handleSubmit(e) {
    e.preventDefault()
    onGuess(guess)
    setGuess('')
  }
}

function formatGuess(text) {
  return text
    .toUpperCase()
    .replace(/[^A-Z]+/g, '')
    .slice(0, 5)
}

export default GuessInput
