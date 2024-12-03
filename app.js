// 問題１
const $p = document.getElementById("text");
const $1button = document.getElementById("changeTextButton");
let OnOff = true;
$1button.addEventListener("click", function(){
  if(OnOff){
    $p.innerText = "テキストが変更されました！";
    OnOff = false;
  }else{
    $p.innerText = "このテキストを変更してください。"
    OnOff = true;
  }
  
})

// 問題２
const $2button = document.getElementById("colorButton");
$2button.addEventListener("click",function(){
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const $body = document.querySelector("body");
  console.log($body);
  console.log(randomColor);
  $body.style.backgroundColor = randomColor;
})

// 問題３
const $3button = document.getElementById("addItemButton");
const $ul1 = document.getElementById("itemList");
$3button.addEventListener("click",function(){
  const $li1 = document.createElement("li");
  $li1.innerText = `新しいアイテム ${$ul1.getElementsByTagName("li").length + 1 } `   ;
  
  const $3_2button = document.createElement("button");
  $3_2button.textContent = "削除";
  $3_2button.addEventListener("click",function(){
    $li1.remove();
    $3_2button.remove();
  })
  $ul1.appendChild($li1);
  $ul1.appendChild($3_2button);
  })


// 問題４
const $input = document.getElementById("nameInput");
const $p2 = document.getElementById("displayName");
$input.addEventListener("input",function(){
  $p2.textContent = $input.value || "ここに名前が表示されます。";
}) 

// 問題５
const $PulsButton = document.getElementById("incrementButton");
const $MinusButton = document.getElementById("decrementButton");
const $span = document.getElementById("counter"); 
let Cou = 0 ;

$PulsButton.addEventListener("click",function(){
  Cou++;
  $span.textContent = Cou;
  console.log(Cou);
});

$MinusButton.addEventListener("click",function(){
  Cou--;
  $span.textContent = Cou;
  console.log(Cou);
});

// 問題６
const $TabB1 = document.getElementById("tab1Button");
const $TabB2 = document.getElementById("tab2Button");
const $TabCon1 = document.getElementById("tab1Content");
const $TabCon2 = document.getElementById("tab2Content");

$TabB1.addEventListener("click",function(){
  $TabCon1.style.display = "block";
  $TabCon2.style.display = "none";
})

$TabB2.addEventListener("click",function(){
  $TabCon1.style.display = "none";
  $TabCon2.style.display = "block";
})

// 問題７
const $form = document.getElementById("myForm");
const $input2 = document.getElementById("emailInput");
const $p3 = document.getElementById("errorMessage");

$form.addEventListener("submit",function(e){
  e.preventDefault();
  if($input2.value.trim()){
    $p3.style.display = "none";
    $input2.value = "";
  }else{
    $p3.style.display = "block";
  }
})

// 問題８
const $input3 = document.getElementById("todoInput");
const $4button = document.getElementById("addTodoButton");
const $ul2 = document.getElementById("todoList");

$4button.addEventListener("click",function(){
  if($input3.value.trim()){
    const $li2 = document.createElement("li");
    $li2.innerText = $input3.value;
    const $5button = document.createElement("button");
    $5button.innerText = "削除"
    $ul2.appendChild($li2);
    $ul2.appendChild($5button);
    $input3.value = "";

    $5button.addEventListener("click",function(){
      $li2.remove();
      $5button.remove();
    })
  }
})

// 問題９

const $6button = document.getElementById("openModalButton");
const $div = document.getElementById("modal");
const $7button = document.getElementById("closeModalButton");

$6button.addEventListener("click",function(){
  $div.style.display ="flex";
});

$7button.addEventListener("click",function(){
  $div.style.display="none";
});

$div.addEventListener("click",function(e){
  if(e.target === $div){
    $div.style.display="none";
  }
});
