function clctoShow(vall) {
    var inputVal = document.querySelector(".input").value;
    if (inputVal != "Input first!") {
        document.querySelector(".input").value += vall;
    } else {
        document.querySelector(".input").value = "";
        document.querySelector(".input").value += vall;
    }
}

function clearDisplay() {
    document.querySelector(".input").value = "";
}

function calculating() {
    var inputVal = document.querySelector(".input").value;

    if (inputVal) {
        var result = eval(inputVal); // calculating with the eval() function
        document.querySelector(".input").value = result;
    } else {
        document.querySelector(".input").value = "Input first!";
    }
}
