import "@toast-ui/editor/dist/toastui-editor.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

import { Editor } from "@toast-ui/react-editor";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_URL } from "../../config";
import { setDesc } from "../../modules/editor";
import { Alert } from "../Alert";
import { alertService } from "../alert.service";
import { Btn, BtnContainer } from "../ToastAnswerUpdate/style";

function ToastAnswerUpdate({ id, title, desc, token, questionId }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const editorRef = useRef();
  const content = useSelector((state) => state.content.desc);
  const [descState, setDescState] = useState(desc);

  const onChange = () => {
    const editorData = editorRef.current.getInstance().getHTML();

    dispatch(setDesc(editorData));
  };

  const handleUpdate = async () => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      await axios
        .put(`${API_URL}/questions/${id}/answer_update/`, {
          title,
          desc: content,
        })
        .then((response) => {
          dispatch(setDesc(""));
          alertService.success("답변이 수정 되었습니다.");
          setTimeout(() => {
            router.push(`/questions/${questionId}`);
          }, 1500);
        })
        .catch((e) => {
          if (e.response === 400) {
            alertService.warn("빈 칸 없이 모두 작성해주세요.");
          }
        });
    } catch (e) {
      alertService.warn("답변이 수정 되지 않았습니다.");
    }
  };

  useEffect(() => {
    if (!content) {
      dispatch(setDesc(descState));
    }
  }, [dispatch]);

  const onRouteChangeStart = React.useCallback(() => {
    dispatch(setDesc(""));
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", onRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
    };
  }, []);

  return (
    <>
      {content ? (
        <>
          <Alert />
          <Editor
            initialValue={content}
            previewStyle="vertical"
            height="702px"
            initialEditType="wysiwyg"
            placeholder="내용을 입력해주세요."
            // plugins={[[codeSyntaxHighlight, { highlighter: Prism }], [colorSyntax]]}
            autofocus={false}
            ref={editorRef}
            onChange={onChange}
            events={{
              focus: () => {},
            }}
          />
        </>
      ) : (
        <>
          <Alert />
          <Editor
            initialValue={descState}
            previewStyle="vertical"
            height="702px"
            initialEditType="wysiwyg"
            placeholder="내용을 입력해주세요."
            // plugins={[[codeSyntaxHighlight, { highlighter: Prism }], [colorSyntax]]}
            autofocus={false}
            ref={editorRef}
            onChange={onChange}
            events={{
              focus: () => {},
            }}
          />
        </>
      )}
      <BtnContainer>
        <Btn onClick={handleUpdate}>수정하기</Btn>
        <Link href={`/questions/${questionId}`} passHref>
          <Btn>나가기</Btn>
        </Link>
      </BtnContainer>
    </>
  );
}

export default React.memo(ToastAnswerUpdate);
