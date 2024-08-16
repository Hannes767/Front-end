import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <img className="main-picture" src="https://www.bandt.com.au/information/uploads/2018/04/volkswagen-emblem.jpg" alt="vag auto" />
      <div className="rectangle"></div>
      <hr className="joon"/>
      <div className="navigation-pictures">
        <Link className="main-link" to="work">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/USRC_Salmon_P_Chase_-_LoC_4a25817u.jpg/1024px-USRC_Salmon_P_Chase_-_LoC_4a25817u.jpg" alt="laev" />
          <p>Tööde lehele</p>
        </Link>
        <Link className="main-link" to="hobbies">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/1024px-Left_side_of_Flying_Pigeon.jpg" alt="jalgratas" />
          <p>Hobide lehele</p>
        </Link>
        <Link className="main-link" to="courses">
          <img src="https://s1.at.atcdn.net/wp-content/uploads/2023/06/HEROPicnicTrain-800x600.jpg" alt="rong" />
          <p>Kursuste lehele</p>
        </Link>
      </div>
      <br />

      <iframe width="560" height="315" src="https://www.youtube.com/embed/ezKR1rh5Jy0?si=FFfFrNj7kjCS2niM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <a className="facebook-button" href="https://www.facebook.com/jee">
        <img src="/facebook.png" alt="" />
        <span>Facebook</span>
      </a>

    </div>
  )
}

export default Navbar