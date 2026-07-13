```javascript
/*==========================================
MILITARY PORTFOLIO
JavaScript
==========================================*/


/*=============
Loading Screen
=============*/

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    loading.style.opacity = "0";

    loading.style.visibility = "hidden";

});


/*=============
Typing Effect
=============*/

const typing = document.querySelector(".typing");

const words = [

    "Web Developer",

    "HTML Developer",

    "CSS Designer",

    "Military Student"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();


/*=============
Navbar Active
=============*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top = section.offsetTop-200;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});
```
```javascript
/*==========================================
Scroll Reveal
==========================================*/

const revealElements = document.querySelectorAll(
".hero,.about,.skills,.works,.contact,.title,.work-card,.contact-card"
);

function reveal(){

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight-100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();
```
```javascript
/*==========================================
Back To Top
==========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
```

