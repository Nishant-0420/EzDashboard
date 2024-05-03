'use client';
import { Text, Title,Image} from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const ButtonComponent = () => {
    return (
        <div style={{ marginLeft: 70, marginRight: 90 }}>
            <u><Title order={1}>Button</Title></u>
            <br />
            <Text >
                Button component is used to trigger an action.
            </Text>
            <Text >
                To use the Button component, you need to import it from the ez-dashboard package.
                <br />
                <br />
                <CodeBlock
                    text={`import  { Button }  from  'ez-dashboard';`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
            </Text>
            <Title order={2}>Usage</Title>
            <br />
            <CodeBlock
                text=
                {`import { Button } from 'ez-dashboard
<Button variant='filled'/>`}
                language={'jsx'}
                theme={dracula}
                showLineNumbers={false}
                wrapLines />
            <br />
            <Image src="/image/button1.png" alt="button image" style={{ height: '90px', width: '160px' }} />
            <br />
            <Title order={2}>Props</Title>
            <br />
            <Text >
                The Button component has the following props: <br />
                * variant <br />
                * size <br />
                * radius <br />
                * color <br />
            </Text>
            <br />
            <CodeBlock
                text=
                {`import { Button } from 'ez-dashboard';
<Button variant='filled' size='xl' radius='xl' color='success'/>`}
                language={'jsx'}
                theme={dracula}
                showLineNumbers={false}
                wrapLines />
            <br />
            <Image src="/image/button2.png" alt="button with props" style={{ height: '100px', width: '180px' }} />
        </div>
    )
}

export default ButtonComponent;