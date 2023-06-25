// Execute JavaScript code after the document is fully loaded
    document.addEventListener("DOMContentLoaded", function() {
   // i. Get element of id "main-content" and assign them in a variable
   let mainContentElement = document.getElementById("main-content");

   // ii. Display all child elements of "main-content" element
   let childElements = mainContentElement.children;
   for (let i = 0; i < childElements.length; i++) {
     console.log(childElements[i].innerHTML);
   }

   // iii. Get all elements of class "render" and show their innerHTML in the browser
   let renderElements = document.getElementsByClassName("render");
   for (let j = 0; j < renderElements.length; j++) {
     console.log(renderElements[j].innerHTML);
   }

   // iv. Fill input value whose element id is "first-name" using JavaScript
   let firstNameInput = document.getElementById("first-name");
   firstNameInput.value = "Alex";

   // v. Repeat part iv for id "last-name" and "email"
   let lastNameInput = document.getElementById("last-name");
   lastNameInput.value = "Bank";

   let emailInput = document.getElementById("email");
});

//Q2
   // Execute JavaScript code after the document is fully loaded
   document.addEventListener("DOMContentLoaded", function() {
    // i. What is node type of element having id "form-content"
    let formContentElement = document.getElementById("form-content");
    console.log("Node type of element with id 'form-content': " + formContentElement.nodeType);

    // ii. Show node type of element having id "lastName" and its child node
    let lastNameElement = document.getElementById("lastName");
    console.log("Node type of element with id 'lastName': " + lastNameElement.nodeType);
    console.log("Node type of its child node: " + lastNameElement.firstChild.nodeType);

    // iii. Update child node of element having id "lastName"
    let newChildNode = document.createTextNode("New Last Name");
    lastNameElement.replaceChild(newChildNode, lastNameElement.firstChild);

    // iv. Get First and last child of id "main-content"
    let mainContentElement = document.getElementById("main-content");
let firstChild = mainContentElement.firstElementChild;
    let lastChild = mainContentElement.lastElementChild;
    console.log("First child of 'main-content': " + firstChild.innerHTML);
    console.log("Last child of 'main-content': " + lastChild.innerHTML);

    // v. Get next and previous siblings of id "lastName"
    let nextSibling = lastNameElement.nextElementSibling;
    let previousSibling = lastNameElement.previousElementSibling;
    console.log("Next sibling of 'lastName': " + nextSibling.innerHTML);
    console.log("Previous sibling of 'lastName': " + previousSibling.innerHTML);

    // vi. Get parent node and node type of element having id "email"
    let emailElement = document.getElementById("email");
    let parentNode = emailElement.parentNode;
    console.log("Parent node of 'email': " + parentNode.innerHTML);
    console.log("Node type of element with id 'email': " + emailElement.nodeType);
  });