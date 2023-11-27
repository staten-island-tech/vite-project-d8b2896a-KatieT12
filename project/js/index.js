import '../css/style.css';
import{booksForSale} from "./sale";

 const DOMSelectors = {
    booktitle: document.querySelector("booksForSale.title"),
    bookcover: document.querySelector("booksForSale.img"),
    bookauthor: document.querySelector("booksForSale.Author"),
    bookprice: document.querySelector("booksForSale.price"), 
    changetheme: document.querySelector("#changetheme"),
    instockbooks: document.querySelector("#instockbooks"),
    underten: document.querySelector("#underten"),
    container: document.querySelector(".container"),
};

booksForSale.forEach(el => 
DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
    <h3 class="booktitle">${el.title}</h3>
    <img src=${el.img}> </img>
    <h4 class="bookauthor">${el.Author}</h4>
    <h5 class="bookprice">${el.Price}</h5>
</div>`
)) 

/* booksForSale.forEach((book) =>
book.DOMSelectors.container.insertAdjacentHTML(
    `<div class = "card">
    <h3 class="booktitle">${DOMSelectors.booktitle.value}</h3>
    <img src=${DOMSelectors.inputImage.value}> </img>
    <h4 class="bookauthor">${DOMSelectors.bookauthor.value}</h4>
    <h5 class="bookprice">${DOMSelectors.bookprice.value}</h5>
</div>`
));     */

DOMSelectors.changetheme.addEventListener("click", function (){
    if(document.body.classList.contains("light")){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else{
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
});
function clearFields(){
    DOMSelectors.container.innerHTML = "";
}
 function undertenfilter(){
    clearFields();
 /*    const array = booksForSale;
    const map = array.map((Price) => Price.value < 10);
    console.log(map); */

         if(booksForSale.Price < 10){
        booksForSale.forEach(el => 
        DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `<div class = "card">
            <h3 class="booktitle">${el.title}</h3>
            <img class="bookcover" src=${el.img} alt="Book Cover"></img>
            <h4 class="bookauthor">${el.Author}</h4>
            <h5 class="bookprice">${el.Price}</h5>
            </div>`
    ))}};

function inStockfilter(){
    clearFields();
    if(booksForSale.inStock === true){
    booksForSale.forEach(el => 
        DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `<div class = "card">
            <h3 class="booktitle">${el.title}</h3>
            <img src=${el.img}> </img>
            <h4 class="bookauthor">${el.Author}</h4>
            <h5 class="bookprice">${el.Price}</h5>
            </div>`
    ))}
};
DOMSelectors.underten.addEventListener("click", function (){
      /*   document.body.classList.remove(); */
        undertenfilter();

    });

DOMSelectors.instockbooks.addEventListener("click", function (){
        inStockfilter();   
    });
        /* document.container.classList.add(element.title); */
 /* booksForSale
    .filter(element => element.Genres.includes ('Romance'))
    .forEach(element => DOMSelectors.container.add(element.title)); */
/* document.querySelector("#sciencefic").addEventListener("click", function (){
    booksForSale
    .filter(element => element.Genres.includes ('Science Fiction'))
    .forEach(element => DOMSelectors.container.add(element.title));
}); */
//

function insertCard(arr){
    arr.forEach((x) =>
    DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
        <h3 class="booktitle">${x.title}</h3>
        <img class="bookcover" src=${x.img} alt="Book Cover"></img>
        <h4 class="bookauthor">${x.Author}</h4>
        <h5 class="bookprice">${x.Price}</h5>
        </div>`
))
}
let buttons = DOMSelectors.querySelector("button")
//for each button we add an event lsitener
buttons.forEach((btn) => btn.addEventListener("click", function(){
    let type = btn.textContent.toLowerCase() //get value or text content of button to be compared -> filtering based on name
    let newArr = categories.filter((category) => category.cuisine === type)
    clearFields();
    insertCard(newArr) // pasxs filtered array into cards to put on screen
}))