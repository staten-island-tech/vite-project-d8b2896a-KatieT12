import '../css/style.css';
import{booksForSale} from "./sale";
import {DOMSelectors} from "./DOM";

booksForSale.forEach(el => 
DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
    <h3 class="booktitle">${el.title}</h3>
    <img src=${el.img} alt="Book Cover"> </img>
    <h4 class="bookauthor">${el.Author}</h4>
    <h5 class="bookprice">${el.Price}</h5>
</div>`
));

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
};
/* 
 function undertenfilter(){
    clearFields();
   const array = booksForSale;
    booksForSale.filter((element) => element.Price < 10).forEach(el => 
        DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `<div class = "card">
            <h3 class="booktitle">${el.title}</h3>
            <img class="bookcover" src=${el.img} alt="Book Cover"></img>
            <h4 class="bookauthor">${el.Author}</h4>
            <h5 class="bookprice">${el.Price}</h5>
            </div>`
    ))
};

function inStockfilter(){
    clearFields();
    booksForSale.filter((element) => element.inStock === true).forEach(el => 
        DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `<div class = "card">
            <h3 class="booktitle">${el.title}</h3>
            <img src=${el.img} alt="Book Cover"> </img>
            <h4 class="bookauthor">${el.Author}</h4>
            <h5 class="bookprice">${el.Price}</h5>
            </div>`
    ))
};
*/
function main(){
    clearFields();
    booksForSale.forEach(el => 
        DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `<div class = "card">
            <h3 class="booktitle">${el.title}</h3>
            <img src=${el.img} alt="Book Cover"> </img>
            <h4 class="bookauthor">${el.Author}</h4>
            <h5 class="bookprice">${el.Price}</h5>
        </div>`
        )) 
};

/*
DOMSelectors.underten.addEventListener("click", function (){
        undertenfilter();

    });

DOMSelectors.instockbooks.addEventListener("click", function (){
        inStockfilter();   
    });
*/
DOMSelectors.main.addEventListener("click", function (){
        main();   
    }); 

function insertCard(arr){
    arr.forEach((x) => DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
        <h3 class="booktitle">${x.title}</h3>
        <img class="bookcover" src=${x.img} alt="Book Cover"></img>
        <h4 class="bookauthor">${x.Author}</h4>
        <h5 class="bookprice">${x.Price}</h5>
        </div>`
))}; 
function filtering(){
 let buttons = document.querySelectorAll("#button")  
buttons.forEach((btn) => btn.addEventListener("click", function(){
    clearFields();
    let genre = btn.textContent.toLowerCase() 
    let newArr = booksForSale.filter((book) => book.Genres.includes(genre));
    insertCard(newArr)
})); 
};
filtering()

