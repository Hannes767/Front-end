import React,{useState, useRef} from 'react'
import { Link } from "react-router-dom"

function AlgabKindlaTahemargiga() {
    const [arvuti, muudaArvuti] = useState("");
    const arvutiRef = useRef();
    const [sonum, muudaSonum] = useState("");

    const lisa = () => {
        if (arvutiRef.current.value.startsWith("A") === true) {
          muudaSonum("Toode algab A tähega");
          muudaArvuti(arvutiRef.current.value);
          return;
        }
        muudaArvuti(arvutiRef.current.value);
        muudaSonum("");
    }

  return (
    <div>
        <Link to="/">
            <button>Algab kindla tähemärgiga</button>
        </Link>

        <div>{sonum}</div>
        <div>{arvuti}</div>
        <label>Arvuti</label>
        <input ref={arvutiRef} type="text" />
        <button onClick={lisa}>Lisa arvuti</button>

    </div>
  )
}

export default AlgabKindlaTahemargiga