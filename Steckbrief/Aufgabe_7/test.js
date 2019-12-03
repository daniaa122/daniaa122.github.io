window.addEventListener("load", function () {
    document.querySelector(".b1").addEventListener("mousedown", function () { playSample("Kick.wav"); });
    document.querySelector(".b2").addEventListener("mousedown", function () { playSample("Clap.wav"); });
    document.querySelector(".b3").addEventListener("mousedown", function () { playSample("Hihat.wav"); });
    document.querySelector(".b4").addEventListener("mousedown", function () { playSample("bass1.wav"); });
    document.querySelector(".b5").addEventListener("mousedown", function () { playSample("bass2.wav"); });
    document.querySelector(".b6").addEventListener("mousedown", function () { playSample("bass3.wav"); });
    document.querySelector(".b7").addEventListener("mousedown", function () { playSample("bass4.wav"); });
    document.querySelector(".b8").addEventListener("mousedown", function () { playSample("FX1.wav"); });
    document.querySelector(".b9").addEventListener("mousedown", function () { playSample("FX2.wav"); });
    document.querySelector(".play").addEventListener("click", playSong);
});
function playSample(wav) {
    var sound = new Audio("assets/" + wav);
    sound.play();
}
function playSong() {
    var song = setInterval(startHousebeat, 200);
    var index = 0;
    var Housebeat = ["assets/FX1.wav", "", "assets/Kick.wav", "assets/bass1.wav", "assets/Clap.wav", "assets/bass1.wav", "assets/Kick.wav", "assets/bass1.wav", "assets/Clap.wav", "assets/bass1.wav", "assets/Kick.wav", "assets/bass1.wav", "assets/Clap.wav", "assets/bass1.wav", "", "assets/FX2.wav", "", "assets/Kick.wav", "assets/bass1.wav", "assets/Clap.wav", "assets/bass1.wav", "assets/Kick.wav", "assets/bass1.wav", "assets/Clap.wav", "assets/bass1.wav", "assets/Kick.wav", "assets/bass1.wav", "assets/Clap.wav", "assets/bass1.wav", "assets/FX1.wav"];
    function startHousebeat() {
        var playAudio = new Audio(Housebeat[index]);
        playAudio.play();
        index += 1;
    }
}
//# sourceMappingURL=test.js.map