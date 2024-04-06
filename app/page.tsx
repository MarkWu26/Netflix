import ClientOnly from "@/components/ClientOnly";
import Image from "next/image";
import HomePageClient from "./HomePageClient";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import { getRandomMovies } from "./actions/getRandomMovies";
import MovieList from "@/components/MovieList";
import { getMovies } from "./actions/getMovies";

export default async function Home() {

  const randomMovies = await getRandomMovies();
  const movies = await getMovies();
  return (
    <>
      <ClientOnly>
      <Navbar/>
        <Billboard randomMovies={randomMovies}/>
        <HomePageClient/>
        <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
      </ClientOnly>
    </>
  );
}
