import Movie from "./Components/movie"
import "./Components/style.css";
import movies from "./Components/data.json"

function App() {
  return (
    <>
      <div className="mainContainer"> Movie Review</div>
      <div className="movieContainer">
      {
        movies.map((elements) => {
          return(
          <Movie  
            img={elements.Poster}
            title={elements.Title}
            year={elements.Year}
          />
          )
        })
      }
      </div>
    </>
  )
}

export default App;
