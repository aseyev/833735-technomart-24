var openModal = document.querySelector(".emailus-open");
var emailus = document.querySelector(".window-emailus");
if (emailus) {
    var closeEmail = emailus.querySelector(".modal-close");
    openModal.addEventListener("click", function (evt) {
       evt.preventDefault();
       emailus.classList.add("modal-show");
   });
   
   closeEmail.addEventListener("click", function (evt) {
       evt.preventDefault();
       emailus.classList.remove("modal-show");
   });
   window.addEventListener("keydown", function (evt) {
       if (evt.keyCode === 27) {
           evt.preventDefault();
           if (emailus.classList.contains("modal-show")) {
               emailus.classList.remove("modal-show");
           }
       }
   });
};

var openGmap = document.querySelector(".googlemap-open");    
var gmap = document.querySelector(".googlemap-window");
if (gmap) {
    var closeGmap = gmap.querySelector(".modal-close");
    openGmap.addEventListener("click", function (evt) {
        evt.preventDefault();
        gmap.classList.add("modal-show");
    });
    
    closeGmap.addEventListener("click", function (evt) {
        evt.preventDefault();
        gmap.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (gmap.classList.contains("modal-show")) {
                gmap.classList.remove("modal-show");
            }
        }
    });
};
var openOrder = document.querySelectorAll(".catalog-item-buy"),
    cart = document.querySelector(".window-order"),
    closeOrder = cart.querySelector(".modal-close"),
closeOrder1=cart.querySelector(".order-close");
if (openOrder && cart && closeOrder) {
    for(var i=0; i<openOrder.length; i++)
    openOrder[i].addEventListener("click",
    function(a){
        a.preventDefault(),
        cart.classList.add("modal-show")
    });
    closeOrder.addEventListener("click",function(evt)
    {evt.preventDefault(),cart.classList.remove("modal-show")
}),
closeOrder1.addEventListener("click",function(a){a.preventDefault(),
    cart.classList.remove("modal-show")}),
    window.addEventListener("keydown",function(a)
    {27===a.keyCode&&cart.classList.contains("modal-show")&&cart.classList.remove("modal-show")}
    )}