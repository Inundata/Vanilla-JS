const body = document.querySelector("body"); //backgrounnd functions as body\

const IMG_NUMBER = 4; // number of img files

function printImage(imgNumber) {
  const image = new Image();
  image.src = `js/images/${imgNumber + 1}.jpg`; //math.floor can return 0, so adding 1
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  //img파일을 불러오기 위해 숫자 생성(img파일이 숫자)
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  printImage(randomNumber);
}

init();
