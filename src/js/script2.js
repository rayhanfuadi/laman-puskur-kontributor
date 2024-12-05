
const closeModalLogin = document.querySelector("#closeModalLogin");
closeModalLogin.addEventListener("click", () => {
    const dataTweOpen = document.querySelector("[data-twe-backdrop-show]");
    const loginModal = document.querySelector(".loginModal");
    const modalOpacity = document.querySelector(".modalOpacity");
    const bodyLogin = document.body;
    console.log("tes klik");

    modalOpacity.classList.toggle("transform-none");
    modalOpacity.classList.toggle("opacity-0");
    modalOpacity.classList.remove("opacity-100");
    loginModal.style.display = "none";
    loginModal.setAttribute("aria-hidden", true);
    loginModal.removeAttribute("aria-modal");
    loginModal.removeAttribute("role");
    loginModal.removeAttribute("data-twe-open");

    bodyLogin.style.cssText = "overflow: auto; padding: 0px";
    bodyLogin.removeAttribute("data-twe-modal-open");
    dataTweOpen.parentNode.removeChild(dataTweOpen);
})


const closeModaRegist = document.querySelector("#closeModalRegist");
closeModaRegist.addEventListener("click", () => {
    const dataTweOpen2 = document.querySelector("[data-twe-backdrop-show]");
    const registModal = document.querySelector(".registModal");
    const modalOpacityRegist = document.querySelector(".modalOpacityRegist");
    const bodyRegist = document.body;
    console.log("tes klik");

    modalOpacityRegist.classList.toggle("transform-none");
    modalOpacityRegist.classList.toggle("opacity-0");
    modalOpacityRegist.classList.remove("opacity-100");
    registModal.style.display = "none";
    registModal.setAttribute("aria-hidden", true);
    registModal.removeAttribute("aria-modal");
    registModal.removeAttribute("role");
    registModal.removeAttribute("data-twe-open");

    bodyRegist.style.overflow = "auto";
    bodyRegist.style.padding = "0px";
    bodyRegist.removeAttribute("data-twe-modal-open");
    dataTweOpen2.parentNode.removeChild(dataTweOpen2);
})


