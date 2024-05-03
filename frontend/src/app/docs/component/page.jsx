'use client'
import { Title, Text, Image, ScrollArea, AppShell, Paper } from '@mantine/core'
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';
const Components = () => {
    
    return (

        <div>

            {/* // Alert component */}
            <div style={{ marginLeft: 70, marginRight: 90 }} >

                <div ><u><Title order={1}>Alert</Title></u></div>
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
                <CodeBlock
                    text={`import { Alert } from 'ez-dashboard';
<Alert title={'Alert'} description={'Alert message'}/>`}
                    language={'jsx'}
                    theme={dracula}
                    showLineNumbers={false}
                    wrapLines />
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
                <CodeBlock
                    text={`<Alert title={'Alert'} description={'Alert message'}/>`}
                    language={'jsx'}
                    theme={dracula}
                    showLineNumbers={false}
                    wrapLines />
                <br />
                <Image src="/image/alert2.png" alt="alert box img with props" style={{ height: '120px', width: '300px' }} />
            </div>
            <br /><hr></hr><br />
            {/* Statcard  */}
            <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>StatCard</Title></u>
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
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import { StatCard } from 'ez-dashboard';
<StatCard  value="100" description={'card description'}  label={'name'} color='primary'/>`}
                    language={'jsx'}
                    theme={dracula}
                    showLineNumbers={false}
                    wrapLines />
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
                <u><Title order={1}>Table</Title></u>
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
                <CodeBlock
                    text={`import { Table } from 'ez-dashboard';
<Table data={[{"id": 1,"name": "Apple","price": 1.25,},
              {"id": 2,"name": "Banana","price": 0.75,},
              {"id": 3,"name": "JD","price": 250,}]}
alignHeading='center'
alignData='center' />`}
                    language={'jsx'}
                    theme={dracula}
                    showLineNumbers={false}
                    wrapLines />
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
                <u><Title order={1}>ProgressBar</Title></u>
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
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text=
                    {`import { ProgressBar } from 'ez-dashboard';
<ProgressBar value={69} />`}
                    language={'jsx'}
                    theme={dracula}
                    showLineNumbers={false}
                    wrapLines />
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
                <CodeBlock
                    text=
                    {`import { ProgressBar } from 'ez-dashboard';
<ProgressBar value={69} color='success' radius='xl'/>`}
                    language={'jsx'}
                    theme={dracula}
                    showLineNumbers={false}
                    wrapLines />
                <br />
                <Image src="/image/progressbar2.png" alt="progressbar image with props" style={{ height: '90px', width: '410px' }} />
            </div>
            <br />
            <hr></hr>
            <br />
            {/* // Button component */}
            
            <br />
            <hr />
            <br />
            {/* Avatar component */}
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
            <br />
            <hr />
            <br />
            {/* // Link component */}
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
            <br />
            <hr />
            <br />
            {/* // textinput component */}
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
            <br />
            <hr />
            <br />
            {/* // CheckBox component */}
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
            <br />
            <hr />
            <br />
            {/* // Radio component */}
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
            <br />
            <hr />
            <br />
            {/* // Stepper component */}
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
            <br />
            <hr />
            <br />
            {/* // ScatterPlot component */}
            <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>ScatterPlot</Title></u>
                <br />
                <Text >
                    ScatterPlot component is used to show the distribution of data.
                </Text>
                <Text >
                    To use the ScatterPlot component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { ScatterPlot }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { ScatterPlot }  from  'ez-dashboard';
const ScatterData ={"id": string,
                        "data": [
                          {"x": number, "y": number},
                          {"x": number, "y": number}
                        ]
                    }
<ScatterChart data={ScatterData}/>`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <u><Text>Example data</Text></u>
                <ScrollArea h={200} type="auto" scrollbarSize={8} scrollHideDelay={3000}>
                    ScatterData=
                    {
                        JSON.stringify(

                            {
                                "id": "group A",
                                "data": [
                                    {
                                        "x": 23,
                                        "y": 88
                                    },
                                    {
                                        "x": 82,
                                        "y": 53
                                    },
                                    {
                                        "x": 83,
                                        "y": 41
                                    },
                                    {
                                        "x": 65,
                                        "y": 70
                                    },
                                    {
                                        "x": 31,
                                        "y": 110
                                    },
                                    {
                                        "x": 8,
                                        "y": 101
                                    },
                                    {
                                        "x": 3,
                                        "y": 92
                                    },
                                    {
                                        "x": 37,
                                        "y": 35
                                    },
                                    {
                                        "x": 13,
                                        "y": 89
                                    },
                                    {
                                        "x": 70,
                                        "y": 66
                                    },
                                    {
                                        "x": 2,
                                        "y": 18
                                    },
                                    {
                                        "x": 66,
                                        "y": 113
                                    },
                                    {
                                        "x": 49,
                                        "y": 119
                                    },
                                    {
                                        "x": 99,
                                        "y": 99
                                    },
                                    {
                                        "x": 22,
                                        "y": 27
                                    },
                                    {
                                        "x": 8,
                                        "y": 71
                                    },
                                    {
                                        "x": 74,
                                        "y": 3
                                    },
                                    {
                                        "x": 11,
                                        "y": 103
                                    },
                                    {
                                        "x": 6,
                                        "y": 83
                                    },
                                    {
                                        "x": 94,
                                        "y": 42
                                    },
                                    {
                                        "x": 3,
                                        "y": 60
                                    },
                                    {
                                        "x": 51,
                                        "y": 1
                                    },
                                    {
                                        "x": 4,
                                        "y": 12
                                    },
                                    {
                                        "x": 22,
                                        "y": 49
                                    },
                                    {
                                        "x": 92,
                                        "y": 90
                                    },
                                    {
                                        "x": 88,
                                        "y": 87
                                    },
                                    {
                                        "x": 70,
                                        "y": 26
                                    },
                                    {
                                        "x": 5,
                                        "y": 98
                                    },
                                    {
                                        "x": 56,
                                        "y": 109
                                    },
                                    {
                                        "x": 74,
                                        "y": 83
                                    },
                                    {
                                        "x": 65,
                                        "y": 97
                                    },
                                    {
                                        "x": 58,
                                        "y": 37
                                    },
                                    {
                                        "x": 27,
                                        "y": 38
                                    },
                                    {
                                        "x": 32,
                                        "y": 9
                                    },
                                    {
                                        "x": 81,
                                        "y": 13
                                    },
                                    {
                                        "x": 77,
                                        "y": 30
                                    },
                                    {
                                        "x": 29,
                                        "y": 37
                                    },
                                    {
                                        "x": 43,
                                        "y": 18
                                    },
                                    {
                                        "x": 31,
                                        "y": 53
                                    },
                                    {
                                        "x": 100,
                                        "y": 73
                                    },
                                    {
                                        "x": 27,
                                        "y": 120
                                    },
                                    {
                                        "x": 60,
                                        "y": 52
                                    },
                                    {
                                        "x": 64,
                                        "y": 75
                                    },
                                    {
                                        "x": 32,
                                        "y": 33
                                    },
                                    {
                                        "x": 97,
                                        "y": 27
                                    },
                                    {
                                        "x": 24,
                                        "y": 15
                                    },
                                    {
                                        "x": 63,
                                        "y": 113
                                    },
                                    {
                                        "x": 34,
                                        "y": 35
                                    },
                                    {
                                        "x": 47,
                                        "y": 77
                                    },
                                    {
                                        "x": 59,
                                        "y": 17
                                    }
                                ]
                            },
                            {
                                "id": "group B",
                                "data": [
                                    {
                                        "x": 79,
                                        "y": 24
                                    },
                                    {
                                        "x": 86,
                                        "y": 10
                                    },
                                    {
                                        "x": 54,
                                        "y": 9
                                    },
                                    {
                                        "x": 59,
                                        "y": 118
                                    },
                                    {
                                        "x": 96,
                                        "y": 81
                                    },
                                    {
                                        "x": 39,
                                        "y": 13
                                    },
                                    {
                                        "x": 2,
                                        "y": 103
                                    },
                                    {
                                        "x": 32,
                                        "y": 47
                                    },
                                    {
                                        "x": 22,
                                        "y": 46
                                    },
                                    {
                                        "x": 41,
                                        "y": 10
                                    },
                                    {
                                        "x": 39,
                                        "y": 39
                                    },
                                    {
                                        "x": 79,
                                        "y": 115
                                    },
                                    {
                                        "x": 55,
                                        "y": 33
                                    },
                                    {
                                        "x": 21,
                                        "y": 115
                                    },
                                    {
                                        "x": 3,
                                        "y": 6
                                    },
                                    {
                                        "x": 58,
                                        "y": 23
                                    },
                                    {
                                        "x": 54,
                                        "y": 79
                                    },
                                    {
                                        "x": 7,
                                        "y": 75
                                    },
                                    {
                                        "x": 67,
                                        "y": 25
                                    },
                                    {
                                        "x": 52,
                                        "y": 16
                                    },
                                    {
                                        "x": 85,
                                        "y": 78
                                    },
                                    {
                                        "x": 17,
                                        "y": 94
                                    },
                                    {
                                        "x": 32,
                                        "y": 117
                                    },
                                    {
                                        "x": 58,
                                        "y": 62
                                    },
                                    {
                                        "x": 79,
                                        "y": 18
                                    },
                                    {
                                        "x": 89,
                                        "y": 64
                                    },
                                    {
                                        "x": 42,
                                        "y": 1
                                    },
                                    {
                                        "x": 18,
                                        "y": 82
                                    },
                                    {
                                        "x": 89,
                                        "y": 30
                                    },
                                    {
                                        "x": 21,
                                        "y": 39
                                    },
                                    {
                                        "x": 96,
                                        "y": 119
                                    },
                                    {
                                        "x": 52,
                                        "y": 18
                                    },
                                    {
                                        "x": 30,
                                        "y": 105
                                    },
                                    {
                                        "x": 7,
                                        "y": 115
                                    },
                                    {
                                        "x": 38,
                                        "y": 5
                                    },
                                    {
                                        "x": 37,
                                        "y": 43
                                    },
                                    {
                                        "x": 3,
                                        "y": 73
                                    },
                                    {
                                        "x": 23,
                                        "y": 22
                                    },
                                    {
                                        "x": 17,
                                        "y": 118
                                    },
                                    {
                                        "x": 15,
                                        "y": 113
                                    },
                                    {
                                        "x": 95,
                                        "y": 64
                                    },
                                    {
                                        "x": 5,
                                        "y": 102
                                    },
                                    {
                                        "x": 27,
                                        "y": 6
                                    },
                                    {
                                        "x": 82,
                                        "y": 40
                                    },
                                    {
                                        "x": 24,
                                        "y": 113
                                    },
                                    {
                                        "x": 75,
                                        "y": 25
                                    },
                                    {
                                        "x": 15,
                                        "y": 110
                                    },
                                    {
                                        "x": 75,
                                        "y": 17
                                    },
                                    {
                                        "x": 57,
                                        "y": 51
                                    },
                                    {
                                        "x": 66,
                                        "y": 40
                                    }
                                ]
                            },
                            {
                                "id": "group C",
                                "data": [
                                    {
                                        "x": 98,
                                        "y": 83
                                    },
                                    {
                                        "x": 98,
                                        "y": 17
                                    },
                                    {
                                        "x": 32,
                                        "y": 90
                                    },
                                    {
                                        "x": 0,
                                        "y": 11
                                    },
                                    {
                                        "x": 61,
                                        "y": 55
                                    },
                                    {
                                        "x": 63,
                                        "y": 100
                                    },
                                    {
                                        "x": 50,
                                        "y": 96
                                    },
                                    {
                                        "x": 34,
                                        "y": 89
                                    },
                                    {
                                        "x": 96,
                                        "y": 80
                                    },
                                    {
                                        "x": 15,
                                        "y": 36
                                    },
                                    {
                                        "x": 3,
                                        "y": 94
                                    },
                                    {
                                        "x": 46,
                                        "y": 107
                                    },
                                    {
                                        "x": 15,
                                        "y": 42
                                    },
                                    {
                                        "x": 34,
                                        "y": 113
                                    },
                                    {
                                        "x": 2,
                                        "y": 35
                                    },
                                    {
                                        "x": 97,
                                        "y": 36
                                    },
                                    {
                                        "x": 65,
                                        "y": 101
                                    },
                                    {
                                        "x": 22,
                                        "y": 31
                                    },
                                    {
                                        "x": 64,
                                        "y": 39
                                    },
                                    {
                                        "x": 24,
                                        "y": 78
                                    },
                                    {
                                        "x": 0,
                                        "y": 46
                                    },
                                    {
                                        "x": 35,
                                        "y": 79
                                    },
                                    {
                                        "x": 6,
                                        "y": 86
                                    },
                                    {
                                        "x": 8,
                                        "y": 44
                                    },
                                    {
                                        "x": 92,
                                        "y": 2
                                    },
                                    {
                                        "x": 45,
                                        "y": 14
                                    },
                                    {
                                        "x": 24,
                                        "y": 39
                                    },
                                    {
                                        "x": 35,
                                        "y": 113
                                    },
                                    {
                                        "x": 94,
                                        "y": 62
                                    },
                                    {
                                        "x": 2,
                                        "y": 88
                                    },
                                    {
                                        "x": 43,
                                        "y": 0
                                    },
                                    {
                                        "x": 93,
                                        "y": 5
                                    },
                                    {
                                        "x": 46,
                                        "y": 33
                                    },
                                    {
                                        "x": 11,
                                        "y": 18
                                    },
                                    {
                                        "x": 65,
                                        "y": 53
                                    },
                                    {
                                        "x": 29,
                                        "y": 44
                                    },
                                    {
                                        "x": 8,
                                        "y": 71
                                    },
                                    {
                                        "x": 15,
                                        "y": 75
                                    },
                                    {
                                        "x": 79,
                                        "y": 97
                                    },
                                    {
                                        "x": 77,
                                        "y": 109
                                    },
                                    {
                                        "x": 50,
                                        "y": 47
                                    },
                                    {
                                        "x": 87,
                                        "y": 90
                                    },
                                    {
                                        "x": 56,
                                        "y": 43
                                    },
                                    {
                                        "x": 90,
                                        "y": 53
                                    },
                                    {
                                        "x": 12,
                                        "y": 1
                                    },
                                    {
                                        "x": 92,
                                        "y": 60
                                    },
                                    {
                                        "x": 38,
                                        "y": 61
                                    },
                                    {
                                        "x": 75,
                                        "y": 77
                                    },
                                    {
                                        "x": 92,
                                        "y": 73
                                    },
                                    {
                                        "x": 35,
                                        "y": 115
                                    }
                                ]
                            },
                            {
                                "id": "group D",
                                "data": [
                                    {
                                        "x": 24,
                                        "y": 118
                                    },
                                    {
                                        "x": 86,
                                        "y": 62
                                    },
                                    {
                                        "x": 37,
                                        "y": 35
                                    },
                                    {
                                        "x": 47,
                                        "y": 8
                                    },
                                    {
                                        "x": 5,
                                        "y": 50
                                    },
                                    {
                                        "x": 70,
                                        "y": 51
                                    },
                                    {
                                        "x": 66,
                                        "y": 52
                                    },
                                    {
                                        "x": 35,
                                        "y": 56
                                    },
                                    {
                                        "x": 16,
                                        "y": 68
                                    },
                                    {
                                        "x": 67,
                                        "y": 100
                                    },
                                    {
                                        "x": 13,
                                        "y": 21
                                    },
                                    {
                                        "x": 18,
                                        "y": 4
                                    },
                                    {
                                        "x": 56,
                                        "y": 30
                                    },
                                    {
                                        "x": 27,
                                        "y": 5
                                    },
                                    {
                                        "x": 87,
                                        "y": 9
                                    },
                                    {
                                        "x": 14,
                                        "y": 62
                                    },
                                    {
                                        "x": 4,
                                        "y": 35
                                    },
                                    {
                                        "x": 42,
                                        "y": 73
                                    },
                                    {
                                        "x": 69,
                                        "y": 60
                                    },
                                    {
                                        "x": 51,
                                        "y": 68
                                    },
                                    {
                                        "x": 74,
                                        "y": 118
                                    },
                                    {
                                        "x": 77,
                                        "y": 68
                                    },
                                    {
                                        "x": 95,
                                        "y": 94
                                    },
                                    {
                                        "x": 100,
                                        "y": 112
                                    },
                                    {
                                        "x": 61,
                                        "y": 35
                                    },
                                    {
                                        "x": 74,
                                        "y": 33
                                    },
                                    {
                                        "x": 20,
                                        "y": 48
                                    },
                                    {
                                        "x": 74,
                                        "y": 74
                                    },
                                    {
                                        "x": 71,
                                        "y": 88
                                    },
                                    {
                                        "x": 23,
                                        "y": 35
                                    },
                                    {
                                        "x": 89,
                                        "y": 37
                                    },
                                    {
                                        "x": 26,
                                        "y": 32
                                    },
                                    {
                                        "x": 32,
                                        "y": 105
                                    },
                                    {
                                        "x": 85,
                                        "y": 28
                                    },
                                    {
                                        "x": 78,
                                        "y": 113
                                    },
                                    {
                                        "x": 3,
                                        "y": 83
                                    },
                                    {
                                        "x": 46,
                                        "y": 119
                                    },
                                    {
                                        "x": 98,
                                        "y": 92
                                    },
                                    {
                                        "x": 40,
                                        "y": 93
                                    },
                                    {
                                        "x": 28,
                                        "y": 112
                                    },
                                    {
                                        "x": 89,
                                        "y": 37
                                    },
                                    {
                                        "x": 57,
                                        "y": 96
                                    },
                                    {
                                        "x": 68,
                                        "y": 23
                                    },
                                    {
                                        "x": 15,
                                        "y": 39
                                    },
                                    {
                                        "x": 68,
                                        "y": 85
                                    },
                                    {
                                        "x": 44,
                                        "y": 1
                                    },
                                    {
                                        "x": 82,
                                        "y": 73
                                    },
                                    {
                                        "x": 18,
                                        "y": 66
                                    },
                                    {
                                        "x": 19,
                                        "y": 100
                                    },
                                    {
                                        "x": 9,
                                        "y": 88
                                    }
                                ]
                            },
                            {
                                "id": "group E",
                                "data": [
                                    {
                                        "x": 49,
                                        "y": 27
                                    },
                                    {
                                        "x": 67,
                                        "y": 62
                                    },
                                    {
                                        "x": 15,
                                        "y": 120
                                    },
                                    {
                                        "x": 31,
                                        "y": 23
                                    },
                                    {
                                        "x": 92,
                                        "y": 120
                                    },
                                    {
                                        "x": 96,
                                        "y": 68
                                    },
                                    {
                                        "x": 97,
                                        "y": 13
                                    },
                                    {
                                        "x": 83,
                                        "y": 39
                                    },
                                    {
                                        "x": 64,
                                        "y": 5
                                    },
                                    {
                                        "x": 13,
                                        "y": 12
                                    },
                                    {
                                        "x": 7,
                                        "y": 57
                                    },
                                    {
                                        "x": 71,
                                        "y": 18
                                    },
                                    {
                                        "x": 31,
                                        "y": 45
                                    },
                                    {
                                        "x": 79,
                                        "y": 53
                                    },
                                    {
                                        "x": 62,
                                        "y": 27
                                    },
                                    {
                                        "x": 65,
                                        "y": 76
                                    },
                                    {
                                        "x": 82,
                                        "y": 91
                                    },
                                    {
                                        "x": 35,
                                        "y": 53
                                    },
                                    {
                                        "x": 24,
                                        "y": 6
                                    },
                                    {
                                        "x": 92,
                                        "y": 76
                                    },
                                    {
                                        "x": 91,
                                        "y": 21
                                    },
                                    {
                                        "x": 95,
                                        "y": 59
                                    },
                                    {
                                        "x": 18,
                                        "y": 17
                                    },
                                    {
                                        "x": 15,
                                        "y": 33
                                    },
                                    {
                                        "x": 50,
                                        "y": 113
                                    },
                                    {
                                        "x": 21,
                                        "y": 21
                                    },
                                    {
                                        "x": 26,
                                        "y": 74
                                    },
                                    {
                                        "x": 93,
                                        "y": 71
                                    },
                                    {
                                        "x": 40,
                                        "y": 38
                                    },
                                    {
                                        "x": 63,
                                        "y": 91
                                    },
                                    {
                                        "x": 50,
                                        "y": 10
                                    },
                                    {
                                        "x": 74,
                                        "y": 98
                                    },
                                    {
                                        "x": 88,
                                        "y": 53
                                    },
                                    {
                                        "x": 34,
                                        "y": 71
                                    },
                                    {
                                        "x": 44,
                                        "y": 67
                                    },
                                    {
                                        "x": 42,
                                        "y": 17
                                    },
                                    {
                                        "x": 69,
                                        "y": 5
                                    },
                                    {
                                        "x": 25,
                                        "y": 102
                                    },
                                    {
                                        "x": 76,
                                        "y": 63
                                    },
                                    {
                                        "x": 14,
                                        "y": 22
                                    },
                                    {
                                        "x": 55,
                                        "y": 59
                                    },
                                    {
                                        "x": 83,
                                        "y": 49
                                    },
                                    {
                                        "x": 93,
                                        "y": 104
                                    },
                                    {
                                        "x": 3,
                                        "y": 114
                                    },
                                    {
                                        "x": 62,
                                        "y": 36
                                    },
                                    {
                                        "x": 73,
                                        "y": 109
                                    },
                                    {
                                        "x": 79,
                                        "y": 43
                                    },
                                    {
                                        "x": 22,
                                        "y": 79
                                    },
                                    {
                                        "x": 80,
                                        "y": 64
                                    },
                                    {
                                        "x": 22,
                                        "y": 66
                                    }
                                ]
                            }
                        )}
                </ScrollArea>
                <br />
                <Image src="/image/scatterplot.png" alt="scatterplot image" style={{ height: '250px', width: '600px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The ScatterPlot component has the following props: <br />
                    * data <br />
                </Text>
            </div>
            <br />
            <hr />
            <br />
            {/* // LineChart component */}
            <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>LineChart</Title></u>
                <br />
                <Text >
                    LineChart component is used to show the trend of data.
                </Text>
                <Text >
                    To use the LineChart component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { LineChart }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { LineChart }  from  'ez-dashboard';
const linechartdata = {"id": string,
                 "color": string,
                        "data": [
                          {"x": string, "y": number},
                          {"x": string, "y": number}
                        ]
                    }
<LineChart data={linechartdata} />`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <u><Text>Example data</Text></u>
                <ScrollArea h={200} type="auto" scrollbarSize={8} scrollHideDelay={3000}>
                    linechartdata=
                    {
                        JSON.stringify(
                            [
                                {
                                    "id": "japan",
                                    "color": "#f00",
                                    "data": [
                                        { "x": "plane", "y": 68 },
                                        { "x": "helicopter", "y": 192 },
                                        { "x": "boat", "y": 210 },
                                        { "x": "train", "y": 293 },
                                        { "x": "subway", "y": 271 },
                                        { "x": "bus", "y": 13 },
                                        { "x": "car", "y": 262 },
                                        { "x": "moto", "y": 118 },
                                        { "x": "bicycle", "y": 229 },
                                        { "x": "horse", "y": 127 },
                                        { "x": "skateboard", "y": 49 },
                                        { "x": "others", "y": 202 }
                                    ]
                                },
                                {
                                    "id": "france",
                                    "color": "hsl(311, 70%, 50%)",
                                    "data": [
                                        { "x": "plane", "y": 250 },
                                        { "x": "helicopter", "y": 46 },
                                        { "x": "boat", "y": 259 },
                                        { "x": "train", "y": 35 },
                                        { "x": "subway", "y": 61 },
                                        { "x": "bus", "y": 156 },
                                        { "x": "car", "y": 256 },
                                        { "x": "moto", "y": 133 },
                                        { "x": "bicycle", "y": 89 },
                                        { "x": "horse", "y": 172 },
                                        { "x": "skateboard", "y": 33 },
                                        { "x": "others", "y": 166 }
                                    ]
                                },
                                {
                                    "id": "us",
                                    "color": "hsl(22, 70%, 50%)",
                                    "data": [
                                        { "x": "plane", "y": 289 },
                                        { "x": "helicopter", "y": 17 },
                                        { "x": "boat", "y": 119 },
                                        { "x": "train", "y": 161 },
                                        { "x": "subway", "y": 141 },
                                        { "x": "bus", "y": 133 },
                                        { "x": "car", "y": 100 },
                                        { "x": "moto", "y": 227 },
                                        { "x": "bicycle", "y": 263 },
                                        { "x": "horse", "y": 77 },
                                        { "x": "skateboard", "y": 148 },
                                        { "x": "others", "y": 278 }
                                    ]
                                },
                                {
                                    "id": "germany",
                                    "color": "hsl(320, 70%, 50%)",
                                    "data": [
                                        { "x": "plane", "y": 166 },
                                        { "x": "helicopter", "y": 175 },
                                        { "x": "boat", "y": 81 },
                                        { "x": "train", "y": 182 },
                                        { "x": "subway", "y": 209 },
                                        { "x": "bus", "y": 239 },
                                        { "x": "car", "y": 160 },
                                        { "x": "moto", "y": 294 },
                                        { "x": "bicycle", "y": 155 },
                                        { "x": "horse", "y": 236 },
                                        { "x": "skateboard", "y": 45 },
                                        { "x": "others", "y": 54 }
                                    ]
                                },
                                {
                                    "id": "norway",
                                    "color": "#FF0000",//red
                                    "data": [
                                        { "x": "plane", "y": 26 },
                                        { "x": "helicopter", "y": 216 },
                                        { "x": "boat", "y": 78 },
                                        { "x": "train", "y": 123 },
                                        { "x": "subway", "y": 159 },
                                        { "x": "bus", "y": 117 },
                                        { "x": "car", "y": 206 },
                                        { "x": "moto", "y": 217 },
                                        { "x": "bicycle", "y": 240 },
                                        { "x": "horse", "y": 185 },
                                        { "x": "skateboard", "y": 41 },
                                        { "x": "others", "y": 203 }
                                    ]
                                }
                            ]
                        )}
                </ScrollArea>
                <br />
                <Image src="/image/linechart.png" alt="linechart image" style={{ height: '310px', width: '600px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The LineChart component has the following props: <br />
                    * data <br />
                </Text>
            </div>
            <br />
            <hr />
            <br />
            {/* // RadialBar component */}
            <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>RadialBar</Title></u>
                <br />
                <Text >
                    RadialBar component is used to show the progress of a task.
                </Text>
                <Text >
                    To use the RadialBar component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { RadialBar }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { RadialBar }  from  'ez-dashboard';
const  radialData= {"id": string,
          "color": string,
                 "data": [
                   {"x": string, "y": number},
                   {"x": string, "y": number}
                 ]
             }
<RadialBar data={radialData}/>`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <u><Text>Example data</Text></u>
                <ScrollArea h={200} type="auto" scrollbarSize={8} scrollHideDelay={3000}>
                    radialData=
                    {
                        JSON.stringify(
                            [
                                {
                                    "id": 'A',
                                    "data": [
                                        {
                                            "x": 'louis vuitton',
                                            "y": 1
                                        },
                                        {
                                            "x": 'tommmy hilfiger',
                                            "y": 2
                                        },
                                        {
                                            "x": 'zara',
                                            "y": 3
                                        },
                                        {
                                            "x": 'peter england',
                                            "y": 4
                                        }
                                    ]
                                },
                                {
                                    "id": 'B',
                                    "data": [
                                        {
                                            "x": 'louis vuitton',
                                            "y": 5
                                        },
                                        {
                                            "x": 'tommmy hilfiger',
                                            "y": 6
                                        },
                                        {
                                            "x": 'zara',
                                            "y": 7
                                        },
                                        {
                                            "x": 'peter england',
                                            "y": 8
                                        }
                                    ]
                                },
                                {
                                    "id": 'C',
                                    "data": [
                                        {
                                            "x": 'louis vuitton',
                                            "y": 9
                                        },
                                        {
                                            "x": 'tommmy hilfiger',
                                            "y": 10
                                        },
                                        {
                                            "x": 'zara',
                                            "y": 11
                                        },
                                        {
                                            "x": 'peter england',
                                            "y": 12
                                        }
                                    ]
                                },
                                {
                                    "id": 'D',
                                    "data": [
                                        {
                                            "x": 'louis vuitton',
                                            "y": 13
                                        },
                                        {
                                            "x": 'tommmy hilfiger',
                                            "y": 14
                                        },
                                        {
                                            "x": 'zara',
                                            "y": 15
                                        },
                                        {
                                            "x": 'peter england',
                                            "y": 16
                                        }
                                    ]
                                },
                                {
                                    "id": 'E',
                                    "data": [
                                        {
                                            "x": 'louis vuitton',
                                            "y": 17
                                        },
                                        {
                                            "x": 'tommmy hilfiger',
                                            "y": 18
                                        },
                                        {
                                            "x": 'zara',
                                            "y": 19
                                        },
                                        {
                                            "x": 'peter england',
                                            "y": 20
                                        }
                                    ]
                                }
                            ]
                        )
                    }
                </ScrollArea>
                <br />
                <Image src="/image/radialbar.png" alt="radialbar image" style={{ height: '350px', width: '550px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The RadialBar component has the following props: <br />
                    * data <br />
                </Text>
            </div>
            <br />
            <hr />
            <br />
            {/* // Bump component */}
            <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>Bump</Title></u>
                <br />
                <Text >
                    Bump component is used to show the distribution of data.
                </Text>
                <Text >
                    To use the Bump component , you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { Bump }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { Bump }  from  'ez-dashboard';
const bumpdata = {"id": string,
                 "data": [
                   {"x": number, "y": number},
                   {"x": number, "y": number}
                 ]
             }
            <Bump data={bumpdata} />`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <u><Text>Example data</Text></u>
                <ScrollArea h={100} type="auto" scrollbarSize={8} scrollHideDelay={3000}>
                    bumpdata=
                    {
                        JSON.stringify(
                            [
                                {
                                    "id": "Serie 1",
                                    "data": [
                                        { "x": 2000, "y": 3 },
                                        { "x": 2001, "y": 8 },
                                        { "x": 2002, "y": 5 },
                                        { "x": 2003, "y": 2 },
                                        { "x": 2004, "y": 9 }
                                    ]
                                },
                                {
                                    "id": "Serie 2",
                                    "data": [
                                        { "x": 2000, "y": 7 },
                                        { "x": 2001, "y": 4 },
                                        { "x": 2002, "y": 9 },
                                        { "x": 2003, "y": 6 },
                                        { "x": 2004, "y": 6 }
                                    ]
                                },
                                {
                                    "id": "Serie 3",
                                    "data": [
                                        { "x": 2000, "y": 4 },
                                        { "x": 2001, "y": 11 },
                                        { "x": 2002, "y": 6 },
                                        { "x": 2003, "y": 3 },
                                        { "x": 2004, "y": 55 }
                                    ]

                                }
                            ]
                        )
                    }
                </ScrollArea>
                <br />
                <Image src="/image/bump.png" alt="bump image" style={{ height: '350px', width: '600px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The Bump component has the following props: <br />
                    * data <br />
                </Text>
            </div>
            <br />
            <hr />
            <br />
            {/* // HeatMap */}
            <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>HeatMap</Title></u>
                <br />
                <Text >
                    HeatMap component is used to show the distribution of data.
                </Text>
                <Text >
                    To use the HeatMap component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { HeatMap }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { HeatMap }  from  'ez-dashboard';
const HeatMapdata = {"id": string,
                 "data": [
                   {"x": string, "y": number},
                   {"x": string, "y": number}
                 ]
<HeatMap data={HeatMapdata} />`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <u><Text>Example data</Text></u>
                <ScrollArea h={200} type="auto" scrollbarSize={8} scrollHideDelay={3000}>
                    HeatMapdata=
                    {
                        JSON.stringify(
                            [
                                {
                                    "id": "Japan",
                                    "data": [
                                        { "x": "Starbucks", "y": -54870 },
                                        { "x": "Peter england", "y": 23209 },
                                        { "x": "tommy hilfiger", "y": 49876 },
                                        { "x": "Car", "y": -30871 },
                                        { "x": "Boat", "y": -32945 },
                                        { "x": "Moto", "y": -3612 },
                                        { "x": "Moped", "y": -82690 },
                                        { "x": "Bicycle", "y": -7032 },
                                        { "x": "Others", "y": -44098 }
                                    ]
                                },
                                {
                                    "id": "France",
                                    "data": [
                                        { "x": "Starbucks", "y": 54870 },
                                        { "x": "Peter england", "y": -23209 },
                                        { "x": "tommy hilfiger", "y": -49876 },
                                        { "x": "Car", "y": 30871 },
                                        { "x": "Boat", "y": 32945 },
                                        { "x": "Moto", "y": 3612 },
                                        { "x": "Moped", "y": 82690 },
                                        { "x": "Bicycle", "y": 7032 },
                                        { "x": "Others", "y": 44098 }
                                    ]
                                },
                                {
                                    "id": "US",
                                    "data": [
                                        { "x": "Starbucks", "y": -54870 },
                                        { "x": "Peter england", "y": 23209 },
                                        { "x": "tommy hilfiger", "y": 49876 },
                                        { "x": "Car", "y": -30871 },
                                        { "x": "Boat", "y": -32945 },
                                        { "x": "Moto", "y": -3612 },
                                        { "x": "Moped", "y": -82690 },
                                        { "x": "Bicycle", "y": -7032 },
                                        { "x": "Others", "y": -44098 }
                                    ]
                                },
                                {
                                    "id": "Germany",
                                    "data": [
                                        { "x": "Starbucks", "y": 54870 },
                                        { "x": "Peter england", "y": -23209 },
                                        { "x": "tommy hilfiger", "y": -49876 },
                                        { "x": "Car", "y": 30871 },
                                        { "x": "Boat", "y": 32945 },
                                        { "x": "Moto", "y": 3612 },
                                        { "x": "Moped", "y": 82690 },
                                        { "x": "Bicycle", "y": 7032 },
                                        { "x": "Others", "y": 44098 }
                                    ]
                                },

                            ]
                        )
                    }
                </ScrollArea>
                <br />
                <Image src="/image/heatmap.png" alt="heatmap image" style={{ height: '370px', width: '600px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The HeatMap component has the following props: <br />
                    * data <br />
                </Text>
            </div>
            <br />
            <hr />
            <br />
            {/* // PieChart */}
            <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>PieChart</Title></u>
                <br />
                <Text >
                    PieChart component is used to show the distribution of data.
                </Text>
                <Text >
                    To use the PieChart component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { PieChart }  from  'ez-dashboard';`}
                        language={'jsx'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import  { PieChart }  from  'ez-dashboard';
const PieData = [{
          "id": string,
          "label": string,
          "value": number,
        }]
<PieChart data={PieData1} />`}
                    language={'jsx'}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines />
                <br />
                <u><Text>Example data</Text></u>
                <ScrollArea h={100} type="auto" scrollbarSize={8} scrollHideDelay={3000}>
                    PieData1=
                    {
                        JSON.stringify(
                            [{
                                "id": "coco-cola",
                                "label": "coco-cola",
                                "value": 448,

                            },
                            {
                                "id": "pepsi",
                                "label": "pepsi",
                                "value": 502,

                            },
                            {
                                "id": "fanta",
                                "label": "fanta",
                                "value": 505,

                            },
                            {
                                "id": "sprite",
                                "label": "sprite",
                                "value": 77,

                            },
                            {
                                "id": "7up",
                                "label": "7up",
                                "value": 551,

                            }
                            ]
                        )
                    }
                </ScrollArea>
                <br />
                <Image src="/image/piechart.png" alt="piechart image" style={{ height: '320px', width: '470px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The PieChart component has the following props: <br />
                    * data <br />
                </Text>
            </div>

        </div>

    )
}

export default Components;