const socket = io();
let myUsername = '';
while (!myUsername) {
  myUsername = prompt('Enter a username:');
  if (myUsername) {
    myUsername = myUsername.trim();
  }
}
const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
function appendMessage(data) {
  const messageEl = document.createElement('div');
  messageEl.classList.add('message');
  if (data.username === myUsername) {
    messageEl.classList.add('my-message');
    messageEl.innerHTML = `<strong>You:</strong> ${data.msg}`;
  } else {
    messageEl.classList.add('other-message');
    messageEl.innerHTML = `<strong>${data.username}:</strong> ${data.msg}`;
  }

  chatContainer.appendChild(messageEl);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
socket.on('broadcast-message', (data) => {
  appendMessage(data);
});
function sendMessage() {
  const text = messageInput.value.trim();
  if (text !== '') {
    const messageData = {
      username: myUsername,
      msg: text,
    };
    socket.emit('new-message', messageData);
    messageInput.value = '';
    messageInput.focus();
  }
}

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
