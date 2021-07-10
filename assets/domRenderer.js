function alertInfo() {
    alert(
        "MidiPlayerJS is a javascript library which triggers events in sequence\n" +
        "with a given MIDI file. This MIDI player was built using\n" +
        "https://github.com/grimmdude/MidiPlayerJS to read the file, and\n" +
        "https://github.com/danigb/soundfont-player to load and play the\n" +
        "sounds. By http://grimmdude.com (Garrett Grimm)."
    )
}

let savedSounds;
const soundToDelete = /<br>(?:.(?!<br>))+$/g;
let matchPos;

function clearLastLiked() {
    savedSounds = document.getElementById("likedSoundsPlaceholder").innerHTML;
    matchPos = soundToDelete.exec(savedSounds);
    if(matchPos) {
        document.getElementById("likedSoundsPlaceholder").innerHTML = savedSounds.substring(0,matchPos.index);
    }
}

let discardedSounds;
function clearLastDiscarded() {
    discardedSounds = document.getElementById("discardSoundsPlaceholder").innerHTML;
    matchPos = soundToDelete.exec(discardedSounds);
    if(matchPos) {
        document.getElementById("discardSoundsPlaceholder").innerHTML = discardedSounds.substring(0,matchPos.index);
    }
}

/*setTimeout(function(){
    document.getElementById("audioPlaceholder").innerText = audio;
}, 1000)*/