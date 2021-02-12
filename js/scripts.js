const roles = ['a surfer', 'a traveller', 'a runner', 'a developer', 'a handyman', 'just a guy']

setInterval(function () { randomRole() }, 2000);

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
