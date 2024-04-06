'use client'

import { MovieInterface } from '@/types';
import {useRouter} from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface MovieClientProps{
    data?: MovieInterface | null
}

const MovieClientPage: React.FC<MovieClientProps> = ({
data
}) => {

    const router = useRouter()

    return ( 
        <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <ArrowLeftIcon onClick={() => router.push('/')} className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition" />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span> {data?.title}
        </p>
      </nav>
      <video className="h-full w-full" autoPlay controls src={data?.videoUrl}></video>
    </div>
     );
}
 
export default MovieClientPage;