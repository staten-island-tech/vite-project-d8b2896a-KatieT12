import '../css/style.css';
import{booksForSale} from "./sale";
 const DOMSelectors = {
    booktitle: document.querySelector("booksForSale.title"),
    bookcover: document.querySelector("booksForSale.img"),
    bookauthor: document.querySelector("booksForSale.Author"),
    bookprice: document.querySelector("booksForSale.price"), 
    changetheme: document.querySelector("#changetheme"),
    romancebtn: document.querySelector("#romance"),
    scifibtn: document.querySelector("#sciencefic"),
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
// cool is light
// warm is dark
function romancefilter{
    
}
DOMSelectors.romancebtn.addEventListener("click", function (){
    if(booksForSale.Genres.contains("Romance")){
        document.querySelector("#container").insertAdjacentHTML(
            `<div class = "card">
            <h3 class="booktitle">${DOMSelectors.booktitle.value}</h3>
            <img src=${DOMSelectors.inputImage.value}> </img>
            <h4 class="bookauthor">${DOMSelectors.bookauthor.value}</h4>
            <h5 class="bookprice">${DOMSelectors.bookprice.value}</h5>
        </div>`
       )}});

DOMSelectors.scifibtn.addEventListener("click", function (){
    if(booksForSale.Genres.contains("Science Fiction")){
        document.querySelector("#container").insertAdjacentHTML(
            `<div class = "card">
            <h3 class="booktitle">${DOMSelectors.booktitle.value}</h3>
            <img src=${DOMSelectors.inputImage.value}> </img>
            <h4 class="bookauthor">${DOMSelectors.bookauthor.value}</h4>
            <h5 class="bookprice">${DOMSelectors.bookprice.value}</h5>
        </div>`
       )}});
        /* document.container.classList.add(element.title); */
 /* booksForSale
    .filter(element => element.Genres.includes ('Romance'))
    .forEach(element => DOMSelectors.container.add(element.title)); */
/* document.querySelector("#sciencefic").addEventListener("click", function (){
    booksForSale
    .filter(element => element.Genres.includes ('Science Fiction'))
    .forEach(element => DOMSelectors.container.add(element.title));
}); */
