import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "./firebase-config";

export default function FirebaseApp() {
  const colRef = collection(db, "posts");
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
}
