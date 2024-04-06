import prismadb from '@/libs/prismadb'
import { getCurrentUser } from './getCurrentUser';


export const getRandomMovies = async () => {



    try {

       
        const moviesCount = await prismadb.movie.count();

    const randomIndex = Math.floor(Math.random() * moviesCount);

    const randomMovies = await prismadb.movie.findMany({
        take: 1,
        skip: randomIndex
    })

    return randomMovies[0];
    } catch (error) {
        console.log('database error: ', error);
        return null;
    }
    
}