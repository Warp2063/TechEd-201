var content = document.getElementById("contentArea");

addVideo("/zzsrcvideos/atoms-8579.mp4", "Atoms");
addVideo("/zzsrcvideos/windmill-112957.mp4", "Windmill");
addVideo("/zzsrcvideos/aurora-borealis-90877.mp4", "Aurora");
addVideo("/zzsrcvideos/network-12716.mp4", "Network");
addVideo("/zzsrcvideos/fish-110879.mp4", "Fish");


function addVideo (url, title) {
    var polaroid = document.createElement("div");
    var video = document.createElement("video");
    var container = document.createElement("div");
    var caption = document.createElement("p");

    polaroid.classList.add("polaroid");
    container.classList.add("container");

    polaroid.appendChild(video);
    polaroid.appendChild(container);
    container.appendChild(caption);

    video.src = url;
    video.alt = title;
    video.style.width = "100%";
    video.controls = true;
    caption.innerText = title;

    content.appendChild(polaroid);
}