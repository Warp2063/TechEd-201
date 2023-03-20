# Class 10

## March 6, 2023

- media query (hover?)
- Objects and methods
  - function inside a method is called a method
  - `objName.methodName = function () { // function definition };` defines a method in an object
  - `objName.methodName` will return a method (function) definition
  - `objName.methodName()` will execute the method
- Classes
  - A class is a template

```html
class Cars { constructor(\_name, \_color, \_brand, \_cost) { this.name = \_name;
this.color = \_color; this.brand = \_brand; this.cost = \_cost; } run() { return
"accelerator is pressed"; } stop() { return "brake is pressed"; } change() {
return "clutch is pressed"; } buy() { return "I bought the car for " +
this.cost; } }
```

---

## March 7, 2023

- today we'll start placing the scripts in an external .JS file.
  - In the Script section, `<script src="classes.js"></script>`
- Classes
  - properties & methods for Object
  - usually a class will have the first letter capitalized, as a standard
  - ```
    class Car {
      constructor() {

      }
    }
    ```
  - invoke via `new`, as in `var x = new Car();`

---

[Return to TechEd-201 ReadMe](/README.md)
