import {useState} from 'react';
import './App.css';
import FlashcardForm from './components/FlashcardForm';

function App() {

  const [questions, setQuestions] = useState([
    'What do you know about D2L?',
    'Why do you want to work for D2L?',
  ]);
  const [index, setIndex] = useState(0)

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  }


  const handleNextQuestion = () => {
    const numQuestions = questions.length;
    setIndex(Math.floor(Math.random() * numQuestions));
  }


  return (
    <div className="App">
      <FlashcardForm onAddQuestion={addQuestion}/>
      <button onClick={handleNextQuestion}>Next question</button>
      {questions[index]}
    </div>
  );
}

export default App;
