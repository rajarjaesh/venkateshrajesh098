
import Pokemon list from
import axios from axios


function App () {
    const[pokemon,setPokemon] = useState(["bulbasaur","charmandar"])
    const[currentPageUrl, setCurrentPageurl} = useState("https://pokeapi.co//api/v2/pokeman")

    const[nextPageurl,setNextpageurl] = useState()
    const[prevPageurl,setPrevpageurl] = useState()
    const[loading,setloading]         = useState(true)
 
useEffects(() = > {
            setLoading(true)
          
              {axios.get (currentPageUrl),{
                CancelToken:new axios.CancelToken (c = > cancel = c)
              }).then(res => {
            setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevpagerurl(res.data.previous)
            setPokemon(res.data.results.map(p => p.name))
       })
       return()=> cancel(

       ),[currentPageUrl])

          function gotoNextpage(){
            setCurrentPageUrl)]
          }

       if(loading) return "loading........"

    },[currentPageUrl])


    return(
        <>
            <PokemonList pokemon={pokemon}/>
            <pagination
            gotNextPage = {nextpageUrl? gotNextPage: null}
            gotPrevPage = {prevPageUrl ? gotPrevPage: nul}
            />
        );
    
}

export default function Pagination({gotNextpage,gotPrevPage}){

    return (
        <div>
        {gotoPrevPage && <button onClick=(gotoprevpage}>Previous</button>}
        {gotoNextpage && <button onClick={gotoNextpage}>Next</button>}


            </div>
    )
}