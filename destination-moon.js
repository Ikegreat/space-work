const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const parentMenu = document.getElementById("parentMenu");

openBtn.addEventListener("click", ()=> {
    parentMenu.classList.add("active");
    openBtn.style.display = "none";
    closeBtn.style.display = "block"
});
closeBtn.addEventListener("click", () =>{
    parentMenu.classList.remove("active");
    closeBtn.style.display = "none"
    openBtn.style.display = "block"
});