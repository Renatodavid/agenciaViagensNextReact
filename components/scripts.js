import React, { useEffect } from 'react';

export default function Script() {
  useEffect(() => {
    

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });

    function showPassword() {
      let inputPass = document.getElementById('password');
      let btnShowPass = document.getElementById('btn-password');

      if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('fa-eye-slash', 'fa-eye');
      }
    }
 

  var count = 0;
  var inc = 0;
  var margin = 0;
  var slider = document.getElementsByClassName("slider-width")[0];
  var itemDisplay = 0;
  
  if (screen.width > 990) {
      itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
      margin = itemDisplay * 5;
  }
  
  if (screen.width > 700 && screen.width < 990) {
      itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
      margin = itemDisplay * 6.8;
  }
  
  if (screen.width > 280 && screen.width < 700) {
      itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
      margin = itemDisplay * 20;
  }
  
  var item = document.getElementsByClassName("item");
  
  var itemleft = item.length % itemDisplay;
  console.log(item.length)
  var itemSlide = Math.floor(item.length / itemDisplay) - 1;
  
  for (let i = 0; i < item.length; i++) {
      item[i].style.width = (screen.width / itemDisplay) - margin + "px";
  }
  
  function next() {
      if (inc !== itemSlide + itemleft) {
          if (inc === itemSlide) {
              inc = inc + itemleft;
              count = count - (screen.width / itemDisplay) * itemleft;
          } else {
              inc ++;
              count = count - screen.width;
          }
      }
      slider.style.left = count + "px";
  }
  
  function prev() {
      if (inc !== 0) {
          if (inc === itemleft) {
              inc = inc - itemleft;
              count = count + (screen.width / itemDisplay) * itemleft;
          } else {
              inc--;
              count = count + screen.width;
          }
      }
      slider.style.left = count + "px";
  }
}, []);



  return (
    <div>


      
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
    crossorigin="anonymous"></script>
    </div>
  );
}
