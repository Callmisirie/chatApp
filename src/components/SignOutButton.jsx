import { signOut } from "firebase/auth"
import Cookies from "universal-cookie"
import { auth } from "../firebase-config"
const cookies = new Cookies()

const SignOutButton = ({setIsAuth, setRoom}) => {
  async function handleSignOut () {
    await signOut(auth)    
    cookies.remove("auth-token")
    setIsAuth(false)
    setRoom(null)
  }
   
  return (
    <button onClick={handleSignOut}
    className="bg-red-500 text-white 
    py-2 px-4 rounded-2xl hover:bg-red-500/90">
      Sign Out 
    </button>
  )
}

export default SignOutButton