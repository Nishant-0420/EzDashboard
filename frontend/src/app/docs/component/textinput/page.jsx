'use client';
import { Text, Title,Image } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const TextInputComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>TextInput</Title></u>
                <br />
                <Text >
                    TextInput component is used to take user input.
                </Text>
                <Text >
                    To use the TextInput component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { TextInput }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { TextInput }  from  'ez-dashboard';
<TextInput placeholder='Enter your name' label='Name' radius='lg'/>`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <Image src="/image/textinput1.png" alt="textinput image" style={{ height: '100px', width: '230px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The TextInput component has the following props: <br />
                    * label <br />
                    * description <br />
                    * radius <br />
                    * size <br />
                    * placeholder <br />
                    * color <br />
                    * textcolor <br />
                    * textsize <br />
                </Text>
                <br />
                <Text>
                    <CodeBlock
                        text={`import  { TextInput }  from  'ez-dashboard';
<TextInput placeholder='Enter your name' label='Name' radius='xl' color='success' size='sm'  />`}
                        language='jsx'
                        theme={dracula}
                        showLineNumbers={false}
                        wrapLines
                    />
                </Text>
                <br />
                <Image src="/image/textinput2.png" alt="textinput image with props" style={{ height: '100px', width: '230px' }} />
            </div>
  )
}

export default TextInputComponent