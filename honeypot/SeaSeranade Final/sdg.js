let text = document.getElementById('text');
      let bird1 = document.getElementById('fish');
      let btn = document.getElementById('btn');
      let rocks = document.getElementById('rocks');
      let forest = document.getElementById('forest');
      let water = document.getElementById('water');


      window.addEventListener('scroll', function(){
          let value = window.scrollY;

          text.style.top = 50 + value * -0.5 + '%';
          bird1.style.top = value * -1.5 + 'px';
          bird1.style.left = value * 2 + 'px';
          bird1.style.left = value * -1.5 + 'px';
          bird2.style.left = value * 2 + 'px';
          btn.style.marginTop = value * 1.5 + 'px';
          rocks.style.top =  value * -0.12 + 'px';
          forest.style.top = value * 0.25 + 'px';
          header.style.top = value * 0.5 + 'px';
      })

      // Get the button
let backToTopBtn = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};


