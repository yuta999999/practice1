const $p = document.getElementById("text");
const $1button = document.getElementById("changeTextButton");
const $2button = document.getElementById("colorButton");

$1button.addEventListener("click", function(){
  $p.innerText = "テキストが変更されました！";
})

$2button.addEventListener("click",function(){
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const $body = document.querySelector("body");
  console.log($body);
  console.log(randomColor);
  $body.style.backgroundColor = randomColor;
})
