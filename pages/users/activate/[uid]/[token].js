import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { API_URL } from '../../../../config';
import { alertService } from '../../../../components/alert.service';
import axios from 'axios';


function EmailVerify() {
  const router = useRouter();
  const {uid, token} = router.query;

  const checkEmailVerify = async() => {
    try{
      console.log(uid, token)
      await axios.post(`${API_URL}/users/activate/${uid}/${token}`)
      .then((res) => {
        if(res.status === 200) {
          router.push('/userActivated');
        }
      })
    } catch(e) {
      alertService.warn("이메일 인증에 실패 했습니다.");
    }
  }

  useEffect(() => {
    if(uid && token) {
      checkEmailVerify();
    }
  }, [uid, token])

    return (
        <>
        {uid} {token}
        </>
    );
}

export default EmailVerify;