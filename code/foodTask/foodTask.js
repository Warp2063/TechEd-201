/**
 * Represents a kind of food
 */
class Food {
    /**
     * Creates a Food object
     * @param {string} nationality 
     * @param {string} foodName 
     * @param {number} quantity 
     */
    constructor (nationality, foodName, quantity) {
        this.nationality = nationality;
        this.foodName = foodName;
        this.quantity = quantity;

        this.flagURL = Food.attemptFlag(nationality);
    }

    // attempts to find a URL image of a flag based on the input string
    static attemptFlag(natlString) {
        switch (natlString.trim().substr(0, 4).toLowerCase()) {
            case "amer":
                return "https://flagpedia.net/data/flags/h80/us.webp";
            case "chil":
                return "https://flagpedia.net/data/flags/h80/cl.webp";
            case "chin":
                return "https://flagpedia.net/data/flags/h80/cn.webp";
            case "engl":
                return "https://flagpedia.net/data/flags/h80/gb.webp";
            case "fren":
            case "fran":
                return "https://flagpedia.net/data/flags/h80/fr.webp";
            case "ital":
                return "https://flagpedia.net/data/flags/h80/it.webp";
            case "indi":
                return "https://flagpedia.net/data/flags/h80/in.webp";
            case "port":
                return "https://flagpedia.net/data/flags/h80/pt.webp";
            default:
                return "https://flagpedia.net/data/flags/h80/" + natlString.trim().substr(0, 2).toLowerCase() + ".webp";
        }
    }
}

var foodForm = document.getElementById("foodForm");
var foodsDiv = document.getElementById("foods");
var foodList = [];


foodForm.addEventListener("submit", function () {
    event.preventDefault();
    let form = event.target;
    // Get inputs from form submission
    let natl = form.nationality.value;
    let foodName = form.foodName.value;
    let quantity = form.qty.value;

    // create Food object
    let food = new Food(natl, foodName, quantity);

    // add Food to array
    foodList.push(food);

    // add Food to DOM
    addFood(food);

    // reset form
    form.nationality.value = "";
    form.foodName.value = "";
    form.qty.value = "1";
});



function addFood(foodObj) {
    let foodDiv = document.createElement("div");
    foodDiv.classList.add("food");
    foodDiv.foodObj = foodObj;

    let flag = document.createElement("img");
    flag.classList.add("flagImg");
    flag.src = foodObj.flagURL;
    flag.alt = "flag";

    let foodDetailsUL = document.createElement("ul");

    let nationalityLI = document.createElement("li");
    nationalityLI.innerText = foodObj.nationality;

    let foodNameLI = document.createElement("li");
    foodNameLI.innerText = foodObj.foodName;

    let quantityLI = document.createElement("li");
    quantityLI.innerText = foodObj.quantity;

    foodDetailsUL.appendChild(nationalityLI);
    foodDetailsUL.appendChild(foodNameLI);
    foodDetailsUL.appendChild(quantityLI);

    foodDiv.appendChild(flag);
    foodDiv.appendChild(foodDetailsUL);

    foodsDiv.appendChild(foodDiv);
}