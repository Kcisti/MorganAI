// Get the text area and speak button elements
let textArea = document.getElementById("text");
let speakButton = document.getElementById("speak-button");

// Add an event listener to the speak button
speakButton.addEventListener("click", function() {
  // Get the text from the text area
  let text = textArea.value;

  // Create a new SpeechSynthesisUtterance object
  let utterance = new SpeechSynthesisUtterance();

  // Set the text and voice of the utterance
  utterance.text = text;
  utterance.lang = 'it_IT';
  utterance.pitch = '0';
  utterance.rate = '0.90';
  utterance.voice = window.speechSynthesis.getVoices()[11];
  // Speak the utterance
  window.speechSynthesis.speak(utterance);
});

const allVoicesObtained = new Promise(function(resolve, reject) {
  let voices = window.speechSynthesis.getVoices();
  if (voices.length !== 0) {
    resolve(voices);
  } else {
    window.speechSynthesis.addEventListener("voiceschanged", function() {
      voices = window.speechSynthesis.getVoices();
      resolve(voices);
    });
  }
});

allVoicesObtained.then(voices => console.log("All voices:", voices));