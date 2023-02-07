let bank = document.querySelectorAll("#payment-way div");
let check = document.querySelectorAll(".payment .row label");



check.forEach(ch => {
  ch.onclick = () => {
    bank.forEach(el => {
      el.classList.remove("active-pay");
      if( el.getAttribute("id") == ch.getAttribute("id")) {
        el.classList.toggle("active-pay")
        }
    });
  }
});