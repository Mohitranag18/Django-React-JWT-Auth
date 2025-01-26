import { Flex } from "@chakra-ui/react"

const Layout = ({children}) => {
    return (
        <Flex bg='white' w='100vw' h='100vh' justifyContent='center' alignItems='center'>
            {children}
        </Flex>
    )
}

export default Layout;