const emojis = [
    "😎",
    "😎",
    "💪",
    "💪",
    "☕",
    "☕",
    "🍕",
    "🍕",
    "🤡",
    "🤡",
    "😼",
    "😼",
    "💩",
    "💩",
    "🐒",
    "🐒",];

let openCards = [];

let shuffleEmojis = shuffle(emojis);

function shuffle(emojis) {
    var j, x, i;
    for (i = emojis.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = emojis[i];
        emojis[i] = emojis[j];
        emojis[j] = x;
    }
    return emojis;
}


for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if(openCards.length < 2 && !openCards.includes(this)){
        this.classList.add("boxOpen");
        openCards.push(this);
        playSound("click-box")
    };

    if(openCards.length === 2) {
        setTimeout(checkMatch, 500);
    };
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        playSound("match")
    } else { 
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
};
openCards = [];

if(document.querySelectorAll(".boxMatch").length === emojis.length) {
    playSound("venceu");
    alert("Você venceu!");
}
}

function playSound(audioName) {
    let audio = new Audio(`./src/sounds/${audioName}.wav`);
    audio.volume = 0.5;
    audio.play();
}
