// React leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Grid, AppBar, Typography } from "@mui/material";
function Listing() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography variant="h3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error aut
          velit sed sint molestias vero placeat. Quam sequi non perspiciatis
          possimus atque impedit qui tenetur nihil asperiores, facilis alias
          quibusdam.
        </Typography>
        Black Space
      </Grid>

      <Grid item xs={8}>
        <AppBar position="sticky">
          <div style={{ height: "100vh" }}>
            <MapContainer
              center={[51.505, -0.09]}
              zoom={14}
              scrollWheelZoom={true}
            >
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
        </AppBar>
      </Grid>
    </Grid>
  );
}
export default Listing;
