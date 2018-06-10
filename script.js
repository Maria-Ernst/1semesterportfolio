let basicWeb = document.querySelector("#basicweb");
let basicWeb2 = document.querySelector(".basicweb");

let basicAnimation = document.querySelector("#basicanimation");
let basicAnimation2 = document.querySelector(".basicanimation");

let basicContent = document.querySelector("#basiccontent");
let basicContent2 = document.querySelector(".basiccontent");


let basicUx = document.querySelector("#basicux");
let basicUx2 = document.querySelector(".basicux");

basicWeb.addEventListener("click", click1);

function click1(){
    console.log('basic web');
    basicWeb2.style.display="block";
    basicWeb2.classList.toggle("click1");
    basicWeb2.classList.add(".click1");
    basicAnimation2.style.display="none";
    basicContent2.style.display="none";
    basicUx2.style.display="none";

}

basicAnimation.addEventListener("click", click2);

function click2(){
    console.log('basic animation');
    basicAnimation2.style.display="block";
    basicAnimation2.classList.toggle("click2");
    basicAnimation2.classList.add(".click2");
    basicWeb2.style.display="none";
    basicContent2.style.display="none";
    basicUx2.style.display="none";
}

basicContent.addEventListener("click", click3);

function click3(){
    console.log('basic content');
    basicAnimation2.style.display="none";
    basicContent2.style.display="block";
    basicContent2.classList.toggle("click3");
    basicContent2.classList.add(".click3");
    basicWeb2.style.display="none";
    basicUx2.style.display="none";
}

basicUx.addEventListener("click", click4);

function click4(){
    console.log('baisc ux');
    basicContent2.style.display="none";
    basicUx2.style.display="block";
    basicUx2.classList.toggle("click4");
    basicUx2.classList.add(".click4");
    basicWeb2.style.display="none";
    basicAnimation2.style.display="none";
}




