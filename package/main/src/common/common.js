import axios from 'axios';

  export function getCountryDrp(setcountrylist) {
  const apiUrl = `${process.env.REACT_APP_API_URL}/country`;
  const accessToken = localStorage.getItem('authToken'); // Replace this with your actual access token

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
export function formatDateAndTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);

  const year = dateTime.getFullYear();
  const month = (dateTime.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
  const day = dateTime.getDate().toString().padStart(2, "0");
  
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  //const formattedDate = `${day}-${month}-${year}`;
  const formattedDate = `${year}-${month}-${day}`;
  
  return {
    date: formattedDate,
    time: formattedTime,
  };
}
export function formatSeconds(billSeconds) {
  const seconds = parseInt(billSeconds, 10);
  const formattedTime = new Date(seconds * 1000).toISOString().substr(11, 8);
  return formattedTime;
}

//export {formatDateAndTime,getCountryDrp };
