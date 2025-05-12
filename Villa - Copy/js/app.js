const responses = {
    "hello": "Hi there! How can I help you today?",
    "who are you": "I'm Chatbot Assistant, a chatbot created by Arsalan Shah.",
    "pakistan": "Pakistan is a country in South Asia with a rich culture and history.",
    "market": "Pakistan's market includes agriculture, textile, and technology sectors.",
    "default": "I'm sorry, I don't understand. Please try something else."
  };
  
  function sendMessage() {
    const inputField = document.getElementById("user-input");
    const message = inputField.value.trim().toLowerCase();
    if (!message) return;
  
    addMessage(message, "user");
  
    const reply = responses[message] || responses["default"];
    setTimeout(() => addMessage(reply, "bot"), 500);
  
    inputField.value = "";
  }
  
  function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // ✅ Enter key support
  document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
  