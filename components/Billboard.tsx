'use client'

import React, { useCallback } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import PlayButton from '@/components/PlayButton';
import useBillboard from '@/hooks/useBillboard';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import { MovieInterface } from '@/types';

interface BillBoardProps {
  randomMovies?: MovieInterface | null
}

const Billboard: React.FC <BillBoardProps> = ({
  randomMovies
}) => {
  const { openModal } = useInfoModalStore();

  const handleOpenModal = useCallback(() => {
    openModal(randomMovies?.id);
  }, [openModal, randomMovies?.id]);

  console.log('data: ', randomMovies)

  return (
    <div className="relative h-[56.25vw] bg-gradient-to-r from-[rgba(0, 0, 0, 0.6)] to-transparent"  >
       <div className="relative">
      <video 
        poster={randomMovies?.thumbnailUrl} 
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" 
        autoPlay loop muted 
        src={randomMovies?.videoUrl}
      ></video>
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(20,20,20,0) 50%,rgba(20,20,20,.15) 65%,rgba(20,20,20,.35) 79%, rgba(20,20,20,.58) 94%, #141414 100%)`,
        }}
      ></div>
    </div>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {randomMovies?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {randomMovies?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={randomMovies?.id} />
          <button
            onClick={handleOpenModal}
            className="
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
            >
              <InformationCircleIcon className="w-4 md:w-7 mr-1" />
              More Info
          </button>
        </div>
      </div>
    </div>
  )
}
export default Billboard;
