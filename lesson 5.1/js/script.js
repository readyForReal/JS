//                               1.1.1

let menuItem = document.getElementsByClassName("menu-item");

menuItem[1].innerHTML = 'Второй пункт';
menuItem[2].innerHTML = 'Третий пункт';

//                               1.1.2

let menu = document.querySelector(".menu"),
    li = document.createElement("li");

li.classList.add("menu-item");
li.innerHTML = "Fifth пунктa";
menu.appendChild(li);

//                               1.2

document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

//                               1.3

document.querySelector(".title").innerHTML = 
    "Мы продаем только подлинную технику Apple";

//                               1.4

let ad = document.querySelector(".adv");
ad.parentElement.removeChild(ad);

//                               1.5

document.querySelector(".prompt").innerHTML = 
    prompt("How do you feel about APPLE brand ?");
