'use client';
import { Text, Title,Image } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';


const StatCardComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>StatCard</Title></u>
                <br />
                <Text >
                    StatCard component is used to display important statistics information to users. It can be used to show
                    success, warning, error and information messages.</Text>
                <Text >
                    To use the StatCard component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { StatCard }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import { StatCard } from 'ez-dashboard';
<StatCard  value="100" description={'card description'}  label={'name'} color='primary'/>`}
                    language={'jsx'}
                    theme={dracula}
                    showLineNumbers={false}
                    wrapLines />
                <br />
                <Image src="/image/statcard.png" alt="statcard image" style={{ height: '190px', width: '290px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The StatCard component has the following props: <br />
                    * Value <br />
                    * Description <br />
                    * Label <br />
                    * Color
                </Text>
            </div>
  )
}

export default StatCardComponent