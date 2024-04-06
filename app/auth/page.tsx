import ClientOnly from "@/components/ClientOnly";
import AuthClientPage from "./AuthClientPage";

const AuthPage = () => {
    return ( 
        <ClientOnly>
            <AuthClientPage/>
        </ClientOnly>
     );
}
 
export default AuthPage;