'use client';
import { Text, Title,Image,ScrollArea } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const HeatMapComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>HeatMap</Title></u>
                <br />
                <Text >
                    HeatMap component is used to show the distribution of data.
                </Text>
                <Text >
                    To use the HeatMap component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { HeatMap }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { HeatMap }  from  'ez-dashboard';
const HeatMapdata = {"id": string,
                 "data": [
                   {"x": string, "y": number},
                   {"x": string, "y": number}
                 ]
<HeatMap data={HeatMapdata} />`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <u><Text>Example data</Text></u>
                <ScrollArea h={200} type="auto" scrollbarSize={8} scrollHideDelay={3000}>
                    HeatMapdata=
                    {
                        JSON.stringify(
                            [
                                {
                                    "id": "Japan",
                                    "data": [
                                        { "x": "Starbucks", "y": -54870 },
                                        { "x": "Peter england", "y": 23209 },
                                        { "x": "tommy hilfiger", "y": 49876 },
                                        { "x": "Car", "y": -30871 },
                                        { "x": "Boat", "y": -32945 },
                                        { "x": "Moto", "y": -3612 },
                                        { "x": "Moped", "y": -82690 },
                                        { "x": "Bicycle", "y": -7032 },
                                        { "x": "Others", "y": -44098 }
                                    ]
                                },
                                {
                                    "id": "France",
                                    "data": [
                                        { "x": "Starbucks", "y": 54870 },
                                        { "x": "Peter england", "y": -23209 },
                                        { "x": "tommy hilfiger", "y": -49876 },
                                        { "x": "Car", "y": 30871 },
                                        { "x": "Boat", "y": 32945 },
                                        { "x": "Moto", "y": 3612 },
                                        { "x": "Moped", "y": 82690 },
                                        { "x": "Bicycle", "y": 7032 },
                                        { "x": "Others", "y": 44098 }
                                    ]
                                },
                                {
                                    "id": "US",
                                    "data": [
                                        { "x": "Starbucks", "y": -54870 },
                                        { "x": "Peter england", "y": 23209 },
                                        { "x": "tommy hilfiger", "y": 49876 },
                                        { "x": "Car", "y": -30871 },
                                        { "x": "Boat", "y": -32945 },
                                        { "x": "Moto", "y": -3612 },
                                        { "x": "Moped", "y": -82690 },
                                        { "x": "Bicycle", "y": -7032 },
                                        { "x": "Others", "y": -44098 }
                                    ]
                                },
                                {
                                    "id": "Germany",
                                    "data": [
                                        { "x": "Starbucks", "y": 54870 },
                                        { "x": "Peter england", "y": -23209 },
                                        { "x": "tommy hilfiger", "y": -49876 },
                                        { "x": "Car", "y": 30871 },
                                        { "x": "Boat", "y": 32945 },
                                        { "x": "Moto", "y": 3612 },
                                        { "x": "Moped", "y": 82690 },
                                        { "x": "Bicycle", "y": 7032 },
                                        { "x": "Others", "y": 44098 }
                                    ]
                                },

                            ]
                        )
                    }
                </ScrollArea>
                <br />
                <Image src="/image/heatmap.png" alt="heatmap image" style={{ height: '370px', width: '600px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The HeatMap component has the following props: <br />
                    * data <br />
                </Text>
            </div>
  )
}

export default HeatMapComponent