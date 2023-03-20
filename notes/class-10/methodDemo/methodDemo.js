var people = []; // An array of Person objects.

class Person {
    constructor(name, favColor) {
        this.name = name;
        this.favColor = favColor;
    }

    get info() {
        return `${this.name}\'s favorite color is ${this.favColor}.`;
    }

    clicked(callingEvent) {
        //console.log("clicked!");
        //console.log(callingEvent);

        //let target = callingEvent.target.closest(".person"); // target is the child that generated the Event
        let target = callingEvent.currentTarget; //currentTarget is the parent element that owns the Event

        //console.log(target);
        //console.log(`Person clicked: ${target.person.name}`);
        //console.table(target.person);
        alert(target.person.info);
    }
}



/**
* Get a name and a favorite color, create a person object, add the object to an array, display to the DOM
*/
function addPerson() {
    //console.log("Add person clicked");

    // Create a new Person
    let name = prompt("What's the person's name?");
    let favColor = prompt("What's their favorite color?");

    // Stop here if the info wasn't entered.
    if (name == null || name == "" || favColor == null || favColor == "") {
        return;
    }

    let personObj = new Person(name, favColor.toLowerCase());

    //console.log(`New person created: ${personObj.name}`);
    //console.table(personObj);

    people.push(personObj);

    // Create HTMLElements
    var personInfo = document.createElement("ul");
    var nameItem = document.createElement("li");
    var favColorItem = document.createElement("li");

    // Adding class, style, innerText, Event listener
    personInfo.classList.add("person"); // the Unsorted List gets the class name "person"
    personInfo.person = personObj; // adds a new property, person, to an HTMLElement with the Person object as the value
    personInfo.style.backgroundColor = personObj.favColor;
    personInfo.addEventListener("click", personObj.clicked, false); // add click listener
    nameItem.innerText = personObj.name;
    favColorItem.innerText = personObj.favColor;

    //--------------------------- DEBUG
    /*
    console.log("person?" + personInfo.person);
        
    console.log(
        "has person property? " + personInfo.hasOwnProperty("person")
    );
    console.log("attempting to retrieve person from HTMLElement");
    console.table(personInfo.person);
    */
    //-----------------------------

    // Add to DOM
    personInfo.appendChild(nameItem);
    personInfo.appendChild(favColorItem);
    document.getElementById("peopleDiv").appendChild(personInfo);
}