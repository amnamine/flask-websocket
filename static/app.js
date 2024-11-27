// Connect to the WebSocket server
const socket = io();

// DOM elements
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const chatBox = document.getElementById("chatBox");

// Function to append a message to the chat box
function appendMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
}

// Send a message to the WebSocket server
sendButton.addEventListener("click", () => {
    const message = messageInput.value;
    if (message) {
        socket.send(message); // Send the message
        appendMessage(`You: ${message}`); // Display it in the chat box
        messageInput.value = ""; // Clear the input field
    }
});

// Listen for messages from the server
socket.on("message", (message) => {
    appendMessage(`Server: ${message}`); // Display the message
});
