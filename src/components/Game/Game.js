import Banner from '../Banner'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'
import React from 'react'
import { WORDS } from '../../data'
import { sample } from '../../utils'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const canAttempt =
    guesses.at(-1) !== answer && guesses.length < NUM_OF_GUESSES_ALLOWED

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {canAttempt ? (
        <GuessInput onGuess={addGuess} />
      ) : (
        <Banner answer={answer} guesses={guesses} />
      )}
    </>
  )

  function addGuess(guess) {
    setGuesses([...guesses, guess])
  }
}

export default Game
