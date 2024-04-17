import React, { useState } from 'react';
import HeavyComputationComponent from './HeavyComputationComponent';

const App = () => {
  const [filterTerm ] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

  return (
    <div className="App">
      <HeavyComputationComponent items={items} filterTerm={filterTerm} />
    </div>
  );
};

export default App;
