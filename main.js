const hamburger_icon = document.querySelector(".collapsed-navbar-icon");
hamburger_icon.addEventListener("click", () => {
  console.log("clicked");
  const navbar = document.querySelector(".navbar");
  if (navbar.classList.contains("responsive")) {
    navbar.classList.remove("responsive");
  } else {
    navbar.classList.add("responsive");
  }
});
