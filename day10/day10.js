// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('myParagraph').textContent = 'Text changed!';
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
document.getElementById('myImage').addEventListener('dblclick', function() {
    this.style.display = this.style.display === 'none' ? 'block' : 'none';
});

// Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById('myElement').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById('myElement').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById('myInput').addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById('myInput').addEventListener('keyup', function() {
    document.getElementById('displayParagraph').textContent = this.value;
});

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData.entries()));
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById('mySelect').addEventListener('change', function() {
    document.getElementById('selectedValue').textContent = this.value;
});

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById('parentElement').addEventListener('click', function(event) {
    if (event.target && event.target.matches('.childElement')) {
        console.log('Dynamically added child element clicked:', event.target.textContent);
    }
});

// Feature Request 1: Click Event Script
function addClickEventListener(buttonId, paragraphId) {
    document.getElementById(buttonId).addEventListener('click', function() {
        document.getElementById(paragraphId).textContent = 'Text changed!';
    });
}

// Feature Request 2: Mouse Events Script
function handleMouseEvents(elementId) {
    const element = document.getElementById(elementId);
    element.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'yellow';
    });
    element.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
}

// Feature Request 3: Keyboard Events Script
function logKeyPresses(inputId, paragraphId) {
    const input = document.getElementById(inputId);
    input.addEventListener('keydown', function(event) {
        console.log('Key pressed:', event.key);
    });
    input.addEventListener('keyup', function() {
        document.getElementById(paragraphId).textContent = this.value;
    });
}

// Feature Request 4: Form Events Script
function handleFormEvents(formId, selectId, paragraphId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        console.log('Form data:', Object.fromEntries(formData.entries()));
    });
    
    const select = document.getElementById(selectId);
    select.addEventListener('change', function() {
        document.getElementById(paragraphId).textContent = this.value;
    });
}

// Feature Request 5: Event Delegation Script
function setupEventDelegation(parentId) {
    document.getElementById(parentId).addEventListener('click', function(event) {
        if (event.target && event.target.matches('.childElement')) {
            console.log('Dynamically added child element clicked:', event.target.textContent);
        }
    });
}
