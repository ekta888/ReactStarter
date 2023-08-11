import axios from 'axios';

export default function getCountryDrp(setcountrylist) {
  const apiUrl = `${process.env.REACT_APP_API_URL}/country`;
  const accessToken = process.env.REACT_APP_AUTH_TOKEN; // Replace this with your actual access token

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  axios
    .get(apiUrl, config)
    .then((response) => {
      // Use arrow function here
      if (response.data) {
        return setcountrylist(response.data);
      }
      return null; // Add a default return value here if needed
    })
    .catch((error) => {
      // Handle any errors here
      console.error('Error:', error);
    });
}

//export { getCountryDrp };
