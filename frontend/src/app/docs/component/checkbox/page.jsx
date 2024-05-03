'use client';
import { Text, Title,Image } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const CheckBoxComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>CheckBox</Title></u>
                <br />
                <Text >
                    CheckBox component is used to select multiple options at a time.
                </Text>
                <Text >
                    To use the CheckBox component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { CheckBox }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { CheckBox }  from  'ez-dashboard';
const checkboxOptions = [
              { label: 'Option 1', value: 'Option 1' },
              { label: 'Option 2', value: 'Option 2' },
              { label: 'Option 3', value: 'Option 3' }
            ];
<Checkbox options={checkboxOptions} onChange={(value) => console.log(value)} size='lg' />`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <Text>** Should have to pass an array in checkboxOptions </Text>
                <br />
                <Image src="/image/checkbox1.png" alt="checkbox image" style={{ height: '210px', width: '200px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The CheckBox component has the following props: <br />
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
                        text={`import  { CheckBox }  from  'ez-dashboard';
const checkboxOptions = [
              { label: 'Option 1', value: 'Option 1' },
              { label: 'Option 2', value: 'Option 2' },
              { label: 'Option 3', value: 'Option 3' }
            ];
<Checkbox options={checkboxOptions} onChange={(value) => console.log(value)} color='success' />`}
                        language='jsx'
                        theme={dracula}
                        showLineNumbers={false}
                        wrapLines
                    />
                </Text>
                <br />
                <Image src="/image/checkbox2.png" alt="checkbox image with props" style={{ height: '190px', width: '180px' }} />
            </div>
  )
}

export default CheckBoxComponent