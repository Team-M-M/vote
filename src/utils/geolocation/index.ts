export const geolocation = () => {
  function successCallback(position: any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log('Latitude: ' + latitude);
    console.log('Longitude: ' + longitude);
  }

  function errorCallback(error: any) {
    console.log('Error occurred. Error code: ' + error.code);
  }

  if (window && window.navigator && window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
};
