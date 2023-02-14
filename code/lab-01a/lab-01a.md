# Code for lab-01a

**Task:**

1. Create a github repo and name it as teched-201
2. Create a sub-repo and name it as class-01
3. Create two files
4. Name one file as readme.md
5. Name a second file as lab-01a.md

## Version 1

***

```html
<!DOCTYPE html>
<html>

<head>
  <title>Basic Page</title>
  <style>
    body {
      background-color: orange;
    }

    p {
      color: purple;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 40px;

    }

    #username {
      font-size: 70px;
      font-family: Arial, Helvetica, sans-serif;
    }
  </style>
</head>

<body>
  <p>This is a website.</p>
  <button onclick="setName()">Click to set your name</button>
  <button onclick="cycleColor()">Click to change name color</button>

  <p id="username"></p>

  <script>
    // let's make a series of several different colors and it'll cycle through

    var colors = ["red", "green", "blue", "purple", "cyan", "black"];
    var colorNum = 0;


    function setName() {
      let name = prompt("What's your name?");

      if (name == null || name.length == 0) {
        alert("You didn't enter a name.");
        return;
      }
      else {
        console.log("Entered name: " + name);
        document.getElementById("username").innerHTML = name;

      }


    }

    function cycleColor() {
      console.log("Set name color to: " + colors[colorNum % colors.length]);
      document.getElementById("username").style.color = colors[colorNum % colors.length];
      colorNum++;
    }


  </script>
</body>

</html>
```
