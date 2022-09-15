let hoverLinks = document.querySelectorAll("nav ul li a");
let dark = document.getElementById("dark");
let dark_icon = document.getElementById("dark-icon");
let txt_header = document.getElementById("txt-header");
let header_details = document.getElementById("header-details");
let featureOneDark_h1 = document.getElementById("feature-one-dark-h1");
let featureTwoDark_h1 = document.getElementById("feature-two-dark-h1");
let footerContent = document.getElementById("footer-content");
let logo = document.getElementById("logo");

hoverLinks.forEach((a) => {
  a.addEventListener("mousemove", (e) => {
    hoverLinks.forEach((a) => {
      //remove active class from all a element
      a.classList.remove("focus");
    });
    //add active class to currentTarget element
    e.target.setAttribute("class", "focus");
  });
  a.addEventListener("mouseleave", (e) => {
    //remove class focus after the mouse move on element
    a.classList.remove("focus");
  });
});
//add dark mode
dark.onclick = (_) => {
  if (dark_icon.classList.value === "fa-solid fa-moon") {
    dark_icon.className = "fa-solid fa-sun";
    dark.style.backgroundColor = "white";
  } else {
    dark.style.backgroundColor = "black";
    dark_icon.className = "fa-solid fa-moon";
  }
  document.body.classList.toggle("dark-mode");
  txt_header.classList.toggle("dark-txt-header");
  header_details.classList.toggle("header-details");
  featureOneDark_h1.classList.toggle("feature-one-dark-h1");
  featureTwoDark_h1.classList.toggle("feature-two-dark-h1");
  footerContent.classList.toggle("dark-footer-content");
  logo.classList.toggle("dark-logo");
};
