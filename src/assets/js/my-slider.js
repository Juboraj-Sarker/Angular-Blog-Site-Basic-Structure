$(window).load(function () {
    $('#slider').nivoSlider({
        effect: 'random',
        slices: 10,
        animSpeed: 500,
        pauseTime: 2200,
        startSlide: 0, //Set starting Slide (0 index)
        directionNav: false,
        directionNavHide: false, //Only show on hover
        controlNav: false, //1,2,3...
        controlNavThumbs: false, //Use thumbnails for Control Nav
        pauseOnHover: true, //Stop animation while hovering
        manualAdvance: false, //Force manual transitions
        captionOpacity: 0.8, //Universal caption opacity
        beforeChange: function () { },
        afterChange: function () { },
        slideshowEnd: function () { } //Triggers after all slides have been shown
    });
});

console.log("COME HERE")
