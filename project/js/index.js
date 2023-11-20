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
    container: document.querySelector("#container"),
};

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

 function undertenfilter(){
    if(booksForSale.Price < 10){
        DOMSelectors.container.insertAdjacentHTML(
            "afterend",
            `<div class = "card">
            <h3 class="booktitle">${DOMSelectors.booktitle.value}</h3>
            <img src=${DOMSelectors.inputImage.value}> </img>
            <h4 class="bookauthor">${DOMSelectors.bookauthor.value}</h4>
            <h5 class="bookprice">${DOMSelectors.bookprice.value}</h5>
        </div>`
       )}
};
function inStockfilter(){
    if(booksForSale.inStock === true){
        DOMSelectors.container.insertAdjacentHTML(
            "afterend",
            `<div class = "card">
            <h3 class="booktitle">${DOMSelectors.booktitle.value}</h3>
            <img src=${DOMSelectors.inputImage.value}> </img>
            <h4 class="bookauthor">${DOMSelectors.bookauthor.value}</h4>
            <h5 class="bookprice">${DOMSelectors.bookprice.value}</h5>
        </div>`
       )}
};
DOMSelectors.underten.addEventListener("click", function (){
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
