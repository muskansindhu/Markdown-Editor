import Editor from "@monaco-editor/react";
import { useContext } from "react";
import { slugContext } from "../../context/slug.js";

const options = {
  readOnly: false,
  minimap: { enabled: false },
  scrollbar: { vertical: "hidden" },
  lineNumbers: "off",
  wordWrap: "on",
};

function MarkdownEditor() {
  const { slug, setSlug } = useContext(slugContext);

  const handleEditorChange = (value, event) => {
    setSlug((prevSlug) => ({
      ...prevSlug,
      markdown: value,
    }));
  };

  return (
    <Editor
      value={slug.markdown}
      height="80vh"
      width="95%"
      defaultLanguage="markdown"
      theme="vs-dark"
      options={options}
      onChange={handleEditorChange}
    />
  );
}

export { MarkdownEditor };
