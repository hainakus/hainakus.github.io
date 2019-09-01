var url = [
    "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?cs=srgb&dl=4k-wallpaper-adventure-climb-691668.jpg&fm=jpg",
    "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?cs=srgb&dl=4k-wallpaper-adventure-climb-691668.jpg&fm=jpg",
    "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?cs=srgb&dl=4k-wallpaper-adventure-climb-691668.jpg&fm=jpg"
];
var text = [
    'INITIATIVE',
    'TIAGO MENDES',
    'CLEAN CODE',
    'CERTAIN'
];
$(".uk-navbar-nav > li").on('click', function () {
    var rand = url[Math.floor(Math.random() * url.length)];
    var randText = text[Math.floor(Math.random() * text.length)];
    $('#back')
        .css('background-image', 'url(' + rand + ')');
    $('#change').text(randText);
});
$('.uk-list > li').on('click', function () {
    $(this).toggleClass('link');
    var element = $('.text-area').html('<h1>Years Of Experience on Coding:</h1> 8 years till now and counting...</br> <h1>What do i like to do on free time:</h1> Coding, learning development skills and go fetch some cool frameworks. <h1> Skills on Coding:</h1> JS, HTML, SCSS, FLEX, RUBY, RAILS, ANGULAR');
    if (!$(this).hasClass('link'))
        $(element).text('');
});
var video = document.getElementById('video');
if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource('https://gobideo.tk/live/stream.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
    });
}
// hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
// When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element through the `src` property.
// This is using the built-in support of the plain video element, without using hls.js.
// Note: it would be more normal to wait on the 'canplay' event below however on Safari (where you are most likely to find built-in HLS support) the video.src URL must be on the user-driven
// white-list before a 'canplay' event will be emitted; the last video event that can be reliably listened-for when the URL is not on the white-list is 'loadedmetadata'.
else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = 'https://gobideo.tk/live/stream.m3u8';
    video.addEventListener('loadedmetadata', function () {
        video.play();
    });
}