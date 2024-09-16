import React, { useState } from 'react'

function Avaleht() {
    const tegelased = [
        {eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred Acre Wood"},
        {eesnimi: "Roo", perenimi: "Kangaroo", elukoht: "Hundred Acre Wood"},        
    ]

    const kuvaNimi = (tegelane) => {
        console.log(tegelane.eesnimi);
    } 

    const [klikitudNimi, uuendaKlikitudNimi] = useState();

  return (
    <div>
      {tegelased.map(tegelane =>
      <div>
        <div>{tegelane.eesnimi}</div>
        <div>{tegelane.perenimi}</div>
        <div>{tegelane.elukoht}</div>
        <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button><br />
      </div>)}  
        
        
        
            
        
    </div>
  )
}

export default Avaleht