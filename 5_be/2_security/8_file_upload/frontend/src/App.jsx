import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => setUser(res.user));
    // res ist die Antwort aus dem backend/routes/users.js in Zeile 50
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // Erstelle eine neue FormData
    const formData = new FormData(e.target);

    // formData beinhaltet die Datei
    fetch(`http://localhost:3000/users/${user._id}/upload`, {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        alert("Upload successful!");
      } else {
        alert("Upload failed!");
      }
    });
  };

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/users/${user._id}/profile`)
        .then((res) => res.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setProfile(url);
        });
    }
  }, [user]);

  return (
    <main>
      <h1>File Upload Tutorial</h1>
      {profile && <img src={profile} style={{ width: 200 }} />}
      {!user && (
        <form onSubmit={handleSubmit}>
          <input name="email" type="email" />
          <input name="password" type="password" />
          <button type="submit">Login</button>
        </form>
      )}
      {user && (
        <form onSubmit={handleUpload}>
          <input name="profilePicture" type="file" accept=".png,.jpg" />
          <button type="submit">Upload</button>
        </form>
      )}
    </main>
  );
}

export default App;
