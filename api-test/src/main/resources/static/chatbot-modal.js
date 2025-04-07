// chatbot-modal.js
function renderMessage(message, fromBot = false) {
    const output = document.getElementById('chat-output');
    const msgDiv = document.createElement('div');
    msgDiv.style.display = 'flex';
    msgDiv.style.justifyContent = fromBot ? 'flex-start' : 'flex-end';
    msgDiv.style.marginBottom = '8px';

    const bubble = document.createElement('div');
    bubble.textContent = message;
    bubble.style.maxWidth = '70%';
    bubble.style.padding = '8px 12px';
    bubble.style.borderRadius = '12px';
    bubble.style.backgroundColor = fromBot ? '#f1f1f1' : '#daf0ff';
    bubble.style.color = '#000';
    bubble.style.fontSize = '14px';
    bubble.style.whiteSpace = 'pre-wrap';

    msgDiv.appendChild(bubble);
    output.appendChild(msgDiv);
    output.scrollTop = output.scrollHeight;
}

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    renderMessage(message, false);
    input.value = '';

    const res = await fetch('http://localhost:8080/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    });
    const data = await res.json();
    renderMessage(data.reply, true);
}

(function () {
    const checkAndBind = () => {
        const button = document.getElementById("chat-send-button");
        if (button) {
            button.addEventListener("click", sendMessage);
        }
    };

    // 약간의 지연 후 DOM 접근 (로드 순서 보장)
    window.addEventListener('load', checkAndBind);
    setTimeout(checkAndBind, 200); // 예비 백업
})();
