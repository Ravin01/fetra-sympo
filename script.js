"use strict";
var countDownDate = new Date("april 16,2023 24:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance / (1000*60*60)) % 24);
    var minutes = Math.floor((distance / 1000 / 60) % 60);
    var seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
},1000);


let preveiwContainer = document.querySelector('.product-preview-tech');
let previewBox = preveiwContainer.querySelectorAll('.preview-tech');

document.querySelectorAll('.products-container-tech .product-tech').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});


let preveiwContainerNon = document.querySelector('.product-preview-nontech');
let previewBoxNon = preveiwContainerNon.querySelectorAll('.preview-nontech');

document.querySelectorAll('.products-container-nontech .product-nontech').forEach(product2 =>{
  product2.onclick = () =>{
    preveiwContainerNon.style.display = 'flex';
    let name = product2.getAttribute('data-name');
    previewBoxNon.forEach(preview2 =>{
      let target = preview2.getAttribute('data-target');
      if(name == target){
        preview2.classList.add('active');
      }
    });
  };
});


let preveiwContainerWork = document.querySelector('.product-preview-work');
let previewBoxWork = preveiwContainerWork.querySelectorAll('.preview-work');

document.querySelectorAll('.products-container-work .product-work').forEach(product3 =>{
  product3.onclick = () =>{
    preveiwContainerWork.style.display = 'flex';
    let name = product3.getAttribute('data-name');
    previewBoxWork.forEach(preview3 =>{
      let target = preview3.getAttribute('data-target');
      if(name == target){
        preview3.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.xmark').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
previewBoxNon.forEach(close =>{
  close.querySelector('.xmark').onclick = () =>{
    close.classList.remove('active');
    preveiwContainerNon.style.display = 'none';
  };
});
previewBoxWork.forEach(close =>{
  close.querySelector('.xmark').onclick = () =>{
    close.classList.remove('active');
    preveiwContainerWork.style.display = 'none';
  };
});




let counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
},2500);



// var navLinks = document.getElementById("navLinks");
        
//         function showMenu(){
//             var navLinks = document.getElementById("navLinks");  
//             navLinks.style.right = "0";
//         }
//         function hideMenu(){
//             var navLinks = document.getElementById("navLinks");
//             navLinks.style.right = "-200px";
//         }
const toggleBtn = document.querySelector(".bars-div");
let bars = document.getElementById("bars");
const toggleBtnIcon = document.querySelector(".x-div");
const dropDown = document.querySelector(".dropdown");

toggleBtn.onclick = function(){
  dropDown.classList.toggle('open');
  const isOpen = dropDown.classList.contain('open');
  bars.style.display = 'none';

  toggleBtnIcon.classList = isOpen
  ? 'x-div'
  : 'toggleBtnIcon';
}





const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));
