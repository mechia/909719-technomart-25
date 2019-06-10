var shop = document.querySelector('.shopping');
var list = document.querySelector(".catalog-list");
var item = list.querySelectorAll('.catalog-item');
var closeShop = shop.querySelector('.close-pop-up');

var getItem = function  (item) {
var buy = item.querySelector('.buy');
	buy.addEventListener('click', function (evt) {
		evt.preventDefault();
		shop.classList.add('modal-show');
		
	});
}; 

closeShop.addEventListener("click", function (evt) {
    evt.preventDefault();
    shop.classList.remove("modal-show");
  });
  

 for (var i = 0; i < item.length; ++i) {
	 getItem(item[i]);
 }