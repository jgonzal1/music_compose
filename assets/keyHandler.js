const instrumentCorrelator = {
    ",":"🎻 String",
    ".":"🥁 Drum",
    "<":"🎤 Vocal",
    "a":"🎼 Arp",
    "A":"🎼 Arp",
    "b":"🎸 Bass",
    "B":"🎸 Bass",
    "f":"🎧 Fx",
    "F":"🎧 Fx",
    "k":"🎹 Keyboard",
    "K":"🎹 Keyboard",
    "m":"🎵 Melody",
    "M":"🎵 Melody",
    "v":"🎷 Vibes",
    "V":"🎷 Vibes",
    "w":"🎺 Wind",
    "W":"🎺 Wind",
    "z":"🎧 Acidline",
    "Z":"🎧 Acidline"
}

let buttonsPushed = 0;
let keyChanged = false;
let pushedKey;
let bpm;
$(document).on('keypress',
    function(event) {
        if (event.which === 13) {
            event.preventDefault();
        }
        buttonsPushed++;
        pushedKey = event.key;
        switch(pushedKey) {
            case "q":
            case "Q":
                // ToDo manage tracks
                break;
            case "w":
            case "W":
                playAudio("Wind");
                break;
            case "r":
            case "R":
                playAudio("Fx");
                break;
            case "o":
            case "O":
                playSound();
                break;
            case "p":
            case "P":
                Player.isPlaying() ? pause() : play();
                break;
            case "+":
                bpm = Math.min(199,document.getElementById("bpm").value);
                bpm+=1;
                document.getElementById("bpm").value = bpm;
                Player.pause();Player.setTempo(bpm);Player.play();
                break;
            case "a":
            case "A":
                    playAudio("Arp");
                    break;
            case "s":
            case "S":
                document.getElementById("likedSoundsPlaceholder").innerText +=
                    "\n" + document.getElementById("nameOfSoundPlaceholder").innerText;
                break;
            case "d":
            case "D":
                document.getElementById("discardSoundsPlaceholder").innerText +=
                    "\n" + document.getElementById("nameOfSoundPlaceholder").innerText;
                break;
            case "f":
            case "F":
                playAudio("Fx");
                break;
            case "k":
            case "K":
                playAudio("Keyboard");
                break;
            case "l":
            case "L":
                let subaudio;
                if (audio[sublibrary]) {
                    subaudio = audio[sublibrary];
                    (subaudio.loop ? subaudio.loop = false : subaudio.loop = true);
                }
                break;
            case "<":
                playAudio("Vocal");
                break;
            case "z":
            case "Z":
                playAudio("Acidline");
                break;
            case "x":
            case "X":
                break;
            case "v":
            case "V":
                playAudio("Vibes");
                break;
            case "b":
            case "B":
                playAudio("Bass");
                break;
            case "m":
            case "M":
                playAudio("Melody");
                break;
            case ",":
                playAudio("String");
                break;
            case ".":
                playAudio("Drum");
                break;
            case "-":
                bpm = Math.max(51,document.getElementById("bpm").value);
                bpm-=1;
                document.getElementById("bpm").value = bpm;
                Player.pause();Player.setTempo(bpm);Player.play();
                break;
        }
        if (document.getElementById("pushedKey").innerText != pushedKey) {
            document.getElementById("pushedKey").innerText = instrumentCorrelator[pushedKey];
            keyChanged = true;
        } else {
            keyChanged = false;
        }
    }
);
