import axios from "axios";

// export const getFlightData = async () => {
//   try {
//     const response = await axios.get('https://flight-info-api.p.rapidapi.com/status', {
//       params: {
//       },
//       headers: {
//         'X-RapidAPI-Key': '7f2ed6fbd5msh77ba84f3ada1deep1bbcddjsncd24f689f4ba',
//         'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
//       }
//     });
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// const options = {
//   method: 'GET',
//   params: {version: 'v2'},
//   headers: {
//     'X-RapidAPI-Key': '7f2ed6fbd5msh77ba84f3ada1deep1bbcddjsncd24f689f4ba',
//     'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
//   }
// };


export const getPlacesData = async (type, lat, lng) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, { 
      params : {
        bl_longitude: lng.lo,
        bl_latitude: lat.lo,
        tr_latitude: lat.hi,
        tr_longitude: lng.hi,
      },
      headers: {
        'X-RapidAPI-Key': '1630bb0245msh40dc90d0ee88350p1c2c79jsn7f3e426e925c',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}

