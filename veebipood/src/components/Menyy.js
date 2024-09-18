import React from 'react'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

function Menyy() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Link to="avaleht">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4-1800x650.jpg" alt="" />
      </Link>

      <button onClick={() => i18n.changeLanguage("et")}>EST</button>
      <button onClick={() => i18n.changeLanguage("en")}>ENG</button>

      <Link to="kinkekaart">
        <button className="nupp">{t("nav.giftcard")}</button>
      </Link>

      <Link to="esindused">
        <button className="nupp">{t("nav.shops")}</button>
      </Link>

      <Link to="lisa-toode">
        <button className="nupp">Lisa uus toode</button>
      </Link>

      <Link to="ostukorv">
      <button className="nupp">Ostukorvi</button>
      </Link>

      <Link to="seaded">
      <button className="nupp">Seaded</button>
      </Link>

      <Link to="profiil">
      <button className="nupp">Profiil</button>
      </Link>

      <Link to="logi-sisse">
      <button className="nupp">Logi sisse</button>
      </Link>

      <Link to="registreeru">
        <button className="nupp">Registreeru</button>
      </Link>

      <Link to="hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="tootajad">
        <button className="nupp">Töötajad</button>
      </Link>

      <Link to="tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <br /><br />

      <Link to="halda-esindused">
        <button className="nupp">Halda esinduseid</button>
      </Link>

      <Link to="halda-hinnad">
        <button className="nupp">Halda hindu</button>
      </Link>

      <Link to="halda-tootajad">
        <button className="nupp">Halda töötajaid</button>
      </Link>

      <Link to="halda-tooted">
        <button className="nupp">Halda tooteid</button>
      </Link>
      
    </div>
  )
}

export default Menyy