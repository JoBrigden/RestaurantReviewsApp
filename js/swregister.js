if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('ServiceWorker registration successful!');
	})
	.catch(function() {
		console.log('ServiceWorker registration failed!');
	});
}
