const form = document.getElementById("middleRightDiv")
const errMsg = document.getElementById("errorMessage");
const psw = document.getElementById("user_password")
const confPsw = document.getElementById("confirm_password")

confPsw.addEventListener("input", () => {
    if (psw.value != confPsw.value) {
        errMsg.innerHTML = "*Password do not match.";
    } else {
        errMsg.innerHTML = "";
    }
});

