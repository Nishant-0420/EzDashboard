'use client';
import { Image, Text, Title } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const AvatarComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>Avatar</Title></u>
                <br />
                <Text >
                    Avatar component is used to display user profile images.
                </Text>
                <Text >
                    To use the Avatar component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { Avatar }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text=
                    {`import { Avatar } from 'ez-dashboard';
<Avatar src={'https://www.w3schools.com/howto/img_avatar.png'} size='lg' alt='avatar profile image' />`}
                    language={'jsx'}
                    theme={dracula}
                    showLineNumbers={false}
                    wrapLines />
                <br />
                <Image src="/image/avatar.png" alt="avatar" style={{ height: '90px', width: '90px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The Avatar component has the following props: <br />
                    * src <br />
                    * size<br />
                </Text>
            </div>
  )
}

export default AvatarComponent