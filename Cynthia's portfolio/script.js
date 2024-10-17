function smoothscroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  tablet: { smooth: true },

  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
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

var timer;
const cursor = document.querySelector('#cursor');
function cursormove(xscale, yscale){
    document.addEventListener("mousemove",(dets)=>{
        cursor.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
    })
}

function mouseMoveDiff(){
    clearTimeout(timer)
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0; 
    document.addEventListener("mousemove",(dets)=>{
        var xdiff = dets.clientX - xprev;
        xprev = dets.clientX
        var ydiff = dets.clientY - yprev;
        yprev = dets.clientY

        xscale = gsap.utils.clamp(.4,1.2, xdiff)
        yscale = gsap.utils.clamp(.4,1.2, ydiff)
    
        cursormove(xscale, yscale)

        timer = setTimeout(()=>{
            cursor.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
        },10)

    })

}
function timeline(){
    const tl = gsap.timeline()

    tl.from("nav",{
        opacity:0,
        y:10,
        duration:0.6,
        ease: Expo.easeInOut,
    },"anime")
    tl.from(".heading h1",{
        display:"none",
        y: 100,
        duration:0.7,
        delay:0.2,
        stagger:0.15
    },"anime")
    tl.from(".heading h5",{
        opacity:0,
        y:-20,
        duration:0.5,
        delay:0.1,
        stagger:0.2
    })
    tl.from(".bottom p span",{
        opacity:0,
        y:-20,
        duration:0.5,
        stagger:0.2
    })
    tl.from("#page1 .bottom-2 a",{
        opacity:0,
        duration:0.5,
        delay:-0.3,
    })
}

document.querySelectorAll(".page2-inner").forEach((elem)=>{

    var diffrot = 0;
    var rotate = 0;

    elem.addEventListener("mousemove",(dets)=>{
        var rectY = (dets.clientY - elem.getBoundingClientRect().top)   
        var rectX = (dets.clientX - elem.getBoundingClientRect().left)   
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;  
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top: rectY,
            left: rectX,
            rotate: gsap.utils.clamp(-20,20, diffrot)
        })
        
    })
    elem.addEventListener("mouseleave",()=>{
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration: 0.5,
        })
    })
})

function time(){
    
    setInterval(()=>{
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        
        var getTime = document.querySelector(".time")
        getTime.innerHTML = `${hours}:${minutes} PM EST`
    },1000)
    
}

time()
smoothscroll()
mouseMoveDiff()
cursormove()
timeline()