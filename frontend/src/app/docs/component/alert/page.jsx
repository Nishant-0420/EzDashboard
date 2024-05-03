'use client';
import { Image, Text, Title } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const AlertComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }} >

                <div ><u><Title order={1}>Alert</Title></u></div>
                <br />
                <Text  >
                    Alert component is used to display important messages to users. It can be used to show
                    success, warning, error and information messages.</Text>
                <Text >
                    To use the Alert component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { Alert }  from  'ez-dashboard';`}
                        language={'jsx'}
                        theme={dracula}
                        showLineNumbers={false}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import { Alert } from 'ez-dashboard';
<Alert title={'Alert'} description={'Alert message'}/>`}
                    language={'jsx'}
                    theme={dracula}
                    showLineNumbers={false}
                    wrapLines />
                <br />
                <Image src="/image/alert2.png" alt="alert box" style={{ height: '120px', width: '300px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The Alert component has the following props: <br />
                    * title <br />
                    * description
                </Text>
                <br />
                <CodeBlock
                    text={`<Alert title={'Alert'} description={'Alert message'}/>`}
                    language={'jsx'}
                    theme={dracula}
                    showLineNumbers={false}
                    wrapLines />
                <br />
                <Image src="/image/alert2.png" alt="alert box img with props" style={{ height: '120px', width: '300px' }} />
            </div>
  )
}

export default AlertComponent