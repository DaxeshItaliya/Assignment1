
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

