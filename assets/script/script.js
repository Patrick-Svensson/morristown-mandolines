"use strict";

// ***** Variables *****
const slideInMenu = document.querySelector(".navbar__toggler");
const slideOutMenu = document.querySelector(".navbar__link--close");
const termsBtn = document.querySelector(".cartTermsBtn");
const checkoutBtn = document.querySelector(".cartCheckoutBtn");
const modal = document.querySelector(".modal-container");
const closeButton = document.querySelector(".modal__X-wrapper");
const page = document.querySelector(".page");
const open = document.querySelector("#navDropdownMenu");

// ***** Toggle Dropdown Menu *****
slideInMenu.addEventListener("click", () => {
    open.classList.add("menu");
    document.querySelector(".navbar__link-wrapper").classList.add("navbar__link-wrapper--slide");
    document.querySelector(".navbar__toggler").classList.add("navbar__toggler--hide");
});

slideOutMenu.addEventListener("click", () => {
    document.querySelector(".navbar__toggler").classList.remove("navbar__toggler--hide");
    document.querySelector(".navbar__link-wrapper").classList.remove("navbar__link-wrapper--slide");
});

// ***** Check Checkbox *****
function checkoutBtnActive() {
    document.querySelector("#cartTerms").checked == true
        ? checkoutBtn.classList.add("cartCheckoutBtnActive")
        : checkoutBtn.classList.remove("cartCheckoutBtnActive");
}

// ***** Toggle Modal *****
termsBtn.addEventListener("click", () => {
    modal.classList.toggle("ActivateModalContainer");
});

closeButton.addEventListener("click", () => {
    modal.classList.toggle("ActivateModalContainer");
});

page.addEventListener("click", function (closeModal) {
    if (closeModal.target === modal) {
        modal.classList.toggle("ActivateModalContainer");
    }
});
