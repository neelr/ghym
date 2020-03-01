import React from "react";
import {Box, Flex, Text, Heading, Button} from "rebass";
import Link from "next/link"

export default class Home extends React.Component {
    render () {
        return (
            <Flex flexDirection="column">
                <Flex flexDirection="column" height="50vh">
                    <Heading sx={{textDecoration:"underline",textDecorationStyle: "wavy",}} fontSize={[6,7]} m="auto">Ghym</Heading>
                    <Text m="auto" p="10px" fontWeight="700">Simple, Modern, Distributed Cloud Computing</Text>
                    <Text width="75vw" m="auto" sx={{textIndent:"5vw"}}>Ghym is a distributed cloud computing platform that allows users to
                    host jobs on their computers or assign jobs to others computers.  When a job is assigned, a small fee is charged based
                    on how much RAM is requested and how long the job takes.  The host gets most of the fee and the rest goes to the Ghym project.
                    </Text>
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
