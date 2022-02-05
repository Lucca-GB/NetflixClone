const API_KEY = '18fac4ba21e473ee1f57754a64880e3e';

/*
-originais netflix
-trending
-top rated
-action
-comedy
-horror
-romance
-docs
*/

//
const basicFetch = async (endpoint) => {
        //função auxiliar que vai dar um fetch na url que queremos pegar(envia a requisição)
        const req = await fetch(`${API_BASE}${endpoint}`);
        //vai pegar json(espera a resposta da requisição)
        const json = await req.json();
        //retorna json
        return json;
}


export default {
        getHomeList: async () => {
                return[
                        {
                                slug: 'originals',
                                title: 'Originais do Netflix',
                                //a partir dos itens disponibilizados da API, será recolhido todas os itens
                                //classificados como originais netflix
                                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
                        },
                        {
                                slug: 'trending',
                                title: 'Recomendados para você',
                                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
                        },
                        {
                                slug: 'toprated',
                                title: 'Em alta',
                                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
                        },
                        {
                                slug: 'action',
                                title: 'Ação',
                                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
                        },
                        {
                                slug: 'comedy',
                                title: 'Comédia',
                                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)

                        },
                        {
                                slug: 'horror',
                                title: 'Terror',
                                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

                        },
                        {
                                slug: 'romance',
                                title: 'Romance',
                                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
                        },
                        {
                                slug: 'documentary',
                                title: 'Documentários',
                                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
                        }
                ]
        }
}