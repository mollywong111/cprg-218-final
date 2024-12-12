/*----NAV BAR----*/
function myMenuFunction(){
    var menuBtn = document.getElementById("navbar");
    if(menuBtn.className === "navbar"){
      menuBtn.className += "responsive";
    } else {
      menuBtn.className = "navbar";
    }
  }

/*----SCROLL REVEAL----*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})
/* -- HOME -- */
sr.reveal('.intro-name',{delay: 100})
sr.reveal('.intro-detail',{delay: 200})
sr.reveal('.social-icons',{delay: 200})
sr.reveal('.intro-image',{delay: 300})

 /* -- PORTFOLIO -- */
 sr.reveal('.portfolio-box',{interval: 200})
 