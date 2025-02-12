'use client'

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";
  
  type PlacesProps = {
    setOffice: (position: google.maps.LatLngLiteral) => void;
  };
  
  export default function Places({ setOffice }: PlacesProps) {
    const {
      ready, 
      value,
      suggestions:{ status, data },
      setValue,
      clearSuggestions} = usePlacesAutocomplete(); 
    
    const handleSelect = async (address: string) => {
      setValue(address, false);
      clearSuggestions();
  
      try {
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setOffice({ lat, lng });
      } catch (error) {
        console.log("Error: ", error);
      }
    }  

    return (
      <Combobox onSelect={handleSelect} as="div" >
        <ComboboxInput
          value={value} 
          {...(value && { as: "input", 
          onChange: 
            (e: React.ChangeEvent<HTMLInputElement>) => 
            setValue(e.target.value),
          
          disabled:!ready,
          className:'combobox-input',
          placeholder:'Search a place',
          })}   
        />
        <ComboboxPopover as="div">
          <ComboboxList>
            {status === "OK" && 
              data.map(({id, description}) => (
              <ComboboxOption key={id} value={description} />
            ))
            }
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    );
              }