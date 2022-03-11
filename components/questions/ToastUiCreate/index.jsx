import { Editor } from "@toast-ui/react-editor";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_URL } from "../../../config";
import { setDesc } from "../../../modules/editor";
import { Alert } from "../../Alert";
import { alertService } from "../../alert.service";
import WhiteButton from "../../common/WhiteButton";
import { BtnContainer } from "./style";

function ToastUi({ title, folder, tags, token }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const editorRef = useRef();
  const content = useSelector((state) => state.content.desc);
  const [currentContent, setCurrentContent] = useState("");

  const onChange = useCallback(() => {
    const editorData = editorRef.current.getInstance().getHTML();

    dispatch(setDesc(editorData));
    setCurrentContent(editorData);
  }, [currentContent]);

  const handleCreate = async () => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      await axios
        .post(`${API_URL}/questions/create/`, {
          title,
          desc: content,
          question_folder: [],
          question_tags: tags,
        })
        .then((response) => {
          alertService.success("질문이 업로드 되었습니다.");
          dispatch(setDesc(""));
          setTimeout(() => {
            router.push("/");
          }, 1000);
        })
        .catch((e) => {
          console.log(e.response);
          if (e.response.status === 400) {
            alertService.warn("빈 칸 없이 모두 작성해주세요.");
          }
        });
    } catch (e) {
      alertService.warn("업로드에 실패했습니다.");
    }
  };

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
        onChange={() => onChange()}
        // language="ko"
        // autoComplete="off"
        events={{
          focus: () => {},
        }}
      />
      <BtnContainer>
        <WhiteButton
          onClick={handleCreate}
          paddingTop="0.75rem"
          paddingRight="2.375rem"
          fontSize="1rem"
        >
          작성하기
        </WhiteButton>
        <Link href="/" passHref>
          <WhiteButton paddingTop="0.75rem" paddingRight="2.375rem" fontSize="1rem">
            나가기
          </WhiteButton>
        </Link>
      </BtnContainer>
    </>
  );
}

export default React.memo(ToastUi);
