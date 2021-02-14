const roles = ['a surfer', 'a traveller', 'a runner', 'a developer', 'a handyman', 'just a guy']

var i = 0;
function randomRole() {
    var iam = document.getElementById("i-am");
    iam.innerHTML = ''
    j = 0
    typeWriter(iam, roles[i])
    i = i < roles.length - 1 ? i + 1 : 0;
}

var j = 0;
var speed = 50;
// TODO: tryin to make a typing effect
function typeWriter(elem, txt) {
    if (j < txt.length) {
        elem.innerHTML += txt.charAt(j)
        j++;
        setTimeout(typeWriter(elem, txt), speed);
    }
}

const tripsPics = [
    { file: "moscow.jpeg", desc: "me in the red square @Moscow" },
    { file: "surfers paradise.jpeg", desc: "me just landed @SurfersParadise" },
    { file: "surfing.jpeg", desc: "one of the first waves i've rided @SnapperRocks" },
    { file: "xmas aus.jpeg", desc: "celebrating x-mas at summer-time is a strange experience @Australia" },
    { file: "broken leg.jpeg", desc: "X-Ray after my surgery @Barcelona" },
    { file: "skydive.jpeg", desc: "skydiving despite that i'm affraid of height @Mission Beeach,AUS" },
    { file: "sydney opera.jpeg", desc: "first time you see the Opera looks awesome @Sydney" },
    { file: "sydney half marathon.jpeg", desc: "me after finishing the Sydney Half Marathon @Sydneey" },
    { file: "van.jpeg", desc: "pic of the good days in the van @Australia" },
    { file: "uluru.jpeg", desc: "Uluru (or Ayers Rock) is onee of the most breath-taking places i've ever been @Australia" },
    { file: "melbourne.jpeg", desc: "me sitting on a typical icon of @Melbourne" },
    { file: "bali.jpeg", desc: "visiting 'tanah lot' @Bali" },
    { file: "hollywood.jpeg", desc: "visiting the Hollywood sign @LA" },
    { file: "banff.jpeg", desc: "walking trough the streets of Banff, in the Rockie Mountains @Canada" },
    { file: "big white.jpeg", desc: "the time i've seen more snow in my life @BigWhite" },
    { file: "whistler.jpeg", desc: "when swiming on a Lake filled with the water of the melted snow, freezing as hell @Whistler" },
]

//fillTirpsPics()
function fillTirpsPics() {
    var tripsPicsDiv = document.getElementById("trips-pictures");
    tripsPicsDiv.innerHTML = '';
    tripsPics.map((i) => {
        var newImg = document.createElement("img");
        newImg.setAttribute("src", 'assets/trips-pics/' + i.file);
        newImg.setAttribute("alt", i.desc);
        newImg.setAttribute("class", "trip-image");
        newImg.setAttribute("loading", "lazy");
        tripsPicsDiv.appendChild(newImg);
    })
}

(function (window, document, undefined) {

    setInterval(function () { randomRole() }, 2000);

    window.onload = init;

    function init() {
        fillTirpsPics()
    }

})(window, document, undefined);
