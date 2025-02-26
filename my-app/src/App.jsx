import { useState } from 'react';
import './App.css';

function Button() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count is: {count}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button /> {/* Include the Button component inside App */}
    </div>
  );
}


export { Button };
