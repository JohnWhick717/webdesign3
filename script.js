const mobile = document.getElementById("mobile");
const navBar = document.getElementById("NavBar");
const close = document.getElementById("close");

mobile.addEventListener("click", () => {
    navBar.classList.add("active");
});

close.addEventListener("click", () => {
    navBar.classList.remove("active");
});
