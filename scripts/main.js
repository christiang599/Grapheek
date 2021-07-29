
// ------------------------ START EFFECT GLASS ------------------------

VanillaTilt.init(document.querySelector(".banner__glass"), {
  max: 25,
  speed: 400,
  glare: true,   // if it should have a "glare" effect
  "max-glare": 0.5,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
});

// ------------------------ END EFFECT GLASS ------------------------

// ------------------------ START TYPING EFFECT ------------------------

const texts = ['tecnológicos, pero creativos...', 'mas frikis, menos corporativos...'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
  if(count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type, 270);
}());

// ------------------------ END TYPING EFFECT ------------------------
