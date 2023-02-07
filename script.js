const openMenuBtn = document.querySelector(".open_btn"),
  closeMenuBtn = document.querySelector(".close_btn"),
  dropdownMenuContainer = document.querySelector(".dropdown_menu_container"),
  selects = document.querySelectorAll(".select");

openMenuBtn.addEventListener("click", () => {
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
  dropdownMenuContainer.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
  openMenuBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
  dropdownMenuContainer.style.display = "none";
  
});

selects.forEach((select, index) => {
  select.addEventListener("click", () => {
    select.classList.toggle("active");
    select.nextElementSibling.classList.toggle("active");
    checkOpenMenu(index);
  });
});

function checkOpenMenu(index1) {
  selects.forEach((select, index2) => {
    if (index1 !== index2) {
      select.classList.remove("active");
      select.nextElementSibling.classList.remove("active");
    }
  });
}

console.log(selects);
