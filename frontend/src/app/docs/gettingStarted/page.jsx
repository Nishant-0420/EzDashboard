'use client'
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks'
import { Title, Text,Image } from '@mantine/core'


const gettingStarted = () => {
  return (
    <div style={{marginLeft:40,marginRight:30}}>
       <Title order={1}>What is EzDashboard?</Title>
      <br />
      <Text>
       EzDashboard is a powerful React library designed to streamline the creation of professional-looking dashboards. With EzDashboard, you can effortlessly construct visually appealing and data-driven interfaces that empower informed decision-making. By leveraging pre-built components and a flexible design system, EzDashboard empowers developers of all skill levels to rapidly prototype and build exceptional dashboards.
      </Text>
        <br />
        <Title order={1}>What we do?</Title>
        <br />
        <ul>
            <li>
              <Text>
              Reduced Development Time: Building dashboards from scratch can be time-consuming. EzDashboard offers a comprehensive library of ready-made components, enabling you to focus on data integration and customization rather than reinventing the wheel.
                </Text>
                
            </li><br/>
            <li>
                <Text>
                Enhanced Consistency: Maintaining a consistent visual style across your application suite can be challenging. EzDashboard enforces a unified design language, ensuring your dashboards seamlessly integrate with your overall UI.

                </Text><br/>
            </li>
            <li>
                <Text>
                Improved User Experience: EzDashboard prioritizes user experience. It provides interactive and responsive components that adapt effortlessly to different screen sizes and devices, allowing your users to access valuable insights seamlessly.

                </Text>
            </li><br/>
            <li>
              <Text>
              Simplified Customization: While EzDashboard offers a polished default style, it also embraces customization. You can easily tailor the appearance of your dashboards to match your brand identity or unique needs.
            </Text>
            </li>

        </ul>
        <br />
        <Title order={1}>Installation</Title>
        <br/>
        <Text>
            To install EzDashboard, run the following command in your terminal:
        </Text>
        
           <CodeBlock
            text={`npm i ez-dashboard`}
            language={'jsx'}
            theme={dracula}
            showLineNumbers={false}
            wrapLines />

        <br />
        <Title order={3} >2.Enviroment required to use Ezdashboard</Title>
      <Text>
      <ul>
        <li>
          You have to install Talwind CSS with VITE to use EzDashboard:
          <ul>
            <li>
             <b>Step 1: Create your project</b>  <br />
              npm create vite@latest my-project -- --template react<br />
              cd my-project<br />
            </li>
            <li>
             <b>Step 2:Install Talwind CSS</b>  <br />
             npm install -D tailwindcss postcss autoprefixer<br />
             npx tailwindcss init -p<br />
            </li>
            <li>
             <b>Step 3: Configure your path in tailwind.config.js</b>  
             <br />
             <Image src="/image/tawlind.png" alt="code" style={{ height: '300px', width: '500px' }} />
              <br />
              ADD this line :&quot;./node_modules/ez-dashboard/dist/esm/*/.js&quot;  
            </li>
            <li>
             <b>Step 4: ADD tailwind directives to your css (index.css)</b>  <br />
             @tailwind base;<br/>
             @tailwind components;<br/>
             @tailwind utilities;<br/>

            </li>
            <li>
             <b>Step 4:Start your Build process</b>  <br />
              npm run dev<br/>  

            </li>
            <li>
             <b>Step 4:Install EzDashboard </b>  <br />
              npm i ez-dashboard <br/>  

            </li>

          </ul>   
          
        </li>
      </ul>
    </Text>
    <br />
    <Title order={1}>Available Components</Title>
    <br /> 
    <ul>
        <li>
            <Text>
            EzChart: Create various chart types (bar, line, pie, etc.) to visualize your data effectively.
            </Text>
        </li>
        <li>
            <Text>
            EzTable: Display tabular data with sorting, filtering, and pagination functionalities.
            </Text>
        </li>
        <li>
            <Text>
            EzCard: Present information in a visually appealing card format.
            </Text>
        </li>
        <li>
            <Text>
            EzAlert: Notify users of important messages or alerts.
            </Text>
        </li>
        <li>
            <Text>
            EzProgressBar: Show the progress of a task or process.
            </Text>
        </li>
        <li>
            <Text>
            ...(more components)
            </Text>
        </li>
    </ul>
    <br/>
    </div>
  )
}

export default  gettingStarted;
