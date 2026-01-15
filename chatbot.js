document.addEventListener('DOMContentLoaded', () => {
    const btnChatbot = document.getElementById('btn-chatbot');
    const modalChat = document.getElementById('chatbot-modal');
    const closeChat = document.getElementById('chatbot-close');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');
    const messagesContainer = document.getElementById('chat-messages');

    let chatHistory = [
        {
            role: "system",
            content: `당신은 원주 혁신도시 맛집 추천 전문가입니다. 
            사용자의 기분, 상황, 선호도에 맞춰 가장 적절한 식당을 추천해주세요. 
            
            다음은 추천 가능한 식당 목록입니다:
            ${JSON.stringify(restaurants.map(r => ({
                n: r.name,
                c: r.category,
                m: r.bestMenu,
                d: r.description,
                t: r.tags
            })))}

            규칙:
            1. 한국어로 친절하고 밝게 대답하세요. 이모지를 적극 사용하세요.
            2. 식당 이름, 대표 메뉴, 이유를 포함해서 추천하세요.
            3. 목록에 없는 식당은 지어내지 마세요.
            4. 사용자가 "매운거", "데이트" 등을 언급하면 tags(t)와 description(d)을 참고하세요.
            `
        }
    ];

    // Open/Close Modal
    btnChatbot.addEventListener('click', () => {
        modalChat.style.display = 'flex';
        // Force reflow
        void modalChat.offsetWidth;
        modalChat.classList.add('show');
        chatInput.focus();
    });

    closeChat.addEventListener('click', () => {
        modalChat.classList.remove('show');
        setTimeout(() => modalChat.style.display = 'none', 300);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalChat) {
            modalChat.classList.remove('show');
            setTimeout(() => modalChat.style.display = 'none', 300);
        }
    });

    // Send Message
    async function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        // User Message UI
        addMessage(text, 'user');
        chatInput.value = '';
        chatInput.disabled = true;
        sendBtn.disabled = true;

        // Add user message to history
        chatHistory.push({ role: "user", content: text });

        // Show loading
        const loadingId = addLoading();

        try {
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + "gsk_" + "sGN8iggbZDpwssSBpMzdWGdyb3FY96AKBWqBhX9spcCT37tcp2Sr"
                },
                body: JSON.stringify({
                    messages: chatHistory,
                    model: "llama-3.3-70b-versatile",
                    temperature: 0.7,
                    max_tokens: 1024
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error("API Error Details:", errorData);
                throw new Error(`API 오류 (${response.status}): ${errorData.error?.message || response.statusText}`);
            }

            const data = await response.json();
            const botReply = data.choices[0].message.content;

            // Remove loading
            removeMessage(loadingId);

            // Bot Message UI
            addMessage(botReply, 'bot');

            // Add bot message to history
            chatHistory.push({ role: "assistant", content: botReply });

        } catch (error) {
            console.error(error);
            removeMessage(loadingId);
            addMessage(`죄송합니다. 오류가 발생했습니다. 😢<br><small style="color:#d63031">${error.message}</small>`, 'bot');
        } finally {
            chatInput.disabled = false;
            sendBtn.disabled = false;
            chatInput.focus();
        }
    }

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `message ${sender}`;
        // Simple formatting
        let formatted = text
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

        div.innerHTML = formatted;
        messagesContainer.appendChild(div);
        scrollToBottom();
        return div.id = 'msg-' + Date.now();
    }

    function addLoading() {
        const div = document.createElement('div');
        div.className = `message bot`;
        div.innerHTML = `<div class="typing-dots"><span></span><span></span><span></span></div>`;
        messagesContainer.appendChild(div);
        scrollToBottom();
        return div;
    }

    function removeMessage(element) {
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
