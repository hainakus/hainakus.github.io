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
var player = videojs('#player');