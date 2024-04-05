import { useState } from "react";
import DisplayChat from "./DisplayChat";
import PromptForm from "./PromptForm";

export interface Message {
  id: number;
  isUser: boolean;
  message: string;
}

const Chat = () => {
  const [chat, setChat] = useState<Message[]>([
    {
      id: Math.random(),
      isUser: false,
      message: "Hey, I am chatbot do you have any questions ?",
    },
  ]);

  const handleMessage = async (newMessage: string) => {
    setChat((previousChat) => [
      ...previousChat,
      {
        id: Math.random(),
        isUser: true,
        message: newMessage,
      },
    ]);

    setTimeout(await handleResponse, 2000, newMessage);
  };

  const handleResponse = async (newMessage: string) => {
    try {
      // const response = await axios.post("http://127.0.0.1:5000/process", {
      //   content: newMessage,
      // });
      // setChat([
      //   ...chat,
      //   { id: Math.random(), isUser: false, message: response.data.message },
      // ]);

      setChat((previousChat) => [
        ...previousChat,
        {
          id: Math.random(),
          isUser: false,
          message: "This is bot from other side ",
        },
      ]);
    } catch (error) {
      console.error("Something went wrong!", error);
    }

    console.log(chat);
  };

  return (
    <>
      <DisplayChat chats={chat} />
      <PromptForm onSendMessage={handleMessage} />
    </>
  );
};

export default Chat;
