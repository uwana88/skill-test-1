
$(document).ready(function () {
    $(".container_main").animate({ opacity: '1' }, 1000, function () {
        $("#title").animate({ left: '0px', opacity: '1' }, 1000, function () {
            $("#nav1").animate({ opacity: '1' }, 200, function () {
                $("#nav2").animate({ opacity: '1' }, 200, function () {
                    $("#nav3").animate({ opacity: '1' }, 200, function () {
                        $("#nav4").animate({ opacity: '1' }, 200, function () {
                            $("#nav5").animate({ opacity: '1' }, 200, function () {
                                $("#nav6").animate({ opacity: '1' }, 200, function () {
                                    $("#nav7").animate({ opacity: '1' }, 200, function () {
                                        $("#nav8").animate({ opacity: '1' }, 200);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});