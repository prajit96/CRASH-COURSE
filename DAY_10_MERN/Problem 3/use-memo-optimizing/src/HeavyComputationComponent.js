import React, { useState, useMemo } from 'react';

const HeavyComputationComponent = ({ items, filterTerm }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [inputValue, setInputValue] = useState(filterTerm);

  useMemo(() => {
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [items, inputValue]);

  return (
    <div>
      <h2>Filtered Items</h2>
      <input
        type="text"
        placeholder="Filter Term"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeavyComputationComponent;
