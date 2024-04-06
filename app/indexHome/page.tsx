import ClientOnly from "@/components/ClientOnly"
import IndexPageClient from "./IndexPageClient"

const IndexPage = () => {
    return (
        <ClientOnly>
            <IndexPageClient/>
        </ClientOnly>
    )
}

export default IndexPage