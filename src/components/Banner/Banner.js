import React from 'react'

function Banner({ answer, guesses }) {
  return guesses.at(-1) === answer ? (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {guesses.length > 1 ? `${guesses.length} guesses` : '1 guess'}
        </strong>
        .
      </p>
    </div>
  ) : (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  )
}

export default Banner
