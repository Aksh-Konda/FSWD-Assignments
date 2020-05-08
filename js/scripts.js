
$(document).ready(function () {

    $("#mycarousel").carousel({ interval: 1000 });
    $("#carouselButton").click(function () {
        $("#carouselButton span").toggleClass("fa-pause fa-play");
        $("#carouselButton span").hasClass("fa-pause") ? $("#mycarousel").carousel('cycle') : $("#mycarousel").carousel('pause');
    });

    $('#loginModalBtn').click(function () {
        $('#loginModal').modal('show');
    });

    $('#reserveModalBtn').click(function () {
        $('#reserveModal').modal('show');
    });

});