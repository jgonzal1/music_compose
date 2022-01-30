document.addEventListener('DOMContentLoaded', (domLoaded) => {
    createjs.Sound.registerSound("../data/test.mp3", "helicopter");
});

function playSound() {
    const currentSound = createjs.Sound.play("helicopter");
    //     currentSound.on("complete", this.handleComplete, this);
    //     currentSound.volume = 0.5;
}