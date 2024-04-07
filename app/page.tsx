import ClientOnly from "@/components/ClientOnly";
import HomePageClient from "./HomePageClient";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import { getRandomMovies } from "./actions/getRandomMovies";
import MovieList from "@/components/MovieList";
import { getMovies } from "./actions/getMovies";
import {getCurrentUser} from './actions/getCurrentUser'
import { redirect } from "next/navigation";

export default async function Home() {

  const randomMovies = await getRandomMovies();
  const movies = await getMovies();
  const currentUser = await getCurrentUser()
  console.log('current User: ', currentUser)

  if(!currentUser){
    return redirect('/auth')
  }

  return (
    <>
      <ClientOnly>
      <Navbar currentUser={currentUser}/>
        <Billboard randomMovies={randomMovies}/>
        <HomePageClient/>
        <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
      </ClientOnly>
    </>
  );
}
