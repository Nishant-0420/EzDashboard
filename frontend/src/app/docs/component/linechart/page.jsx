'use client';
import { Text, Title,Image,ScrollArea } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';
const LineChartComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>LineChart</Title></u>
                <br />
                <Text >
                    LineChart component is used to show the trend of data.
                </Text>
                <Text >
                    To use the LineChart component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { LineChart }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { LineChart }  from  'ez-dashboard';
const linechartdata = {"id": string,
                 "color": string,
                        "data": [
                          {"x": string, "y": number},
                          {"x": string, "y": number}
                        ]
                    }
<LineChart data={linechartdata} />`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <u><Text>Example data</Text></u>
                <ScrollArea h={200} type="auto" scrollbarSize={8} scrollHideDelay={3000}>
                    linechartdata=
                    {
                        JSON.stringify(
                            [
                                {
                                    "id": "japan",
                                    "color": "#f00",
                                    "data": [
                                        { "x": "plane", "y": 68 },
                                        { "x": "helicopter", "y": 192 },
                                        { "x": "boat", "y": 210 },
                                        { "x": "train", "y": 293 },
                                        { "x": "subway", "y": 271 },
                                        { "x": "bus", "y": 13 },
                                        { "x": "car", "y": 262 },
                                        { "x": "moto", "y": 118 },
                                        { "x": "bicycle", "y": 229 },
                                        { "x": "horse", "y": 127 },
                                        { "x": "skateboard", "y": 49 },
                                        { "x": "others", "y": 202 }
                                    ]
                                },
                                {
                                    "id": "france",
                                    "color": "hsl(311, 70%, 50%)",
                                    "data": [
                                        { "x": "plane", "y": 250 },
                                        { "x": "helicopter", "y": 46 },
                                        { "x": "boat", "y": 259 },
                                        { "x": "train", "y": 35 },
                                        { "x": "subway", "y": 61 },
                                        { "x": "bus", "y": 156 },
                                        { "x": "car", "y": 256 },
                                        { "x": "moto", "y": 133 },
                                        { "x": "bicycle", "y": 89 },
                                        { "x": "horse", "y": 172 },
                                        { "x": "skateboard", "y": 33 },
                                        { "x": "others", "y": 166 }
                                    ]
                                },
                                {
                                    "id": "us",
                                    "color": "hsl(22, 70%, 50%)",
                                    "data": [
                                        { "x": "plane", "y": 289 },
                                        { "x": "helicopter", "y": 17 },
                                        { "x": "boat", "y": 119 },
                                        { "x": "train", "y": 161 },
                                        { "x": "subway", "y": 141 },
                                        { "x": "bus", "y": 133 },
                                        { "x": "car", "y": 100 },
                                        { "x": "moto", "y": 227 },
                                        { "x": "bicycle", "y": 263 },
                                        { "x": "horse", "y": 77 },
                                        { "x": "skateboard", "y": 148 },
                                        { "x": "others", "y": 278 }
                                    ]
                                },
                                {
                                    "id": "germany",
                                    "color": "hsl(320, 70%, 50%)",
                                    "data": [
                                        { "x": "plane", "y": 166 },
                                        { "x": "helicopter", "y": 175 },
                                        { "x": "boat", "y": 81 },
                                        { "x": "train", "y": 182 },
                                        { "x": "subway", "y": 209 },
                                        { "x": "bus", "y": 239 },
                                        { "x": "car", "y": 160 },
                                        { "x": "moto", "y": 294 },
                                        { "x": "bicycle", "y": 155 },
                                        { "x": "horse", "y": 236 },
                                        { "x": "skateboard", "y": 45 },
                                        { "x": "others", "y": 54 }
                                    ]
                                },
                                {
                                    "id": "norway",
                                    "color": "#FF0000",//red
                                    "data": [
                                        { "x": "plane", "y": 26 },
                                        { "x": "helicopter", "y": 216 },
                                        { "x": "boat", "y": 78 },
                                        { "x": "train", "y": 123 },
                                        { "x": "subway", "y": 159 },
                                        { "x": "bus", "y": 117 },
                                        { "x": "car", "y": 206 },
                                        { "x": "moto", "y": 217 },
                                        { "x": "bicycle", "y": 240 },
                                        { "x": "horse", "y": 185 },
                                        { "x": "skateboard", "y": 41 },
                                        { "x": "others", "y": 203 }
                                    ]
                                }
                            ]
                        )}
                </ScrollArea>
                <br />
                <Image src="/image/linechart.png" alt="linechart image" style={{ height: '310px', width: '600px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The LineChart component has the following props: <br />
                    * data <br />
                </Text>
            </div>
  )
}

export default LineChartComponent