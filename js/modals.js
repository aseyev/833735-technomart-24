    var openModal = document.querySelector(".emailus-open");
    var emailus = document.querySelector(".window-emailus");
    var closeEmail = emailus.querySelector(".modal-close");

    var openGmap = document.querySelector(".googlemap-open");    
    var gmap = document.querySelector(".googlemap-window");
    var closeGmap = gmap.querySelector(".modal-close");

    //работает только с первой карточкой!!!
    var openOrder = document.querySelector(".catalog-item-buy");
	var cart = document.querySelector(".window-order");
	var closeOrder = cart.querySelector(".modal-close");
	var closeOrder1 = cart.querySelector(".order-close");
    
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

    openOrder.addEventListener("click", function (evt) {
		evt.preventDefault();
		cart.classList.add("modal-show");
	});
	
	closeOrder.addEventListener("click", function (evt) {
		evt.preventDefault();
		cart.classList.remove("modal-show");
	});

	closeOrder1.addEventListener("click", function (evt) {
		evt.preventDefault();
		cart.classList.remove("modal-show");
	});
	window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (cart.classList.contains("modal-show")) {
                cart.classList.remove("modal-show");
            }
        }
    });
