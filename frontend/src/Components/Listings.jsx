import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import {
  Grid,
  AppBar,
  Typography,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// Assets import
import houseIconPng from "../Assets/Mapicons/house.png";
import apartmentIconPage from "../Assets/Mapicons/apartment.png";
import officeIconPng from "../Assets/Mapicons/office.png";
import myListings from "../Assets/Data/Dummydata";

const useStyle = makeStyles({
  popupStyle: {
    backgroundColor: "#088395",
    color: "white",
  },
  PopupImages: {
    height: "12rem",
    marginLeft: "4px",
    width: "18rem",
    marginTop: "4px",
  },
  cardStyle: {
    margin: "0.5rem",
    border: "1px solid #088395",
    position: "relative",
  },
  pictureStyle: {
    paddingRight: "1rem",
    paddingLeft: "1rem",
    height: "20rem",
    width: "30rem",
  },
  priceOverly: {
    position: "absolute",
    backgroundColor: "green",
    zIndex: "1000px",
    color: "white",
    top: "100px",
    left: "20px",
    padding: "5px",
    borderRadius: "4px",
  },
});

function Listing() {
  const classes = useStyle();

  const houseIcon = new Icon({
    iconUrl: houseIconPng,
    iconSize: [40, 40],
  });

  const apartmentIcon = new Icon({
    iconUrl: apartmentIconPage,
    iconSize: [40, 40],
  });

  const officeIcon = new Icon({
    iconUrl: officeIconPng,
    iconSize: [40, 40],
  });

  const [latitude, setLatitude] = useState(51.505);
  const [longitude, setLongitude] = useState(-0.09);

  function goEast() {
    setLatitude(51.505);
    setLongitude(-0.08);
  }

  function goCenter() {
    setLatitude(51.505);
    setLongitude(-0.09);
  }

  return (
    <Grid container>
      <Grid item xs={4}>
        {myListings.map((listing) => {
          return (
            <Card key={listing.id} className={classes.cardStyle}>
              <CardHeader title={listing.title} />
              <CardMedia
                component="img"
                image={listing.picture1}
                className={classes.pictureStyle}
              />
              <CardContent>
                <Typography>
                  <p>{listing.description.substring(0, 250)}....</p>
                </Typography>
                {listing.property_status === "Sale" ? (
                  <Typography className={classes.priceOverly}>
                    {listing.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    $
                  </Typography>
                ) : (
                  <Typography className={classes.priceOverly}>
                    {listing.listing_type}: $
                    {listing.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    / {listing.rental_frequency}
                  </Typography>
                )}
              </CardContent>
            </Card>
          );
        })}
      </Grid>
      <Grid item xs={8} style={{ marginTop: "0.5rem" }}>
        <AppBar position="sticky">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={14}
            scrollWheelZoom={true}
            style={{ height: "100vh", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {myListings.map((listing) => {
              function iconDisplay() {
                if (listing.listing_type === "House") {
                  return houseIcon;
                } else if (listing.listing_type === "Apartment") {
                  return apartmentIcon;
                } else if (listing.listing_type === "Office") {
                  return officeIcon;
                }
                return null;
              }

              return (
                <Marker
                  key={listing.id}
                  icon={iconDisplay()}
                  position={[
                    listing.location.coordinates[0],
                    listing.location.coordinates[1],
                  ]}
                >
                  <Popup>
                    <Typography variant="h5">{listing.title}</Typography>
                    <Typography variant="body">
                      {listing.description.substring(0, 150)}....
                    </Typography>
                    <img
                      className={classes.PopupImages}
                      src={listing.picture1}
                      alt=""
                    />
                    <Button
                      fullWidth
                      style={{ backgroundColor: "#088395", color: "white" }}
                    >
                      Details
                    </Button>
                  </Popup>
                </Marker>
              );
            })}
            <Marker icon={officeIcon} position={[latitude, longitude]}></Marker>
          </MapContainer>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default Listing;
