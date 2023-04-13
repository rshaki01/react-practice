import {useState} from 'react';
import './App.css';
import FlashcardForm from './components/FlashcardForm';

function App() {

  const [questions, setQuestions] = useState([
    'What do you know about D2L?',
    'Why do you want to work for D2L?',
  ]);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  }

  const numQuestions = questions.length;

  return (
    <div className="App">
      <FlashcardForm onAddQuestion={addQuestion}/>
      {numQuestions}
    </div>
  );
}

export default App;
