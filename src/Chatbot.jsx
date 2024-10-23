import React, { useState } from 'react';

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };

      const aiResponse = generateResponse(input);

      setMessages([...messages, newMessage, { text: aiResponse, sender: 'bot' }]);
      setInput('');
    }
  };

  const generateResponse = (userInput) => {
    userInput = userInput.toLowerCase();

    if (userInput.includes('who is neyah') || userInput.includes('tell me about neyah')) {
      return "AI Bot: Neyah Johnson is an IT major with experience in tech support, cloud management, web development, and leadership at Kean University.";
    } else if (userInput.includes('projects') || userInput.includes('work')) {
      return "AI Bot: Neyah has worked on several projects including a database system and a survey for underrepresented students.";
    } else if (userInput.includes('experience') || userInput.includes('skills')) {
      return "AI Bot: Neyah is skilled in technical support, cloud management, and leadership.";
    } else if (userInput.includes('contact')) {
      return "AI Bot: You can reach Neyah at neyahjohnson07@gmail.com.";
    } else if (userInput.includes('education')) {
      return "AI Bot: Neyah is pursuing a BS in Information Technology at Kean University.";
    } else if (userInput.includes('hobbies') || userInput.includes('fun')) {
      return "AI Bot: Neyah enjoys playing video games, spending time with her cat Friday, and working on coding projects.";
    } else {
      return "AI Bot: I'm not sure how to answer that. Ask about Neyah's projects, experience, or education!";
    }
  };

  return (
    <div className="chatbot">
      <h2>Chat with AI Bot</h2>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === 'user' ? 'user-msg' : 'bot-msg'}>
            {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask the AI bot..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
