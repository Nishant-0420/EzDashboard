'use client';
import { Text, Title,Image } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const RadioComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>Radio</Title></u>
                <br />
                <Text >
                    Radio component is used to select one option at a time.
                </Text>
                <Text >
                    To use the Radio component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { Radio }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { Radio }  from  'ez-dashboard';
            const radioOptions = [
              { label: 'Option 1', value: 'Option 1' },
              { label: 'Option 2', value: 'Option 2' },
              { label: 'Option 3', value: 'Option 3' }
            ];
            <Radio options={radioOptions} onChange={(value) => console.log(value)}  size='xl' />`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <Text>** Should have to pass an array in radioOptions </Text>
                <br />
                <Image src="/image/radio1.png" alt="radio image" style={{ height: '200px', width: '200px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The Radio component has the following props: <br />
                    * options <br />
                    * onchange <br />
                    * labelPosition <br />
                    * description <br />
                    * size <br />
                    * color <br />
                    * variant <br />
                    * radius <br />
                </Text>
                <br />
                <Text>
                    <CodeBlock
                        text={`import  { Radio }  from  'ez-dashboard';
        const radioOptions = [
          { label: 'Option 1', value: 'Option 1' },
          { label: 'Option 2', value: 'Option 2' },
          { label: 'Option 3', value: 'Option 3' }
        ];
        <Radio options={radioOptions} onChange={(value) => console.log(value)}  color='success'/>`}
                        language='jsx'
                        theme={dracula}
                        showLineNumbers={false}
                        wrapLines
                    />
                </Text>
                <br />
                <Image src="/image/radio2.png" alt="radio image with props" style={{ height: '170px', width: '170px' }} />
            </div>
  )
}

export default RadioComponent