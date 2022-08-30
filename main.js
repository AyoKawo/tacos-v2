const sideMenu = document.querySelector(".beginner");
const openFace = document.querySelector(".open");
const closedFace = document.querySelector(".close");

openFace.addEventListener("click", () => {
  sideMenu.style.display = "flex";

  if (closedFace.classList.contains("close")) {
    closedFace.classList.add("active");
    openFace.classList.remove("active");
  }
});

closedFace.addEventListener("click", () => {
  sideMenu.style.display = "none";

  if (openFace.classList.contains("open")) {
    openFace.classList.add("active");
    closedFace.classList.remove("active");
  }
});
