$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        scrollHorizontally: true,
		navigation: true,
		dragAndMove:true
	});

	fullpage_api.setAllowScrolling(true);
});