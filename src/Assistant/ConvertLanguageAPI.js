import ConvertToJava from "../ConvertToCode/ConvertToJava";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export default async function sendCodeToGPTModel(setResponse, targetLanguage, javaProps, setIsGeneratingCode) {
    const {nodes, setNodes, ClientCodeJava } = javaProps
    const javaCode = ConvertToJava(nodes, setNodes, ClientCodeJava)

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "prompt": `##### Translate this code ${javaCode} from Java into ${targetLanguage} #####${targetLanguage}`,
      "temperature": 0,
      "max_tokens": 500,
      "top_p": 1.0,
      "frequency_penalty": 0.0,
      "presence_penalty": 0.0,
      "stop": ["###"]
    };

    await fetch("https://api.openai.com/v1/completions",
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
        console.log(data)
        setResponse(data.choices[0].text.trim())
        setIsGeneratingCode(false)
      });
  }

