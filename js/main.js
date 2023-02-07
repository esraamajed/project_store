let login_form = document.querySelector(".login-form");
let sign = document.querySelector(".sign span");
let btn_login = document.querySelector(".btn-login a");
let btn_products = document.querySelector(".btn-products a");

let products_form = document.querySelector(".show");
let exitnav = document.querySelector(".exitnav");
let exit = document.querySelector(".exit");

let serch_nav = document.querySelector(".serch-nav");
let point_serch = document.querySelector(".point-serch .serch");

let points = document.querySelector(".points ");
let sidebar = document.querySelector(".sidebar")
let exit2 = document.querySelector(".exit2");



exitnav.onclick = () => {
  products_form.classList.remove("active");
}

exit.onclick = () => {
  login_form.classList.remove("active");
}

btn_login.onclick = () => {
  login_form.classList.add("active");
}

sign.onclick = () => {
  login_form.classList.add("active");
}


btn_products.onclick = () => {
  products_form.classList.add("active");
}

point_serch.onclick = () => {
  serch_nav.classList.add("active");
}
points.onclick = () => {
  sidebar.classList.add("active");
}

exit2.onclick = () => {
  sidebar.classList.remove("active");
}




