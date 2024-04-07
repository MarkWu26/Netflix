'use client'

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import UserCard from "./UserCard";
import { SafeUser } from "@/types";

interface ProfilePageProps{
    currentUser?: SafeUser
}

const ProfilePageClient: React.FC<ProfilePageProps> = ({
    currentUser
}) => {
    const router = useRouter()
    const selectProfile = useCallback(() => {
        router.push('/');
      }, [router]);

    return ( 
        <div className="flex items-center h-full justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-6xl text-white text-center">Who&#39;s watching?</h1>
          <div className="flex items-center justify-center gap-8 mt-10">
            <div onClick={() => selectProfile()}>
              <UserCard name={currentUser?.name} />
            </div>
          </div>
        </div>
      </div>

     );
}
 
export default ProfilePageClient;