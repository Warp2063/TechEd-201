# Code for lab-02a

**Task:**

Extending the original code:

1. Paste your yesterdays code into your replit or vscode
2. Create a second click event handler and listener
3. Now, when the click event happens we need to get four prompts -> ducation, favorite programming language, future dream role, holiday destination
4. Now, when someone enters the favorite language of their own choice they needs to get an alert saying hey you have selected the favorite language....
5. After all the prompts are done render that to the frontend.

## Version 1

***

```html
<html>
    <head>
        <style>
            body {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                color: black;
                font-size: 25px;

            }
        </style>
    </head>

    <body>
        
        <ul id="theList">
            
            <li id="name">Name</li>
            <li id="age">Age</li>
            <li id="country">Country</li>
            <li id="favColor">Favorite Color</li>
            
        </ul>
        <!-- <ul id="prefs"> -->

        </ul>

        <button onclick="getInputs()">Click to set personal info</button>
        <button onclick="getPreferences()">Set personal preferences</button>
        
        <script>
            let personalInfo = [], prefInputs = [];
            console.log(personalInfo.concat(prefInputs));

            function getInputs() {
                personalInfo = [];
                personalInfo.push( prompt("What's your name?") );
                //document.getElementById("name").innerHTML = prompt("What's your name?");
                personalInfo.push( prompt("What's your age?") );
                //document.getElementById("age").innerHTML = prompt("What's your age?");
                personalInfo.push( prompt("What country do you live in?") );
                //document.getElementById("country").innerHTML = prompt("What country do you live in?");
                personalInfo.push( prompt("What's your favorite color?") );
                //document.getElementById("favColor").innerHTML = prompt("What's your favorite color?");

                //document.getElementById("theList").style.color = document.getElementById("favColor").innerHTML;
                document.getElementById("theList").style.color = personalInfo[personalInfo.length - 1];
                document.getElementById("theList").innerHTML = buildHtmlList(personalInfo.concat(prefInputs));

                // reset prefs
                //document.getElementById("prefs").innerHTML = "";

            }

            function getPreferences() {

                prefInputs = [];
                prefInputs.push( prompt("What's your education level?") );
                prefInputs.push( prompt("What's your favorite programming language?") );
                
                //if(document.getElementById("name").innerHTML.toLowerCase() == 'carla') {
                if(personalInfo.length > 0 && personalInfo[0].toLowerCase() == 'carla') {
                    alert("Hi, Carla!  You've set your favorite programming language to " + prefInputs[prefInputs.length - 1] + ".");
                }

                prefInputs.push( prompt("What's your future dream role?") );
                prefInputs.push( prompt("What's your preferred holiday destination?") );

                //document.getElementById("prefs").innerHTML = buildHtmlList(prefInputs);
                //document.getElementById("prefs").style.color = document.getElementById("favColor").innerHTML;
                document.getElementById("theList").innerHTML = buildHtmlList(personalInfo.concat(prefInputs));
            }

            
            function buildHtmlList(array) {
                let output = "";
                for(let i = 0; i < array.length; i++) {
                    output += "<li>" + array[i] + "</li>";
                }
                return output;
            }

        </script>
    </body>
</html>
```

## Version 2

```html
<!DOCTYPE html>
<!-- This is an extension of lab-01a.html -->

<!--
    1. create four prompts
    2. each prompt should ask your name, age, country and fav color respectively
    3. Create a LIST in your html
    4. This list should contain four list items with name, age, country and fav color
    5. the values you enter in your prompt should be rendered in the frontend and the text color should be the fav color you entered
-->
<!--
    New tasks:
    1. Paste your yesterdays code into your replit or vscode
    2. Create a second click event handler and listener
    3. Now, when the click event happens we need to get four prompts -> education, favorite programming language, future dream role, holiday destination
    4. Now, when someone enters the favorite language of their own choice they needs to get an alert saying hey you have selected the favorite language....
    5. After all the prompts are done render that to the frontend.
-->

<!--
    Potential future improvements:
    Input checking
    Refactor question strings as a string array, and prompts as either a loop and possibly a function that does the input checking
-->


<html>
    <head>
        <style>
            body {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                color: black;
                font-size: 25px;

            }
        </style>
    </head>

    <body>
        
        <ul id="bioInfo">
            
            <li id="name">Name</li>
            <li id="age">Age</li>
            <li id="country">Country</li>
            <li id="favColor">Favorite Color</li>
            
        </ul>
        

        <button onclick="getBioInputs()">Set personal info</button>
        <button onclick="getPrefInputs()">Set personal prefs</button>
        
        <script>
            const bioQuestions = ["What's your name?", "What's your age?", "What country do you live in?", "What's your favorite color?"];
            const prefQuestions = ["What's your education level?", "What's your favorite programming language?", 
                                    "What's your future dream role?", "What's your preferred holiday destination?"];
            let bioAnswers = [], prefAnswers = [];
            console.log(bioAnswers.concat(prefAnswers));

            function getBioInputs() {
                bioAnswers = [];
                for(let i = 0; i < bioQuestions.length; i++) {
                    bioAnswers.push( promptQuestion(bioQuestions[i]), true );
                }

                document.getElementById("bioInfo").style.color = bioAnswers[bioAnswers.length - 1];
                document.getElementById("bioInfo").innerHTML = buildHtmlList(bioAnswers.concat(prefAnswers));
            }

            function getPrefInputs() {

                prefAnswers = [];
                prefAnswers.push( promptQuestion(prefQuestions[0]), true );
                prefAnswers.push( promptQuestion(prefQuestions[1]), true );
                
                if(bioAnswers.length > 0 && bioAnswers[0].toLowerCase() == 'carla') {
                    alert("Hi, Carla!  You've set your favorite programming language to " + prefAnswers[prefAnswers.length - 1] + ".");
                }

                prefAnswers.push( promptQuestion(prefQuestions[2]), true );
                prefAnswers.push( promptQuestion(prefQuestions[3]), true );

                document.getElementById("theList").innerHTML = buildHtmlList( bioAnswers.concat(prefAnswers) );
            }

            
            function buildHtmlList(array) {
                let output = "";
                for(let i = 0; i < array.length; i++) {
                    output += "<li>" + array[i] + "</li>";
                }
                return output;
            }

            function promptQuestion(questionStr) {
                return promptQuestion(questionStr, false);
            }

            function promptQuestion(questionStr, mustAnswer) {
                let response = prompt(questionStr);

                while (mustanswer && (response == null || response == '')) {
                    prompt("A response is required.\n" + questionStr);
                }
                return response;
            }

        </script>
    </body>
</html>
```
