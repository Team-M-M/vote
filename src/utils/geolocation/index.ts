export const geolocation = () => {
	if (window && window.navigator && window.navigator.geolocation) {
		window.navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
	} else {
		console.log('Geolocation is not supported by this browser.');
	}

	function successCallback(position: any) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		console.log('Latitude: ' + latitude);
		console.log('Longitude: ' + longitude);
	}

	function errorCallback(error: any) {
		console.log('Error occurred. Error code: ' + error.code);
	}
};
