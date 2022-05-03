import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { alertService } from "../../../../components/alert.service";
import { API_URL } from "../../../../config";

function EmailVerify() {
  const router = useRouter();
  const { uid, token } = router.query;

  const checkEmailVerify = async () => {
    try {
      await axios.get(`${API_URL}/users/activate/${uid}/${token}/`).then((res) => {
        router.replace("/user_activated");
      });
    } catch (e) {
      alertService.warn("이메일 인증에 실패 했습니다.");
    }
  };

  useEffect(() => {
    if (uid && token) {
      checkEmailVerify();
    }
  }, [uid, token]);

  return <></>;
}

export default EmailVerify;
