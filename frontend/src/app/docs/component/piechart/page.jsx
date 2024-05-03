'use client';
import { Text, Title,Image,ScrollArea } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const PieChartComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
    <u><Title order={1}>PieChart</Title></u>
    <br />
    <Text >
        PieChart component is used to show the distribution of data.
    </Text>
    <Text >
        To use the PieChart component, you need to import it from the ez-dashboard package.
        <br />
        <br />
        <CodeBlock
            text={`import  { PieChart }  from  'ez-dashboard';`}
            language={'jsx'}
            showLineNumbers={false}
            theme={dracula}
            wrapLines />
    </Text>
    <Title order={2}>Usage</Title>
    <br />
    <CodeBlock
        text={`import  { PieChart }  from  'ez-dashboard';
const PieData = [{
"id": string,
"label": string,
"value": number,
}]
<PieChart data={PieData1} />`}
        language={'jsx'}
        showLineNumbers={false}
        theme={dracula}
        wrapLines />
    <br />
    <u><Text>Example data</Text></u>
    <ScrollArea h={100} type="auto" scrollbarSize={8} scrollHideDelay={3000}>
        PieData1=
        {
            JSON.stringify(
                [{
                    "id": "coco-cola",
                    "label": "coco-cola",
                    "value": 448,

                },
                {
                    "id": "pepsi",
                    "label": "pepsi",
                    "value": 502,

                },
                {
                    "id": "fanta",
                    "label": "fanta",
                    "value": 505,

                },
                {
                    "id": "sprite",
                    "label": "sprite",
                    "value": 77,

                },
                {
                    "id": "7up",
                    "label": "7up",
                    "value": 551,

                }
                ]
            )
        }
    </ScrollArea>
    <br />
    <Image src="/image/piechart.png" alt="piechart image" style={{ height: '320px', width: '470px' }} />
    <br />
    <Title order={2}>Props</Title>
    <br />
    <Text >
        The PieChart component has the following props: <br />
        * data <br />
    </Text>
</div>
  )
}

export default PieChartComponent