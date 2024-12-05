// eye password
document.querySelectorAll(".eye").forEach((eye) => {
    eye.addEventListener("click", () => {
        const password = eye.closest(".password-container").querySelector(".password");
        if (password.type === "password") {
            password.type = "text";
            eye.src = "../src/img/icon/hide-password.svg";
        } else {
            password.type = "password";
            eye.src = "../src/img/icon/eye-password.svg";
        }
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const usernameInput = document.getElementById("fieldActive");
//     if (usernameInput) {
//         usernameInput.focus();
//     }
// });



const closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", (e) => {
    console.log("tes 1")
    if (e.target.id == "closeModal") {
        // const buttonClose = document.getElementById("buttonClose");
        console.log("klik di luar konent")
    }
})
