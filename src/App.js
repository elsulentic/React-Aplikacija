import "./App.css";
import React, { useEffect, useState } from "react";
import Message from "./components/Message";
import Input from "./components/Input";
import { randomName } from "./components/Username";

const App = () => {
  const [member, setMember] = useState({
    username: randomName(),
  });

  const [drone, setDrone] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!drone) {
      const drone = new window.Scaledrone("UeDuN68LJIbS29SF", {
        data: member,
      });
      drone.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        member.id = drone.clientId;
        setMember(member);
      });
      setDrone(drone);
    } else {
      const room = drone.subscribe("observable-room");
      room.on("message", (message) => {
        const { member, data } = message;
        setMessages((mess) => [...mess, { member, textMessage: data }]);
      });
    }
  }, [drone, member]);

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <div className="App">
    <div className="App-header">
        <img src="https://logowik.com/content/uploads/images/chat3893.logowik.com.webp" alt="" />
        <h1>Chat Space</h1>
    </div>
      <Message messages={messages} currentMember={member} />
      <Input onSendMessage={onSendMessage} />
    </div>
  );
};
export default App;
