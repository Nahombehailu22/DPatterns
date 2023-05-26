const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export default async function GenerateLink(newMessage, systemMessage, setLinks) {
    let links = ""
    const apiRequestBody = {
       "model": "text-davinci-003",
      "prompt": `${systemMessage} <tag>${newMessage}</tag>`,
      "temperature": 0,
      "max_tokens": 60,
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
        // console.log(data.choices[0].text)
        // links = data.choices[0].text
        // console.log(data)
        // links = data.choices[0].text.trim() 
        setLinks(data.choices[0].text.trim().split(" "))
        console.log(data.choices[0].text.trim().split(" "))
      });

    // return links
  }

