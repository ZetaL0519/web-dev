console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
alert("hello world");

console.log('Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped -
			blockScoped;

console.log(typeof floatingPointNumber);

let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;


console.log('if else');
if (true1) {
    console.log(true);
}

if (!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

console.log('If else');
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

console.log("Ternary conditional operation");
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting);

console.log("Legacy ES5 function");

function add(a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

console.log("New ES6 functions");
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

console.log("Implied return");
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

console.log("One parameter parenthesis");
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

console.log("Array");
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log(stringArray1);
console.log(numberArray1);
console.log(numberArray1[1]);

console.log("Array index and length");
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log(length1);
console.log(index1);

console.log("Add and remove data to array");
// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

console.log("For Loops");
for (let i = 0; i < stringArray1.length; i ++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

console.log("Map function");
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a ** 3)

console.log(numberArray1);
console.log(squares);
console.log(cubes);

console.log("Find Function/ Search for element in array");
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log(four);
console.log(string3);


console.log("Find index");
// find the number 4 from the array.
const fourIndex = numberArray1.findIndex(a => a === 4);
// find the string from array.
const string3Index = stringArray1.findIndex(a => a === 'string3');
console.log(fourIndex);
console.log(string3Index);

console.log("Filter Function");
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
console.log(numbersGreaterThan2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
console.log(evenNumbers);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
console.log(oddNumbers);

console.log("Template strings");
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

const logged = false;
const greeting2 = `Logged in: ${logged? "Yes": "No"}`;
console.log(greeting2);

const init = () => {
    console.log('Hello world from jQuery');
    // h2 is referenced by changeStyle and changeStyle2 for further processing.
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log('Binding to DOM');
    console.log(bindById);
    console.log(bindByClass);
// h2 is referenced by changeStyle and changeStyle2 for further processing.
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');
// change style
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);
// set the value of class attribute
    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');
// Add and remove a class
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');
    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');
    // hide content
    const hideMe = $("#hide-me");
    hideMe.hide();
    // show content
    const showMe = $("#show-me");
    showMe.show();
    // create new elements but does not automatically add them to DOM.
    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");
    // append new elements to ul
    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);
    // Removing and emptying content
    const removeThisLi = $("#remove-this");
    const emptyThisUl = $("#empty-this");
    removeThisLi.remove();
    emptyThisUl.empty();

    // Changing content
    const changeThisText =
            $("#change-this-text");
    const changeThisHtml =
            $("#change-this-html");
    changeThisText.html('New text');
    changeThisHtml.html(`
        <li>Line item A</li>
        <li>Line item B</li>
        <li>Line item C</li>
    `);
    const child2 = $("#child-2");
    const parent1 =
        child2.parents("#parent");
    parent1
        .css('background-color', 'red')
        .css('color', 'white');

    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color', 'blue')
    // when i click on the button, it will show Handle click on the console.
    const handleClick =
        () => console.log('Handle click');
    const clickable = $('.clickable');
    clickable.click(handleClick);

    const handleEventTarget = (event) => {
        // this is the target attribute of event generated by the user
        // event is a thing from jQuery
        const target = event.target;
        console.log(target);
        $(target)
            .css('background-color', 'blue')
            .css('color', 'white');
    }
    const eventTarget = $("#event-target");
    // click on the Event target will turn blue
    eventTarget.click(handleEventTarget);

    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $('#hide');
    showBtn = $('#show');
    hideShowHeader = $('#hide-show');
    const hideHandler = () => {
        hideShowHeader.hide();
    }
    const showHandler = () => {
        hideShowHeader.show();
    }
    // click on the button will show/hide header
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);

}
$(init);