const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export default async function processMessageToGPTModel(chatMessages, systemMessage, setMessages, setIsTyping) {

    let lastMessage = "Heya"
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "Assistant") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ],
      "temperature": 0,
      "max_tokens": 200,
    };

    await fetch("https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "Assistant"
        }]);
        setIsTyping(false);
        lastMessage =  data.choices[0].message.content
      });

    return lastMessage;
  }

