import "./code.css"

const ConvertToJava = ({ nodes }) => {
    let javaCode = '';
    for (let node of nodes) {
      const { class_name, attributes, methods } = node.data;
      if (class_name){;
      javaCode += `public class ${class_name} {\n`;
      for (let method of methods) {
        const { name, parameters } = method;
        javaCode += `\tpublic void ${name}(`;
        if (parameters && parameters.length) {
          javaCode += `String ${parameters.join(', String ')}`;
        }
        javaCode += `) {\n\t\t// Method body\n\t}\n`;
      }
    //   if (attributes.length) {
    //     javaCode += `\n\t// Attributes\n`;
    //     for (let attribute of attributes) {
    //       javaCode += `\tpublic String ${attribute};\n`;
    //     }
    //   }
      javaCode += `}\n\n`;
    }
    }
    return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '50%',
          margin: '0 auto',
          backgroundColor: '#292929',
          padding: '20px',
          borderRadius: '5px',
          color: '#f8f8f2',
          fontFamily: 'monospace',
          fontSize: '16px'
        }}>
          <button
            style={{
              position: 'relative',
              top: '0px',
              right: '-600px',
              
              backgroundColor: '#f8f8f2',
              color: '#292929',
              padding: '8px 12px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => {
              navigator.clipboard.writeText(javaCode);
            }}
          >
            Copy Code
          </button>
          <pre style={{
            overflowX: 'scroll',
            margin: '0',
            padding: '0',
            whiteSpace: 'pre-wrap'
          }}>{javaCode}</pre>
        </div>
      );    
  };
  
  export default ConvertToJava;
  