import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";
import './App.css';
import Header from "./components/Header";

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

//useEffect serve para executar as funções inseridas toda vez que redenrizarmos a página
  useEffect(()=> {
    //async vai esperar o resultado, ou seja, a Promise
    const loadAll = async () => {
      // pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // pegando o Featured (filme em destaque)
      //filtra pelos filmes orignais
      let originals = list.filter(i=>i.slug === 'originals');
      //gera um item aleatório de acordo com a quantidade de itens na lista
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      //escolhe um item aleatório
      let chosen = originals[0].items.results[randomChosen];
      //pegamos as informações do filme escolhido
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
      const scrollListener = () => {
        if(window.scrollY > 10){
          setBlackHeader(true)
        }
        else{
          setBlackHeader(false);
        }
      }

      window.addEventListener('scroll', scrollListener);

      return () => {
        window.removeEventListener('scroll', scrollListener);
      }
  }, []);

  return(
    <div className="page">
      <Header black={blackHeader}/>

      {featuredData &&
          <FeatureMovie item={featuredData} />
        }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        
      </footer>
    </div>
  );
}