'use client'

import { useState, useMemo, useCallback, useRef } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer } from '@react-google-maps/api';
import Places from './places';
import Distance from './distance';


type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;



export default function Map() {
    const [office, setOffice] = useState<LatLngLiteral>()
    const mapRef = useRef<GoogleMap>();
    const center = useMemo<LatLngLiteral>(() => ({ lat: 43.6532, lng: -79.3832 }), []);
    const options = useMemo<MapOptions>(
        () => ({    
            disableDefaultUI: true,
            clickableIcons: false,
        }),
        []
    );
    const onLoad = useCallback((map: any) => (mapRef.current = map), []);

    return (
        <div className='container'>
            <div className='controls'>
                <h1>commute?</h1>
                <Places 
                    setOffice={(position) => {
                        setOffice(position)
                        mapRef.current?.panTo(position)
                    }}
                />
            </div>
            <div className='map'>
                <GoogleMap 
                zoom={10} 
                center={center}
                mapContainerClassName='map-container'
                options={options}
                onLoad={onLoad}>
                    {office && <Marker position={office}/>}
                </GoogleMap>
            </div>
        </div>
    )  
}

const defaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    editable: false,
    draggable: false,
    visible: true,
};

const closeOptions = {
    ...defaultOptions,
    zIndex: 3,
    fillOpacity: 0.05,
    fillColor: '#8BC34A',
    strokeColor: '#8BC34A',
};
const middleOption = {
    ...defaultOptions,
    zIndex: 2,
    fillOpacity: 0.05,
    fillColor: '#FBC02D',
    strokeColor: '#FBC02D',
};
const farOptions = {
    ...defaultOptions,
    zIndex: 1,
    fillOpacity: 0.05,
    fillColor: '#FF5252',
    strokeColor: '#FF5252',
};

const generateHouses = (position: LatLngLiteral) => {
    const _houses:Array<LatLngLiteral> = [];
    for (let i = 0; i<100; i++) {
        const direction = Math.random() < 0.5 ? -2 : 2;
        _houses.push({
            lat: position.lat + direction * Math.random() * 0.01,
            lng: position.lng + direction * Math.random() * 0.01,
        });
    return _houses
    }
}