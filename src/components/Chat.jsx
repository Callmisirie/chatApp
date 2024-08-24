import { useEffect, useState } from "react"
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from "firebase/firestore"
import { auth, db } from "../firebase-config"
import SignOutButton from "./SignOutButton";

const Chat = ({room, setIsAuth, setRoom}) => {
  const [newMessage, setNewMessage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [messages, setMessages] = useState([]);

  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef, 
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubcribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});
      });
      setMessages(messages);
    })

    return () => unsubcribe();
  }, [])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    setIsActive(true);

    await addDoc(messagesRef, {
      user: auth.currentUser.displayName,
      text: newMessage,
      room,
      createdAt: serverTimestamp(),
    })

    setNewMessage("");
    setIsActive(false);
  }

  return (
    <div  className="flex flex-col 
    items-center justify-center p-10
    rounded-2xl shadow-2xl font-mono w-fit gap-5">
      <h1 className="text-center 
      font-semibold text-xl uppercase">
        Welcome to: {room}
      </h1>
      <div className="w-full">
        {messages.map((message) => 
          <div className="text-md"
          key={message.id}>
            <span className="font-bold text-lg">{message.user} </span>
            {message.text}
          </div>
        )}
      </div>
      <form className="flex flex-col gap-5 
      items-center justify-center"
      onSubmit={handleSubmit}
      >
        <textarea className="py-2 px-4 border-2 outline-none
        rounded-lg border-black" 
        placeholder="Type your message here..."
        onChange={(e) => setNewMessage(e.target.value)}
        value={newMessage}
        />
        <button className={`bg-black text-white 
        py-2 px-4 rounded-2xl hover:shadow-lg ${isActive && "bg-black/80"} `} 
        type="submit"
        disabled={isActive}>
          {isActive ? "Sending..." : "Send"}
        </button>
      </form> 
      <SignOutButton 
        setIsAuth={setIsAuth}
        setRoom={setRoom}
      />
    </div>
  )
}

export default Chat