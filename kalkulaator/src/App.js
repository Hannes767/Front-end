
import './App.css';
import {useRef, useState} from "react";

function App() {
  const [vastus, muudaVastus] = useState(0);
  const input1Ref = useRef();
  const input2Ref = useRef();

  function korruta() {
    muudaVastus(input1Ref.current.value * input2Ref.current.value);

  }

  function lahuta() {
    muudaVastus(input1Ref.current.value - input2Ref.current.value);
  }

  function jaga() {
    muudaVastus(input1Ref.current.value / input2Ref.current.value);
  }

  function liida() {
    muudaVastus(+input1Ref.current.value + +input2Ref.current.value);
  }

  return (
    <div className='App'>
      <input ref={input1Ref} type="text" />
      <input ref={input2Ref} type="text" />
      <br />
      {vastus}
      <br />
      <button onClick={korruta}>Korruta</button>
      <button onClick={lahuta}>Lahuta</button>
      <button onClick={jaga}>Jaga</button>
      <br />
      <input ref={input1Ref} type="text" />
      <input ref={input2Ref} type="text" />
      <br />
      {vastus}
      <br />
      <button onClick={liida}>Liida</button>
      

    </div>
    
  );
}

export default App;
