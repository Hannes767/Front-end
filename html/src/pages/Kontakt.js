import React, { useState } from 'react'

function Kontakt() {
  const [aadress, maaraAadress] = useState("Tallinn");
  const [telefon, maaraTelefon] = useState("68403862");
  const [email, maaraEmail] = useState("bla@baa.com");
  const [ingliseKeelne, maaraIngliseKeelne] = useState("ei");
  const [keel, muudaKeel] = useState ("Muuda inglise keelseks");

    function english() {
      maaraAadress("London");
      maaraTelefon("6289629756");
      maaraEmail("london@london.com");
      maaraIngliseKeelne("jah");
    }

  return (
    <div>
      {ingliseKeelne === "jah" && <div>Page is in English</div>}
      <div>{aadress}</div>
      <div>{telefon}</div>
      <div>{email}</div>

      
      <button onClick={ () => {english();  muudaKeel("Change to Estonian")}}>{keel}</button>
      

       {/* <button onClick={() => {maaraAadress("London"); maaraTelefon("5493275892"); maaraEmail("london@london.com");}}>Muuda inglise keelseks</button> */}


    </div>
  )
}

export default Kontakt