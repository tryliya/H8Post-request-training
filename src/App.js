import React, { useState } from 'react';
import axios from 'axios'


const App = () => {
  const  [user, setUser] = useState('')

  const signIn = () => {
    axios.post("http://localhost:3001/auth/sign-in", { "phone": "+19254223749", "password": "123" })
    .then((response) => {
      setUser(response.data.email)
    })
  }

  return (
    <>
    <button onClick={signIn}>Sign In</button>
    <div>{user}</div>
    </>
  )
}




export default App


