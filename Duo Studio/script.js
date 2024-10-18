function smoothscroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  tablet: { smooth: true },

  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
smoothscroll()

var cursor = document.querySelector(".cursor")
function mouse(){
var main = document.querySelector(".main")
document.addEventListener("mousemove", (dets) => {
    gsap.to(cursor,{
        x:dets.clientX,
        y:dets.clientY,
        duration:0.5,
    })
})}
mouse()

var vd = document.querySelector("#vd1")
vd.addEventListener("mouseenter", function(dets) {
  cursor.classList.add("curs-hover");
  cursor.innerHTML = "Sound On";
  gsap.to(cursor,{
    x:dets.clientX + 1 + "px",
    y:dets.clientY + 1 + "px",
    duration:0.5,
})
})
vd.addEventListener("mouseleave", function(dets) {
  cursor.classList.remove("curs-hover");
  cursor.innerHTML = "";
  gsap.to(cursor,{
    x:dets.clientX,
    y:dets.clientY,
    duration:0.5,
})
})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:".main",
        start:"15% 10%",
        end:"20% 10%",
        scrub:3
    },
})
tl.to("#page1 h1",{
    x:-90,
},"badhiyahai")
tl.to("#page1 h2",{
    x:100,
},"badhiyahai")
tl.to("#page1 video",{
    width:"90%",
},"badhiyahai")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:".main",
        start:"40% 100%",
        end:"-40% 0",
        scrub:2
    },
})
tl2.to(".main",{
    backgroundColor:"#fff"
},"bg")

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        scroller:".main",
        start:"80% 100%",
        end:"10% 0",
        scrub:1
    },
})
tl3.to("#page4",{
    color:"#fff",
    backgroundColor:"#0F0D0D",
    borderTop: "2px solid #fff"
},"bg")
tl3.to(".main",{
    color:"#fff",
    backgroundColor:"#0F0D0D"
},"bg")

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", ()=>{
        var att = elem.getAttribute("data-image")
        cursor.style.width = "30vw"
        cursor.style.height = "25vw"
        cursor.style.borderRadius = "0px"
        cursor.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave", ()=>{
        cursor.style.width = ""
        cursor.style.height = ""
        cursor.style.borderRadius = ""
        cursor.style.backgroundImage = `none`
    })
})
var purple = document.querySelector("#purple")
var h4 = document.querySelectorAll("#nav h4")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",()=>{
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",()=>{
        purple.style.display = ""
        purple.style.opacity = ""
    })
})

function purple_banner(){
var word = document.querySelectorAll(".center-content p")
var home = document.querySelector("#nav #HOME")
var work = document.querySelector("#nav #WORK")
var studio = document.querySelector("#nav #STUDIO")
var contact = document.querySelector("#nav #CONTACT")
home.addEventListener("mouseenter", function(){
    word.forEach(function(elem){
        elem.innerHTML = `HOME`
    })
})
work.addEventListener("mouseenter", function(){
    word.forEach(function(elem){
        elem.innerHTML = `WORK`
    })
})
studio.addEventListener("mouseenter", function(){
    word.forEach(function(elem){
        elem.innerHTML = `STUDIO`
    })
})
contact.addEventListener("mouseenter", function(){
    word.forEach(function(elem){
        elem.innerHTML = `CONTACT`
    })
})
}
purple_banner()
