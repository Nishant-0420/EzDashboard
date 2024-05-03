'use client';
import { Text, Title,Image,ScrollArea } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';
const RadialBarComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>RadialBar</Title></u>
                <br />
                <Text >
                    RadialBar component is used to show the progress of a task.
                </Text>
                <Text >
                    To use the RadialBar component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { RadialBar }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { RadialBar }  from  'ez-dashboard';
const  radialData= {"id": string,
          "color": string,
                 "data": [
                   {"x": string, "y": number},
                   {"x": string, "y": number}
                 ]
             }
<RadialBar data={radialData}/>`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <u><Text>Example data</Text></u>
                <ScrollArea h={200} type="auto" scrollbarSize={8} scrollHideDelay={3000}>
                    radialData=
                    {
                        JSON.stringify(
                            [
                                {
                                    "id": 'A',
                                    "data": [
                                        {
                                            "x": 'louis vuitton',
                                            "y": 1
                                        },
                                        {
                                            "x": 'tommmy hilfiger',
                                            "y": 2
                                        },
                                        {
                                            "x": 'zara',
                                            "y": 3
                                        },
                                        {
                                            "x": 'peter england',
                                            "y": 4
                                        }
                                    ]
                                },
                                {
                                    "id": 'B',
                                    "data": [
                                        {
                                            "x": 'louis vuitton',
                                            "y": 5
                                        },
                                        {
                                            "x": 'tommmy hilfiger',
                                            "y": 6
                                        },
                                        {
                                            "x": 'zara',
                                            "y": 7
                                        },
                                        {
                                            "x": 'peter england',
                                            "y": 8
                                        }
                                    ]
                                },
                                {
                                    "id": 'C',
                                    "data": [
                                        {
                                            "x": 'louis vuitton',
                                            "y": 9
                                        },
                                        {
                                            "x": 'tommmy hilfiger',
                                            "y": 10
                                        },
                                        {
                                            "x": 'zara',
                                            "y": 11
                                        },
                                        {
                                            "x": 'peter england',
                                            "y": 12
                                        }
                                    ]
                                },
                                {
                                    "id": 'D',
                                    "data": [
                                        {
                                            "x": 'louis vuitton',
                                            "y": 13
                                        },
                                        {
                                            "x": 'tommmy hilfiger',
                                            "y": 14
                                        },
                                        {
                                            "x": 'zara',
                                            "y": 15
                                        },
                                        {
                                            "x": 'peter england',
                                            "y": 16
                                        }
                                    ]
                                },
                                {
                                    "id": 'E',
                                    "data": [
                                        {
                                            "x": 'louis vuitton',
                                            "y": 17
                                        },
                                        {
                                            "x": 'tommmy hilfiger',
                                            "y": 18
                                        },
                                        {
                                            "x": 'zara',
                                            "y": 19
                                        },
                                        {
                                            "x": 'peter england',
                                            "y": 20
                                        }
                                    ]
                                }
                            ]
                        )
                    }
                </ScrollArea>
                <br />
                <Image src="/image/radialbar.png" alt="radialbar image" style={{ height: '350px', width: '550px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The RadialBar component has the following props: <br />
                    * data <br />
                </Text>
            </div>
  )
}

export default RadialBarComponent