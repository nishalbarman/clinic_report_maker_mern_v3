import React, { useCallback, useState } from "react";
import CKEditorComponent from "../components/CKEeditorComponent";

const GenNewTemplate: React.FC = () => {
  const [editorData, setEditorData] = useState<string>("");

  const handleEditorChange = useCallback((data: string) => {
    setEditorData(data);
  }, []);

  return (
    <div className="container">
      <h1>Generate table structure for template</h1>
      <CKEditorComponent data={editorData} onChange={handleEditorChange} />
    </div>
  );
};

export default GenNewTemplate;
