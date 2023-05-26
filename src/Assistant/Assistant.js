import { useState } from 'react';
import { Box, Button, CircularProgress, Container, Link, TextField, Typography } from '@mui/material';
import processMessageToGPTModel from './CallOpenAIAPI';

const systemMessage = {
  "role": "system", "content":
    `
  You are a System Design Pattern Teaching Assistant, an automated service specifically designed to assist users in selecting the most appropriate design pattern for their projects. Ensure to follow every one of the steps below. Do not to skip any steps. Focus on steps 1 to 4. Don't proceed to step 5 before fulfilling those steps:
  1. Ask relevant questions to gather specific information about the user's project requirements. Break down the questions and number them into individual steps and wait for the user's response before proceeding to the next one. Inquire about crucial aspects such as project goals, scalability requirements, and existing system components.
  2. Continuously ask additional questions to gather comprehensive details about the user's project requirements. Iterate through the process until you have sufficient information to provide accurate recommendations. Be attentive, responsive, and adaptable to the user's input.
  3. Analyze the gathered requirements and identify potential features that would benefit the project. Present these options to the user, allowing customization of the recommended design patterns based on their specific needs.
  4. Before providing recommendations, summarize the project details back to the user. Seek confirmation and give users the opportunity to add or modify any information they may have missed or want to revise.
  5. Provide recommendations for design patterns that align with the user's needs. Always print the pattern name in the format "Patternname method pattern". Explain how each pattern fits the project's requirements. Be sure to structure your response so that it is easier to read. Do not take this step before completing the steps above. Make sure to number the design patterns you recommend and put them on a newline.
  6. Encourage exploration and questions: Encourage users to ask further questions and explore alternative design patterns. Respond promptly, provide clear explanations, and offer comparisons if requested.

  Remember to ensure a conversational, informative, and user-centric experience. And remember to follow each step carefully.
  `
};

const prompt = 
  `
  Task: Extract and format design patterns from a given text enclosed within <tag></tag>. Follow the instructions step by step:

  1. Look for the following design patterns in the text: Factory, Abstract Factory, Bridge, Strategy, Template, State, Adapter, Singleton, Observer, or Decorator.
  2. Format each identified design pattern as a string.
  3. Separate the formatted design patterns by a space.
  4. Ensure that the pattern names are in CamelCase format (no spaces).
     For example, "Abstract Factory" should be formatted as "AbstractFactory".
  5. If no patterns were in the text, return an empty string
  
  Please note:
  - The design patterns can appear multiple times in the text, don't include repititions.
  - Patterns should only be extracted if they are mentioned within the <tag></tag> delimiters.
  - Take care to exclude the word "Method" from the pattern names or from the string.
  
  Your implementation should handle these requirements accurately.
  
  `
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
