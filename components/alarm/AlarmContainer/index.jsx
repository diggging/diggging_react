import React from "react";

import AlarmList from "./AlarmList";
import { AlarmBottom, AlarmTop, Container, DeleteAlarm } from "./style";

function AlarmContainer() {
  // const {alarmType, postTitle, alarmContent, alarmTime, userProfile, userNickname, isChecked} = alarmData;

  //get해서 알람 리스트 배열로 받아오기 => map으로 반복

  // const [isChecked, setIsChecked] = useState();

  return (
    <Container>
      <AlarmTop>
        <DeleteAlarm>전체삭제</DeleteAlarm>
        <DeleteAlarm>읽음삭제</DeleteAlarm>
      </AlarmTop>
      <AlarmBottom>
        {/* {alarm.map((alarm) => (<AlarmList key={alarm.id} />))} */}
        <AlarmList />
        <AlarmList />
        <AlarmList />
        <AlarmList />
        <AlarmList />
        <AlarmList />
        <AlarmList />
      </AlarmBottom>
    </Container>
  );
}

export default AlarmContainer;
