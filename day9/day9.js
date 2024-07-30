// Task 1: Select an HTML element by its ID and change its text content
document.getElementById('myElementID').textContent = 'New text content';

// Task 2: Select an HTML element by its class and change its background color
document.querySelector('.myClassName').style.backgroundColor = 'blue';

// Task 3: Create a new div element with some text content and append it to the body
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element';
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list
const newLi = document.createElement('li');
newLi.textContent = 'New list item';
document.querySelector('ul').appendChild(newLi);

// Task 5: Select an HTML element and remove it from the DOM
const elementToRemove = document.getElementById('elementToRemove');
elementToRemove.parentNode.removeChild(elementToRemove);

// Task 6: Remove the last child of a specific HTML element
const parentElement = document.getElementById('parentElementID');
parentElement.removeChild(parentElement.lastElementChild);

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
document.querySelector('img').setAttribute('src', 'newImage.jpg');

// Task 8: Add and remove a CSS class to/from an HTML element
const element = document.getElementById('myElement');
element.classList.add('newClass');
element.classList.remove('oldClass');

// Task 9: Add a click event listener to a button that changes the text content of a paragraph
document.getElementById('myButton').addEventListener('click', function() {
  document.getElementById('myParagraph').textContent = 'Paragraph text changed!';
});

// Task 10: Add a mouseover event listener to an element that changes its border color
document.getElementById('hoverElement').addEventListener('mouseover', function() {
  this.style.borderColor = 'red';
});

// Feature Request 1: Text Content Manipulation Script
function changeTextContentById(id, newText) {
  document.getElementById(id).textContent = newText;
}

// Feature Request 2: Element Creation Script
function createAndAppendDiv(newText) {
  const newDiv = document.createElement('div');
  newDiv.textContent = newText;
  document.body.appendChild(newDiv);
}

// Feature Request 3: Element Removal Script
function removeElementById(id) {
  const element = document.getElementById(id);
  if (element) {
    element.parentNode.removeChild(element);
  }
}

// Feature Request 4: Attribute Modification Script
function changeAttribute(element, attribute, value) {
  document.querySelector(element).setAttribute(attribute, value);
}

// Feature Request 5: Event Handling Script
function addEventListenerToElement(element, event, handler) {
  document.querySelector(element).addEventListener(event, handler);
}
