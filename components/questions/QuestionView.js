import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import { Viewer } from "@toast-ui/react-editor";
import Prism from "prismjs";

function QuestionView({ desc }) {
  return (
    <>
      <Viewer initialValue={desc} plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} />
    </>
  );
}

export default QuestionView;
