import { useState } from 'react';
import Map from '../../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [58.9264, 25.6095], zoom: 7});

  return (<div>
    <button onClick={() => setCoordinates({lngLat: [58.9264, 25.6095], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>

    <button onClick={() => setCoordinates({lngLat: [59.4377, 24.7562], zoom: 13})}>Postimaja</button>
    <button onClick={() => setCoordinates({lngLat: [59.4270, 24.6510], zoom: 13})}>Rocca Al Mare</button>
    <button onClick={() => setCoordinates({lngLat: [58.2657, 22.5159], zoom: 13})}>Kuressaare</button>
    <button onClick={() => setCoordinates({lngLat: [58.3772, 26.7284], zoom: 13})}>Kvartal</button>

    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;
