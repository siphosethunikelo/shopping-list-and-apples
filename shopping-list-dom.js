// shopping-list dom code here

var enterBtnElem = document.querySelector("enterBtn");

var resetBtnElem = document.querySelector(".resetBtn");
var counterElem = document.querySelector("counter");
var buttonElem = document.querySelector("button");

var inputNameElem = document.getElementById("msg");
var couterElem = document.getElementById("counter");
var showtopicElem = document.getElementById("showtopic");

function nameButton(){
    var UpperCase = document.querySelector(".text-box ").value;
    var checkedNameBtnElem = document.querySelector("input[name='myradio']:checked");
} 
if (checkedNameBtnElem.value === "price"){
    document.querySelector("#msg").innerHTML = shoppinglistInstance.product(name);
} else if(checkedNameBtnElem.value === "product"){
    document.querySelector("#msg").innerHTML = shoppinglistInstance.product(name);
} else if(checkedNameBtnElem.value === "qty"){
    document.querySelector("#msg").innerHTML = shoppinglistInstance.product(name);
}

buttonElem.addEventListener('click', nameButton);