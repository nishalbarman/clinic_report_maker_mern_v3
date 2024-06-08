// App.tsx
import React, { useState } from "react";
import CKEditorComponent from "../components/CKEeditorComponent";

const DynamicForm: React.FC = () => {
  //   const [editorData, setEditorData] = useState<string>("");

  //   const handleEditorChange = (data: string) => {
  //     setEditorData(data);
  //   };

  return (
    <div className="App">
      <h1>CKEditor 5 with React and TypeScript</h1>
      <CKEditorComponent />
    </div>
  );
};

export default DynamicForm;
