var numbers = [1,2,3,4,5,6];

var c_numbers = [...numbers];

console.log("numbers", numbers);
console.log("c_numbers", c_numbers);

numbers.push(7);

console.log("numbers", numbers);
console.log("c_numbers", c_numbers);

var big_numbers = [999, 998, 997];

var allNumbers = [...numbers, ...big_numbers, 1111, 1112];
console.log("allNumbers", allNumbers);

var obj = {
    id: 1, name: "Anil", location: "India"
};

var c_obj = {
    ...obj,
    location: "Mumbai"
}
console.log("c_obj", c_obj);

var x = 10;
var y = "10";

//Type coercion
if(x == y){
    console.log("x == y");
}
else{
    console.log("x not equal y");
}

if(x === y){
    console.log("x === y");
}
else{
    console.log("x not equal y");
}

var foo;

if(foo){

}

const someArr = ["hello", function() {console.log("sadads")}];

// const value =someArr[0];
// const fn =someArr[1];

//destructing
const [value, fn] = someArr;