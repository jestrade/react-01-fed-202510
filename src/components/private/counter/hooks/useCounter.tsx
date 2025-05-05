import { useState } from 'react';

export const useCounter = () => {
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

      return {
        count,
        handleIncrement,
        handleDecrement
      }
}
