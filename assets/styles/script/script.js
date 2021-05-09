// ***** Dropdown Menu *****

const slideInMenu = document.querySelector(".navbar__toggler");
const slideOutMenu = document.querySelector(".navbar__link--close");

slideInMenu.addEventListener("click", () => {
    document.querySelector(".navbar__link-wrapper").classList.remove("animate__slideOutRight");
    document.querySelector(".navbar__link-wrapper").classList.add("animate__slideInRight");
});

slideOutMenu.addEventListener("click", () => {
    document.querySelector(".navbar__link-wrapper").classList.remove("animate__slideInRight");
    document.querySelector(".navbar__link-wrapper").classList.add("animate__slideOutRight");
});

function openMenu() {
    let open = document.querySelector("#navDropdownMenu");
    open.classList.add("menu");
}
