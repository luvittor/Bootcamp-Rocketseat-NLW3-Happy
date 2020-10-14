// basic
import React from 'react';
import { Link } from 'react-router-dom';

// css
import '../styles/pages/orphanages-map.css';

// logo
import mapMarkerImg from '../images/map-marker.svg';

// map
import  { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// icons
import { FiPlus} from 'react-icons/fi';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Taubaté</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
                center={[-23.0308092,-45.5539208]}
                zoom={15}
                style={{width: '100%', height: '100%'}} 
                >
                
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
                {
                    // <TileLayer url={'https://api.mapbox.com/styles/v1/mapbox/light-v18/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}'} />
                    // <TileLayer url={'https://api.mapbox.com/styles/v1/mapbox/dark-v18/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}'} />
                }
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size="32" color="#FFF"></FiPlus>
            </Link>
        </div>
    );
}

export default OrphanagesMap;