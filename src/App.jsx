import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Title from "./components/Title";
import Track from "./components/Track";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="App">
      <header class="container"></header>
      <main>
        <div class="container">
          <Title text="Stream it your way" />
          <Title text="Track list" />
          <Track />
          <Title text="Music Video" />
        </div>
      </main>
      <footer></footer>
        
    </div>
  )
}

export default App
