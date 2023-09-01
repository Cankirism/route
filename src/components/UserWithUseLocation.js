import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserWithUseLocation() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const userList = await axios("https://jsonplaceholder.typicode.com/users");
    setUser(userList.data);
  };
  return (
    <div>
      <h3>User List | Using useLocation</h3>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`} state={user}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
