import prismadb from '@/libs/prismadb'
import { getCurrentUser } from './getCurrentUser';


export const getMovies = async () => {

    try {

    const movies = await prismadb.movie.findMany()

    return movies;
    } catch (error) {
        console.log('database error: ', error);
        return null;
    }
    
}