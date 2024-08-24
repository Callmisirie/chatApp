import React from 'react'
import SignOutButton from './SignOutButton'

const ChatRoom = ({setIsAuth, setRoom, roomInputRef}) => {
  return (
    <div className="flex flex-col 
    items-center justify-center gap-5 p-10
    rounded-2xl shadow-2xl font-mono w-fit">
      <label>Enter Room Name:</label>
      <input ref={roomInputRef}
      className="py-2 px-4 border-2 outline-none
      rounded-lg border-black"/>
      <button onClick={() => setRoom(roomInputRef.current.value)}
      className="bg-black text-white 
      py-2 px-4 rounded-2xl hover:bg-black/90">
        Enter Chat 
      </button>
      <SignOutButton 
        setIsAuth={setIsAuth}
        setRoom={setRoom}
      />
    </div>
  )
}

export default ChatRoom