
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');

    function sendMessage() {
        const message = messageInput.value;
        if (message.trim() !== '') {
            displayMessage('You', message);
            // You can add logic here to handle sending the message to a server or other users
            // For simplicity, we'll just display the sent message for now
            messageInput.value = ''; // Clear the input field
        }
    }

    function displayMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
    }

    // Simulate receiving a message (for testing purposes)
    setTimeout(() => {
        displayMessage('John', 'Hey there!');
    }, 2000);