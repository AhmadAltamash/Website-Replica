function toggles(){
    let open = document.querySelector(".open")
    let close = document.querySelector(".close")
    let links = document.querySelector(".nav")
    let Slide = document.querySelector(".container")
    //links.style.display = "none"
    open.style.display = "none"
    open.addEventListener("click",()=>{
        open.style.display = "none"
        close.style.display = "block"
        links.style.display = "block"
        Slide.style.display = "block"
    })
    close.addEventListener("click",()=>{
        open.style.display = "block"
        close.style.display = "none"
        links.style.display = "none"
        Slide.style.display = "none"
    })
}
toggles()

function navigate(){
    let nav = document.querySelector('.nav');
    let items = document.querySelectorAll("li");
    items.forEach(item =>{
        item.addEventListener("click",()=>{
            let oldActiveItem = nav.querySelector('li.active')
            if(oldActiveItem) oldActiveItem.classList.remove('active');
            item.classList.add('active');
            nav.style.setProperty('--position-x-active', item.offsetLeft + 'px')
        })
    })
    let itemActive = nav.querySelector('li.active')
    if(itemActive) nav.style.setProperty('--position-x-active', itemActive.offsetLeft + 'px')
}
navigate()

// function sliders(){
//     var evt = 0;
//     let lists = document.querySelectorAll('.item');
//     let li1 = document.getElementById('li1')
//     let li2 = document.querySelector('#li2')
//     let li3 = document.querySelector('#li3')
//     let li4 = document.querySelector('#li4')
//     let li5 = document.querySelector('#li5')
//     let li6 = document.querySelector('#li6')
//     li1.addEventListener("click",()=>{
//         console.log("clicked")
//         document.getElementById('slide').appendChild(lists[0]);
//         evt++;
//         console.log(evt)
//     })
//     if(evt>0){
//     li1.addEventListener("click",()=>{
//         console.log("clicked")
//             document.getElementById('slide').prepend(lists[lists.length - 1]);
//             evt = 0;
//             console.log(evt);
//     })
//     }

//     li2.addEventListener("click",()=>{
//         console.log("clicked")
//         document.getElementById('slide').appendChild(lists[1]);
//     })
//     li3.addEventListener("click",()=>{
//         console.log("clicked")
//         document.getElementById('slide').appendChild(lists[2]);
//     })
//     li4.addEventListener("click",()=>{
//         console.log("clicked")
//         document.getElementById('slide').appendChild(lists[3]);
//     })
//     li5.addEventListener("click",()=>{
//         console.log("clicked")
//         document.getElementById('slide').appendChild(lists[4]);
//     })
//     li6.addEventListener("click",()=>{
//         console.log("clicked")
//         document.getElementById('slide').appendChild(lists[5]);
//     })
    
// }
// sliders()
function sliders() {
    var evt = 0;
    let lists = document.querySelectorAll('.item');
    let slide = document.getElementById('slide');

    let li1 = document.getElementById('li1');
    let li2 = document.getElementById('li2');
    let li3 = document.getElementById('li3');
    let li4 = document.getElementById('li4');
    let li5 = document.getElementById('li5');
    let li6 = document.getElementById('li6');

    // Move forward function
    function moveForward(index) {
        slide.appendChild(lists[index]);
    }

    // Move backward function
    function moveBackward() {
        slide.prepend(slide.lastElementChild);
    }

    li1.addEventListener("click", () => {
        evt++;
        if (evt > 1) {
            moveBackward(); // Move backward
            evt = 0;
        } else {
            moveForward(0); // Move forward
        }
        console.log("Clicked li1", evt);
    });

    li2.addEventListener("click", () => {
        moveForward(1);
        console.log("Clicked li2");
    });

    li3.addEventListener("click", () => {
        moveForward(2);
        console.log("Clicked li3");
    });

    li4.addEventListener("click", () => {
        moveForward(3);
        console.log("Clicked li4");
    });

    li5.addEventListener("click", () => {
        moveForward(4);
        console.log("Clicked li5");
    });

    li6.addEventListener("click", () => {
        moveForward(5);
        console.log("Clicked li6");
    });
}

sliders();

