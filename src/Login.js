import React, { useState } from 'react'
import "./Login.css"
import { auth } from "./Firebase"
import TodoList from './TodoList'

export default function Login() {
    
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState("")

  const login = () => {
      auth.signInWithEmailAndPassword(email, password)
      .then(() => {
          setLoggedIn(true)
          console.log(setLoggedIn)
      })     
  }

  const register = () => {
      auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
          setLoggedIn(true)
      })
  }

  const signOut = () => {
      setLoggedIn(false)
  }

  if(loggedIn) return (
    <div><center><u><h1 className="title">{name}'s To-do list</h1></u>
    <TodoList /> 
    <button className="signOutButton" onClick={signOut}>Sign out</button></center></div>)

return (
<div className="login">
    <h3>Your name:</h3>
    <input type="text" onChange={event => setName(event.target.value)} value={name} />
    <h3>Email:</h3>
    <input type="email" onChange={event => setEmail(event.target.value)} value={email} />
    <h3>Password:</h3>
    <input type="password" onChange={event => setPassword(event.target.value)} value={password}/>
    <div className="buttons"><button className="button" onClick={login}>Sign-in</button>
    <button className="button" onClick={register}>Create new account</button>
    <div><h4>Default log in details:</h4>
    <h4>Name: Test</h4>
    <h4>Email: Test@test.com </h4>
    <h4>Password: 123456</h4>
    </div>
</div>
</div>
)
}