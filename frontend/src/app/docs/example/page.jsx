'use client'
import { Title, Text, Image } from '@mantine/core'
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const Example = () => {
  return (

    <div>
      {/* // Alert component */}
      <div style={{ marginLeft: 70, marginRight: 90 }} >
      <Title order={1}>Alert</Title>
      <br />
      <Text  >
        Alert component is used to display important messages to users. It can be used to show
        success, warning, error and information messages.</Text>
      <Text >
        To use the Alert component, you need to import it from the ez-dashboard package.
        <br />
        <br />
        <CodeBlock
          text={`import  { Alert }  from  'ez-dashboard';`}
          language={'jsx'}
          theme={dracula}
          showLineNumbers={false}
          wrapLines />
      </Text>
      <Title order={2}>Usage</Title>
      <br />
      <pre >
        <code>
          {`import { Alert } from 'ez-dashboard';
<Alert title={'Alert'} description={'Alert message'}/>`}
        </code>
      </pre>
      <br />
      <Image src="/image/alert2.png" alt="alert box" style={{ height: '120px', width: '300px' }} />
      <br />
      <Title order={2}>Props</Title>
      <br />
      <Text >
        The Alert component has the following props: <br />
        * title <br />
        * description
      </Text>
      <br />
      <pre >
        <code>
          {`<Alert title={'Alert'} description={'Alert message'}/>`}
        </code>
      </pre>
      <br />
      <Image src="/image/alert2.png" alt="alert box img with props" style={{ height: '120px', width: '300px' }} />
    </div>
      <br /><hr></hr><br />
      {/* Statcard  */}
      <div style={{ marginLeft: 70, marginRight: 90 }}>
        <Title order={1}>StatCard</Title>
        <br />
        <Text >
          StatCard component is used to display important statistics information to users. It can be used to show
          success, warning, error and information messages.</Text>
        <Text >
          To use the StatCard component, you need to import it from the ez-dashboard package.
          <br />
          <br />
          <CodeBlock
            text={`import  { StatCard }  from  'ez-dashboard';`}
            language={'jsx'}
            theme={dracula}
            wrapLines />
        </Text>
        <Title order={2}>Usage</Title>
        <br />
        <pre >
          <code>
            {`import { StatCard } from 'ez-dashboard';
<StatCard  value="100" description={'card description'}  label={'name'} color='primary'/>`}
          </code>
        </pre>
        <br />
        <Image src="/image/statcard.png" alt="statcard image" style={{ height: '190px', width: '290px' }} />
        <br />
        <Title order={2}>Props</Title>
        <br />
        <Text >
          The StatCard component has the following props: <br />
          * Value <br />
          * Description <br />
          * Label <br />
          * Color
        </Text>
      </div>
      <br /><hr></hr><br />
      {/* // Table component */}
      <div style={{ marginLeft: 70, marginRight: 90 }}>
        <Title order={1}>Table</Title>
        <br />
        <Text >
          Table component is used to display data in tabular format.
        </Text>
        <Text >
          To use the Table component, you need to import it from the ez-dashboard package.
          <br />
          <br />
          <CodeBlock
            text={`import  { Table }  from  'ez-dashboard';`}
            language={'jsx'}
            theme={dracula}
            wrapLines />
        </Text>
        <Title order={2}>Usage</Title>
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
        <Image src="/image/table.png" alt="table image" style={{ height: '220px', width: '380px' }} />
        <br />
        <Title order={2}>Props</Title>
        <br />
        <Text >
          The Table component has the following props: <br />
          * Data <br />
          * AlignHeading <br />
          * AlignData
        </Text>
      </div>
      <br />
      <hr></hr>
      <br />
      {/* // Progressbar component */}
      <div style={{ marginLeft: 70, marginRight: 90 }}>
        <Title order={1}>ProgressBar</Title>
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
            wrapLines />
        </Text>
        <Title order={2}>Usage</Title>
        <br />
        <pre >
          <code>
            {`import { ProgressBar } from 'ez-dashboard';
<ProgressBar value={69} />`}
          </code>
        </pre>
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
        <pre >
          <code>
            {`import { ProgressBar } from 'ez-dashboard';
<ProgressBar value={69} color='success' radius='xl'/>`}
          </code>
        </pre>
        <br />
        <Image src="/image/progressbar2.png" alt="progressbar image with props" style={{ height: '90px', width: '410px' }} />
      </div>
      <br />
      <hr></hr>
      <br />
      {/* // Button component */}
      <div style={{ marginLeft: 70, marginRight: 90 }}>
        <Title order={1}>Button</Title>
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
            theme={dracula}
            wrapLines />
        </Text>
        <Title order={2}>Usage</Title>
        <br />
        <pre >
          <code>
            {`import { Button } from 'ez-dashboard
<Button variant='filled'/>';
            `}
          </code>
        </pre>
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
        <pre >
          <code>
            {`import { Button } from 'ez-dashboard';
<Button variant='filled' size='xl' radius='xl' color='success'/>`}
          </code>
        </pre>
        <br />
        <Image src="/image/button2.png" alt="button with props" style={{ height: '100px', width: '180px' }} />
      </div>
      <br />
      <hr />
      <br />
      {/* Avatar component */}
      <div style={{ marginLeft: 70, marginRight: 90 }}>
        <Title order={1}>Avatar</Title>
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
            theme={dracula}
            wrapLines />
        </Text>
        <Title order={2}>Usage</Title>
        <br />
        <pre >
          <code>
            {`import { Avatar } from 'ez-dashboard';
<Avatar src={'https://www.w3schools.com/howto/img_avatar.png'} size='lg' alt='avatar profile image' />`}
          </code>
        </pre>
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
      <br />
      <hr />
      <br />
      {/* // Link component */}
      <div style={{ marginLeft: 70, marginRight: 90 }}>
        <Title order={1}>Link</Title>
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
            theme={dracula}
            wrapLines />
        </Text>
        <Title order={2}>Usage</Title>
        <br />
        <pre >
          <code>
            {`import { Link } from 'ez-dashboard';
<Links links={[{text:'GOOGLE',url:'https://www.google.com'}]} />`}
          </code>
        </pre>
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
      <br />
      <hr />
      <br />
      {/* // textinput component */}
      <div style={{ marginLeft: 70, marginRight: 90 }}>
        <Title order={1}>TextInput</Title>
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

        



    </div>

  )
}

export default Example