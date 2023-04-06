import React from "react";
import Message from "./Message";

const MessageContainer = () => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  return <Message user={user} />;
};

export default MessageContainer;
