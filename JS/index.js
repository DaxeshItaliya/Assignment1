
window.onscroll = () =>{
   
    const navbar= document.querySelector("nav");
    var logo=document.getElementById("logo");
    var menu=document.getElementById("menu_button");

    if(window.scrollY>60)
    {
        logo.src="Assets/logo-active.png"
        navbar.classList.add('nav-active');
        menu.src="Assets/icons/gray_manu_icon.png"
    }else
    {
        logo.src="Assets/logo.png"
        navbar.classList.remove('nav-active');
        menu.src="Assets/icons/white_menu_icon.png"
    }
};

window.onload = function() {
  const Loader= document.getElementById("Loader");
  Loader.style.display="none";
}


document.addEventListener('DOMContentLoaded',function(event){
    
    var dataText = [ "It's only place you have to live."];
    
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
        // add next character to h1
      document.getElementById("Typing").innerHTML = text.substring(0, i+1) +'<span class="typing" aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 1500);
      }
    }
    
    function StartTextAnimation(i) {
      if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 2000);
      }
     
      if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function(){
        StartTextAnimation(i + 1);
      });
      }
    }
    StartTextAnimation(0);
    });

window.onresize = reportWindowSize;


function reportWindowSize() {
  const heightOutput = document.querySelector('#height');
  const widthOutput = document.querySelector('#width');
  
  if(window.innerWidth>710)
  {
    const menu = document.getElementById("menu");
    const navBar=document.getElementById("navBar");
    menu.style.display="contents";
    navBar.style.padding="20px 0px 20px 0px";
  }else
  {
    const menu = document.getElementById("menu");
    const navBar=document.getElementById("navBar");
    menu.style.display="none";
    navBar.style.padding="20px 0px 20px 0px";
  }
  
}

function on_menu_button_click(){
  const menu = document.getElementById("menu");
  const navBar=document.getElementById("navBar");
  menu.style.display="flex";
  navBar.style.padding="0";
}

function on_menu_back_click(){
  const menu = document.getElementById("menu");
  const navBar=document.getElementById("navBar");
  menu.style.display="none";
  navBar.style.padding="20px 0px 20px 0px";
}



