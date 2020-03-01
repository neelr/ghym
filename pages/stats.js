import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import {Box, Flex, Text, Heading, Button} from "rebass";
import axios from "axios"


export default class open_nodes extends React.Component{
    state = {
        jobs:[],
        workers:[],
        dataPie: {},
        dataBar:{},
        barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
      }
    render () {
        return (
            <Flex flexDirection="column">
                <Flex height="30vh">
                    <Heading sx={{textDecoration:"underline",textDecorationStyle: "wavy",}} m="auto" fontSize={[3, 4,5]}>{this.state.jobs.length+this.state.workers.length} people online</Heading>
                    <Heading m="auto" fontSize={[ 2, 3,4]}>{this.state.jobs.length} Jobs</Heading>
                    <Heading m="auto" fontSize={[ 2,3,4]}>{this.state.workers.length} Workers</Heading>
                </Flex>
                <Flex height="70vh">
                    <MDBContainer style={{margin:"20px"}}>
                        <Pie height="430vh" data={this.state.dataPie} options={{ responsive: true }} />
                    </MDBContainer>
                    <Box m="auto"/>
                    <MDBContainer style={{margin:"20px"}}>
                        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
                    </MDBContainer>
                </Flex>
            </Flex>
        )
    }
    componentDidMount () {
        axios.get("https://ghym-server.glitch.me/active_jobs")
            .then(d => {
                axios.get("https://ghym-server.glitch.me/active_workers")
                    .then(dd => {
                        var two = dd.data.map(val => val.ram == 2 ? 1 : 0).reduce((a, b) => a + b, 0)
                        var three = dd.data.map(val => val.ram == 3 ? 1 : 0).reduce((a, b) => a + b, 0)
                        var four = dd.data.map(val => val.ram == 4 ? 1 : 0).reduce((a, b) => a + b, 0)
                        var five = dd.data.map(val => val.ram == 5 ? 1 : 0).reduce((a, b) => a + b, 0)
                        var six = dd.data.map(val => val.ram == 6 ? 1 : 0).reduce((a, b) => a + b, 0)
                        var seven = dd.data.map(val => val.ram == 7 ? 1 : 0).reduce((a, b) => a + b, 0)
                        var eight = dd.data.map(val => val.ram ==8 ? 1 : 0).reduce((a, b) => a + b, 0)
                        var nine = dd.data.map(val => val.ram == 9 ? 1 : 0).reduce((a, b) => a + b, 0)
                        this.setState({jobs:d.data,workers:dd.data,dataPie:{
                            labels: ["Jobs", "Workers"],
                            datasets: [
                              {
                                data: [d.data.length, dd.data.length],
                                backgroundColor: [
                                  "#4D5360",
                                  "#AC64AD"
                                ],
                                hoverBackgroundColor: [
                                  "#616774",
                                  "#DA92DB"
                                ]
                              }
                            ]
                          },dataBar:{
                            labels: ["2GB", "3GB", "4GB", "5GB", "6GB", "7GB","8GB", "9GB"],
                            datasets: [
                              {
                                label: "Ram Distribution on the Server",
                                data: [two, three, four, five, six, seven, eight, nine],
                                backgroundColor: [
                                  "rgba(255, 134,159,0.4)",
                                  "rgba(98,  182, 239,0.4)",
                                  "rgba(255, 218, 128,0.4)",
                                  "rgba(113, 205, 205,0.4)",
                                  "rgba(170, 128, 252,0.4)",
                                  "rgba(255, 177, 101,0.4)",
                                  "rgba(255, 134,159,0.4)",
                                  "rgba(98,  182, 239,0.4)",
                                  "rgba(255, 218, 128,0.4)"
                                ],
                                borderWidth: 2,
                                borderColor: [
                                  "rgba(255, 134, 159, 1)",
                                  "rgba(98,  182, 239, 1)",
                                  "rgba(255, 218, 128, 1)",
                                  "rgba(113, 205, 205, 1)",
                                  "rgba(170, 128, 252, 1)",
                                  "rgba(255, 177, 101, 1)",
                                  "rgba(255, 134, 159, 1)",
                                  "rgba(98,  182, 239, 1)",
                                  "rgba(255, 218, 128, 1)"
                                ]
                              }
                            ]
                          }
                        })
                    })
            })
    }
}