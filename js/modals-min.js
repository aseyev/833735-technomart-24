var openModal=document.querySelector(".emailus-open"),emailus=document.querySelector(".window-emailus");if(emailus){var closeEmail=emailus.querySelector(".modal-close");openModal.addEventListener("click",function(e){e.preventDefault(),emailus.classList.add("modal-show")}),closeEmail.addEventListener("click",function(e){e.preventDefault(),emailus.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),emailus.classList.contains("modal-show")&&emailus.classList.remove("modal-show"))})}var openGmap=document.querySelector(".googlemap-open"),gmap=document.querySelector(".googlemap-window");if(gmap){var closeGmap=gmap.querySelector(".modal-close");openGmap.addEventListener("click",function(e){e.preventDefault(),gmap.classList.add("modal-show")}),closeGmap.addEventListener("click",function(e){e.preventDefault(),gmap.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),gmap.classList.contains("modal-show")&&gmap.classList.remove("modal-show"))})}var openOrder=document.querySelectorAll(".catalog-item-buy"),cart=document.querySelector(".window-order"),closeOrder=cart.querySelector(".modal-close"),closeOrder1=cart.querySelector(".order-close");if(openOrder&&cart&&closeOrder){for(var i=0;i<openOrder.length;i++)openOrder[i].addEventListener("click",function(e){e.preventDefault(),cart.classList.add("modal-show")});closeOrder.addEventListener("click",function(e){e.preventDefault(),cart.classList.remove("modal-show")}),closeOrder1.addEventListener("click",function(e){e.preventDefault(),cart.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&cart.classList.contains("modal-show")&&cart.classList.remove("modal-show")})}