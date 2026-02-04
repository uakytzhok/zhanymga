"use strict";

/** * Список путей к вашим гифкам в папке img.
 * Расположите их в порядке "утяжеления" отказа.
 */
const tontonGifs = [
  "./gif/uraa.gif", // Исходная гифка (совпадает с index.html)
  "./gif/grustny.gif",   // После 1-го нажатия "Нет"
  "./gif/grustny.gif",   // После 2-го нажатия "Нет"
  "./gif/grustny2.gif",   // После 3-го нажатия "Нет"
  "./gif/grustny2.gif",   // После 4-го нажатия "Нет"
  "./gif/grustny2.gif",   // После 5-го нажатия "Нет"
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".gif");

const MAX_IMAGES = 5; // Максимальное количество смен картинок для "Нет"
let play = true;
let noCount = 0;
let yesButtonSize = 1;
let noButtonSize = 1;

// Логика при нажатии на "Да"
yesBtn.addEventListener("click", () => {
  title.innerHTML = "Мен сены суйем жан💗";
  btnContainer.classList.add("hidden");
  changeImage("yes");
});

// Логика при нажатии на "Нет"
noBtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeYesButton() {
  yesButtonSize *= 1.2;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
}

function shrinkNoButton() {
  noButtonSize *= 0.90;
  noBtn.style.transform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
  const messages = ["Жо 😔",
    "Уверенсынба 🥺",
    "Е кой болд 🥹",
    "Журекты ауыртпаш 😭",
    "Слезы текли напрво 💔",
    "Слезы текли налево 😭💔",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  // Если нажато "Да", берем победную гифку, иначе — из массива по индексу
  img.src =
    image === "yes"
      ? "./gif/final.gif" // Путь к вашей финальной гифке
      : tontonGifs[image];
}

function updateNoButtonText() {
  noBtn.innerHTML = generateMessage(noCount);
}
