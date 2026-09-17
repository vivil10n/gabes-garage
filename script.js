const cars = document.querySelectorAll(".car");

const overlay = document.getElementById("overlay");
const message = document.getElementById("message");
const nameText = document.getElementById("from");
const keyNumber = document.getElementById("key-number");

cars.forEach((car) => {

  car.addEventListener("click", function () {

    const name = car.dataset.name;
    const carMessage = car.dataset.message;
    const number = car.dataset.number;

    message.textContent = carMessage;

    keyNumber.textContent = "KEY " + number;

    nameText.innerHTML =
      '<span class="to">for ' + name + '</span>' +
      '<span class="gabe">- Gabe</span>';

    overlay.classList.add("show");

  });

});

overlay.addEventListener("click", function (event) {

  if (event.target === overlay) {
    overlay.classList.remove("show");
  }

});

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {
    overlay.classList.remove("show");
  }

});