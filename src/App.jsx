import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  //counter is a variable can be renamed
  // setCounter is a function that update the value
  // useState (0) means the inital value of counter is 0

  function increament() {
    setCounter(counter + 1);
  }
  function decreament() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }

  return (
    <>
      <h1> {counter} </h1>
      <button onClick={increament}> + </button>
      <button onClick={decreament}> - </button>
      <button onClick={reset}> Reset </button>
    </>
  );
}
