import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline bg-blue-500 text-white p-4 rounded-xl">
        Hello world!
      </h1>
      <Card username={"AR Rehman"}/> 
      <Card username={"Sid Shriram"}/> 
      <Card />
    </>
  )
}

export default App
