import { useState, useEffect, use } from 'react';

function Counter () {
  // states
  const [count, setCount] = useState(0);
  // handlers
  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    if (count <= 0) return;
    
    setCount(count - 1);
  }
  // effects
  useEffect(() => {
    console.log('Component mounted');
  }, []);
  
  useEffect(() => {
    console.log(`Count is ${count}`);
  }, [count]);

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button type="button" onClick={handleIncrement}>+</button>
      <button type="button" onClick={handleDecrement}>-</button>
    </>
  );
}

export default Counter;