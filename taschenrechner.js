const button = document.getElementById("showCode");
const code = document.getElementById("pythonCode");

button.addEventListener("click", function () {

    if (code.style.display === "none") {

        code.style.display = "block";
        button.innerHTML = "Hide Code";

    } else {

        code.style.display = "none";
        button.innerHTML = "Show Code";

    }

});