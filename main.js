  // Particle JS Effect by Frank's Laboratory - https://www.youtube.com/watch?v=d620nV6bp0A&t=1026s
  // Edited to create background of homepage
  
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let particlesArray;
  
  //Create particle
  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionY = directionY;
      this.directionX = directionX;
      this.size = size;
      this.color = color;
    }
  
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = "#eeeeee";
      ctx.fill();
    }
  
    // Check particle position, move the particle, draw the particle
    update() {
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }
  
      //move particle
      this.x += this.directionX;
      this.y += this.directionY;
      // draw particle
      this.draw();
    }
  }
  
  // create particle array
  function init() {
    particlesArray = [];
    let numberofParticles = (canvas.height * canvas.width) / 10000;
    for (let i = 0; i < numberofParticles; i++) {
      let size = Math.random() * 5 + 1;
      let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
      let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
      let directionX = Math.random() * 1 - 0.5;
      let directionY = Math.random() * 1 - 0.5;
      let color = "#eeeeee";
  
      particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
  }
  
  function connect() {
    let opacityValue = 1;
  
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let distance = (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) + (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y);
        if (distance < (canvas.width / 7) * (canvas.height / 7)) {
          opacityValue = 1 - distance / 20000;
          ctx.strokeStyle = "rgba(31,80,64," + opacityValue + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }
  
  //animation loop
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    connect();
  }
  
  window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
  });
  
  init();
  animate();
  


// From Tutorial by Traversy Media for a type writer effect in pure js - https://www.youtube.com/watch?v=POX3dT-pB4E
const TypeWriter = function(txtElement, words, wait=3000, Delete=true) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting=false;
}

// Type method
TypeWriter.prototype.type = function(){
    // CUrrent index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    // check if deleting
    if(this.isDeleting){
        //Remove char
        this.txt= fullTxt.substring(0,this.txt.length-1);
    } else{
        // Add char
        this.txt= fullTxt.substring(0,this.txt.length+1);
    }
    //insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /=2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt==fullTxt){
        // make pause at end of word
        typeSpeed = this.wait;
        // set delete to true
        this.isDeleting = true;      
        
    } else if(this.isDeleting && this.txt===''){
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed=500;
    }

    let timeoutId=setTimeout(()=> this.type(), typeSpeed);
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init2);

// init app
function init2(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

init2();
  


// From Tutorial by Traversy Media for a type writer effect in pure js - https://www.youtube.com/watch?v=POX3dT-pB4E
// edited for about me section
const TypeWriter2 = function(txtElement, words, wait=3000, order) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.order=order;
  this.type2();
}

// Type method
TypeWriter2.prototype.type2 = function(){
  // CUrrent index of word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];

  // Add char
  this.txt= fullTxt.substring(0,this.txt.length+1);
  
  //insert txt into element
  this.txtElement.innerHTML = `<span class="txt" id="${this.txt}">${this.txt}</span>`;
  this.txtElement.style.removeProperty('border-right');

  // Initial Type Speed
  let typeSpeed = 300;

  // If word is complete
  if( this.txt==fullTxt){
      // make pause at end of word
      typeSpeed = this.wait;
  }
  let timeoutId2=0;
  let timeoutId3=0;
  let timeoutId4=0;
  let timeoutId=setTimeout(()=> this.type2(), typeSpeed);
  if (this.txt===fullTxt){
    clearTimeout(timeoutId);
    setTimeout(function(){
      document.getElementById("ls").style.borderRight="none";
      const ls = document.querySelector('#ls-list');
      ls.classList.remove('hide-text');
    }, 750 );
    timeoutId2=setTimeout(function(){
      init4();
    }, 1500);
  }
  
  if(this.order==2 &&this.txt===fullTxt){
    clearTimeout(timeoutId2);
    setTimeout(function(){
      document.getElementById("cd About_Me").style.borderRight="none";
      const ls = document.querySelector('#cd-clear');
      ls.classList.remove('hide-text');
    }, 750);
    timeoutId3=setTimeout(function(){
      init5();
    }, 1500);
  }

  if(this.order==3 &&this.txt===fullTxt){
    clearTimeout(timeoutId2);
    clearTimeout(timeoutId3);
    setTimeout(function(){
      document.getElementById("clear").style.borderRight="none";
      document.querySelector('.code-clear').style.display="none";
      document.querySelector('.showNewConsole').style.display="block";
    }, 750);
    timeoutId4=setTimeout(function(){
      init6();
    }, 1500);
  }

  if(this.order==4 &&this.txt===fullTxt){
    clearTimeout(timeoutId2);
    clearTimeout(timeoutId3);
    clearTimeout(timeoutId4);
    setTimeout(function(){
      document.getElementById("cat AboutMe.txt").style.borderRight="none";
      document.querySelector('.showTxtFile').classList.remove('hide-text');
    }, 500);

  }

}

// init app
function init3(){
    const txtElement = document.querySelector('.code-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // init TypeWriter
    new TypeWriter2(txtElement, words, wait, 1);
}

let once = true;
window.onload = function () {
  window.onscroll = function () {
    if (window.scrollY >= 850 && once ){
      init3();
      once = false;
    }
  };
};
  
// init app
function init4(){
    const txtElement = document.querySelector('.code-type2');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // init TypeWriter
    new TypeWriter2(txtElement, words, wait, 2);
}  

// init app
function init5(){
  const txtElement = document.querySelector('.code-type3');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // init TypeWriter
  new TypeWriter2(txtElement, words, wait, 3);
}  

// init app
function init6(){
  const txtElement = document.querySelector('.code-type4');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // init TypeWriter
  new TypeWriter2(txtElement, words, wait, 4);
}  