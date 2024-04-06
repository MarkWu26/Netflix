import prismadb from '@/libs/prismadb'


interface MovieParams{
    id?: string | undefined
}

export const getMovie = async (params: MovieParams) => {
    try {
        console.log('params: ', params.id)

        if(!params.id || params.id === undefined){
            return null
        }

    const id = params.id
    const movie = await prismadb.movie.findUnique({
        where: {
            id
        }
    });

    if(!movie){
        return null
    }

    return movie;
    } catch (error) {
        console.log(error);
        return null;
    }
    
}