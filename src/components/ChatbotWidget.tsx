import { useState } from "react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 text-sm font-sans">
      {isOpen ? (
        <div className="bg-white shadow-xl rounded-2xl w-[360px] p-4 pt-6 relative transition-all">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 left-4 text-black text-2xl font-bold hover:opacity-80"
          >
            ×
          </button>

          {/* Avatar */}
          <div className="absolute top-2 right-4">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full border-[3px] border-blue-500"></div>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Agent"
                className="w-full h-full rounded-full border border-white shadow"
              />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                1
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-center text-base text-black font-semibold mb-8 mt-1">Enquire now</h2>

          {/* Options */}
          <div className="space-y-3">
            {[
              "I would like a call back",
              "I would like to arrange an appointment",
              "I would like further information",
              "I am a dentist and would like to refer a patient",
            ].map((text, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-3 rounded-lg border bg-white text-black font-medium transition hover:bg-blue-600 hover:text-white"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        // Closed Chat Button + Attribution
        <div className="flex flex-col items-end gap-1">
          <div
            onClick={() => setIsOpen(true)}
            className="bg-white text-black rounded-full px-4 py-2 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>How can we help?</span>
            <div className="relative">
              <div className="w-6 h-6 rounded-full border-2 border-blue-500">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Chatbot"
                  className="w-full h-full rounded-full"
                />
              </div>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                1
              </span>
            </div>
          </div>

          {/* Attribution Text */}
          <div className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-pink-600 shadow-sm">
            <span className="flex items-center gap-1">
              {/* <img src="/6078db5b-bc27-40a6-964b-95ac1a60620f.png" alt="Robo" className="w-4 h-4" /> */}
              By RoboReception
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
