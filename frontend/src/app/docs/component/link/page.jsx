'use client';
import { Text, Title,Image } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const LinkComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>Link</Title></u>
                <br />
                <Text >
                    Link component is used to navigate to another page.
                </Text>
                <Text >
                    To use the Link component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { Link }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text=
                    {`import { Link } from 'ez-dashboard';
<Links links={[{text:'GOOGLE',url:'https://www.google.com'}]} />`}
                    language={'jsx'}
                    theme={dracula}
                    showLineNumbers={false}
                    wrapLines />
                <br />
                <Image src="/image/links.png" alt="link image" style={{ height: '90px', width: '180px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The Link component has the following props: <br />
                    * text <br />
                    * url <br />
                </Text>
            </div>
  )
}

export default LinkComponent