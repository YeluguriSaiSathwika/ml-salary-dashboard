// src/components/ChatApp.tsx
import React, { useState } from 'react';
import axios from 'axios';

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState([{ role: 'system', content: 'How can I help you with the ML Engineer salary data?' }]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);

    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: input,
        max_tokens: 100,
        temperature: 0.5,
        stop: ['\n'],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      }
    );

    const botMessage = response.data.choices[0].text.trim();
    setMessages([...newMessages, { role: 'bot', content: botMessage }]);
    setInput('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} style={{ margin: '10px 0' }}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatApp;
