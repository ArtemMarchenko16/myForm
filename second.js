function onLoad() {
    var stringifiedData = localStorage.getItem('registrationDate');
    localStorage.removeItem('registrationDate');
    var data2 = JSON.parse(stringifiedData);

    document.getElementById("nameStr").innerText = data2.name;
    document.getElementById("UsernameInput").innerText = data2.Username;
    document.getElementById("emailStr").innerText = data2.Email;
};

function Click() {
    document.location.assign("site.html");
}