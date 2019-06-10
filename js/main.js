

var link = document.querySelector(".button-form");
  
  var popup = document.querySelector(".pop-up-forms");
  var close = popup.querySelector(".close-pop-up");
  
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=text]");
  var email = popup.querySelector("[name=email]");
  var message = popup.querySelector(".pop-up-message");
  
  var isStorageSupport = true;
  var storage = "";
  var userEmail = "";
  var userMessage = "";

  try {
    storage = localStorage.getItem("login");
    userEmail = localStorage.getItem("email");
    userMessage = localStorage.getItem("message");  
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show"); 
     if (storage) {
      login.value = storage;
      email.focus();
    }
     if (storage && userEmail) {
          email.value = userEmail;
          message.focus();
      }
       if (storage && userEmail && message) {
            login.value = storage;
             email.value = userEmail;
           message.value = userMessage;
       }

      else {
      login.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
  
  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !message.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("message", message.value);  
      }
    }
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
 
var mapLink = document.querySelector(".contacts-button-map");
  var mapPopup = document.querySelector(".pop-up-map");
  var mapClose = mapPopup.querySelector(".close-pop-up");
  
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
  


 