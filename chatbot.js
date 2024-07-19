const responses = {
  "hello": "Hi! How can I help you today?",
  "hi": "Hello! What's on your mind?",
  "goodbye": "Goodbye! It was nice chatting with you.",
  // Add more responses here
};

document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim();
  if (message) {
    displayMessage(message, 'user');
    const response = getResponse(message);
    displayMessage(response, 'bot');
    userInput.value = '';
  }
}

function getResponse(message) {
  const lowercaseMessage = message.toLowerCase();
  for (const keyword in responses) {
    if (lowercaseMessage.includes(keyword)) {
      return responses[keyword];
    }
  }
  return "I didn't understand that. Try again!";
}

function displayMessage(message, type) {
  const conversationContainer = document.getElementById('conversation-container');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.className = type;
  conversationContainer.appendChild(messageElement);
}
