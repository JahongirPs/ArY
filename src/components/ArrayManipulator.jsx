import React from 'react';
import useFetch from '../hooks/useFetch';


function ArrayManipulator() {
  const { array, filter, map, push, removeByIndex, clear } = useFetch([1, 2, 3, 4, 5]);

  return (
    <div>
      <div className='ArrayBox'>
        Current Array: {array.join(', ')}
      </div>
      <button onClick={() => filter(num => num % 2 === 0)}>Filter</button>
      <button onClick={() => push(1)}>Add </button>
      <button onClick={() => map(num => num * 2)}>Double</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default ArrayManipulator;
