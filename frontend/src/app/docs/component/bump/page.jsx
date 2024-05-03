'use client';
import { Text, Title,Image,ScrollArea } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const BumpComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>Bump</Title></u>
                <br />
                <Text >
                    Bump component is used to show the distribution of data.
                </Text>
                <Text >
                    To use the Bump component , you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { Bump }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { Bump }  from  'ez-dashboard';
const bumpdata = {"id": string,
                 "data": [
                   {"x": number, "y": number},
                   {"x": number, "y": number}
                 ]
             }
            <Bump data={bumpdata} />`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <u><Text>Example data</Text></u>
                <ScrollArea h={100} type="auto" scrollbarSize={8} scrollHideDelay={3000}>
                    bumpdata=
                    {
                        JSON.stringify(
                            [
                                {
                                    "id": "Serie 1",
                                    "data": [
                                        { "x": 2000, "y": 3 },
                                        { "x": 2001, "y": 8 },
                                        { "x": 2002, "y": 5 },
                                        { "x": 2003, "y": 2 },
                                        { "x": 2004, "y": 9 }
                                    ]
                                },
                                {
                                    "id": "Serie 2",
                                    "data": [
                                        { "x": 2000, "y": 7 },
                                        { "x": 2001, "y": 4 },
                                        { "x": 2002, "y": 9 },
                                        { "x": 2003, "y": 6 },
                                        { "x": 2004, "y": 6 }
                                    ]
                                },
                                {
                                    "id": "Serie 3",
                                    "data": [
                                        { "x": 2000, "y": 4 },
                                        { "x": 2001, "y": 11 },
                                        { "x": 2002, "y": 6 },
                                        { "x": 2003, "y": 3 },
                                        { "x": 2004, "y": 55 }
                                    ]

                                }
                            ]
                        )
                    }
                </ScrollArea>
                <br />
                <Image src="/image/bump.png" alt="bump image" style={{ height: '350px', width: '600px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The Bump component has the following props: <br />
                    * data <br />
                </Text>
            </div>
  )
}

export default BumpComponent