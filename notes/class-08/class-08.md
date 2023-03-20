# Class 08

## February 27, 2023

- Objects!
  - `var obj = {firstName: "John", lastName: "Doe"}`
  - The above has two properties, `firstName` and `lastName`, accessible as `obj.firstName` and `obj.lastName`
  - Often recommend using keyword `const` instead of var. Does not prevent changing of the properties within. So, if `const` is used when declaring and assigning the initial object, `obj = {firstName: "Jane", lastName: "Doe"}` will produce an error, but `obj.firstName = "Jane"` will not.
- CRUD operations
  - Create
  - Read
  - Update
  - Delete

---

## February 28, 2023

- Useful things
  - `console.table(variable)` displays data in a tabular format
  - `console.time()` starts a timer
  - `console.timeEnd()` stops the timer and outputs the elapsed time
  - `console.clear()` clears the console
  - `console.warn("some warning")` gives a warning in yellow text
  - `console.error("error message")` gives a red error message that halts execution
  - > You can use console.info() to output information messages; console.debug() to output debug messages; console.warn() to output warning messages and console.error() to output error messages.
    > You may also use the %c pattern to use the second argument as a style formatting parameter. For example: console.log("%cThis is green text on a yellow background.", "color:green; background-color:yellow");.
  - `console.trace()` - traces the execution stack to that point
  - `console.count("Label")` will increment a counter for that label and output it after the included text
  - `console.countReset("Label")` resets the count for that label
- CSS FlexBox

  - `display: flex` defines the element as a parent flex container; children will follow flex rules
  - `flex-direction: row|column|??`
  - `flex-wrap: wrap|nowrap`
  - `justify-content: space-around|space-between|space-evenly`
  - `gap: 10px` - Similar to margin, all around, at minimum 10px.
  - More at [CSS-Tricks, Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

[Return to TechEd-201 ReadMe](/README.md)
