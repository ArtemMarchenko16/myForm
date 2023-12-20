function onLoad() {
    setTimeout(() => {
        var styless = document.getElementById("loader-container");
        styless.style.display = "none";
    }, 2000);
};

function onButtonClick() {

    if (!validateAge()) {
        return;
    };

    if (!validateForm()) {
        return;
    };

    changeColor();

    if (!validatePassword()) {
        return;
    };

    var data = {
        name: document.getElementById("inputName").value,
        Username: document.getElementById("inputUsername").value,
        Email: document.getElementById("inputEmail").value,
        // Date: document.getElementById("inputDate").value 
    };
    var stringifiedData = JSON.stringify(data);
    localStorage.setItem('registrationDate', stringifiedData);
    document.location.assign("second.html");
};

function validateAge() {
    var today = new Date();
    var year = today.getFullYear();
    var valueInputDate = document.getElementById("inputDate").value;
    var getYearInput = new Date(valueInputDate);
    var getUserYear = getYearInput.getFullYear();

    if (getUserYear > (year - 18)) {
        alert("Error, registration only 18+");
        return false;
    };
    return true;
};

function validatePassword() {
    var inputFirstPassword = document.getElementById("firstPassword").value;
    var inputSecondPassword = document.getElementById("secondPassword").value;
    if (inputFirstPassword != inputSecondPassword) {
        alert("Error!!! Wrong password!");
        return false;
    };
    return true;
};

function validateForm() {
    if (document.getElementById("inputName").value == "") {
        alert("Error!!! Please fill in all fields)");
        return false;
    };
    if (document.getElementById("inputEmail").value == "") {
        alert("Error!!! Please fill in all fields)");
        return false;
    };
    if (document.getElementById("inputDate").value == "") {
        alert("Error!!! Please fill in all fields)");
        return false;
    };
    if (document.getElementById("inputUsername").value == "") {
        alert("Error!!! Please fill in all fields)");
        return false;
    };
    if (document.getElementById("firstPassword").value == "") {
        alert("Error!!! Please fill in all fields)");
        return false;
    };
    if (document.getElementById("secondPassword").value == "") {
        alert("Error!!! Please fill in all fields)");
        return false;
    };
    return true;
};

function changeColor() {
    if (document.getElementById("change").style.backgroundColor !== "red") {
        document.getElementById("change").style.backgroundColor = "red";
    } else {
        document.getElementById("change").style.backgroundColor = "green";
    };
};