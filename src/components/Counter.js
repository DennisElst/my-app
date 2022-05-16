import './Counter.css';
import {useState} from 'react';


function Counter() {
  const [count, setCount] = useState(0);


//  const countState = useState(0);
//  const count = countState[0];
//  const setCount = countState[1];

  return (
    <div className="Counter">
    {count}
    <button onClick={() => {setCount(count - 1)}}>-</button>
    <button onClick={() => {setCount(count + 1)}}>+</button>
        </div>

  );
}

export default Counter;
