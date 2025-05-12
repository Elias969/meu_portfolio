// components/Feedback.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";

export default function Feedback() {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "feedbacks"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setFeedbacks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nickname || !message) return;

    await addDoc(collection(db, "feedbacks"), {
      nickname,
      message,
      createdAt: serverTimestamp()
    });

    setNickname("");
    setMessage("");
  };

  return (
    <section id="feedbacks" className="mt-20">
      <h2 className="text-3xl font-bold mb-6 text-green-400 text-center">Deixe seu feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto text-black">
        <input
          type="text"
          placeholder="Seu nome"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full p-2 rounded bg-white text-black"
        />
        <textarea
          placeholder="Sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 rounded bg-white text-black"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Enviar
        </button>
      </form>

      <div className="overflow-hidden whitespace-nowrap mt-10">
        <div className="animate-scroll inline-block">
          {feedbacks.map((fb) => (
            <span
              key={fb.id}
              className="mr-8 text-sm bg-white text-black px-3 py-1 rounded inline-block"
            >
              <strong>{fb.nickname}:</strong> {fb.message}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
