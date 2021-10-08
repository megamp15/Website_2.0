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
    let typeSpeed = 275;
  
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
      if (window.scrollY >= -1 && once ){
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