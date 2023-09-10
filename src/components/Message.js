import { useEffect, useRef } from "react";
import UserProfile from "./UserProfile";
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";

export default function Message({ messages, currentMember }) {
  const scrolling = useRef(null);

  useEffect(() => {
    scrolling.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const condition1 = true;
  const condition2 = false;

  const renderMessage = (message, currentMember, id, previousMessage) => {
    const { member, textMessage } = message;
    const myMessage = member.id === currentMember.id;
    const allMessages = myMessage ? "messMessages mainUser" : "messMessages";
    const avatarImage =
      myMessage && member.id === currentMember.id
        ? avatar1
        : myMessage && condition1
        ? avatar2
        : myMessage && condition2
        ? avatar3
        : avatar4;

    const showUsername =
      !previousMessage || previousMessage.member.id !== member.id;

    return (
      <li key={id} className={allMessages}>
        {showUsername && (
          <UserProfile
            username={member.clientData.username}
            avatarImage={avatarImage}
          />
        )}
        <div className="content">
          <div
            className="text"
            style={{ backgroundColor: member.clientData.color }}
          >
            {textMessage}
          </div>
        </div>
      </li>
    );
  };

  return (
    <ul className="messagesList">
      {messages.map((m, i) => renderMessage(m, currentMember, i))}
      <div ref={scrolling} />
    </ul>
  );
}
