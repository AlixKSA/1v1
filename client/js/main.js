let selectedSkin = null;
const skins = ["dragon.png", "tiger.png", "eagle.png"]; // ضع هنا أسماء الصور في assets/skins

const skinsContainer = document.getElementById("skinsContainer");

skins.forEach(skin => {
    const img = document.createElement("img");
    img.src = `../assets/skins/${skin}`;
    img.onclick = () => selectSkin(img, skin);
    skinsContainer.appendChild(img);
});

function selectSkin(imgElement, skin) {
    selectedSkin = skin;
    document.querySelectorAll("#skinsContainer img").forEach(i => i.classList.remove("selected"));
    imgElement.classList.add("selected");
}

document.getElementById("playButton").addEventListener("click", () => {
    if (!selectedSkin) {
        alert("اختر السكن أولاً!");
        return;
    }
    startArena(selectedSkin);
});

function startArena(skin) {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("gameCanvas").style.display = "block";

    initArena(skin); // سيتم تعريفها في arena.js
}
