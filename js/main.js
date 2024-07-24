// Active navbar

let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide

let navLinks = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    navCollapse.classList.remove("show");
  });
});


// counter design

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)), // Adjusted step calculation
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current == end) {
            clearInterval(timer);
          }
        }, step);
    }
  
    counter("count1", 0, 1287, 1000); // Decreased duration to 1000ms
    counter("count2", 100, 5786, 800); // Decreased duration to 800ms
    counter("count3", 0, 1440, 1000); // Decreased duration to 1000ms
    counter("count4", 0, 7110, 1000); // Decreased duration to 1000ms
  });
  