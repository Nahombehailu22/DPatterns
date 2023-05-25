import { useState } from "react";

const DisplayCode = ({code}) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopySuccess(true);
      };
    
      return (
        <div className="container" style={{width:"45%"}}>
          <button className="copy-button" onClick={copyCodeToClipboard}>
            {copySuccess ? "Copied!" : "Copy Code"}
          </button>
          <pre className="code-block">{code}</pre>
        </div>
      );
}
 
export default DisplayCode;