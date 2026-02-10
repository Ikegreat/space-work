const parentMenu = document.getElementById("parent-menu");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click",() => {
    parentMenu.classList.add("active");
    openBtn.style.display = "none";
    closeBtn.style.display = "block";

})
closeBtn.addEventListener("click", () =>{
    parentMenu.classList.remove("active");
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
})
