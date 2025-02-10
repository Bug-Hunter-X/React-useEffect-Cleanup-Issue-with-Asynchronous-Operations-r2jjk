```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const cleanup = async () => {
      await Promise.resolve(); // Simulate an async operation
      if (isMounted) {
        console.log('Cleanup ran:', count);
      }
    };

    // This effect runs after every render
    console.log('Effect ran:', count);
    return () => {
      isMounted = false; // Set isMounted to false before the cleanup function executes.
      cleanup();
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```