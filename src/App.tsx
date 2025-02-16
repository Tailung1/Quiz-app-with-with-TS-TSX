import { useState } from 'react'
import Quiz from './components/Quiz'

function App() {

  return (
    <>
      <div
        style={{
          borderBottom: "5px solid aqua",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <header>
          <h1>Quiz App</h1>
        </header>
      </div>
      <Quiz />
    </>
  );
}

export default App
