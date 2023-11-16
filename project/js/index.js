import '../css/style.css';
import{booksForSale} from "./sale";
/* const DOMSelectors = {
    booktitle: document.querySelector(""),
    bookcover: document.querySelector(""),
    bookauthor: document.querySelector(""),
    bookprice: document.querySelector(""),
}
document.querySelector("container").insertAdjacentHTML(
     `<div class = "card">
     <h3 class="title">${DOMSelectors.booktitle.value}</h3>
     <h4 class="author">${DOMSelectors.bookauthor.value}</h4>
     <img src=${DOMSelectors.inputImage.value}> </img>
     <br>
 </div>`
); */

document.querySelector("#changetheme").addEventListener("click", function (){
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
document.querySelector("#romance").addEventListener("click", function (){
    booksForSale
    .filter(element => element.Genres.includes ('Romance'))
    .forEach(element => document.body.classList.add(element.title));
});
document.querySelector("#sciencefic").addEventListener("click", function (){
    booksForSale
    .filter(element => element.Genres.includes ('Science Fiction'))
    .forEach(element => document.body.classList.add(element.title));
});
