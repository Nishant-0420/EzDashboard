'use client';
import { Text, Title,Image } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const StepperComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>Stepper</Title></u>
                <br />
                <Text >
                    Stepper component is used to show the progress of a task.
                </Text>
                <Text >
                    To use the Stepper component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { Stepper }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <u><Text>Example data</Text></u>
                <CodeBlock
                    text={`import  { Stepper }  from  'ez-dashboard';
const stepsData = [
              { title: 'Step 1', subtitle: 'Step 1 subtitle'},
              { title: 'Step 2', subtitle: 'Step 2 subtitle'},
              { title: 'Step 3', subtitle: 'Step 3 subtitle'}]
<Stepper steps={stepsData} activeStep={1}  />`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <Text>** Should have to pass an array in steps </Text>
                <br />
                <Image src="/image/stepper1.png" alt="stepper image" style={{ height: '75px', width: '530px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The Stepper component has the following props: <br />
                    * label<br />
                    * subtitle <br />
                    * icon <br />
                </Text>
                <br />
                <Text>
                    <CodeBlock
                        text={`import  { Stepper }  from  'ez-dashboard';
const stepsData = [
          { title: 'Step 1', subtitle: 'Step 1 subtitle', icon:<p>start</p>},
          { title: 'Step 2', subtitle: 'Step 2 subtitle', icon:<p>mid</p>},
          { title: 'Step 3', subtitle: 'Step 3 subtitle',icon: <p>final</p>}]
<Stepper steps={stepsData} activeStep={1} />`}
                        language='jsx'
                        theme={dracula}
                        showLineNumbers={false}
                        wrapLines
                    />
                </Text>
                <br />
                <Image src="/image/stepper2.png" alt="stepper image with props" style={{ height: '75px', width: '530px' }} />
            </div>
  )
}

export default StepperComponent
