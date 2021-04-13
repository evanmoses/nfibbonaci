import React, { useState, useEffect } from 'react';

import Title from './components/Title.js';
import NumberInput from './components/NumberInput.js';

import sequence from './lib/sequence.js';

function App() {
  const [numOfValues, setNumOfValues] = useState(10);

  const handleNumChange = (e) => {
    setNumOfValues(e.target.value);
  };
  // <h1>{sequence.map((x, index) => <div key={index}>{x}</div>)}</h1>
  return (
    <>
      <Title />
      <NumberInput
        numOfValues={numOfValues}
        handleNumChange={handleNumChange}
      />
    </>
  );
}

export default App;
