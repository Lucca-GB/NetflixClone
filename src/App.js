import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";

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
      Header
      Destaque
      Listas
      Rodape
    </div>
  )
}