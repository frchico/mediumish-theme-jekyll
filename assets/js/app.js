// Initialise FlexSlider for Carousels
 $(function() {
     $('.flexslider').flexslider({
//     animation: "fade",
//     directionNav: true,
//     slideshowSpeed: 5000,
//     animationSpeed: 600,
//     touch: true
		controlsContainer: $(".custom-controls-container"),
		customDirectionNav: $(".custom-navigation a")
	 });
 });