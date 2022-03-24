import React, { useContext, useState, useEffect, FC } from "react"
import { auth, authApp } from "../firebase"

const AuthContext = React.createContext({})

export function useAuth():any {
  return useContext(AuthContext)
}

const AuthProvider:FC<{}> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>()
  const [loading, setLoading] = useState(true)

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(authApp, email, password)
  }

  function login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(authApp, email, password)
  }

  function logout() {
    return auth.signOut(authApp)
  }

  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(authApp, email)
  }

  function updateEmail(email: string) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password:string) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    return auth.onAuthStateChanged(authApp, (user: any) => {
      setCurrentUser(user)
      setLoading(false)
    })
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;

