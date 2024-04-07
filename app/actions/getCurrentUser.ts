import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import prismadb from '@/libs/prismadb'


export const getSession  = async () => {
    return await getServerSession(authOptions);
}

export const getCurrentUser = async () => {
    try {
        const session = await getSession();
        console.log('session: ', session)
        if(!session?.user?.email){
            return null;
        }

        const currentUser = await prismadb.user.findUnique({
            where: {
              email: session.user.email as string,
            }
          });

          if(!currentUser){
            return null
          }

          return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
          };
    } catch (error) {
        return null;
    }
}