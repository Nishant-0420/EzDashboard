'use client'
import React from 'react'
import { Code, CodeBlock, dracula } from 'react-code-blocks'
import { Image, Text, Title } from '@mantine/core'
const ProgressBar = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
        <u><Title order={1}>ProgressBar</Title></u>
        <br />
        <Text >
          ProgressBar component is used to display the progress of a task.
        </Text>
        <Text >
          To use the ProgressBar component, you need to import it from the ez-dashboard package.
          <br />
          <br />
          <CodeBlock
            text={`import  { ProgressBar }  from  'ez-dashboard';`}
            language={'jsx'}
            theme={dracula}
            showLineNumbers={false}
            wrapLines />
        </Text>
        <Title order={2}>Usage</Title>
        <br />
          <CodeBlock
          text=
            {`import { ProgressBar } from 'ez-dashboard';
const Dashbaord = () => {
    return (
           <ProgressBar value={69} />
          )}
export default Dashboard;`}
            language={'jsx'}
            showLineNumbers={false}
            theme={dracula}
            wrapLines />

         
        <br />
        <Image src="/image/progressbar1.png" alt="progressbar image" style={{ height: '90px', width: '410px' }} />
        <br />
        <Title order={2}>Props</Title>
        <br />
        <Text >
          The ProgressBar component has the following props: <br />
          * Value <br />
          * Color <br />
          * Radius <br />
        </Text>
        <br />
        <CodeBlock
          text=
          {`import { ProgressBar } from 'ez-dashboard';
const Dashbaord = () => {
      return (
              <ProgressBar value={69} color={'#FF0000'} radius={5} />
            )}
export default Dashboard;`}
          language={'jsx'}
          theme={dracula}
          showLineNumbers={false}
          wrapLines />
        <br />
        <Image src="/image/progressbar2.png" alt="progressbar image with props" style={{ height: '90px', width: '410px' }} />
      </div>
  )
}

export default ProgressBar