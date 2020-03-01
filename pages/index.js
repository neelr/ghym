import React from "react";
import {Box, Flex, Text, Heading, Button} from "rebass";
import Link from "next/link"
import axios from "axios"

export default class Home extends React.Component {
    render () {
        return (
            <Flex flexDirection="column">
                <Flex flexDirection="column" height="50vh">
                    <Heading sx={{textDecoration:"underline",textDecorationStyle: "wavy",}} fontSize={[6,7]} m="auto">Ghym</Heading>
                    <Text m="auto" p="10px" fontWeight="700">Simple, Modern, Distributed Cloud Computing</Text>
                    <Text width="75vw" m="auto" sx={{textIndent:"5vw"}}>Corned beef boudin drumstick alcatra, salami chuck jowl ground round short ribs. Chuck tri-tip ham jowl, pork venison salami shank meatball pork belly turkey ribeye rump flank sirloin. Porchetta landjaeger pork beef ribs picanha andouille chislic venison. Beef ribs andouille ham shank. Venison chislic hamburger pork. Capicola ribeye jowl, jerky corned beef tail andouille pig. T-bone corned beef swine ribeye brisket pastrami ham hock picanha pork belly buffalo.</Text>
                </Flex>
                <Flex height="50vh">
                    <Link href="/host">
                        <Button p="20px" px="40px" m="auto" sx={{fontSize:3,bg:"secondary",":hover":{"cursor":"pointer"}}}>Host</Button>
                    </Link>
                    <Link href="/run">
                        <Button p="20px" px="40px" m="auto" sx={{fontSize:3,":hover":{"cursor":"pointer"}}}>Run</Button>
                    </Link>
                </Flex>
            </Flex>
        )
    }
}
