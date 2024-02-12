
setInterval(function () {
    secondPlay()
}, 1000);




function secondPlay() {
    const nowTime = getTime();
    console.log(nowTime[3] + " : " + nowTime[4] + " : "+ nowTime[5]);
    $("body").removeClass("play");
    var aa = $(".sec ul.secondPlay li.active");
    if (nowTime[5]%10 == 0 || $(".sec ul.minutePlay li.active").html() == undefined){
        minutePlay();
    }
    if (aa.html() == undefined) {
        aa = $(".sec ul.secondPlay li").eq(nowTime[5]%10-1);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $(".sec ul.secondPlay li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $(".sec ul.secondPlay li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $(".sec ul.secondPlay li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}
function minutePlay() {
    const nowTime = getTime();
    $("body").removeClass("play");
    var aa = $(".sec ul.minutePlay li.active");
    
    if (nowTime[5]/10 == 0 || $(".min ul.minutePlay li.active").html() == undefined){
        minPlay1();
    }

    if (aa.html() == undefined) {
        aa = $(".sec ul.minutePlay li").eq(parseInt(nowTime[5]/10)-1);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $(".sec ul.minutePlay li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $(".sec ul.minutePlay li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $(".sec ul.minutePlay li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}
function minPlay1() {
    const nowTime = getTime();
    $("body").removeClass("play");
    var aa = $(".min ul.secondPlay li.active");
    if (nowTime[4]%10 == 0 || $(".min ul.minutePlay li.active").html() == undefined){
        minPlay2();
    }
    if (aa.html() == undefined) {
        aa = $(".min ul.secondPlay li").eq(nowTime[4]%10-1);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $(".min ul.secondPlay li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $(".sec ul.secondPlay li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $(".min ul.secondPlay li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}

function minPlay2() {
    const nowTime = getTime();
    $("body").removeClass("play");
    var aa = $(".min ul.minutePlay li.active");

    if (aa.html() == undefined) {
        aa = $(".min ul.minutePlay li").eq(parseInt(nowTime[4]/10)-1);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $(".min ul.minutePlay li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $(".sec ul.minutePlay li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $(".min ul.minutePlay li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}

function getTime() {
    let date = new Date();
    dataValues = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
    ];
    return dataValues;
}