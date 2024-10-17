// document.addEventListener("mousemove",function(dets){
//     gsap.to("#cursor",{
//      x:dets.x,
//      y:dets.y,
//      duration:0.3
//     })
//    })

document.addEventListener("mousemove", function(dets){
    gsap.to(".cursor-blur",{
        delay:0.3,
        x:dets.x,
        y:dets.y,
    })
})
let cursor = document.querySelector("#cursor")
let blurr = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x - 8 + "px"
    cursor.style.top = dets.y - 8 + "px"
    // blurr.style.left = dets.x  + "px"
    // blurr.style.top = dets.y  + "px"
})

let area = document.querySelector("#card-container")
area.addEventListener("mouseenter", () =>{
    cursor.style.zIndex = "0" ; 
})
area.addEventListener("mouseleave", () =>{
    cursor.style.zIndex = "99" ; 
})

let allh4 = document.querySelectorAll("#nav h4")
allh4.forEach((elem) =>{
    elem.addEventListener("mouseenter", () =>{ 
        cursor.style.scale = 4
        cursor.style.border = "0.5px solid white"
        cursor.style.backgroundColor = "transparent"
        elem.style.color = "black"
    })
    elem.addEventListener("mouseleave", () =>{
        cursor.style.scale = 1
        cursor.style.border = "none"
        cursor.style.backgroundColor = "#95C11E"
        elem.style.color = "white"
})
})
gsap.to("#nav",{
    backgroundColor: "#000",
    height: "4.5em",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub:2.5
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity: 0,
    duration:1,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        start: "top 70%",
        end: "top 68%",
        scrub: 2
     }
})

gsap.from("#card-container",{
    scale:0.5,
    opacity: 0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        start: "top 60%",
        end: "top 58%",
        scrub: 2
     }
})

gsap.from("#colon-left",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon-left",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3.5
    }
})
gsap.from("#colon-right",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#colon-left",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3.5
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3.5
    }
})



let chk1 = document.querySelector(".check1");
let chk2 = document.querySelector(".check2");
let chk3 = document.querySelector(".check3");

chk1.addEventListener("click", () => {
    showImage("#img1");
});
chk2.addEventListener("click", () => {
    showImage("#img2");
});
chk3.addEventListener("click", () => {
    showImage("#img3");
});

function showImage(imgId) {
    let img1 = document.querySelector("#img1");
    let img2 = document.querySelector("#img2");
    let img3 = document.querySelector("#img3");

    img1.style.animation = "none";
    img2.style.animation = "none";
    img3.style.animation = "none";
 
    img1.style.opacity = "0";
    img1.style.zIndex = "1";
    img2.style.opacity = "0";
    img2.style.zIndex = "1";
    img3.style.opacity = "0";
    img3.style.zIndex = "1";

    let img = document.querySelector(imgId);
    img.style.opacity = "1";
    img.style.zIndex = "99";
}


function restartAnimation() {
    let img1 = document.querySelector("#img1");
    let img2 = document.querySelector("#img2");
    let img3 = document.querySelector("#img3");

    img1.style.animation = "";
    img2.style.animation = "";
    img3.style.animation = "";
}


setInterval(restartAnimation, 15000); 
