var advantage = document.querySelector(".advantage");
var advantageItem = advantage.children;
var sliderContainer = document.querySelector(".slider-container");
var sliderBlock = sliderContainer.children;

var showCurrentItem = function(item) {
  var header = item.querySelector(".advantage-title");

  header.addEventListener("click", function() {
    var count = item;
    for (var i = 0; i < advantageItem.length; ++i) {
      var head = advantageItem[i].querySelector(".advantage-title");

      if (count != advantageItem[i]) {
        head.classList.remove("current");
      } else {
        head.classList.add("current");
      }
    }
    showBlock();
  });
  header.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 13) {
      var count = item;
      for (var i = 0; i < advantageItem.length; ++i) {
        var head = advantageItem[i].querySelector(".advantage-title");

        if (count != advantageItem[i]) {
          head.classList.remove("current");
        } else {
          head.classList.add("current");
        }
      }
      showBlock();
    }
  });
};

var showBlock = function(item) {
  var index = getCurrentTitle();

  for (var i = 0; i < sliderBlock.length; ++i) {
    if (i != index) {
      sliderBlock[i].classList.remove("current-item");
    } else {
      sliderBlock[i].classList.add("current-item");
    }
  }
};

var getCurrentTitle = function() {
  var title = advantage.querySelector(".current");
  var temp = 0;
  for (var i = 0; i < advantageItem.length; ++i) {
    var head = advantageItem[i].querySelector(".current");
    if (head === title) {
      temp = i;
    }
  }
  return temp;
};

for (var i = 0; i < advantageItem.length; ++i) {
  showCurrentItem(advantageItem[i]);
}
for (var j = 0; j < sliderBlock.length; ++j) {
  showBlock(sliderBlock[j]);
}

var slider = document.querySelector(".slider");
var sliderItem = slider.children;

var showSlider = function(item) {
  var sliderButtonLeft = item.querySelector(".left-arrow");
  var sliderButtonRight = item.querySelector(".right-arrow");

  sliderButtonLeft.addEventListener("click", function(evt) {
    evt.preventDefault();
    var count = getSlider();
    if (count) {
      sliderItem[count].classList.remove("current-slider");
      sliderItem[count - 1].classList.add("current-slider");
    }
  });

  sliderButtonRight.addEventListener("click", function(evt) {
    evt.preventDefault();
    var count = getSlider();
    if (count + 1 != sliderItem.length) {
      sliderItem[count + 1].classList.add("current-slider");
      sliderItem[count].classList.remove("current-slider");
    }
  });
};
var getSlider = function() {
  var sliderFlag = slider.querySelector(".current-slider");
  var temp = 0;
  for (var i = 0; i < sliderItem.length; ++i) {
    if (sliderFlag === sliderItem[i]) {
      temp = i;
    }
  }
  return temp;
};
for (var i = 0; i < sliderItem.length; ++i) {
  showSlider(sliderItem[i]);
}

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

link.addEventListener("click", function(evt) {
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
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
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

window.addEventListener("keydown", function(evt) {
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

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
