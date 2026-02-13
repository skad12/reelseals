import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Gmap = () => {
  return (
    <MapContainer
      className="markercluster-map"
      center={[9.067, 7.483]} // Abuja, Nigeria (lat, lng)
      zoom={12} // city-level zoom
      maxZoom={18}
      style={{ height: "400px", width: "100%" }} // ensure map is visible
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Gmap;
