import React, {useState, useRef} from 'react'

function Sisendinput() {
    const inputistLugeja = useRef();
    const[muutuvHTMLs, funktsioonMuutujaMuutmiseks] = useState("");

    const onClickfunktsioon = () => {
        funktsioonMuutujaMuutmiseks(inputistLugeja.current.value);
    }

  return (
    <div>
        <input ref={inputistLugeja} type="text" />
        <button onClick={onClickfunktsioon}>Muuda</button>
        <div>{muutuvHTMLs}</div>
    </div>
  )
}

export default Sisendinput