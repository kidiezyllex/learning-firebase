import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "./firebase-config";

export default function FirebaseApp() {
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let posts = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleAddDocument = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
    })
      .then(() => {
        console.log("succcess");
        // reset form
      })
      .catch((err) => {
        console.log(err);
        // reset form
      });
    e.reset();
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 10,
        }}
        onSubmit={handleAddPost}
      >
        <input
          placeholder="Enter title"
          style={{ padding: 10, fontSize: 18, borderRadius: 10 }}
        ></input>
        <input
          placeholder="Enter author"
          style={{ padding: 10, fontSize: 18, borderRadius: 10 }}
        ></input>
        <button
          type="submit"
          style={{
            padding: 10,
            borderRadius: 10,
            backgroundColor: "teal",
            color: "#fff",
            border: "none",
            width: "100%",
          }}
        >
          ADD POST
        </button>
      </form>
    </div>
  );
}
