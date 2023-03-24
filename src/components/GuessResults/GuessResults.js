import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'
import React from 'react'
import { range } from '../../utils.js'

function GuessResults({ answer, guesses }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} answer={answer} value={guesses[index]} />
      ))}
    </div>
  )
}

export default GuessResults
