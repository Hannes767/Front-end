import React, { useState } from 'react'
import Palgakalkulaator from '../components/Palgakalkulaator'
import Kalkulaator from '../components/Kalkulaator'

function MitteLeitud() {
  const [kalk, muudaKalk] = useState("palk");

  return (
    <div>
    <div>Lehte ei leitud</div>
    <div>Senimaani kuni õigele lehele lähed, arvta oma palk:</div>


    {kalk === "palk" && 
      <div>
        <button onClick={() => muudaKalk("kalkulaator")}>Näita hoopis tavalist kalkulaatorit</button><Palgakalkulaator/></div>}
    {kalk === "kalkulaator" && 
      <div>
        <button onClick={() => muudaKalk("palk")}>Näita jälle palgakalkulaatorit</button><Kalkulaator/></div>}
    </div>
    
  )
}

export default MitteLeitud