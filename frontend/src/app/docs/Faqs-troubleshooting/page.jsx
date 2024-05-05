import { Center, Title,Text ,Image } from '@mantine/core'
import React from 'react'

const FaqsTroubleshooting = () => {
  return (
    <div style={{marginLeft:'50px' , marginRight:'70px'}}>
     <u><Title order={1}  >FAQs&Troubleshooting </Title></u>
     <br />
     <br/>
     <Title order={3} >1.What are the system requirements for using EzDashboard?</Title> <br />
     <Text style={{marginLeft:'20px'}}>
          EzDashboard has minimal system requirements. It works with any modern browser that supports React.
     </Text>
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
              ADD this line :"./node_modules/ez-dashboard/dist/esm/*/.js"  
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
     <Title order={3} >3. Where can I find more examples of using EzDashboard?</Title> <br />
     <Text style={{marginLeft:'20px'}}>
     The EzDashboard documentation provides comprehensive examples that showcase various use cases and component combinations.
     </Text><br/>
      <Title order={3} >4. How do I contribute to the EzDashboard project?</Title> <br />
      <Text style={{marginLeft:'20px'}}>
      The project welcomes contributions! EzDashboard is open-source on GitHub. Refer to the contribution guidelines in the repository for details on how to get involved.
      </Text><br/>
      <u><Title order={2}>Troubleshooting -</Title><br/></u>
      <Title order={3}>1. My dashboard components are not rendering correctly.</Title><br/>
      <ul>
        <li>
        Double-check imports: Ensure you're correctly importing necessary components from ez-dashboard.
        </li>
        <li>
        Verify props: Make sure you're passing the required props to each component. Refer to the documentation for specific prop requirements of each component.
        </li>
        <li>
        Console errors: Inspect your browser's developer console for any error messages that might indicate issues with data formatting, component usage, or other potential problems.
        </li>
      </ul>
      <Title order={3}>2. My charts are not displaying data as expected.</Title><br/>
      <ul>
        <li>
        Data format: Check that your data is formatted correctly for the chart type you're using. Refer to the documentation for specific data requirements.
        </li>
        <li>
        Data availability: Verify that the data you're trying to visualize is actually available and populated
        </li>
      

      </ul>  
      <Title order={3}>3. I'm encountering errors related to specific EzDashboard components.</Title><br/>
      <Text style={{marginLeft:'20px'}}>
      For component-specific issues, consult the documentation for that component. It might provide troubleshooting tips or known limitations.
      </Text><br />
      
      


    </div>
  )
}

export default FaqsTroubleshooting