
import './App.css'
import Cart from './components/Cart'
import { movies } from './assets/js/movies';

function App() {


  return (
    <>
      <div className="container-fluid m-0 px-4">
        <div className="row">
          {movies.map((movie, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3 pt-3">
              <Cart movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
