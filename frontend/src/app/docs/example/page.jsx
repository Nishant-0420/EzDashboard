'use client'
import { Title,Text,Image } from '@mantine/core'
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const Alert= () => {
  return (
    
    <div>
       {/* // Alert component */}
      <div style={{ marginLeft:70,marginRight:90 }} >
      <Title order={1}>Alert</Title>
      <br />
      <Text  >
        Alert component is used to display important messages to users. It can be used to show
        success, warning, error and information messages.</Text>
      <Text >
        To use the Alert component, you need to import it from the ez-dashboard package.
        <br/>
        <br/>
        <CodeBlock
        text={`import  { Alert }  from  'ez-dashboard';`}
        language={'jsx'}
        theme={dracula}
        wrapLines/>
      </Text>
      <Title  order={2}>Usage</Title>
      <br />
      <pre >
        <code>
          {`import { Alert } from 'ez-dashboard';
<Alert title={'Alert'} description={'Alert message'}/>`}
        </code>
      </pre>
      <br />
        <Image src="/image/alert2.png" alt="alert box"  style={{height:'120px', width: '300px'} } />
      <br />
      <Title  order={2}>Props</Title>
      <br />
      <Text >
        The Alert component has the following props: <br/>
         * Title <br/>  
         * Description
      </Text>
      <br />
      <pre >
        <code>
          {`<Alert title={'Alert'} description={'Alert message'}/>`}
        </code>
      </pre>
      <br />
        <Image src="/image/alert2.png" alt="alert box with props" style={{height:'120px', width: '300px'} } /> 
         </div>
        <br/><hr></hr><br/>
        {/* Statcard  */}
        <div style={{marginLeft:70,marginRight:90}}>
          <Title order={1}>StatCard</Title>
          <br/>
          <Text >
            StatCard component is used to display important statistics information to users. It can be used to show
            success, warning, error and information messages.</Text>
          <Text >
            To use the StatCard component, you need to import it from the ez-dashboard package.
            <br/>
            <br/>
            <CodeBlock
            text={`import  { StatCard }  from  'ez-dashboard';`}
            language={'jsx'}
            theme={dracula}
            wrapLines/>
          </Text>
          <Title  order={2}>Usage</Title>
          <br />
          <pre >
            <code>
              {`import { StatCard } from 'ez-dashboard';
<StatCard  value="100" description={'card description'}  label={'name'} color='primary'/>`}
            </code>
          </pre>
          <br />
            <Image src="/image/statcard.png" alt="statcard"  style={{height:'190px', width: '290px' } } />
          <br />
          <Title  order={2}>Props</Title>
          <br />
          <Text >
            The StatCard component has the following props: <br/>
            * Value <br/>
            * Description <br/>
            * Label <br/>
            * Color
          </Text>
        </div>               
        <br/><hr></hr><br/>
        {/* // Table component */}
        <div style={{marginLeft:70,marginRight:90}}>
        <Title  order={1}>Table</Title>
        <br/>
        <Text >
          Table component is used to display data in tabular format.
          </Text>
        <Text >
          To use the Table component, you need to import it from the ez-dashboard package.
          <br/>
          <br/>
          <CodeBlock
          text={`import  { Table }  from  'ez-dashboard';`}
          language={'jsx'}
          theme={dracula}
          wrapLines/>
        </Text>
        <Title  order={2}>Usage</Title>
        <br />
        <pre >
          <code>
            {`import { Table } from 'ez-dashboard';
<Table data={[{"id": 1,"name": "Apple","price": 1.25,},
              {"id": 2,"name": "Banana","price": 0.75,},
              {"id": 3,"name": "JD","price": 250,}]}
     alignHeading='center'
     alignData='center' />`}
          </code>
        </pre>
        <br />
          <Image src="/image/table.png" alt="table"  style={{height:'220px', width: '380px'} } />
        <br />
        <Title  order={2}>Props</Title>
        <br />
        <Text >
          The Table component has the following props: <br/>
          * Data <br/>
          * AlignHeading <br/>
          * AlignData
        </Text>
        </div>      
      <br/>
      <hr></hr>
      <br/>
      {/* // Progressbar component */}

    </div>
    
  )
}

export default Alert