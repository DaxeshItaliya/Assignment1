
window.onscroll = () =>{
   
    const navbar= document.querySelector("nav");
    var logo=document.getElementById("logo");
    if(window.scrollY>60)
    {
        logo.src="Assets/logo-active.png"
        navbar.classList.add('nav-active');
    }else
    {
        navbar.classList.remove('nav-active');
    }
};
