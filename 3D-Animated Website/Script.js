function loco_gsap(){
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
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
}
loco_gsap()

var clutter = ""

document.querySelector("#page2>#content-page2>h2").textContent.split(" ").forEach( (dets) =>{
    clutter += `<span> ${dets} </span>`

    document.querySelector("#page2>#content-page2>h2").innerHTML = clutter
})

gsap.to("h2>span",{
    scrollTrigger:{
        trigger:"h2>span",
        scroller: "#main",
        start:"top 90%",
        end:"top 25%",
        scrub:.5,
    },
    stagger:.2,
    color: "#fff"
})

function canvas_frame(){
    const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    ./Media/frames00007.png
    ./Media/frames00010.png
    ./Media/frames00013.png
    ./Media/frames00016.png
    ./Media/frames00019.png
    ./Media/frames00022.png
    ./Media/frames00025.png
    ./Media/frames00028.png
    ./Media/frames00031.png
    ./Media/frames00034.png
    ./Media/frames00037.png
    ./Media/frames00040.png
    ./Media/frames00043.png
    ./Media/frames00046.png
    ./Media/frames00049.png
    ./Media/frames00052.png
    ./Media/frames00055.png
    ./Media/frames00058.png
    ./Media/frames00061.png
    ./Media/frames00064.png
    ./Media/frames00067.png
    ./Media/frames00070.png
    ./Media/frames00073.png
    ./Media/frames00076.png
    ./Media/frames00079.png
    ./Media/frames00082.png
    ./Media/frames00085.png
    ./Media/frames00088.png
    ./Media/frames00091.png
    ./Media/frames00094.png
    ./Media/frames00097.png
    ./Media/frames00100.png
    ./Media/frames00103.png
    ./Media/frames00106.png
    ./Media/frames00109.png
    ./Media/frames00112.png
    ./Media/frames00115.png
    ./Media/frames00118.png 
    ./Media/frames00121.png
    ./Media/frames00124.png
    ./Media/frames00127.png
    ./Media/frames00130.png
    ./Media/frames00133.png
    ./Media/frames00136.png
    ./Media/frames00139.png
    ./Media/frames00142.png
    ./Media/frames00145.png
    ./Media/frames00148.png
    ./Media/frames00151.png
    ./Media/frames00154.png
    ./Media/frames00157.png
    ./Media/frames00160.png
    ./Media/frames00163.png
    ./Media/frames00166.png
    ./Media/frames00169.png
    ./Media/frames00172.png
    ./Media/frames00175.png
    ./Media/frames00178.png
    ./Media/frames00181.png
    ./Media/frames00184.png
    ./Media/frames00187.png
    ./Media/frames00190.png
    ./Media/frames00193.png
    ./Media/frames00196.png
    ./Media/frames00199.png
    ./Media/frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 66;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.5,
    trigger: `#page3>canvas`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas_frame()

var clutter2 = "";
 document.querySelector("#page4>h1").textContent.split(" ").forEach( (dets) =>{
     clutter2 += `<span> ${dets} </span>`

     document.querySelector("#page4>h1").innerHTML = clutter2
 })

 gsap.to("#page4>h1>span",{
     scrollTrigger:{
         trigger:"#page4>h1>span",
         scroller: "#main",
         start:"50% 95%",
         end:"-130% top",
         scrub:.5,
     },
     stagger:.2,
     color: "#fff"
 })

function canvas_bridge(){
    const canvas = document.querySelector("#page5>canvas");
    const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    ./Media/bridges00004.png
    ./Media/bridges00007.png
    ./Media/bridges00010.png
    ./Media/bridges00013.png
    ./Media/bridges00016.png
    ./Media/bridges00019.png
    ./Media/bridges00022.png
    ./Media/bridges00025.png
    ./Media/bridges00028.png
    ./Media/bridges00031.png
    ./Media/bridges00034.png
    ./Media/bridges00037.png
    ./Media/bridges00040.png
    ./Media/bridges00043.png
    ./Media/bridges00046.png
    ./Media/bridges00049.png
    ./Media/bridges00052.png
    ./Media/bridges00055.png
    ./Media/bridges00058.png
    ./Media/bridges00061.png
    ./Media/bridges00064.png
    ./Media/bridges00067.png
    ./Media/bridges00070.png
    ./Media/bridges00073.png
    ./Media/bridges00076.png
    ./Media/bridges00079.png
    ./Media/bridges00082.png
    ./Media/bridges00085.png
    ./Media/bridges00088.png
    ./Media/bridges00091.png
    ./Media/bridges00094.png
    ./Media/bridges00097.png
    ./Media/bridges00100.png
    ./Media/bridges00103.png
    ./Media/bridges00106.png
    ./Media/bridges00109.png
    ./Media/bridges00112.png
    ./Media/bridges00115.png
    ./Media/bridges00118.png 
    ./Media/bridges00121.png
    ./Media/bridges00124.png
    ./Media/bridges00127.png
    ./Media/bridges00130.png
    ./Media/bridges00133.png
    ./Media/bridges00136.png
    ./Media/bridges00139.png
    ./Media/bridges00142.png
    ./Media/bridges00145.png
    ./Media/bridges00148.png
    ./Media/bridges00151.png
    ./Media/bridges00154.png
    ./Media/bridges00157.png
    ./Media/bridges00160.png
    ./Media/bridges00163.png
 `;
  return data.split("\n")[index];
}

const frameCount = 53;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.5,
    trigger: `#page5>canvas`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page5",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas_bridge()

var clutter3 = "";
 document.querySelector("#page6>h1").textContent.split(" ").forEach( (dets) =>{
     clutter3 += `<span> ${dets} </span>`

     document.querySelector("#page6>h1").innerHTML = clutter3
 })

 gsap.to("#page6>h1>span",{
     scrollTrigger:{
         trigger:"#page6>h1>span",
         scroller: "#main",
         start:"50% 95%",
         end:"-130% top",
         scrub:.5,
     },
     stagger:.2,
     color: "#fff"
 })

function canvas_pages(){
    const canvas = document.querySelector("#page7>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    https://thisismagma.com/assets/home/lore/seq/1.webp?2
    https://thisismagma.com/assets/home/lore/seq/2.webp?2
    https://thisismagma.com/assets/home/lore/seq/3.webp?2
    https://thisismagma.com/assets/home/lore/seq/4.webp?2
    https://thisismagma.com/assets/home/lore/seq/5.webp?2
    https://thisismagma.com/assets/home/lore/seq/6.webp?2
    https://thisismagma.com/assets/home/lore/seq/7.webp?2
    https://thisismagma.com/assets/home/lore/seq/8.webp?2
    https://thisismagma.com/assets/home/lore/seq/9.webp?2
    https://thisismagma.com/assets/home/lore/seq/10.webp?2
    https://thisismagma.com/assets/home/lore/seq/11.webp?2
    https://thisismagma.com/assets/home/lore/seq/12.webp?2
    https://thisismagma.com/assets/home/lore/seq/13.webp?2
    https://thisismagma.com/assets/home/lore/seq/14.webp?2
    https://thisismagma.com/assets/home/lore/seq/15.webp?2
    https://thisismagma.com/assets/home/lore/seq/16.webp?2
    https://thisismagma.com/assets/home/lore/seq/17.webp?2
    https://thisismagma.com/assets/home/lore/seq/18.webp?2
    https://thisismagma.com/assets/home/lore/seq/19.webp?2
    https://thisismagma.com/assets/home/lore/seq/20.webp?2
    https://thisismagma.com/assets/home/lore/seq/21.webp?2
    https://thisismagma.com/assets/home/lore/seq/22.webp?2
    https://thisismagma.com/assets/home/lore/seq/23.webp?2
    https://thisismagma.com/assets/home/lore/seq/24.webp?2
    https://thisismagma.com/assets/home/lore/seq/25.webp?2
    https://thisismagma.com/assets/home/lore/seq/26.webp?2
    https://thisismagma.com/assets/home/lore/seq/27.webp?2
    https://thisismagma.com/assets/home/lore/seq/28.webp?2
    https://thisismagma.com/assets/home/lore/seq/29.webp?2
    https://thisismagma.com/assets/home/lore/seq/30.webp?2
    https://thisismagma.com/assets/home/lore/seq/31.webp?2
    https://thisismagma.com/assets/home/lore/seq/32.webp?2
    https://thisismagma.com/assets/home/lore/seq/33.webp?2
    https://thisismagma.com/assets/home/lore/seq/34.webp?2
    https://thisismagma.com/assets/home/lore/seq/35.webp?2
    https://thisismagma.com/assets/home/lore/seq/36.webp?2
    https://thisismagma.com/assets/home/lore/seq/37.webp?2
    https://thisismagma.com/assets/home/lore/seq/38.webp?2
    https://thisismagma.com/assets/home/lore/seq/39.webp?2
    https://thisismagma.com/assets/home/lore/seq/40.webp?2
    https://thisismagma.com/assets/home/lore/seq/41.webp?2
    https://thisismagma.com/assets/home/lore/seq/42.webp?2
    https://thisismagma.com/assets/home/lore/seq/43.webp?2
    https://thisismagma.com/assets/home/lore/seq/44.webp?2
    https://thisismagma.com/assets/home/lore/seq/45.webp?2
    https://thisismagma.com/assets/home/lore/seq/46.webp?2
    https://thisismagma.com/assets/home/lore/seq/47.webp?2
    https://thisismagma.com/assets/home/lore/seq/48.webp?2
    https://thisismagma.com/assets/home/lore/seq/49.webp?2
    https://thisismagma.com/assets/home/lore/seq/50.webp?2
    https://thisismagma.com/assets/home/lore/seq/51.webp?2
    https://thisismagma.com/assets/home/lore/seq/52.webp?2
    https://thisismagma.com/assets/home/lore/seq/53.webp?2
    https://thisismagma.com/assets/home/lore/seq/54.webp?2
    https://thisismagma.com/assets/home/lore/seq/55.webp?2
    https://thisismagma.com/assets/home/lore/seq/56.webp?2
    https://thisismagma.com/assets/home/lore/seq/57.webp?2
    https://thisismagma.com/assets/home/lore/seq/58.webp?2
    https://thisismagma.com/assets/home/lore/seq/59.webp?2
    https://thisismagma.com/assets/home/lore/seq/60.webp?2
    https://thisismagma.com/assets/home/lore/seq/61.webp?2
    https://thisismagma.com/assets/home/lore/seq/62.webp?2
    https://thisismagma.com/assets/home/lore/seq/63.webp?2
    https://thisismagma.com/assets/home/lore/seq/64.webp?2
    https://thisismagma.com/assets/home/lore/seq/65.webp?2
    https://thisismagma.com/assets/home/lore/seq/66.webp?2
    https://thisismagma.com/assets/home/lore/seq/67.webp?2
    https://thisismagma.com/assets/home/lore/seq/68.webp?2
    https://thisismagma.com/assets/home/lore/seq/69.webp?2
    https://thisismagma.com/assets/home/lore/seq/70.webp?2
    https://thisismagma.com/assets/home/lore/seq/71.webp?2
    https://thisismagma.com/assets/home/lore/seq/72.webp?2
    https://thisismagma.com/assets/home/lore/seq/73.webp?2
    https://thisismagma.com/assets/home/lore/seq/74.webp?2
    https://thisismagma.com/assets/home/lore/seq/75.webp?2
    https://thisismagma.com/assets/home/lore/seq/76.webp?2
    https://thisismagma.com/assets/home/lore/seq/77.webp?2
    https://thisismagma.com/assets/home/lore/seq/78.webp?2
    https://thisismagma.com/assets/home/lore/seq/79.webp?2
    https://thisismagma.com/assets/home/lore/seq/80.webp?2
    https://thisismagma.com/assets/home/lore/seq/81.webp?2
    https://thisismagma.com/assets/home/lore/seq/82.webp?2
    https://thisismagma.com/assets/home/lore/seq/83.webp?2
    https://thisismagma.com/assets/home/lore/seq/84.webp?2
    https://thisismagma.com/assets/home/lore/seq/85.webp?2
    https://thisismagma.com/assets/home/lore/seq/86.webp?2
    https://thisismagma.com/assets/home/lore/seq/87.webp?2
    https://thisismagma.com/assets/home/lore/seq/88.webp?2
    https://thisismagma.com/assets/home/lore/seq/89.webp?2
    https://thisismagma.com/assets/home/lore/seq/90.webp?2
    https://thisismagma.com/assets/home/lore/seq/91.webp?2
    https://thisismagma.com/assets/home/lore/seq/92.webp?2
    https://thisismagma.com/assets/home/lore/seq/93.webp?2
    https://thisismagma.com/assets/home/lore/seq/94.webp?2
    https://thisismagma.com/assets/home/lore/seq/95.webp?2
    https://thisismagma.com/assets/home/lore/seq/96.webp?2
    https://thisismagma.com/assets/home/lore/seq/97.webp?2
    https://thisismagma.com/assets/home/lore/seq/98.webp?2
    https://thisismagma.com/assets/home/lore/seq/99.webp?2
    https://thisismagma.com/assets/home/lore/seq/100.webp?2
    https://thisismagma.com/assets/home/lore/seq/101.webp?2
    https://thisismagma.com/assets/home/lore/seq/102.webp?2
    https://thisismagma.com/assets/home/lore/seq/103.webp?2
    https://thisismagma.com/assets/home/lore/seq/104.webp?2
    https://thisismagma.com/assets/home/lore/seq/105.webp?2
    https://thisismagma.com/assets/home/lore/seq/106.webp?2
    https://thisismagma.com/assets/home/lore/seq/107.webp?2
    https://thisismagma.com/assets/home/lore/seq/108.webp?2
    https://thisismagma.com/assets/home/lore/seq/109.webp?2
    https://thisismagma.com/assets/home/lore/seq/110.webp?2
    https://thisismagma.com/assets/home/lore/seq/111.webp?2
    https://thisismagma.com/assets/home/lore/seq/112.webp?2
    https://thisismagma.com/assets/home/lore/seq/113.webp?2
    https://thisismagma.com/assets/home/lore/seq/114.webp?2
    https://thisismagma.com/assets/home/lore/seq/115.webp?2
    https://thisismagma.com/assets/home/lore/seq/116.webp?2
    https://thisismagma.com/assets/home/lore/seq/117.webp?2
    https://thisismagma.com/assets/home/lore/seq/118.webp?2
    https://thisismagma.com/assets/home/lore/seq/119.webp?2
    https://thisismagma.com/assets/home/lore/seq/120.webp?2
    https://thisismagma.com/assets/home/lore/seq/121.webp?2
    https://thisismagma.com/assets/home/lore/seq/122.webp?2
    https://thisismagma.com/assets/home/lore/seq/123.webp?2
    https://thisismagma.com/assets/home/lore/seq/124.webp?2
    https://thisismagma.com/assets/home/lore/seq/125.webp?2
    https://thisismagma.com/assets/home/lore/seq/126.webp?2
    https://thisismagma.com/assets/home/lore/seq/127.webp?2
    https://thisismagma.com/assets/home/lore/seq/128.webp?2
    https://thisismagma.com/assets/home/lore/seq/129.webp?2
    https://thisismagma.com/assets/home/lore/seq/130.webp?2
    https://thisismagma.com/assets/home/lore/seq/131.webp?2
    https://thisismagma.com/assets/home/lore/seq/132.webp?2
    https://thisismagma.com/assets/home/lore/seq/133.webp?2
    https://thisismagma.com/assets/home/lore/seq/134.webp?2
    https://thisismagma.com/assets/home/lore/seq/135.webp?2
    https://thisismagma.com/assets/home/lore/seq/136.webp?2
 `;
  return data.split("\n")[index];
}

const frameCount = 136;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.5,
    trigger: `#page7>canvas`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page7",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas_pages()


gsap.to("#page7-loader",{
    scrollTrigger:{
        trigger:"#page7-loader",
        scroller:"#main",
        start:"top 40%",
        end:"bottom top",
        scrub:0.5
    },
    scale:2
})

gsap.to("#inner-loader",{
    scrollTrigger:{
        trigger:"#inner-loader",
        scroller:"#main",
        start:"top bottom",
        end:"bottom top",
        scrub:0.5
    },
    backgroundColor: "#093dcd68"
})






gsap.from("#page8>#glass",{
    scale:2,
    opacity:0,
    delay:0.5,
    scrollTrigger:{
        trigger:"#page8>#glass",
        scroller:"#main",
        start:"65% bottom",
        end:"60% bottom",
        scrub:1.5
    },
})

// function WheelEvent(){
//        gsap.from(".scroller img",{
//            transform:'translateX(400%)',
//            repeat:1,
//            ease:"none",
//        })
// }
// WheelEvent()