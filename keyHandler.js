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
        }
        if (document.getElementById("pushedKey").innerText != pushedKey) {
            document.getElementById("pushedKey").innerText = pushedKey;
            keyChanged = true;
        } else {
            keyChanged = false;
        }
    }
);
