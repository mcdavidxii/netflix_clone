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
        <Row
            title= 'NETFLIX ORIGINALS'
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
        />
        <Row
            title='Top Rated'
            fetchUrl={requests.fetchTopRated}
        />
        <Row
            title='Action Movies'
            fetchUrl={requests.fetchActionMovies}
        />
        <Row
            title='Comedy Movies'
            fetchUrl={requests.fetchComedyMovies}
        />
        <Row
            title=''
            fetchUrl={requests}
        />
        <Row
            title='Horror Movies'
            fetchUrl={requests.fetchHorrorMovies}
        />
        <Row
            title='Documentaries'
            fetchUrl={requests.fetchDocumentaries}
        />
        <Row
            title='Romance Movies'
            fetchUrl={requests.fetchRomanceMovies}
        />
    </div>
  );
}

export default App;
