// React leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Listing() {
  return (
    <div style={{ height: "100vh" }}>
      <MapContainer center={[51.505, -0.09]} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Listing;
