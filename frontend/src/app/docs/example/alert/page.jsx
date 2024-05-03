'use client';
import { Image, Text, Title } from '@mantine/core'
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks'

const Alert = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }} >
      <u><Title order={1}>Alert</Title></u>
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
      text=
          {`import { Alert } from 'ez-dashboard';
const Dashbaord = () => {
      return (
            <Alert title={'Alert'} description={'Alert message'}/>
              )}
export default Dashboard;`}
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
    </div>
  )
}

export default Alert