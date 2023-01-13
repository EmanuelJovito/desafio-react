import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [users, setUsers] = useState([])

  function ApiCall() {
    fetch('/users.json')
      .then(res=> res.json())
      .then(data => setUsers(data))
  }

  setTimeout(() => {
    ApiCall()
  }, 5000)
  
  return (
    <>
      <h1>Lista de usuários:</h1>
      {JSON.stringify(users)}
    </>
  )
}
