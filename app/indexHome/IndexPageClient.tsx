'use client'

import { useRouter } from "next/navigation";

const IndexPageClient = () => {

  const router = useRouter();

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.90) 12%,rgba(20,20,20,.20) 65%,rgba(0,0,0,.90) 100%, rgba(0,0,0,.100) 100%, #141414 100%), url('/images/hero.jpg') `
      }}
      className="absolute h-[100vh] object-fit overflow-y-hidden"
    >
      <div className="absolute w-full">
        <div className="flex flex-row justify-between items-center px-8 lg:px-44 py-6">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
              className="h-[42px] mr-[40px] hover:cursor-pointer"
              onClick={() => router.push("/")}
            />
          </div>
          <div>
            <button className="px-4 py-[6px] flex items-center justify-center text-white bg-[#e50914] rounded-md"
            onClick={()=> router.push("/auth")}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center w-full h-[100vh]">
        <div className="w-[80%] flex flex-col gap-y-5 ">
          <h1 className="text-white md:text-5xl  text-center font-extrabold tracking-wide text-3xl lg:leading-[75px]">
            The biggest local and international hits. The best stories. All
            streaming here.
          </h1>
          <p className="text-white text-lg lg:text-[22px] flex items-center justify-center text-center">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-white text-center text-lg lg:text-[22px] text-[22px] flex items-center justify-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex lg:px-32 flex-row items-center justify-between w-full gap-x-5">
            <input
              type="text"
              className="w-[60%] lg:w-[70%] px-4 py-[16px] bg-[#161616] bg-opacity-70 border-[#2bb871] border-2 rounded-md text-white"
              placeholder="Email address"
            />
            <button
              className=" px-4 py-1 sm:py-[16px] lg:w-[30%] flex items-center justify-center text-white bg-[#e50914] rounded-md w-[40%] sm:text-xl"
              onClick={() => router.push("/auth")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPageClient;
