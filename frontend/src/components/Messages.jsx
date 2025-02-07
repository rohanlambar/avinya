import React from 'react'
import { useState } from 'react';

// Mock data for chats and messages
const mockChats = [
  { id: 1, name: "AdaptiveFit Community", message: "Ethan: Hi, just finished a new", time: "", unread: true ,img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
  { id: 2, name: "Ava Thompson", message: "Ava: Great job! How did it go?", time: "", unread: true,img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
  { id: 3, name: "Pablo Morandi", message: "Pablo: I'm stuck at home but", time: "12", unread: false , img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
  { id: 4, name: "Olivia Hayes", message: "Olivia: Have you tried the new", time: "1 hour", unread: false ,img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
  { id: 5, name: "Isabel Hughes", message: "Isabel: You ready for the adaptive", time: "", unread: true,img:"https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
  { id: 6, name: "Peter Pot", message: "Peter: You just did a seated cardio", time: "", unread: true ,img:""},
  { id: 7, name: "Mason Cooper", message: "Mason: Let’s try the adaptive", time: "", unread: true ,img:"" },
  { id: 8, name: "Sandy Beach", message: "Sandy: Just tried the new", time: "", unread: true, img:"" },
];

const mockMessages = {
  1: [
    { id: 1, text: "Ethan: Hi, just finished a new workout", from: "Ethan", time: "9:11 AM", received: true },
    { id: 2, text: "Congrats! How was it?", from: "Me", time: "9:15 AM", received: false },
    { id: 3, text: "You got this! Remember to pace yourself", from: "Ava", time: "9:11 PM", received: true },
  ],
  2: [
    { id: 1, text: "You got this! Remember to pace yourself", from: "Ava", time: "9:11 PM", received: true },
    { id: 2, text: "I’m excited to start my AdaptiveFit workout plan tomorrow!", from: "Me", time: "9:11 PM", received: false },
    { id: 3, text: "On my way.", from: "Ava", time: "10:00 PM", received: true },
    { id: 4, text: "I may be late :)", from: "Ava", time: "10:00 PM", received: true },
    { id: 5, text: "I'm at the gym. Where are you?", from: "Me", time: "10:00 PM", received: false },
  ],
  // Add messages for other chats similarly
};

// ChatList Component to show list of chats with search functionality
const ChatList = ({ chats, selectChat, searchQuery, setSearchQuery }) => {
  // Filter chats based on the search query
  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-1/4 h-full border-r p-4">
      <h2 className="font-bold text-xl mb-4">Chats</h2>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for workouts and friends"
        className="w-full mb-4 p-2 border rounded-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Scrollable Chat List */}
      <div className="overflow-y-auto max-h-[70vh]"> {/* max-h controls the max height */}
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => selectChat(chat)}
            className={`flex items-center justify-between p-3 cursor-pointer ${
              chat.unread ? "bg-gray-200" : ""
            }`}
          >
            <div className="flex items-center">
              <div className="w-15 h-10 bg-gray-400 rounded-full mr-3 overflow-hidden">
                <img src={chat.img} alt="" />
              </div>
              <div>
                <h3 className="font-bold">{chat.name}</h3>
                <p className="text-gray-600">{chat.message}</p>
              </div>
            </div>
            {chat.time && <span className="text-xs text-gray-400">{chat.time}</span>}
            {chat.unread && <span className="text-red-600 font-bold">•</span>}
          </div>
        ))}
      </div>
    </div>
  );
};


// ChatWindow Component to display chat messages and passed name
const ChatWindow = ({ messages, chatName }) => (
  <div className="w-3/4 h-full p-4 flex flex-col justify-between">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-400 rounded-full mr-4 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <div>
          <h3 className="font-bold">{chatName}</h3>
          <p className="text-green-600">Online now</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <button className="text-gray-500">📞</button>
        <button className="text-gray-500">📹</button>
        <button className="text-gray-500">🔍</button>
      </div>
    </div>

    <div className="flex-grow overflow-y-auto">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.received ? "justify-start" : "justify-end"
          } mb-4`}
        >
          <div
            className={`p-2 max-w-xs ${
              msg.received ? "bg-gray-200 text-black" : "bg-green-400 text-white"
            } rounded-lg`}
          >
            <p>{msg.text}</p>
            <span className="text-xs text-gray-500">{msg.time}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="flex items-center mt-4 border-t pt-4">
      <input
        type="text"
        placeholder="Aa"
        className="flex-grow p-2 border rounded-md"
      />
      <button className="text-blue-600 ml-4">Send</button>
    </div>
  </div>
);

// Main ChatApp Component
const Messages = () => {
  const [chats] = useState(mockChats);
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="flex h-screen">
      {/* Pass searchQuery and setSearchQuery as props */}
      <ChatList
        chats={chats}
        selectChat={selectChat}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {selectedChat ? (
        <ChatWindow
          messages={mockMessages[selectedChat.id]} // Pass the filtered messages for the selected chat
          chatName={selectedChat.name}
        />
      ) : (
        <div className="w-3/4 h-full flex items-center justify-center">
          <p>Select a chat to start messaging</p>
        </div>
      )}
    </div>
  );
};


export default Messages