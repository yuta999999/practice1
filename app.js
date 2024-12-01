const $p = document.getElementById("text");
const $button = document.getElementById("changeTextButton");


$button.addEventListener("click", function(){
  $p.innerText = "テキストが変更されました！";
})


