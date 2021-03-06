var popovers = {
    apps: false,
    meta: false
};

$(document).ready(function() {
    // Image Preloader
    $.preload_img = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
        }
    };

    // Right Click (Context Menu)
    $(document).on("contextmenu", function(e) {
        //e.preventDefault();
        // return false;
    });

    $(document).click(function(e) {
        // return false;
    });

    // Open App Launcher
    $("#app_launcher").click(function(e) {
        if (popovers.apps) {
            $(".launcher").fadeOut(25);
            $("#app_launcher").removeClass("active");
            popovers.apps = false;
        } else if (!popovers.apps) {
            $(".launcher").fadeIn(50);
            $("#app_launcher").addClass("active");
            popovers.apps = true;
        }
    });

    // Close App Launcher on click
    $(".launcher .categories span").click(function(e) {
        console.log(e);

        $(".launcher").fadeOut(25);
        $("#app_launcher").removeClass("active");
        popovers.apps = false;
    });

    // Open Metabar Popover
    $("#meta_launcher").click(function() {
        if (popovers.meta) {
            $(".metabar-popover").fadeOut(25);
            $(".metabar .trigger").removeClass("active");
            popovers.meta = false;
        } else if (!popovers.meta) {
            $(".metabar-popover").fadeIn(50);
            $(".metabar .trigger").addClass("active");
            popovers.meta = true;
        }
    });

    // System Clock
    function clock() { $("#meta_time").text(moment().format("h:mm A")); }
    setInterval(clock, 1000);
    clock();
});

$(window).load(function() {
    setTimeout(function() {
        // Notification
        new OS().Notification({
            title: "System",
            type: 1,
            icon: "./icons/system.png",
            message: "Initialization Complete"
        });

        // Alert
        /*new OS().Alert({
            title: "地震警報",
            message: "緊急地震速報<br>岩手県で地震発生。強い揺れに備えて下さい（気象庁）"
            //title: "System Error",
            theme: "dark"
            //message: "Error occured in the main process. Check the JavaScript console for more details."
        });*/
    }, 1000);
});
