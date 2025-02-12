import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import {
    useJsApiLoader,
    DirectionsRenderer, 
    Marker, 
    GoogleMap,
} from '@react-google-maps/api'
import {
    Button, 
    ButtonGroup,
} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import Header from '../Header/Header'
import useStyles from './styles.js';

const Map = ({setCoordinates, setBounds, coordinates, places}) =>{

    const classes = useStyles()

    return (   

        <>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDVNAi8lLh0wpnsm746LkkXpL6C8ejfqSE' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{
                    mapTypeControl: true,
                }}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
            >
            </GoogleMapReact>
                {/* {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            <LocationOnOutlinedIcon color="primary" fontSize="large" />
                        }
                    </div>
                )
                )} */}
        </>
    )
}

export default Map