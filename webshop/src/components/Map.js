import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) { 

  return (
  <div>

    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[59.4377, 24.7562]}>
        <Popup>
          Postimaja. <br /> Avatud 10-20
          <a 
            target='_blank'
            rel="noreferrer"
            href="https://www.google.ee/maps/place/H%26M/@59.4372646,24.7542306,18z/data=!4m6!3m5!1s0x469293608d4973e7:0xf0a6a84dda7c5e1e!8m2!3d59.4376919!4d24.7562353!16s%2Fg%2F11bxj97_7q?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            ><br />
                Narva mnt 1, Tallinn
          </a>
        </Popup>
      </Marker>
      <Marker position={[59.4270, 24.6510]}>
        <Popup>
          Rocca Al Mare. <br /> Avatud 10-21
          <a 
            target='_blank'
            rel="noreferrer"
            href="https://www.google.ee/maps/place/H%26M/@59.4265526,24.6317967,15z/data=!4m6!3m5!1s0x469295a5ad8b2bad:0xb0e3bde9668d3c59!8m2!3d59.4265526!4d24.6508511!16s%2Fg%2F11cjg8_v4f?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            ><br />
                Paldiski mnt 102, Tallinn
          </a>
        </Popup>
      </Marker>
      <Marker position={[58.2657, 22.5159]}>
        <Popup>
          Kuressaare. <br /> Avatud 10-20
          <a 
            target='_blank'
            rel="noreferrer"
            href="https://www.google.ee/maps/place/H%26M/@58.2667483,22.5147042,17.69z/data=!4m6!3m5!1s0x46f26d5d96961037:0x6b025569f6559003!8m2!3d58.2656719!4d22.5159479!16s%2Fg%2F11hdgzzxyj?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            ><br />
                Tallinna 88, Kudjape Saare maakond
          </a>
        </Popup>
      </Marker>
      <Marker position={[58.3772, 26.7284]}>
        <Popup>
          Kvartal. <br /> Avatud 10-21
          <a 
            target='_blank'
            rel="noreferrer"
            href="https://www.google.ee/maps/place/H%26M/@58.3766005,26.7253895,17.42z/data=!4m6!3m5!1s0x46eb36de8abb8c37:0x7f0a63747c78b120!8m2!3d58.37715!4d26.728465!16s%2Fg%2F11cn9vlbbx?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
            ><br />
                Riia 2, Tartu
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  </div>)
}

export default Map; 
