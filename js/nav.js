const navBar=document.querySelector(".primary-navbar");
const navBarToggler=document.querySelector(".navbar-toggler");
const navItemToggler=document.querySelector(".nav-link");
const dropDownMenu=document.querySelector(".dropdown-menu");
navBarToggler.addEventListener('click',()=>{
    const visibility=navBar.getAttribute("data-visible");
    console.log(visibility);
    if(visibility==="false"){
        navBar.setAttribute("data-visible",true);
        navBarToggler.setAttribute("aria-expanded",true);
    }else{
        navBar.setAttribute("data-visible",false);
        navBarToggler.setAttribute("aria-expanded",false);

    }
})

