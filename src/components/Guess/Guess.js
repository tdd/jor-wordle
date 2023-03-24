import React from 'react'
import { checkGuess } from '../../game-helpers.js'
import { range } from '../../utils.js'

function Guess({ answer, value }) {
  const results = value
    ? checkGuess(value, answer)
    : range(5).map(() => ({ letter: ' ' }))

  return (
    <p className='guess'>
      {results.map(({ letter, status }, index) => (
        <span key={index} className={status ? `cell ${status}` : 'cell'}>
          {letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
