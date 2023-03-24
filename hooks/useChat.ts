// useMessageHandler.ts

import { useState, useEffect } from "react";
import { Command, Message } from "@/types";
import { useUser } from "./useUser";
import uniqid from "uniqid";
import useCommands from "./useCommandTexts";
import getSimilarSongsByArtist from "@/actions/getSimilarSongsByArtist";

export function useMessageHandler() {
  const { user } = useUser();
  const { writeNextMessage, activeCommandMessageCount ,activeCommand} = useCommands();
  const [messages, setMessages] = useState<Message[]>([
    {
        id: uniqid(),
        content: "Sana yardımcı olabilmem için yukarıdaki komutları kullanabilirsin.",
        user: {
          name: "Spotify Helper",
          avatarUrl: "https://www.pngall.com/wp-content/uploads/13/Spotify-Logo-PNG.png",
          authorRole: "bot",
        },
      }
  ]);

  async function addMessage(message: any, botCommand: boolean = false) {
    if (botCommand) {
      message.id = uniqid();
      Object.assign(message, {
        user: {
          name: "Spotify Helper",
          avatarUrl:
            "https://www.pngall.com/wp-content/uploads/13/Spotify-Logo-PNG.png",
          authorRole: "bot",
        },
      });
      setMessages((prevMessages: Message[]) => [...prevMessages, message]);
    } else {
      message.id = uniqid();
      if (message.user.name === messages[messages.length - 1].user.name) {
        setMessages((prevMessages) => {
          const tempMessages = [...prevMessages];
          tempMessages[tempMessages.length - 1].content +=
            "\n" + message.content;
          return tempMessages;
        });
      } else {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
     writeNextMessage();
    }
  }

  function clearMessages() {
    setMessages([]);
    setDefaultMessages();
  }

  function setDefaultMessages() {
    addMessage(
      {
        content:
          "Sana yardımcı olabilmem için yukarıdaki komutları kullanabilirsin.",
      },
      true
    );
  }

  const getNextMessage = () => {
    if (activeCommandMessageCount < activeCommand["chat-messages"].messages.length - 1) {
      return activeCommand["chat-messages"].messages[activeCommandMessageCount + 1];
    } else {
      return activeCommand["chat-messages"].messages[0];
    }
  };

  useEffect(() => {
    let message = getNextMessage();
      if (message) {
        addMessage(
          {
            content: message,
          },
          true
        );
      }
/*     if (activeCommandMessageCount === 0) {
      // activeCommandMessageCount 0 olduğunda default mesajı yazdırıyoruz

    } else {
      // activeCommandMessageCount 0 değilse bir sonraki mesajı yazdırıyoruz
    
      
      
    } */
    
  }, [activeCommandMessageCount]);

  return { messages, setMessages, addMessage, clearMessages };
}

export default useMessageHandler;
