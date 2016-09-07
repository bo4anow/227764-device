/***********Index**************/

var write_us = document.querySelector(".info-contact .btn-info");
var map = document.querySelector(".info-map");
var modal_map = document.querySelector(".modal-map");
var popup_shedow = document.querySelector(".shadow-block");
var popup = document.querySelector(".popup-write-us");
var close = popup.querySelector(".modal-content-close");
var close_map = modal_map.querySelector(".modal-content-close");
var search = document.querySelector(".header-search input[type='text']");
var search_btn = document.querySelector(".header-search input[type='submit']");


search.addEventListener("focus", function(event) {
    search_btn.classList.remove("search-btn");
})

search.addEventListener("blur", function(event) {
    search_btn.classList.add("search-btn");
})

write_us.addEventListener("click", function(event) {
    event.preventDefault();
    popup_shedow.classList.add("modal-content-show");
    popup.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup_shedow.classList.remove("modal-content-show");
    popup.classList.remove("modal-content-show");
    modal_map.classList.remove("modal-content-show");
})

close_map.addEventListener("click", function(event) {
    event.preventDefault();
    modal_map.classList.remove("modal-content-show");
})
        
map.addEventListener("click", function(event) {
    event.preventDefault();
    modal_map.classList.add("modal-content-show");
})