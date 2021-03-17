const instrumentCorrelator = {
    ",":"🎼 Arp",
    ".":"🥁 Drum",
    "<":"🎤 Vocal",
    "b":"🎹 Keyboard",
    "B":"🎹 Keyboard",
    "c":"🎷 Vibes",
    "C":"🎷 Vibes",
    "m":"🎻 String",
    "M":"🎻 String",
    "n":"🎺 Wind",
    "N":"🎺 Wind",
    "v":"🎸 Bass",
    "V":"🎸 Bass",
    "x":"🎵 Melody",
    "X":"🎵 Melody",
    "z":"🎧 Acidline",
    "Z":"🎧 Acidline"
}

let buttonsPushed = 0;
let keyChanged = false;
let pushedKey;
$(document).on('keypress',
    function(event) {
        if (event.which === 13) {
            event.preventDefault();
        }
        buttonsPushed++;
        pushedKey = event.key;
        switch(pushedKey) {
            case "d":
            case "D":
                document.getElementById("discardSoundsPlaceholder").innerText +=
                    document.getElementById("nameOfSoundPlaceholder").innerText + "\n";
                break;
            case "e":
            case "E":
                playAudio();
                break;
            case "s":
            case "S":
                document.getElementById("likedSoundsPlaceholder").innerText +=
                    document.getElementById("nameOfSoundPlaceholder").innerText + "\n";
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
                playAudio("Melody");
                break;
            case "c":
            case "C":
                playAudio("Vibes");
                break;
            case "v":
            case "V":
                playAudio("Bass");
                break;
            case "b":
            case "B":
                playAudio("Keyboard");
                break;
            case "n":
            case "N":
                playAudio("Wind");
                break;
            case "m":
            case "M":
                playAudio("String");
                break;
            case ",":
                playAudio("Arp");
                break;
            case ".":
                playAudio("Drum");
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
