import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import "../style/chatbot.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bonjour ! Comment puis-je vous aider ?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    // Simule une réponse du bot
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: "bot", text: "Je suis un chatbot de démonstration." }]);
    }, 800);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      {!open && (
        <button className="chatbot-fab" onClick={() => setOpen(true)}>
          <MessageCircle size={32} />
        </button>
      )}
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Chatbot</span>
            <button className="chatbot-close" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form className="chatbot-input-area" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Votre message..."
              autoFocus
            />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;