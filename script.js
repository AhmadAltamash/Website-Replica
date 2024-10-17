function toggles(){
    let open = document.querySelector(".open")
    let close = document.querySelector(".close")
    let links = document.querySelector(".links")
    links.style.display = "none"
    close.style.display = "none"
    open.addEventListener("click",()=>{
        open.style.display = "none"
        close.style.display = "block"
        links.style.display = "flex"
    })
    close.addEventListener("click",()=>{
        open.style.display = "block"
        close.style.display = "none"
        links.style.display = "none"
    })
}
toggles()