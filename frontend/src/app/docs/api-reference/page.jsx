'use client'
import React from 'react';
import { Container, Text,Title,Alert, Button } from '@mantine/core';
import { useRouter } from 'next/navigation';


const ApiReferencePage = () => {
  const router = useRouter();

  return (
    <div style={{marginLeft:35,marginRight:'60px'}}>
        <u><Title order={1}  >
          API Reference
        </Title></u>
        <br />
        <Title order={3} >
        Imagine Ez-dashboard as your personal data playground!It's not just dry charts and numbers, it's a portal to transform your data into a captivating story.
        </Title>
        <Text ><b>
        Here's how Ez-dashboard's components can make things exciting:
        </b></Text>
        <br />
        <Text >
        <b>* Interactive Charts:</b> Forget boring pie charts, Ez-dashboard lets you create dynamic visualizations that dance and respond to your touch. Dive deeper into specific data points with a simple click, making trends and patterns come alive.
        </Text>
        <br />
        <Text >
        <b>* Storytelling with Data:</b> Craft a narrative with your data! Ez-dashboard lets you combine charts, stats, and even text elements to paint a clear picture of what your data is telling you. No more struggling to translate numbers into a compelling story.
        </Text>
        <br />
        <Text >
        <b>Customization Galore:</b> Unleash your inner designer! Ez-dashboard empowers you to personalize the look and feel of your dashboards. Choose colors, layouts, and fonts that match your brand or simply reflect your unique style.
        </Text>
        <br />
        <Alert color="blue">
        Ez-dashboard isn't just about presenting data, it's about bringing it to life in a way that engages, informs, and even inspires. It's like having a magic wand that transforms raw information into an interactive wonderland of discovery.
        </Alert>
        <br />
        <Text >
        So go ahead, dive into Ez-dashboard's API Reference and start creating your own data stories today!<br />
        Some common components you will find under ez-dashboard are:
        </Text>
        <br />
        <br />
        <Title order={3} >
           <u>Alert</u>  
        </Title>
        <Text style={{marginLeft:10}}>
          Alert component is used to display important messages to the user. It can be used to show success, error, warning, and information messages.
          </Text>
        <br />
        <Text> <b> Alert Props</b></Text>
                <Text style={{marginLeft:10}} >
                    The Alert component has the following props: <br />
                    * title <br />
                    * description
                </Text>
        <br />
        <Button onClick={() => router.push('/docs/example/alert')} color="blue">detailed info about Alert Componnet</Button><br />
        <br />

        <Title order={3} >
          <u>Progress Bar </u>
        </Title>
        <Text style={{marginLeft:10}}>
          Progress bar component is used to show the progress of a task. It can be used to show the progress of file uploads, form submissions, and other tasks.
        </Text>
        <br />
        <Text> <b> Progress Bar Props</b></Text>
                <Text style={{marginLeft:10}} >
                    The Progress Bar component has the following props: <br />
                    * value <br />
                    * color
                </Text>
        <br />
        <Button onClick={() => router.push('/docs/example/progressbar')} color="blue">detailed info about Progress Bar Componnet</Button>
        <br />
        <br />
        <Title order={3} >
          <u>StatCard</u>
        </Title>
        <Text style={{marginLeft:10}}>
          StatCard component is used to display statistical information. It can be used to show key metrics, performance indicators, and other data points.
        </Text>
        <br />
        <Text> <b> StatCard Props</b></Text>
                <Text style={{marginLeft:10}} >
                    The StatCard component has the following props: <br />
                    * value <br />
                    * description <br />
                    * label <br />
                    * color
                    </Text>
        <br />
        <Button onClick={() => router.push('/docs/example/statcard')} color="blue">detailed info about StatCard Componnet</Button>
        <br />
        <hr />




        


       
    </div>
  );
};

export default ApiReferencePage;
