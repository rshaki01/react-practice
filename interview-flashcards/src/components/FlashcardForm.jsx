import React, {useState} from 'react'

const FlashcardForm = () => {

  const handleSubmit = () => {

  }

  return (
      <form className="flashcard-form" onSubmit={handleSubmit}>
                <label className="block mb-2 text-slate-400">Please enter your question</label>
                <input className="questionInput" type="text"/>
      </form>
  )
}

export default FlashcardForm
