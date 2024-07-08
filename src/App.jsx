
import './App.css'
import Cart from './components/Cart'
import { movies } from './assets/js/movies';
import { useEffect, useState } from 'react';
import News from './components/News';

function App() {

  const [news, setNews] = useState([])

  function getNews() {
    fetch("https://inshorts.vercel.app/news/top")
    .then(res => res.json())
    .then(json => setNews(json.data.articles))
  }
  useEffect(() => {
    getNews()
  }, [])

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
      <div className="container-fluid m-0 px-4">
        <div className="row">
          {news.map((news, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3 pt-3">
              <News news={news} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
