'use client'
import React from 'react'
import { Text, Title,Image } from '@mantine/core';
import { CodeBlock, dracula } from 'react-code-blocks';

const StatCard = () => {
  return (
    <div style={{marginLeft:70,marginRight:90}}>
        <u><Title order={1}>StatCard</Title></u>
        <br />
        <Text>
            StatCard component is used to display statistical information. It can be used to show key metrics, performance indicators, and other data points.
        </Text>
        <Text>
            To use the StatCard component, you need to import it from the ez-dashboard package.
            <br />
            <br />
            <CodeBlock
            text={`import  { StatCard }  from  'ez-dashboard';`}
            language={'jsx'}
            theme={dracula}
            showLineNumbers={false}
            wrapLines
            />
        </Text>
        <Title order={2}>Usage</Title>
        <br />
        <CodeBlock
            text={`import { StatCard } from 'ez-dashboard';
            const Dashbaord = () => {
                return (
                    <StatCard  value="100" description={'card description'}  label={'name'} color='primary'/>
                )}
            export default Dashboard;`}
            language={'jsx'}
            theme={dracula}
            showLineNumbers={false}
            wrapLines
        />
        <br />
        <Image src="/image/statcard.png" alt="statcard image" style={{ height: '190px', width: '290px' }} />
        <br />
        <Title order={2}>Props</Title>
        <br />
        <Text>
            The StatCard component has the following props: <br />
            * value <br />
            * description <br />
            * label <br />
            * color
        </Text>

        
        
    </div>
  )
}

export default StatCard