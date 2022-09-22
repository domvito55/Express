// function hello(){
//     document.getElementById("demo").innerHTML += "Hello world!";   
// }

// document.getElementById("btn").addEventListener("click", hello);

// var hello;

// hello = () =>{
//     document.getElementById("demo").innerHTML += "Hello world!";   
// }
// document.getElementById("btn").addEventListener("click", hello);

// document.getElementById("btn").addEventListener("click", () =>{
//     document.getElementById("demo").innerHTML += "Hello world!";   
// });

var numbers = [1,2,3,4,5];
const squares = numbers.map(n => n*n);
document.write(squares);

var evens = new Array();
numbers.forEach(n =>{
    if (n % 2 === 0){
        evens.push(n)
    }
});
document.write("<br>");
document.write(evens);

const author = {
    fullName: "Bob Alice",
    books: [],
    printBooks() {
        this.books.forEach(book => console.log(book + 'by ' + this.fullName));
    }
};
