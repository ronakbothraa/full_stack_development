import React, {useState, useEffect, useRef} from 'react'
import { getPlacesData } from './api'

import {Box, Input} from "@chakra-ui/react"

import {
    Autocomplete,
    useJsApiLoader,
    DirectionsRenderer, 
    Marker, 
    GoogleMap,
} from '@react-google-maps/api'
import {
    Button, 
    ButtonGroup,
    Select,
    MenuItem,
} from '@material-ui/core';


const App = () => {
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    const [type, setType] = useState('hotels');

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDVNAi8lLh0wpnsm746LkkXpL6C8ejfqSE',
        libraries: ['places']
    })
    
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef()
    
    async function calculateRoute() {
        if (originRef.current.value === '' || destinationRef.current.value === '') {
        return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destinationRef.current.value = ''
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, []);
    
    useEffect(() => {
        if (bounds.lat && bounds.lng) {
            getPlacesData(type, bounds.lat, bounds.lng)
            .then((data) => {
                console.log(data)
                setPlaces(data)
            })
        }
    }, [type, coordinates, bounds]);


    // Header
    const [autocomplete, setAutoComplete] = useState(null)
    const onLoad = (autoC) => setAutoComplete(autoC)

    return (
        <>
            <Box position='absolute' left={200} top={201} right={200} bottom={200} h='100%' w='100%'>
            <GoogleMap
                center={coordinates}
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{
                    mapTypeControl: true,
                    fullscreenControl: true,
                }}
                onBoundsChanged={() => {
                    const bounds = map.getBounds();
                    console.log(bounds.La)
                    setBounds({lat: bounds.eb, lng: bounds.La})
                }}

                onLoad={map => setMap(map)}
            >
                
                <Marker position={coordinates} />
                {places?.map((place, i) => (
                    <Marker key={i} position={{
                        lat: Number(place.latitude), 
                        lng: Number(place.longitude)}}
                        icon = {{
                            url: "src/hotels.svg",
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                            scaledSize: new window.google.maps.Size(45, 45),
                        }}
                    />
                ))}
                {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                )}
            </GoogleMap>
            </Box>

            <Autocomplete onLoad={onLoad} onPlaceChanged={() => {
                map.panTo(autocomplete.getPlace().geometry.location)
                setCoordinates({lat:Number(autocomplete.getPlace().geometry.location.lat()),
                                lng:Number(autocomplete.getPlace().geometry.location.lng())})
            }}>
                <Input placeholder='Origin' ref={originRef} />
            </Autocomplete>

            <Autocomplete onLoad={onLoad} onPlaceChanged={() => {
                map.panTo(autocomplete.getPlace().geometry.location)
                setCoordinates({lat:Number(autocomplete.getPlace().geometry.location.lat()),
                                lng:Number(autocomplete.getPlace().geometry.location.lng())})
            }}>
                <Input placeholder='Origin' ref={destinationRef} />
            </Autocomplete>
            
            <ButtonGroup>
                <Button type='submit' onClick={calculateRoute}>
                    Calculate Route
                </Button>
                <Button type='submit' onClick={clearRoute}>
                    Clear Route
                </Button>
                <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
                {/* {places?.map((place, i) => (
                    <h4>{place.name}</h4>
                ))} */}
            </ButtonGroup>

            <h3>Distance: {distance} </h3>
            <h3>Duration: {duration} </h3>
            {/* <List 
                places={places}
                type={type}
                setType={setType}
                rating={rating}
                setRating={setRating}
            /> */}
            {/* <Map 
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                places={places}
            /> */}
        </>
    );
}

export default App;