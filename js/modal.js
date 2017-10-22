$(document).ready(function () {
    // alert button //

    $(".modal .alert a").click(function () {
        $(".window").removeClass("disactive");
        $(".window").addClass("active");
        $("body").css({
            'background-color': 'rgba(0,0,0,0.7)',
            'transition': '1s',
        });
        $(".modal, .modal-confirm, .modal-ajax").css('opacity', '0.5');
    });

    //closing//

    $(".window a.closing, .window .cancel").click(function () {
        $(".window").addClass("disactive");
        $(".window").removeClass("active");
        $("body").css('background-color', '#eee');
        $(".modal, .modal-confirm, .modal-ajax").css('opacity', '1');
    });

    //confirm button //

    $(".modal-confirm .alert a").click(function () {
        $(".window-confirm").removeClass("disactive");
        $(".window-confirm").addClass("active");
        $("body").css({
            'background-color': 'rgba(0,0,0,0.7)',
            'transition': '1s',
        });
        $(".modal, .modal-confirm, .modal-ajax").css('opacity', '0.5');
    });

    //closing //

    $(".window-confirm a.closing, .window-confirm .cancel").click(function () {
        $(".window-confirm").addClass("disactive");
        $(".window-confirm").removeClass("active");
        $("body").css('background-color', '#eee');
        $(".modal, .modal-confirm, .modal-ajax").css('opacity', '1');
    });

    $(".window-confirm .accept").click(function () {
        alert('Action confirm!');
    });


    //ajax button //

    $(".modal-ajax .alert a").click(function () {
        $(".window-ajax").removeClass("disactive");
        $(".window-ajax").addClass("active");
        $("body").css({
            'background-color': 'rgba(0,0,0,0.7)',
            'transition': '1s',
        });
        $(".modal, .modal-confirm, .modal-ajax").css('opacity', '0.5');
    });

    //closing //

    $(".window-ajax a.closing, .window-ajax .cancel").click(function () {
        $(".window-ajax").addClass("disactive");
        $(".window-ajax").removeClass("active");
        $("body").css('background-color', '#eee');
        $(".modal, .modal-confirm, .modal-ajax").css('opacity', '1');
    });

    $(".window-ajax .accept").click(function () {
        alert('Action modal');
    });



    // accordion menu //

    $(".accordion .list a").click(function () {

        $(".accordion li .menu").each(function () {
            $(this).slideUp(2000);
        });

        if ($(this).next().css("display") == "none") {
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }


    });

});