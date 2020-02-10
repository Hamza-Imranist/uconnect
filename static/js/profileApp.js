let freeButton = document.querySelector(".free-tab-link");
let paidButton = document.querySelector(".paid-tab-link");
let blogButton = document.querySelector(".blog-tab-link");
let freeContent = document.querySelector(".tab-content-free");
let paidContent = document.querySelector(".tab-content-paid");
let blogContent = document.querySelector(".tab-content-blog");
freeButton.addEventListener("click",()=>{
    freeContent.style.display = "flex";
    paidContent.style.display = "none";
    blogContent.style.display = "none";
    freeButton.classList.add("active-tab");
    paidButton.classList.remove("active-tab");
    blogButton.classList.remove("active-tab");
})
paidButton.addEventListener("click",()=>{
    freeContent.style.display = "none";
    paidContent.style.display = "flex";
    blogContent.style.display = "none";
    freeButton.classList.remove("active-tab");
    paidButton.classList.add("active-tab");
    blogButton.classList.remove("active-tab");
})
blogButton.addEventListener("click",()=>{
    freeContent.style.display = "none";
    paidContent.style.display = "none";
    blogContent.style.display = "flex";
    freeButton.classList.remove("active-tab");
    paidButton.classList.remove("active-tab");
    blogButton.classList.add("active-tab");
})