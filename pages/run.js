import React from "react";
import {Box, Flex, Text, Heading, Button} from "rebass";
import Link from "next/link"
import axios from "axios"
import io from "socket.io-client"
import {
    Label,
    Input,
    Select,
    Textarea,
  } from '@rebass/forms'
  import Dropzone from 'react-dropzone'
export default class Run extends React.Component {
    state = {
        connect:(<Text fontSize="3" m="10px" color="red">Disconnected 💀</Text>),
        id:"",
        console:""
    }
    render () {
        return (
            <Flex flexDirection="column" textAlign="center">
                {this.state.connect}
                <Heading fontSize={[5,6]}>Create A Job!</Heading>
                <Flex action="javascript:void(0);" flexDirection="column" width={["80vw","75vw"]} m="auto" as="form" id="form">
                    <Label for="name">Name</Label>
                    <Input id="name" name="name" css={{borderRadius:"3px"}} placeholder="My Job 123"/>
                    <Label for="ram">Memory</Label>
                    <Select id="ram" name="ram">
                        <option value="1">1 GB</option>
                        <option value="2">2 GB</option>
                        <option value="3">3 GB</option>
                        <option value="4">4 GB</option>
                        <option value="5">5 GB</option>
                        <option value="6">6 GB</option>
                        <option value="7">7 GB</option>
                        <option value="8">8 GB</option>
                        <option value="9">9 GB</option>
                    </Select>
                    <Label for="code">Code</Label>
                    <Textarea css={{borderRadius:"3px"}} id="code" name="code" placeholder={`print("Hello World!")`}>
                        
                    </Textarea>
                    <Dropzone accept=".py" onDrop={acceptedFiles => {
                        acceptedFiles.forEach((file) => {
                            const reader = new FileReader()
                            reader.readAsBinaryString(file)
                            reader.onabort = () => console.log('file reading was aborted')
                            reader.onerror = () => console.log('file reading has failed')
                            reader.onload = () => {
                              const binaryStr = reader.result
                              document.getElementById("code").value = binaryStr
                            }
                          })
                    }}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                        <div style={{height:"100px", marginTop:"20px", display:"flex",outlineColor:"grey",outlineWidth:"3px",outlineStyle:"dashed"}} {...getRootProps()}>
                            <input id="file" {...getInputProps()} />
                            <p style={{margin:"auto"}}>Drag 'n' drop your python files here, or click to select files</p>
                        </div>
                        </section>
                    )}
                    </Dropzone>
                    <Button onClick={(e) => {
                        e.preventDefault()
                        axios.post("https://ghym-server.glitch.me/queue_job",{is_running:false,name:document.getElementById("name").value,id:this.state.id,ram:document.getElementById("ram").value,code:document.getElementById("code").value})
                        document.getElementById('form').reset();
                        }} m="10px" sx={{":hover":{cursor:"pointer"}}}>Send Away!</Button>
                </Flex>
                <Textarea sx={{m:"auto", bg:"dark",width:["80vw","50vw"]}}  id="console" placeholder={`Your console!`} readOnly>
                </Textarea>
            </Flex>
        )
    }
    componentDidMount () {
        var socket = io("https://ghym-server.glitch.me/")
        socket.on("connect", () => {
            this.setState({connect:(<Text m="10px" fontSize="3" color="green">Connected 🔌</Text>),id:socket.id})
        })
        socket.on("done",d => {
            document.getElementById("console").value = `${d.name} has finished with the output: \n${d.out.join("\n")}`
        })
    }
}