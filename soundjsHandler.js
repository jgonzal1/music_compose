document.addEventListener('DOMContentLoaded', (event) => {
    createjs.Sound.registerSound("test.mp3", "helicopter");
});

function playSound() {
    const currentSound = createjs.Sound.play("helicopter");
    //     currentSound.on("complete", this.handleComplete, this);
    //     currentSound.volume = 0.5;
}