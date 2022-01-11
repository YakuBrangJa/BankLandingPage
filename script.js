const menuBtn = document.querySelector(".menu-btn");
const menuBtn2 = document.querySelector(".menu-btn2");
const rqBtn = document.querySelectorAll(".request-btn");
const navigation = document.querySelector(".navigation");
const closeWindow = document.querySelector(".close-window");
const formWindow = document.querySelector(".section-login");

menuBtn.onclick = () => {
  navigation.classList.toggle("navigation-active");
  navigation.style.display = "flex";
  menuBtn.classList.toggle("menu-btn-active");
  menuBtn2.classList.add("menu-btn2-active");
  closeWindow.style.display = "block";
};
function closeMenu() {
  navigation.classList.remove("navigation-active");
  menuBtn.classList.remove("menu-btn-active");
  menuBtn2.classList.remove("menu-btn2-active");
  formWindow.classList.remove("section-login-active");
  closeWindow.style.display = "none";
}
menuBtn2.onclick = () => {
  closeMenu();
};

closeWindow.onclick = () => {
  closeMenu();
};

rqBtn.forEach((e) => {
  e.onclick = () => {
    formWindow.classList.toggle("section-login-active");
    closeWindow.style.display = "block";
  };
});
