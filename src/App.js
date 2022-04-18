import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';
import './App.css';

function App() {

  // 49ff79ae71652e665b4084b23dd0a138 tmdb api key
  return (
    <div className="App">
       {/* Nav here.. */}
       <Nav />

       <Banner />
    </div>
  );
}

export default App;
