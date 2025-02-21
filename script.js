// Check if the browser supports speech recognition
const startBtn = document.getElementById("start-btn");
const textBox = document.getElementById("text-box");
const copyBtn = document.getElementById("copy-btn");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false; // Stop listening after speech ends
recognition.interimResults = false; // Do not show partial results
recognition.lang = "en-US"; // Set language

// Start recording when button is clicked
startBtn.addEventListener("click", () => {
    recognition.start();
    startBtn.textContent = "Listening...";
});

// Capture speech and display text
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    textBox.value = transcript;
    startBtn.textContent = "Start Recording";
};

// Handle errors
recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    startBtn.textContent = "Start Recording";
};

// Copy text to clipboard
copyBtn.addEventListener("click", () => {
    textBox.select();
    document.execCommand("copy");
    alert("Text copied!");
});
