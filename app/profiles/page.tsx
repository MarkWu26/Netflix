import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { useCallback } from "react";

import { getCurrentUser } from "../actions/getCurrentUser";
import { redirect } from "next/navigation";
import ClientOnly from "@/components/ClientOnly";
import ProfilePageClient from "./ProfilePageClient";



const ProfilePage = () => {
  const currentUser = getCurrentUser();

  

  return (
   <ClientOnly>
    <ProfilePageClient/>
   </ClientOnly>
  );
}

export default ProfilePage;
