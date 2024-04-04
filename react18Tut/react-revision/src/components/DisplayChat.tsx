import { Message } from "./Chat";

interface Props {
  chats: Message[];
}

const DisplayChat = ({ chats }: Props) => {
  return (
    <>
      <div className="display-section-chat">
        {chats.map((chat) => (
          <div
            className={`display-section-chat-container display-section-chat-${
              chat.isUser ? "user" : "bot"
            }`}
          >
            {/* <h4>{chat.isUser ? "User" : "Bot"}:</h4> */}
            <p>{chat.message}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayChat;
