import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../Dashboard.css";

const Message = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const userFirstname = user ? user.firstName : null;

  return (
    <div>
      <h3 className="message">
        {userFirstname ? `Hey, ${userFirstname} 👋` : "Hello User"}
      </h3>
    </div>
  );
};

export default Message;




