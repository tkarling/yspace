import React from 'react'
import './App.css'
import { greeter, MyGreeter } from '@tuija/ui'

console.log(greeter('tuija'))

const App: React.FC = () => {
  return (
    <div className="App">
      <MyGreeter name="Tuija" />
    </div>
  )
}

export default App
