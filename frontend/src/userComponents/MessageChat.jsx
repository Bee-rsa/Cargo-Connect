import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PaperClipIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const MessagePage = () => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState([]);
  const fileInputRef = useRef(null);

  const handleAttachmentClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments([...attachments, ...files]);
  };

  const handleSend = () => {
    // Handle send logic here
    console.log('Message:', message);
    console.log('Attachments:', attachments);
    // Clear after sending
    setMessage('');
    setAttachments([]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Link to="/user-home" className="text-xl font-bold text-gray-800">
            Messages
          </Link>
          <Link
            to="/user-home"
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Message History (placeholder) */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 max-w-4xl mx-auto w-full">
        <div className="space-y-4">
          {/* Sample incoming message */}
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs md:max-w-md">
              <p className="text-gray-800">Hello! How can I help you today?</p>
              <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
            </div>
          </div>
          
          {/* Sample outgoing message */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg shadow-sm max-w-xs md:max-w-md">
              <p>I need help with my recent order</p>
              <p className="text-xs text-blue-100 mt-1">10:32 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-4">
        <div className="max-w-4xl mx-auto">
          {/* Attachment preview */}
          {attachments.length > 0 && (
            <div className="flex space-x-2 mb-3 overflow-x-auto pb-2">
              {attachments.map((file, index) => (
                <div key={index} className="flex-shrink-0 relative">
                  <div className="bg-gray-100 p-2 rounded-lg flex items-center">
                    <PaperClipIcon className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-700 truncate max-w-xs">
                      {file.name}
                    </span>
                    <button
                      onClick={() => setAttachments(attachments.filter((_, i) => i !== index))}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Input area */}
          <div className="flex items-end space-x-2">
            <button
              onClick={handleAttachmentClick}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700"
              aria-label="Attach files"
            >
              <PaperClipIcon className="h-5 w-5" />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                multiple
              />
            </button>

            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-transparent border-none focus:ring-0 resize-none max-h-32"
                rows="1"
              />
            </div>

            <button
              onClick={handleSend}
              disabled={!message.trim() && attachments.length === 0}
              className={`p-2 rounded-full ${message.trim() || attachments.length > 0 ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              aria-label="Send message"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;