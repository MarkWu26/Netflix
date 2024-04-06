import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"


export const getSession  = async () => {
    return await getServerSession(authOptions);
}

export const getCurrentUser = async () => {
    try {
        const session = await getSession();

        if(!session){
            return null;
        }

        return {session}
    } catch (error) {
        return null;
    }
}