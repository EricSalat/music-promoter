import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Title from "./components/Title";
import Track from "./components/Track";
import TrackList from './components/TrackList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="App">
      <header></header>
      <main>
        <div class="container col-9 d-flex flex-column ">
          <Title text="Stream it your way" />
          <Title text="Track list" />
          <TrackList />
          {/* <Title text="Music Video" /> */}
        </div>
      </main>
      <footer></footer>
        
    </div>
  )
}

export default App
