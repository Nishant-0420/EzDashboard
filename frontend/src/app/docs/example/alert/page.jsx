'use client'
import { Title,Text,Image } from '@mantine/core'
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const Alert= () => {
  return (
    
    <div>
      <Title ml={70} order={1}>Alert</Title>
      <br />
      <Text ml={70}>
        Alert component is used to display important messages to users. It can be used to show
        success, warning, error and information messages.</Text>
      <br />
      <Text style={{marginLeft:70}}>
        To use the Alert component, you need to import it from the ez-dashboard package.
        <br/>
        <br/>
        <CodeBlock
        text={`import  { Alert }  from  'ez-dashboard';`}
        language={'jsx'}
        theme={dracula}
        wrapLines/>
      </Text>
      
      <Title ml={70} order={2}>Usage</Title>
      <br />
      <pre style={{marginLeft:70 }}>
        <code>
          {`import { Alert } from 'ez-dashboard';
<Alert title={'Alert'} description={'Alert message'}/>`}
        </code>
      </pre>
      <br />
        <Image src="/image/alert2.png" alt="alert box"  style={{height:'120px', width: '300px', marginLeft:70} } />
      <br />
      <Title ml={70} order={2}>Props</Title>
      <br />
      <Text ml={70}>
        The Alert component has the following props: <br/>
         * Title <br/>  
         * Description
      </Text>
      <br />
      <pre style={{marginLeft: 70}}>
        <code>
          {`<Alert title={'Alert'} description={'Alert message'}/>`}
        </code>
      </pre>
      <br />
        <Image src="/image/alert2.png" alt="alert box with props" style={{height:'120px', width: '300px', marginLeft:70} } />  
    </div>
    
  )
}

export default Alert