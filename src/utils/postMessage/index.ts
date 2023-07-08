export const handleMessage = (message: any) => {
	const adow: any = window;
	adow.ReactNativeWebView.postMessage(JSON.stringify(message));
};
