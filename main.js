// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
function keyPlay(event){
  event.target.style.backgroundColor = 'blue';
}

function keyReturn(event){
  event.target.style.backgroundColor = '';
}

// Write a named function with event handler properties
function assignEvents(note){
  note.addEventListener('mousedown',keyPlay)
  note.addEventListener('mouseup',keyReturn)
}

// Write a loop that runs the array elements through the function
notes.forEach(function(note){
  assignEvents(note);
})

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.addEventListener('click', function(){
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').textContent = 'D';
  document.getElementById('letter-note-six').textContent = 'C';
})

// Write anonymous event handler property and function for the second progress button
nextTwo.addEventListener('click', function() {
  // Reveal the nextThree button and hide nextTwo
  nextThree.hidden = false;
  nextTwo.hidden = true;

  // Update lyrics
  document.getElementById('word-five').textContent = 'DEAR';
  document.getElementById('word-six').textContent = 'FRI-';

  // Show -END lyric
  lastLyric.style.display = 'inline-block';

  // Update musical notes
  document.getElementById('letter-note-three').textContent = 'G';
  document.getElementById('letter-note-four').textContent = 'E';
  document.getElementById('letter-note-five').textContent = 'C';
  document.getElementById('letter-note-six').textContent = 'B';
});

// Write anonymous event handler property and function for the third progress button
nextThree.addEventListener('click', function() {
  // Reveal startOver button and hide nextThree
  startOver.hidden = false;
  nextThree.hidden = true;

  // Update lyrics
  document.getElementById('word-one').textContent = 'HAP-';
  document.getElementById('word-two').textContent = 'PY';
  document.getElementById('word-three').textContent = 'BIRTH';
  document.getElementById('word-four').textContent = 'DAY';
  document.getElementById('word-five').textContent = 'TO';
  document.getElementById('word-six').textContent = 'YOU!';

  // Update notes
  document.getElementById('letter-note-one').textContent = 'F';
  document.getElementById('letter-note-two').textContent = 'F';
  document.getElementById('letter-note-three').textContent = 'E';
  document.getElementById('letter-note-four').textContent = 'C';
  document.getElementById('letter-note-five').textContent = 'D';
  document.getElementById('letter-note-six').textContent = 'C';

  // Hide -END lyric
  lastLyric.style.display = 'none';
});

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}