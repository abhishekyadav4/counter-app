

import './App.css';
import Button from './components/Button/Button';
import Counter from './components/Counter/Count';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);


  const increment = () => {
    setNum(num + 1)
  }
  const decrement = () => {
    if (num > 0) {
      setNum(num - 1)
    }
    else {
      setNum(0)
    }


  }
  const reset = () => {
    setNum(0)

  }


  return (
    <div className="App">

      <Counter result={num} />
      <Button increment={increment} decrement={decrement} reset={reset} />

    </div>
  );
}

export default App;
