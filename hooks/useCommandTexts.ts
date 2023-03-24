// useCommands.js
import commandsTexts from "@/utils/commandsTexts.json";
import { Command } from "@/types";
import { useState } from "react";

export default function useCommands() {
  const [activeCommandMessageCount, setActiveCommandMessageCount] = useState<number>(0);

  const getCommandTexts = (commandKey: string) => {
    let text = commandsTexts.commands.find((command) => command.key === commandKey);
    if (text) {
      return text;
    } else {
      return {
        name: "",
        description: "",
        example: "",
        key: "",
        "chat-messages": {
          messages: [""],
        },
      };
    }
  };

  const defaultCommand = getCommandTexts("similarArtistAndSongs");
  const [activeCommand, setActiveCommand] = useState<Command>(defaultCommand);

  const writeNextMessage = () => {
    if (activeCommandMessageCount < activeCommand["chat-messages"].messages.length - 1) {
      setActiveCommandMessageCount((prevCount) => prevCount + 1);
      return activeCommand["chat-messages"].messages[activeCommandMessageCount + 1];
    } else {
      setActiveCommandMessageCount(0);
      return activeCommand["chat-messages"].messages[0];
    }
  };

  const changeCommand = (command: Command) => {
    setActiveCommandMessageCount(0);
    setActiveCommand(command);
  };
  

  return {
    activeCommand,
    setActiveCommand,
    getCommandTexts,
    writeNextMessage,
    setActiveCommandMessageCount,
    activeCommandMessageCount,
    changeCommand,
  };
}
