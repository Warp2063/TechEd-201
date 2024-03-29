# Lab 07

## Task

Evolving from [Lab-05](/code/lab-05/lab-05.md)

Also, improve on the responsiveness of the page when it's resized.

1. When a button is clicked we should get four prompts -> city, min-customers, max-customers, cookies-sold
2. Now this data should be displayed in the table
3. The table should contain four columns -> city, min-customers, max-customers, cookies-sold.

## Additional Features

I add the CSS pointer property to each City name, and also add an event listener for it for when it's clicked, bringing up an alert with information pulled from that row of the table.

## Version 1

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Salmon Cookies</title>
    <style>
      body {
        padding-left: 0px;
      }

      div {
        margin: 0px;
        padding: 0px;
        font-family: Arial, Helvetica, sans-serif;
      }

      #title {
        font-size: xx-large;
        font-weight: bolder;
        text-align: center;
        color: #ffb703;
        text-shadow: 1px 1px #fb8500;
        margin: 25px;
        font-family: "Lucida Handwriting";
      }

      img {
        max-width: 75px;
        max-height: 75px;
        padding: 5px;
        border: none;
        border-radius: 10px;
        margin: 10px;
      }

      #headerImg {
        position: fixed;
        top: 6px;
        left: 75%;
        float: right;
        max-width: 85px;
        max-height: 85px;
        margin: auto;
        padding: 0px;
        border: 2px solid #219ebc;
      }

      #header {
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100px;
        width: 100%;
        background-color: #023047;
      }

      #main {
        position: relative;
        top: 100px;
        left: 0px;
        bottom: 30px;
        min-width: fit-content;
        width: 100%;
        max-width: calc(100% - 80px);
        height: fit-content;
        min-height: 500px;
        background-color: #8ecae6;
        text-align: center;
        padding: 0px;
        padding-left: 150px;
        padding-right: 0px;
        margin: -10px;
      }

      #side {
        position: absolute;
        float: left;
        top: 0px;
        left: 0px;
        width: 149px;
        height: 100%;
        min-height: 500px;
        background-color: #219ebc;
        border-right: 1px solid #023047;
        margin: 0px;
      }

      button {
        border-radius: 10px;
        width: 120px;
        margin: 15px;
        margin-top: 30px;
        background-color: #ffb703;
        border: 2px solid #fb8500;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 18px;
        font-weight: lighter;
      }

      #mainContent {
        position: relative;
        height: fit-content;
        width: calc(100% - 100px);
        padding: 25px;
        border: 1px solid black;
        text-align: center;
        justify-content: center;
      }

      #footer {
        position: relative;
        top: 110px;
        width: 100%;
        height: 30px;
        text-align: center;
        font-family: monospace;
        margin: -10px;
        border: 1px solid black;
      }

      table {
        border: 1px solid #023047;
      }

      th,
      td {
        padding: 3px;
        border: 1px solid #023047;
      }
    </style>
  </head>

  <body>
    <div id="main">
      <div id="mainContent">
        Cities:
        <br />
        <table id="custTable">
          <tr>
            <th>City</th>
            <th>Min Customers</th>
            <th>Max Customers</th>
            <th>Cookies Sold</th>
          </tr>
        </table>
      </div>

      <div id="side">
        <button onclick="createClicked()">Create</button>
      </div>
    </div>

    <div id="footer">Copyright by &lt;Your Name&gt;</div>

    <div id="header" onclick="loremipsum()">
      <div id="title">Salmon Cookies</div>

      <img id="headerImg" src="salmoncookie.jpeg" alt="salmon cookie image" />
    </div>

    <script>
      function createClicked() {
        let city = prompt("Enter a city");
        let minCustomers = prompt("Enter minimum number of customers");
        let maxCustomers = prompt("Enter maximum number of customers");
        let cookiesSold = prompt("Enter number of cookies sold");
        let table = document.getElementById("custTable");
        let rowElement = document.createElement("tr");
        let cityElement = document.createElement("td");
        let minCustElement = document.createElement("td");
        let maxCustElement = document.createElement("td");
        let cookiesSoldElement = document.createElement("td");
        cityElement.innerText = city;
        cityElement.addEventListener("click", clickCity, false);
        cityElement.style.cursor = "pointer";
        minCustElement.innerText = minCustomers;
        maxCustElement.innerText = maxCustomers;
        cookiesSoldElement.innerText = cookiesSold;
        rowElement.appendChild(cityElement);
        rowElement.appendChild(minCustElement);
        rowElement.appendChild(maxCustElement);
        rowElement.appendChild(cookiesSoldElement);
        table.appendChild(rowElement);
        // Why didn't I implement this as a loop?  Could've pushed responses into an array,
        // then looped through the array, creating elements, adding innerText, and appending them.
        // However, I then couldn't have changed the pointer style for cityElement or added
        // the event listener as easily.
      }

      function clickCity(callingEvent) {
        //console.log(callingEvent.target);
        let element = callingEvent.target;
        let text = [];

        do {
          text.push(element.innerText); // get the innertext of the current element, push to array
          element = element.nextElementSibling; // move to the next element
        } while (element != null);

        alert(
          `${text[0]} has at minimum ${text[1]} customers, at maximum ${text[2]} customers, and has sold ${text[3]} cookies.`
        );
      }

      function loremipsum() {
        const loremipsumtext = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
        consectetur adipiscing elit ut aliquam purus sit. Faucibus ornare
        suspendisse sed nisi lacus sed viverra. Quam quisque id diam vel quam.
        Dui faucibus in ornare quam viverra orci. Proin sagittis nisl rhoncus
        mattis rhoncus urna neque. Pretium vulputate sapien nec sagittis aliquam
        malesuada bibendum. Dui accumsan sit amet nulla facilisi morbi tempus.
        Aliquet porttitor lacus luctus accumsan tortor posuere ac. Donec et odio
        pellentesque diam volutpat commodo sed egestas. Urna condimentum mattis
        pellentesque id nibh tortor id aliquet lectus. Semper viverra nam libero
        justo laoreet sit amet cursus. Faucibus pulvinar elementum integer enim
        neque volutpat ac tincidunt. Vestibulum lectus mauris ultrices eros in
        cursus. Fringilla phasellus faucibus scelerisque eleifend. Laoreet non
        curabitur gravida arcu ac tortor. Tellus rutrum tellus pellentesque eu
        tincidunt tortor aliquam. Mauris pellentesque pulvinar pellentesque
        habitant morbi tristique. Vitae aliquet nec ullamcorper sit. Est
        ullamcorper eget nulla facilisi etiam. Amet justo donec enim diam
        vulputate ut pharetra. Nunc eget lorem dolor sed viverra. Neque egestas
        congue quisque egestas diam. Sed felis eget velit aliquet sagittis.
        Risus viverra adipiscing at in tellus integer feugiat scelerisque.
        Sapien pellentesque habitant morbi tristique senectus. Nisi vitae
        suscipit tellus mauris. Bibendum enim facilisis gravida neque convallis
        a cras semper. Magna ac placerat vestibulum lectus. Cursus risus at
        ultrices mi tempus imperdiet nulla malesuada pellentesque. Leo vel
        fringilla est ullamcorper eget nulla. Eu lobortis elementum nibh tellus
        molestie nunc non. Libero volutpat sed cras ornare. In fermentum et
        sollicitudin ac orci phasellus. Elit at imperdiet dui accumsan. Lectus
        mauris ultrices eros in cursus. Convallis aenean et tortor at risus
        viverra adipiscing at. Facilisi nullam vehicula ipsum a arcu cursus
        vitae congue mauris. Bibendum ut tristique et egestas quis. Tincidunt
        tortor aliquam nulla facilisi cras fermentum odio eu. Cras pulvinar
        mattis nunc sed blandit. In est ante in nibh. Urna nec tincidunt
        praesent semper feugiat nibh sed. Feugiat sed lectus vestibulum mattis
        ullamcorper velit sed ullamcorper. Neque volutpat ac tincidunt vitae
        semper. Velit scelerisque in dictum non. Vulputate odio ut enim blandit
        volutpat maecenas volutpat. Convallis convallis tellus id interdum velit
        laoreet id donec ultrices. Suspendisse sed nisi lacus sed viverra. Eget
        duis at tellus at urna condimentum. Tortor at auctor urna nunc id
        cursus. Aenean sed adipiscing diam donec adipiscing tristique risus nec.
        Ante metus dictum at tempor commodo ullamcorper a lacus. Tellus
        pellentesque eu tincidunt tortor aliquam nulla. At varius vel pharetra
        vel turpis nunc. Eu feugiat pretium nibh ipsum consequat nisl. Facilisis
        gravida neque convallis a cras semper auctor neque. Curabitur gravida
        arcu ac tortor dignissim. Nunc pulvinar sapien et ligula ullamcorper.
        Morbi tristique senectus et netus et. A cras semper auctor neque vitae.
        Pellentesque pulvinar pellentesque habitant morbi tristique. Netus et
        malesuada fames ac. Consequat mauris nunc congue nisi. Lacus suspendisse
        faucibus interdum posuere lorem ipsum dolor sit. In hendrerit gravida
        rutrum quisque non tellus orci ac. Nisl purus in mollis nunc sed. Auctor
        eu augue ut lectus arcu bibendum at varius vel. Adipiscing at in tellus
        integer feugiat scelerisque varius morbi. Sit amet luctus venenatis
        lectus. Facilisis magna etiam tempor orci eu lobortis. Sapien nec
        sagittis aliquam malesuada bibendum arcu. Imperdiet dui accumsan sit
        amet nulla. Tellus integer feugiat scelerisque varius morbi enim nunc
        faucibus a. Est ullamcorper eget nulla facilisi etiam dignissim diam
        quis. Pulvinar pellentesque habitant morbi tristique senectus et netus.
        Amet nisl suscipit adipiscing bibendum est ultricies integer. Fermentum
        odio eu feugiat pretium nibh ipsum consequat nisl. Ipsum dolor sit amet
        consectetur adipiscing elit pellentesque habitant morbi. In tellus
        integer feugiat scelerisque varius morbi enim. Massa sed elementum
        tempus egestas. Arcu vitae elementum curabitur vitae nunc.`;

        document.getElementById("mainContent").innerHTML = loremipsumtext;
        document.getElementById("mainContent").style.textAlign = "left";
      }
    </script>
  </body>
</html>
```
