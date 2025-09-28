

let menu = document.querySelectorAll(".menu");

menu.forEach((e) => {
  e.addEventListener("click", () => {
    const panel = e.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});


