// CKEditorComponent.tsx
import React, { useCallback, useEffect, useRef } from "react";

interface CKEditorComponentProps {
  onChange: (data: string) => void;
  data?: string;
}

const CKEditorComponent: React.FC<CKEditorComponentProps> = ({
  onChange,
  data,
}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorInstanceRef = useRef<any>(null);

  const handleEditorDataChange = useCallback(() => {
    if (editorInstanceRef.current) {
      const data = editorInstanceRef.current.getData();
      onChange(data);
    }
  }, [onChange]);

  useEffect(() => {
    const loadEditor = async () => {
      if (editorRef.current) {
        const { ClassicEditor } = window as any;

        ClassicEditor.create(editorRef.current)
          .then((editor: any) => {
            editorInstanceRef.current = editor;
            editor.model.document.on("change:data", handleEditorDataChange);
            editor.setData(data);
          })
          .catch((error: any) => {
            console.error(
              "There was a problem initializing the editor:",
              error
            );
          });
      }
    };

    loadEditor();

    return () => {
      if (editorInstanceRef.current) {
        editorInstanceRef.current.destroy().catch((error: any) => {
          console.error("There was a problem destroying the editor:", error);
        });
      }
    };
  }, [data, handleEditorDataChange]);

  return <div ref={editorRef} />;
};

export default CKEditorComponent;
