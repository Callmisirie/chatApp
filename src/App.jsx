import { useState, useRef } from "react"
import Auth from "./components/Auth"
import Cookies from "universal-cookie"
import Chat from "./components/Chat"
import ChatRoom from "./components/ChatRoom"
import { signOut } from "firebase/auth"
const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)

  const roomInputRef = useRef(null)

  if (!isAuth) {
    return (
      <div className="h-screen w-full 
      flex items-center justify-center">
        <Auth setIsAuth={setIsAuth}/>
      </div>
    )    
  } 

  return (
    <div className="h-screen w-full 
    flex items-center justify-center">
      {room ? (
        <Chat room={room}
        setIsAuth={setIsAuth}
        setRoom={setRoom}
        />
      ):(
        <ChatRoom 
          roomInputRef={roomInputRef} 
          setIsAuth={setIsAuth}
          setRoom={setRoom}
        />
      )}
    </div>
  )
}

export default App