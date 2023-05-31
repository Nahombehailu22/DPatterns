import { useState } from 'react';
import { Box, Button, CircularProgress, Container, Link, TextField, Typography } from '@mui/material';
import processMessageToGPTModel from './CallOpenAIAPI';

const systemMessage = {
  "role": "system", "content":
    `
  You are a System Design Pattern Teaching Assistant, an automated service specifically designed to assist users in selecting the most appropriate design pattern for their projects. 
  You ask relevant questions to gather specific information about the user's project requirements.\n
  You ask them one question, wait for their response and then proceed to the next question after they give you an answer. Inquire about crucial aspects such as project goals, scalability requirements, and existing system components.\n
  Continuously ask additional questions to gather comprehensive details about the user's project requirements. Iterate through the process until you have sufficient information to provide accurate recommendations. Be attentive, responsive, and adaptable to the user's input.\n
  Analyze the gathered requirements and identify potential features that would benefit the project. Present these options to the user, allowing customization of the recommended design patterns based on their specific needs.\n
  Summarize the project details back to the user. Seek confirmation and give users the opportunity to add or modify any information they may have missed or want to revise.\n
  Provide recommendations for design patterns that only exist in the book "Design Patterns: Elements of Reusable Object-Oriented Software" that align with the user's needs. Print the pattern name in the format "Patternname method pattern". Explain how each pattern fits the project's requirements. 
  Structure your response so that it is easier to read.\n
  Number the design patterns you recommend and put them on a newline.\n
  Encourage exploration and questions: Encourage users to ask further questions and explore alternative design patterns. Respond promptly, provide clear explanations, and offer comparisons if requested.

  Remember to ensure a conversational, informative, and user-centric experience. And remember to follow each step carefully.
  `
};


const patterns = new Set(["factory", "abstractfactory", "bridge", "strategy", "template", "state", "adapter", "singleton", "observer", "decorator"])

function Assistant() {
  const [messages, setMessages] = useState([
    {
      message: "Hello! I am the System Design Pattern Teaching Assistant, and I am here to help you choose the right design pattern for your project. My primary role is to provide you with accurate recommendations that suit your specific needs. How can I assist you today? What are you looking to build?",
      sentTime: "just now",
      sender: "Assistant"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [links, setLinks]  = useState([])


  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);
    const sentMessage = await processMessageToGPTModel(newMessages, systemMessage, setMessages, setIsTyping);
    const newStr = sentMessage.trim().split(" ");
    const newLinks = new Set();

    for(let i=0; i < newStr.length; i++){
      if (patterns.has(newStr[i].toLowerCase())){
        newLinks.add(newStr[i].toLowerCase())
      }
    }

    setLinks([...newLinks])
  };



  return (
    <div style={{ minHeight: "100vh", background: "#F5F7FA", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Container maxWidth="md">
        <Box sx={{ p: 4, background: "#FFF", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
          <Typography variant="h4" component="h2" gutterBottom style={{ color: "#333", fontWeight: "bold", textAlign: "center" }}>
          System Design Pattern Teaching Assistant 
          <br/>

            {links.map((link, idx) => {
              if (patterns.has(link.toLowerCase())) {
                return (
                  <div key={idx} style={{ display: "inline-block" }}>
                    <Link href={`/${link}method/demonstration`} target="_blank">
                      <Button variant="outlined">
                        {link}
                      </Button>
                    </Link>
                    &nbsp;
                  </div>
                );
              }
              return null;
            })}

          </Typography>

          <Box sx={{ overflowY: "auto", maxHeight: "400px", mt: 3, p: 2, borderRadius: "8px", background: "#FFFFFF" }}>
            {messages.map((message, index) => (
              <Typography
                key={index}
                variant="body1"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  background: message.sender === "Assistant" ? "#E3E8FF" : "#FFF",
                  color: message.sender === "Assistant" ? "#5C6AC4" : "#333",
                  marginBottom: "10px",
                }}
              >
                {message.message}
              </Typography>
            ))}
            {isTyping && (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress color="primary" style={{ margin: "10px" }} />
              </div>
            )}
          </Box>

          <TextField
            id="message-input"
            variant="outlined"
            placeholder="Type your message here"
            fullWidth
            multiline
            rows={4}
            style={{ marginTop: "20px", marginBottom: "10px" }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const input = document.getElementById("message-input");
              handleSend(input.value);
              input.value = "";
            }}
          >
            Send
          </Button>
        </Box>
          

      </Container>
    </div>
  );
}

export default Assistant;
