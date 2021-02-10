const roles = ['a developer', 'a surfer', 'a traveller', 'a runner']

setInterval(function () { randomRole() }, 2000);
var i = 0;
function randomRole() {
    var iam = document.getElementById("i-am");
    i = i < roles.length - 1 ? i + 1 : 0;
    iam.innerHTML = roles[i];
}
