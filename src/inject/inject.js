chrome.extension.sendMessage({}, function(response) {

var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);


        var images = document.querySelectorAll("img");

        // Replace all images with a picture of Cheems.
        for (var i = 0; i < images.length; ++i) {
 			var element = images[i];
 			element = element.setAttribute("src","https://i.imgur.com/l8yw3gy.jpeg");
		}		

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Respect Cheems");
		// ----------------------------------------------------------

	}
	}, 10);
