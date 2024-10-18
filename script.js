function toggles(){
    let open = document.querySelector(".open")
    let close = document.querySelector(".close")
    let links = document.querySelector(".nav")
    //links.style.display = "none"
    open.style.display = "none"
    open.addEventListener("click",()=>{
        open.style.display = "none"
        close.style.display = "block"
        links.style.display = "block"
    })
    close.addEventListener("click",()=>{
        open.style.display = "block"
        close.style.display = "none"
        links.style.display = "none"
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
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').appendChild(lists[0]);
        })
    })
    let itemActive = nav.querySelector('li.active')
    if(itemActive) nav.style.setProperty('--position-x-active', itemActive.offsetLeft + 'px')
}
navigate()

