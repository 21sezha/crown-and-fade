const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function(){
    navMenu.classList.toggle("open");
});
navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("open");
    });
});

// this is to pick up the things 
// the serviceItems is a nickname for .services-item 
const serviceItems = document.querySelectorAll(".services-item");
const totalAmount = document.getElementById("total-amount");

// a helper that adds up the selected prices
// updateTotal....this starts as a helper with a name, it does nothing until you call it later. the {} opens its step
// item in all this codes here means, the row in your hand (i.e the row that you are holding now) then the forEach means...for each of the item, do this) 
// the item.dataset.price reads the data-price from the HTML
function updateTotal() {
    let total = 0;
    serviceItems.forEach(function (item) {
        if (item.classList.contains("selected")){
            total = total + Number(item.dataset.price);
        }
    });
    totalAmount.textContent = "₦" + total.toLocaleString();
}

// make every row clickable
// the first line of code here means go through the serviceItems (which is the six rows), and for each of them, give them this function
// item.addeventlistener("click", function.....) literally means "row, whenever you are clicked, run these steps" 
// item.classlist.toggle("selected") literally means "whoa look, if i select any item..if the price is not there,add it. and if the price is already there, remove it."
// the updateTotal helps to run the helper, the () means "do it now"
serviceItems.forEach(function (item){
    item.addEventListener("click", function() {
        item.classList.toggle("selected");
        updateTotal();
    });
});


const galleryGrid = document.querySelectorAll(".gallery-grid");