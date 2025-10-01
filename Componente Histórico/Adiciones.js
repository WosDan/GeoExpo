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

let botonCorteza = document.getElementById("corteza");
let dialogCorteza = document.getElementById("dialog-corteza");

botonCorteza.addEventListener("click", () => {
  dialogCorteza.showModal();
});

let botonMantoSup = document.getElementById("mantosup");
let dialogMantoSup = document.getElementById("dialog-mantoSup");

botonMantoSup.addEventListener("click", () => {
  dialogMantoSup.showModal();
});

let botonManto = document.getElementById("manto");
let dialogManto = document.getElementById("dialog-manto");

botonManto.addEventListener("click", () => {
  dialogManto.showModal();
});

let botonNExt = document.getElementById("nExt");
let dialogNExt = document.getElementById("dialog-nExt");

botonNExt.addEventListener("click", () => {
  dialogNExt.showModal();
});

let botonNInt = document.getElementById("nInt");
let dialogNInt = document.getElementById("dialog-nInt");

botonNInt.addEventListener("click", () => {
  dialogNInt.showModal();
});

let botonDMoho = document.getElementById("dMoho");
let dialogDMoho = document.getElementById("dialog-dMoho");

botonDMoho.addEventListener("click", () => {
  dialogDMoho.showModal();
});

let botonDRepetti = document.getElementById("dRepetti");
let dialogDRepetti = document.getElementById("dialog-dRepetti");

botonDRepetti.addEventListener("click", () => {
  dialogDRepetti.showModal();
});

let botonDGutenberg = document.getElementById("dGutenberg");
let dialogDGutenberg = document.getElementById("dialog-dGutenberg");

botonDGutenberg.addEventListener("click", () => {
  dialogDGutenberg.showModal();
});

let botonDLehmann = document.getElementById("dLehmann");
let dialogDLehmann = document.getElementById("dialog-dLehmann");

botonDLehmann.addEventListener("click", () => {
  dialogDLehmann.showModal();
});