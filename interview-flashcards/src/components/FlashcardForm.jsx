import React, {useState} from 'react'

const FlashcardForm = ({onAddQuestion}) => {

  const [question, setQuestion] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddQuestion(question);
  }

  return (
      <form className="flashcard-form" onSubmit={handleSubmit}>
                <label className="block mb-2 text-slate-400">Please enter your question</label>
                <input className="questionInput" type="text"
                value={question} onChange={(e) => setQuestion(e.target.value)}/>
      </form>
  )
}

export default FlashcardForm
