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
  const emojis = ["💬", "✨", "🔥", "💡", "😄", "🚀", "🌟", "🎉"];

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

        <div
    className="space-y-4 mt-10 overflow-hidden"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
  >

        {[0, 1].map((row) => (
          <div key={row} className="whitespace-nowrap animate-scroll">
            {feedbacks
  .filter((_, i) => i % 2 === row)
  .map((fb) => {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    return (
      <span
        key={fb.id}
        className="inline-block mr-6 text-sm bg-white text-black px-4 py-2 rounded shadow relative"
      >
        <strong>{fb.nickname}:</strong> {fb.message}
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 fade-in-emoji">
  {emoji}
</span>
      </span>
    );
  })}
          </div>
        ))}
      </div>
    </section>
  );
}
