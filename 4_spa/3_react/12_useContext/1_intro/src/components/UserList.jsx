import { useState, useEffect } from "react";
import { UserCard } from "./UserCard";
import "../styles/UserList.css";

export const UserList = () => {
  // lokale Nutzung der Users
  // Plan ist, einen User global zu speichern
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  return (
    <div className="container">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
