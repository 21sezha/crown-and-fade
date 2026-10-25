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


const galleryImages = document.querySelectorAll(".gallery-grid img");
const Overlay = document.querySelector(".image-overlay");
const overlayImg = document.querySelector(".image-overlay img");

galleryImages.forEach((image)=> {
    image.addEventListener("click", ()=> {
        overlayImg.src = image.src;
        Overlay.classList.add("active");
        document.body.classList.add("no-scroll");
    });
});

Overlay.addEventListener("click", ()=> {
    Overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    item.addEventListener("click", ()=> {
        faqItems.forEach((faq) => {
            if (faq !== item) {
            faq.classList.remove("open");
            }
        });
        item.classList.toggle("open");
    });
});


const nameInput= document.querySelector("#yourname");
const phoneInput = document.querySelector("#phonenumber");
const dayInput = document.querySelector("#preferredday");
const bookingError = document.querySelector("#booking-error");
const bookingSuccess = document.querySelector("#booking-success");
const thankName = document.querySelector("#thank-name");
const thankDay = document.querySelector("#thank-day");
const bookingForm = document.querySelector(".book-content form");
const bookButton = document.querySelector("#book-button");

bookButton.addEventListener("click", (e)=>{
    e.preventDefault();
    if (nameInput.value.trim() === "" || phoneInput.value.trim() === "") {
        bookingError.style.display = "block";
        return;
    }
    bookingError.style.display = "none";
    thankName.textContent = nameInput.value;
    thankDay.textContent= dayInput.value;
    bookingForm.style.display = "none";
    bookingSuccess.style.display = "block";
});