import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);

//useEffect serve para executar as funções inseridas toda vez que redenrizarmos a página
  useEffect(()=> {
    //async vai esperar o resultado, ou seja, a Promise
    const loadAll = async () => {
      // pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);
  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}