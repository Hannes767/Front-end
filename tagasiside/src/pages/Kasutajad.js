import React, { useState } from 'react'
import { Link } from "react-router-dom"
import kasutajadFail from "../kasutajad.json"

function Kasutajad() {
  const [kasutajad, uuendaKasutajad] = useState(kasutajadFail);
  const [lucioIndex, setLucioIndex] = useState(null);

  const allBack = () => {
    uuendaKasutajad(kasutajadFail);
  }

  const filterName = () => {
    const result = kasutajad.filter(kasutaja => kasutaja.username.length >= 10);
    uuendaKasutajad(result);
  }

  const findIndexAndDelete = (kasutaja) => {
    const index = kasutajad.indexOf(kasutaja);
    kasutajad.splice(index,1);
    uuendaKasutajad(kasutajad.slice());
  }

  const findIndexLucio = () => {
    const index = kasutajad.findIndex(user => user.email === "Lucio_Hettinger@annie.ca");
    console.log(index);
    setLucioIndex(index); // Uuenda Lucio indeksi state'i
  }

  const findFirstCLetter = () => {
    const kasutaja = kasutajad.find(user => user.name.substring(0,1) === "C");
    console.log(kasutaja);
  }

  const sortUserLat = () => {
    kasutajad.sort((a,b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
    console.log(kasutajad);
    uuendaKasutajad(kasutajad.slice());
  }

  const filterUserLangPos = () => {
    const result = kasutajad.filter(kasutaja => kasutaja.address.geo.lng > 0);
    uuendaKasutajad(result);
  }

  const sumUserId = () => {
    let sum = 0;
    kasutajad.forEach(kasutaja => {sum += kasutaja.id}); // sama kui sum = sum + kasutaja.id
    console.log(sum);
  }

  const addToPhoneNumber = () => {
    const result = kasutajad.map(kasutaja => ({...kasutaja, phone: "000 " + kasutaja.phone}))
    uuendaKasutajad(result);
  }

  const replaceAllEmails = () => {
    const result = kasutajad.map(user => user.email);
    console.log(result);
  }

  const replaceCatchPhraseLetters = () => {
    const result = kasutajad.map(user => ({...user, company:{...user.company, catchPhrase: user.company.catchPhrase.replaceAll("a", "e")}}))
      uuendaKasutajad(result);
      console.log(result);
  }

  return (
    <div>
      <Link to="/">
            <button>Vaata kasutajaid</button>
      </Link><br /><br />

      <div>{kasutajad.length}</div>      
      <button onClick={() => allBack()}>Algseis</button>
      <button onClick={() => filterName()}>Kasutaja username pikkus on suurem-võrdne 10</button>
      <button onClick={() => findIndexLucio()}>Lucio index on: {lucioIndex}</button>
      {lucioIndex !== null && <div>Lucio indeks: {lucioIndex}</div>} {/* Kuvab Lucio indeksi, kui see on leitud */}
      <button onClick={() => findFirstCLetter()}>Kasutaja nimi algab C tähega</button>
      <button onClick={() => sortUserLat()}>Kasutajate sortimine lat järgi</button>
      <button onClick={() => filterUserLangPos()}>Kasutajate sortimine pos lng järgi</button>
      <button onClick={() => sumUserId()}>Kasutajate id-de liitmine</button>
      <button onClick={() => addToPhoneNumber()}>Kasutajate telefoninumbritele 000 liitmine</button>
      <button onClick={() => replaceAllEmails()}>Kasutajate emailide eraldamine uude massiivi</button>
      <button onClick={() => replaceCatchPhraseLetters()}>Kasutajate catchphrasede tähtede asendamine</button>


      <br /><br />
      <div>{kasutajad.map(kasutaja =>
        <div key={kasutaja.name}>
          <div>{kasutaja.name}</div>
          <div>{kasutaja.username}</div>
          <div>{kasutaja.email}</div>
          <div>{kasutaja.address.street}</div>
          <div>{kasutaja.address.suite}</div>
          <div>{kasutaja.address.city}</div>
          <div>{kasutaja.address.zipcode}</div>
          <div>{kasutaja.address.geo.lat}</div>
          <div>{kasutaja.address.geo.lng}</div>
          <div>{kasutaja.phone}</div>
          <div>{kasutaja.website}</div>
          <div>{kasutaja.company.name}</div>
          <div>{kasutaja.company.catchPhrase}</div>
          <div>{kasutaja.company.bs}</div>
          <button onClick={() => findIndexAndDelete(kasutaja)}>Järjekorranumber ja kustuta see</button><br /><br />
        </div>
      )}</div>
    </div>
  )
}

export default Kasutajad