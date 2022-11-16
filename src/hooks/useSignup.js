import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useSignup = () => {
    const [error, setError] = useState (null)
    const [isPending, setIsPending] = useState (false)

    const signup = async (name,email, password) => {
        setError(null)
        setIsPending(true)

        try {
            // signup user
           const res = await projectAuth.createUserWithEmailAndPassword(email, password)
           console.log(res.user)

           if(!res) {
            throw new Error('Cant signup')
           }

           //display name to user
           await res.user.updateProfile({ name })
           setIsPending(false)
           setError(null)
        }
        catch(err){
            console.log(err.message);
            setError(err.message)
            setIsPending(false)
        }
    }

    return {signup, error, isPending}
}