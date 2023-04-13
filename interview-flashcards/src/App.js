import {useState} from 'react';
import './App.css';
import FlashcardForm from './components/FlashcardForm';

function App() {

  const [questions, setQuestions] = useState([
    'What do you know about D2L?',
    'Why do you want to work for D2L?',
  ]);

  return (
    <div className="App">
      <FlashcardForm questions={questions}/>
      {questions[1]}
    </div>
  );
}

export default App;
