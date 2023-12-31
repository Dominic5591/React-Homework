import { useState } from 'react';
import './UseState.css';
const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);


  const toggleTheme = () => {
    const toggled = theme === 'light' ? 'dark' : 'light';
    setTheme(toggled);
  };

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h2>{count}</h2>
      <button onClick={() => {
        setCount((prevCount) => prevCount + 1);
      }}
      >
        Increment
      </button>
      <button onClick={() => {
        setCount((prevCount) => prevCount - 1);
      }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;
