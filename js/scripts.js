const roles = ['a developer', 'a surfer', 'a traveller', 'a runner']

setInterval(function () { randomRole() }, 2000);

var i = 0;
function randomRole() {
    var iam = document.getElementById("i-am");
    i = i < roles.length - 1 ? i + 1 : 0;
    iam.innerHTML = ''
    j = 0
    typeWriter(iam, roles[i])
}

var j = 0;
var speed = 50;
// tryin to make a typing effect, but using setInervat + setTimeout is not a good idea
function typeWriter(elem, txt) {
    if (j < txt.length) {
        elem.innerHTML += txt.charAt(j)
        j++;
        setTimeout(typeWriter(elem, txt), speed);
    }
}
