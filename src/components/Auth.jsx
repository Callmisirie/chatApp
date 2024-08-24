import { auth, provider } from "../firebase-config"
import { signInWithPopup } from "firebase/auth"
import Cookies from "universal-cookie"

const cookies = new Cookies()

const Auth = ({setIsAuth}) => { 
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      cookies.set("auth-token", result.user.refreshToken) 
      setIsAuth(true)     
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div className="flex rounded-sm 
    shadow-md flex-col justify-center 
    items-center font-mono w-fit gap-5 p-10">
      <p>
        Sign In With Google To Continue.
      </p>
      <button className="bg-black 
      text-white p-2 rounded-2xl hover:bg-black/90"
      onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  )
}

export default Auth