var MidiPlayer = MidiPlayer;
var loadMidiFile, loadDataUri, Player;
var AudioContext = window.AudioContext || window.webkitAudioContext || false; 
var ac = new AudioContext || new webkitAudioContext;
var eventsDiv = document.getElementById('events');

const chords = [
    "1_C",    "2_C",  "3_C",  "4_C",   "5_C",   "6_C",   "7_C",   "8_C",   "9_C",  "10_C",
    "11_C",  "12_C", "13_C", "14_C", "15_CM", "16_CM", "17_CM",  "18_D",  "19_D",  "20_D",
    "21_D",  "22_D", "23_D", "24_D",  "25_D",  "26_D",  "27_D",  "28_D",  "29_D", "30_DM",
    "31_DM", "32_F", "33_F", "34_F",  "35_F",  "36_F",  "37_F", "38_FM", "39_FM",  "40_G",
    "41_G",  "42_G", "43_G", "44_A",  "45_A",  "46_A",  "47_A",  "48_A",  "49_B",  "50_B",
    "51_B"
]; 


var changeTempo = function(tempo) {
	Player.tempo = tempo;
}

var play = function() {
	Player.play();
	document.getElementById('ambientMusicHandlerButton').innerHTML = 'Pause';
}

var pause = function() {
	Player.pause();
	document.getElementById('ambientMusicHandlerButton').innerHTML = 'Play';
}

var stop = function() {
	Player.stop();
	document.getElementById('ambientMusicHandlerButton').innerHTML = 'Play';
}

var buildTracksHtml = function() {
	Player.tracks.forEach(function(item, index) {
		var trackDiv = document.createElement('div');
		trackDiv.id = 'track-' + (index+1);
		var h5 = document.createElement('h5');
		h5.innerHTML = 'Track ' + (index+1);
		var code = document.createElement('code');
		trackDiv.appendChild(h5);
		trackDiv.appendChild(code);
		eventsDiv.appendChild(trackDiv);
	});
}

Soundfont.instrument(ac, 'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/MusyngKite/acoustic_guitar_nylon-mp3.js').then(function (instrument) {
	document.getElementById('loading').style.display = 'none';
	document.getElementById('select-file').style.display = 'block';

	loadMidiFile = function() {
		var file    = document.querySelector('input[type=file]').files[0];
		var reader  = new FileReader();
		if (file) reader.readAsArrayBuffer(file);

		eventsDiv.innerHTML = '';

		reader.addEventListener("load", function () {
			Player = new MidiPlayer.Player(function(event) {
				if (event.name == 'Note on') {
					instrument.play(event.noteName, ac.currentTime, {gain:event.velocity/100});
					//document.querySelector('#track-' + event.track + ' code').innerHTML = JSON.stringify(event);
				}

				document.getElementById('tempo-display').innerHTML = Player.tempo;
				document.getElementById('file-format-display').innerHTML = Player.format;
				document.getElementById('play-bar').style.width = 100 - Player.getSongPercentRemaining() + '%';
			});

			Player.loadArrayBuffer(reader.result);
			
			document.getElementById('ambientMusicHandlerButton').removeAttribute('disabled');

			//buildTracksHtml();
			play();
		}, false);
	}

	loadDataUri = function(dataUri) {
		Player = new MidiPlayer.Player(function(event) {
			if (event.name == 'Note on' && event.velocity > 0) {
				instrument.play(event.noteName, ac.currentTime, {gain:event.velocity/100});
				//document.querySelector('#track-' + event.track + ' code').innerHTML = JSON.stringify(event);
				//console.log(event);
			}

			document.getElementById('tempo-display').innerHTML = Player.tempo;
			document.getElementById('file-format-display').innerHTML = Player.format;	
			document.getElementById('play-bar').style.width = 100 - Player.getSongPercentRemaining() + '%';
		});

		Player.loadDataUri(dataUri);

		document.getElementById('ambientMusicHandlerButton').removeAttribute('disabled');

		//buildTracksHtml();
		//play();
	}
	loadDataUri(mario);
});
