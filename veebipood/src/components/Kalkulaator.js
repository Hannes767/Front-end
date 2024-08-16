import React, { useState } from 'react'

function Kalkulaator() {
    const [arv1, muudaArv1] = useState(0);
    const [m2rk, muudaM2rk] = useState("");
    const [arv2, muudaArv2] = useState("");
    const [summa, muudaSumma] = useState(0);


    const tyhjenda = () => {
        muudaArv1("");
        muudaArv2("");
        muudaM2rk("");
        muudaSumma(0);
    }

    const arvuta = () => {
        if (m2rk === "+") {
            muudaSumma(arv1 + arv2);
        }
        if (m2rk === "-") {
            muudaSumma(arv1 - arv2);
        }

        if (m2rk === "x") {
            muudaSumma(arv1 * arv2);
        }

        if (m2rk === "/") {
            muudaSumma(arv1 / arv2);
        }
    }

  return (
    <div>
        <div>{arv1} {m2rk} {arv2}</div>
        <div>{summa}</div>
        <table className='kalkulaator'>
        
        <tbody>
            <tr>
                <td onClick={m2rk === "" ? () => muudaArv1(Number(arv1 + "7")) : () => muudaArv2(Number(arv2 + "7"))}>7</td>
                <td onClick={m2rk === "" ? () => muudaArv1(Number(arv1 + "8")) : () => muudaArv2(Number(arv2 + "8"))}>8</td>
                <td onClick={m2rk === "" ? () => muudaArv1(Number(arv1 + "9")) : () => muudaArv2(Number(arv2 + "9"))}>9</td>
                <td onClick={() => muudaM2rk("x")}>x</td>

            </tr>
            <tr>
                <td onClick={m2rk === "" ? () => muudaArv1(Number(arv1 + "4")) : () => muudaArv2(Number(arv2 + "4"))}>4</td>
                <td onClick={m2rk === "" ? () => muudaArv1(Number(arv1 + "5")) : () => muudaArv2(Number(arv2 + "5"))}>5</td>
                <td onClick={m2rk === "" ? () => muudaArv1(Number(arv1 + "6")) : () => muudaArv2(Number(arv2 + "6"))}>6</td>
                <td onClick={() => muudaM2rk("-")}>-</td>
            </tr>
                <td onClick={m2rk === "" ? () => muudaArv1(Number(arv1 + "1")) : () => muudaArv2(Number(arv2 + "1"))}>1</td>
                <td onClick={m2rk === "" ? () => muudaArv1(Number(arv1 + "2")) : () => muudaArv2(Number(arv2 + "2"))}>2</td>
                <td onClick={m2rk === "" ? () => muudaArv1(Number(arv1 + "3")) : () => muudaArv2(Number(arv2 + "3"))}>3</td>
                <td onClick={() => muudaM2rk("+")}>+</td>
            <tr>
                <td onClick={tyhjenda}>C</td>
                <td onClick={m2rk === "" ? () => muudaArv1(Number(arv1 + "0")) : () => muudaArv2(Number(arv2 + "0"))}>0</td>
                <td onClick={() => muudaM2rk("/")}>/</td>
                <td onClick={arvuta}>=</td>   
            </tr>
           
        </tbody>
    </table>
    </div>
  )
}

export default Kalkulaator