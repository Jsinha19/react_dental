const ChatbotWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 space-y-1 text-sm z-50">
      <div className="bg-white text-black rounded-full px-4 py-2 shadow-md flex items-center gap-2">
        <span>How can we help?</span>
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Chatbot"
            className="w-6 h-6 rounded-full"
          />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </div>
      </div>
      <div className="bg-white text-pink-600 px-4 py-1 rounded-md text-xs font-semibold shadow-sm">
        By RoboReception
      </div>
    </div>
  );
};

export default ChatbotWidget;
