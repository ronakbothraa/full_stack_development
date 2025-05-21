import React, {useState, useRef} from 'react'
import { InputBase } from '@material-ui/core'
import { 
    Autocomplete,
} from '@react-google-maps/api'

const Header = ({ setCoordinates, originRef, destinationRef }) => {

    const [autocomplete, setAutoComplete] = useState(null)

    const onLoad = (autoC) => setAutoComplete(autoC)
    const onPlaceChanged = () => {
        const lat = Number(autocomplete.getPlace().geometry.location.lat());
        const lng = Number(autocomplete.getPlace().geometry.location.lng());
        setCoordinates({lat:lat, lng:lng});
    }

    return (
        <>
            <Autocomplete onLoad={onLoad} onPlaceChanged={{onPlaceChanged}}>
                <InputBase type='text' placeholder="from" ref={originRef}/>
            </Autocomplete>

            <Autocomplete onLoad={onLoad} onPlaceChanged={{onPlaceChanged}}>
                <InputBase type='text' placeholder="where" ref={destinationRef} />
            </Autocomplete> 

        </>
    )
}

export default Header