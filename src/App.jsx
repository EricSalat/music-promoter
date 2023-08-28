import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Title from "./components/Title";
import TrackList from './components/TrackList';
import Header from './components/Header';
import VideoYoutube from './components/Video';
import Footer1 from './components/Footer1';

function App() {

  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <div className="container col-9 d-flex flex-column ">
          <Title text="Stream it your way" />
          <Title text="Track list" />
          <TrackList />
          <Title text="Music Video" />
          <VideoYoutube
          title="Tessa Violet - Crush (Official Music Video)"
          src="https://www.youtube.com/embed/SiAuAJBZuGs?si=A-H593VA5ElDT0Lz"
          />
        </div>
      </main>
      <Footer1 />
        
    </div>
  )
}

export default App
