const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
});
