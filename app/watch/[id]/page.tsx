import ClientOnly from "@/components/ClientOnly";
import MovieClientPage from "./MovieClientPage";
import { getMovie } from "@/app/actions/getMovie";

interface MovieParams{
    id?: string | undefined
}

const Watchpage = async ({params}:{params: MovieParams}) => {
    console.log('params: ', params)
    const movie = await getMovie(params)
    console.log('movie: ', movie)
    return ( 
    <ClientOnly>
        <MovieClientPage data={movie}/>
    </ClientOnly> 
    
    );
}
 
export default Watchpage;