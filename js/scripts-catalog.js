var search = document.querySelector(".header-search input[type='text']");
var search_btn = document.querySelector(".header-search input[type='submit']");

search.addEventListener("focus", function(event) {
    search_btn.classList.remove("search-btn");
})

search.addEventListener("blur", function(event) {
    search_btn.classList.add("search-btn");
})