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
                    <Text width="75vw" m="auto" sx={{textIndent:"5vw"}}>Ghym is a distributed cloud computing platform that allows users in a cluster to host and give jobs on the network! This allows for a network where people can give and recieve requests at any time. Check statistics to see the jobs and nodes. We currently support python files as people use it the most for computationally intensive AI tasks. Check out the devs on github @neelr and @evan-nishi</Text>
                </Flex>
                <Flex height="50vh">
                    <Link href="/host">
                        <Button p="20px" px="40px" m="auto" sx={{fontSize:3,bg:"secondary",":hover":{"cursor":"pointer"}}}>Host</Button>
                    </Link>
                    <Link href="/stats">
                        <Button p="20px" px="40px" m="auto" sx={{fontSize:3,bg:"green",":hover":{"cursor":"pointer"}}}>Statistics</Button>
                    </Link>
                    <Link href="/run">
                        <Button p="20px" px="40px" m="auto" sx={{fontSize:3,":hover":{"cursor":"pointer"}}}>Run</Button>
                    </Link>
                </Flex>
            </Flex>
        )
    }
}
