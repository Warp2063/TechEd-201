# Class-06

## February 21, 2023

- [CSS Diner](https://flukeout.github.io/) - A site where you can practice and learn CSS
- DOM - Document Object Model
  - Web Browsers are written in Javascript. They take the HTML document, read it in, and develop the object tree.
  - DOM manipulation allows you to change the tree structure.
  - You can change `innerHTML`!
  - Also can get/set `innerText`!
    - [Quick innerText test](./test.html)
  - There's also `textContent` which is a little different.
    - [textContent property](https://www.w3schools.com/jsref/prop_node_textcontent.asp)
- Worked on lab-06 in class
  - [Lab-06.md](/code/lab-06/lab-06.md)

---

## February 22, 2023

- `document.createElement(semanticTag)` - creates an element for the DOM tree of the type, but does not place it
  - `createElement("p")`
  - `createElement("div")`
  - `createElement("img")`
  - `createElement("img2")` - error, but will essentially create a `p` element
- `document.getElementById("name").appendChild(element)`

---

[Return to TechEd-201 ReadMe](/README.md)
