import logo from './logo.svg';
import './App.css';
import img from './assets/téléchargement.jpg'
import videoSource from './assets/video.mp4';


function App() {
  return (
    <div className="App">
      <div className="img-container">

        <img src="planetes.jpg" alt="img" />

      
        <img src={img} alt="img" />
        
        
      </div>
      <div className="video-container">
        <video width="700" height="250" controls>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;

