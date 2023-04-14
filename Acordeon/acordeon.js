const clicar = document.querySelectorAll("dt");
const desc = document.querySelectorAll("dd");

clicar.forEach((e, _idx) => {
  e.addEventListener("click", () => {
    desc.forEach((desc, index) => {
      if (_idx === index) {
        desc.style.display = "block";
      } else {
        desc.style.display = "none";
      }
    });
  });
});
